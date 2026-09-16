import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const techNodes = [
  { id: 'react', name: 'React 19', pos: [-2.2, 1.2, 0], desc: 'Frontend Interface & State Slices', color: 0x22C55E },
  { id: 'ts', name: 'TypeScript', pos: [2.2, 1.2, 0], desc: 'Strict Typings & Interfaces', color: 0x383838 },
  { id: 'node', name: 'Node.js', pos: [0, 0.4, 0.5], desc: 'Async Event Loop & API Server', color: 0x22C55E },
  { id: 'express', name: 'Express.js', pos: [-1.8, -1.0, 0], desc: 'REST Endpoint Controllers', color: 0x383838 },
  { id: 'mongo', name: 'MongoDB', pos: [1.8, -1.0, 0], desc: 'Document Store & Query Indexing', color: 0x22C55E },
  { id: 'redux', name: 'Redux Toolkit', pos: [0, -1.8, -0.5], desc: 'Global Application State', color: 0x383838 },
]

export const TechEcosystem3D = () => {
  const containerRef = useRef(null)
  const [activeTech, setActiveTech] = useState(techNodes[2]) // Node.js default

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth || 450
    const height = container.clientHeight || 320

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000)
    camera.position.z = 6.5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    const nodeMeshes = []
    const geo = new THREE.SphereGeometry(0.32, 24, 24)

    techNodes.forEach((node) => {
      const mat = new THREE.MeshStandardMaterial({
        color: node.color,
        roughness: 0.2,
        metalness: 0.8,
        emissive: node.color === 0x22C55E ? 0x22C55E : 0x050505,
        emissiveIntensity: 0.3,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(...node.pos)
      mesh.userData = node
      group.add(mesh)
      nodeMeshes.push(mesh)
    })

    // Connecting 3D Lines
    const lineMat = new THREE.LineBasicMaterial({ color: 0x242424, transparent: true, opacity: 0.6 })
    const connections = [
      [techNodes[0].pos, techNodes[2].pos],
      [techNodes[1].pos, techNodes[2].pos],
      [techNodes[2].pos, techNodes[3].pos],
      [techNodes[2].pos, techNodes[4].pos],
      [techNodes[0].pos, techNodes[5].pos],
    ]

    connections.forEach(([p1, p2]) => {
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(...p1),
        new THREE.Vector3(...p2),
      ])
      const line = new THREE.Line(lineGeo, lineMat)
      group.add(line)
    })

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)
    const pointLight = new THREE.PointLight(0x22C55E, 2, 10)
    pointLight.position.set(0, 0, 4)
    scene.add(pointLight)

    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 1.2
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 1.2

      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(nodeMeshes)

      if (intersects.length > 0) {
        const hit = intersects[0].object.userData
        if (hit && hit.id !== activeTech.id) {
          setActiveTech(hit)
        }
      }
    }

    container.addEventListener('mousemove', handleMouseMove)

    let animationFrameId
    let isVisible = true

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
    })
    observer.observe(container)

    let clock = new THREE.Clock()

    const animate = () => {
      if (isVisible) {
        const elapsedTime = clock.getElapsedTime()
        group.rotation.y = elapsedTime * 0.15 + mouseX
        group.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1 - mouseY
        renderer.render(scene, camera)
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      observer.disconnect()
      container.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      geo.dispose()
      lineMat.dispose()
      renderer.dispose()
    }
  }, [activeTech.id])

  return (
    <div className="editorial-card rounded-xl p-5 border border-[#242424] bg-[#0A0A0A] space-y-3">
      <div className="flex items-center justify-between border-b border-[#242424] pb-2 font-mono text-xs">
        <span className="text-[#22C55E] font-bold">// 3D TECH CONSTELLATION</span>
        <span className="text-[#71717A] text-[10px] uppercase">Raycast Hover</span>
      </div>

      <div ref={containerRef} data-cursor="EXPLORE" className="w-full h-[220px] cursor-grab active:cursor-grabbing" />

      <div className="border-t border-[#242424] pt-3 font-mono text-xs flex justify-between items-center">
        <div>
          <span className="text-[#22C55E] font-bold block">{activeTech.name}</span>
          <span className="text-[#71717A] text-[11px] font-sans">{activeTech.desc}</span>
        </div>
        <span className="h-2 w-2 rounded-full bg-[#22C55E] animate-pulse" />
      </div>
    </div>
  )
}

export default TechEcosystem3D
