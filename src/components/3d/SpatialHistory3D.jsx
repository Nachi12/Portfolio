import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const SpatialHistory3D = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth || 300
    const height = container.clientHeight || 200

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000)
    camera.position.z = 5.5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    // Create 4 Career Milestone 3D Nodes
    const nodePositions = [
      [-1.2, 0.9, 0],
      [-0.4, 0.3, 0.4],
      [0.4, -0.3, -0.2],
      [1.2, -0.9, 0],
    ]

    const geo = new THREE.OctahedronGeometry(0.25, 0)
    const mat = new THREE.MeshStandardMaterial({
      color: 0x22C55E,
      wireframe: true,
      emissive: 0x22C55E,
      emissiveIntensity: 0.3,
    })

    const points = []
    nodePositions.forEach((pos) => {
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(...pos)
      group.add(mesh)
      points.push(new THREE.Vector3(...pos))
    })

    // Connected Path Line
    const lineGeo = new THREE.BufferGeometry().setFromPoints(points)
    const lineMat = new THREE.LineBasicMaterial({ color: 0x22C55E, transparent: true, opacity: 0.5 })
    const pathLine = new THREE.Line(lineGeo, lineMat)
    group.add(pathLine)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.8
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.8
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
        group.rotation.y = mouseX + Math.sin(elapsedTime * 0.4) * 0.1
        group.rotation.x = -mouseY + Math.cos(elapsedTime * 0.4) * 0.05
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
      mat.dispose()
      lineMat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      data-cursor="EXPLORE"
      className="relative w-full h-[180px] sm:h-[220px] rounded-xl border border-[#242424] bg-[#0A0A0A] overflow-hidden p-3"
    >
      <div className="flex justify-between font-mono text-[10px] text-[#71717A] z-10 pointer-events-none">
        <span className="text-[#22C55E] font-bold">// CAREER NODES 3D</span>
        <span>SPATIAL TIMELINE</span>
      </div>
    </div>
  )
}

export default SpatialHistory3D
