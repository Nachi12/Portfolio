import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const ProjectDevice3D = ({ title = 'CASE STUDY PREVIEW', tag = 'MERN STACK', image }) => {
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

    const deviceGroup = new THREE.Group()
    scene.add(deviceGroup)

    // Outer Device Frame
    const frameGeo = new THREE.BoxGeometry(3.2, 2.0, 0.15)
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      metalness: 0.8,
      roughness: 0.2,
    })
    const frameMesh = new THREE.Mesh(frameGeo, frameMat)
    deviceGroup.add(frameMesh)

    // Glowing Green Edges
    const edges = new THREE.EdgesGeometry(frameGeo)
    const lineMat = new THREE.LineBasicMaterial({ color: 0x22C55E, linewidth: 1.5 })
    const wireframe = new THREE.LineSegments(edges, lineMat)
    deviceGroup.add(wireframe)

    // Screen Inner Plane with optional texture image
    const screenGeo = new THREE.PlaneGeometry(3.0, 1.8)
    let screenMat

    if (image) {
      const textureLoader = new THREE.TextureLoader()
      const texture = textureLoader.load(image)
      texture.colorSpace = THREE.SRGBColorSpace
      screenMat = new THREE.MeshBasicMaterial({ map: texture })
    } else {
      screenMat = new THREE.MeshBasicMaterial({ color: 0x050505 })
    }

    const screenMesh = new THREE.Mesh(screenGeo, screenMat)
    screenMesh.position.z = 0.08
    deviceGroup.add(screenMesh)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9)
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
        deviceGroup.rotation.y = mouseX + Math.sin(elapsedTime * 0.5) * 0.05
        deviceGroup.rotation.x = -mouseY + Math.cos(elapsedTime * 0.5) * 0.05
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

      frameGeo.dispose()
      frameMat.dispose()
      lineMat.dispose()
      screenGeo.dispose()
      screenMat.dispose()
      renderer.dispose()
    }
  }, [image])

  return (
    <div
      ref={containerRef}
      data-cursor="view"
      className="relative w-full h-[180px] sm:h-[220px] rounded-lg border border-[#242424] bg-[#050505] overflow-hidden flex flex-col justify-between p-3"
    >
      <div className="flex justify-between font-mono text-[10px] text-[#71717A] z-10 pointer-events-none bg-black/60 backdrop-blur-sm p-1.5 rounded">
        <span className="text-[#22C55E] font-bold">{title}</span>
        <span>{tag}</span>
      </div>
    </div>
  )
}

export default ProjectDevice3D
