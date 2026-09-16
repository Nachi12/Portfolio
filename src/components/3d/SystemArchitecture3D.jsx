import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const architectureNodes = [
  {
    id: 'react',
    name: 'REACT CLIENT',
    role: 'Frontend Interface Layer',
    desc: 'Modular component architecture, Redux Toolkit global state, responsive Tailwind UI.',
    pos: [-2.2, 1.2, 0],
    color: 0xF5F5F5,
  },
  {
    id: 'node',
    name: 'NODE.JS API',
    role: 'Backend Server Runtime',
    desc: 'Asynchronous Express controllers, 15+ REST endpoints, error handling middleware.',
    pos: [0, 0, 0],
    color: 0x22C55E,
  },
  {
    id: 'auth',
    name: 'AUTH MIDDLEWARE',
    role: 'API Security & Verification',
    desc: 'JWT authentication, HTTP-only cookie validation, role-based access control (RBAC).',
    pos: [2.2, 1.2, 0],
    color: 0xF5F5F5,
  },
  {
    id: 'mongodb',
    name: 'MONGODB DATABASE',
    role: 'Document Persistence Layer',
    desc: 'Mongoose collection schemas, compound query indexing, validated CRUD pipelines.',
    pos: [0, -1.8, 0],
    color: 0xF5F5F5,
  },
]

export const SystemArchitecture3D = () => {
  const containerRef = useRef(null)
  const [activeNode, setActiveNode] = useState(architectureNodes[1]) // Node.js active by default

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scene setup
    const scene = new THREE.Scene()
    const width = container.clientWidth || 500
    const height = container.clientHeight || 400

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000)
    camera.position.z = 7.5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    // Create 3D Nodes
    const nodeMeshes = []
    architectureNodes.forEach((node) => {
      const nodeGroup = new THREE.Group()
      nodeGroup.position.set(...node.pos)

      // Outer Box Frame
      const boxGeo = new THREE.BoxGeometry(1.6, 0.9, 0.3)
      const boxMat = new THREE.MeshStandardMaterial({
        color: node.id === 'node' ? 0x111111 : 0x0A0A0A,
        metalness: 0.8,
        roughness: 0.2,
        wireframe: false,
      })
      const boxMesh = new THREE.Mesh(boxGeo, boxMat)
      nodeGroup.add(boxMesh)

      // Edges highlight
      const edges = new THREE.EdgesGeometry(boxGeo)
      const lineMat = new THREE.LineBasicMaterial({
        color: node.id === 'node' ? 0x22C55E : 0x383838,
        linewidth: 1.5,
      })
      const wireframe = new THREE.LineSegments(edges, lineMat)
      nodeGroup.add(wireframe)

      // Attach metadata for raycasting
      boxMesh.userData = { nodeData: node, lineMat }

      group.add(nodeGroup)
      nodeMeshes.push(boxMesh)
    })

    // Create Connecting Lines between nodes
    const lineMaterial = new THREE.LineDashedMaterial({
      color: 0x242424,
      dashSize: 0.1,
      gapSize: 0.05,
    })

    const connections = [
      [architectureNodes[0].pos, architectureNodes[1].pos], // React -> Node
      [architectureNodes[1].pos, architectureNodes[2].pos], // Node -> Auth
      [architectureNodes[1].pos, architectureNodes[3].pos], // Node -> MongoDB
    ]

    connections.forEach(([p1, p2]) => {
      const points = [new THREE.Vector3(...p1), new THREE.Vector3(...p2)]
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points)
      const line = new THREE.Line(lineGeo, lineMaterial)
      group.add(line)
    })

    // Ambient & Directional Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0x22C55E, 2, 10)
    pointLight.position.set(0, 0, 4)
    scene.add(pointLight)

    // Raycasting & Mouse Interaction
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      mouseX = x * 1.2
      mouseY = y * 1.2

      // Normalize mouse for raycaster (-1 to +1)
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(nodeMeshes)

      if (intersects.length > 0) {
        const hitNode = intersects[0].object.userData.nodeData
        if (hitNode) {
          setActiveNode(hitNode)
        }
      }
    }

    container.addEventListener('mousemove', handleMouseMove)

    // Animation Loop with IntersectionObserver pausing
    let animationFrameId
    let isVisible = true

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
      },
      { threshold: 0.1 }
    )
    observer.observe(container)

    const animate = () => {
      if (isVisible) {
        // Continuous subtle rotation
        group.rotation.y += (mouseX - group.rotation.y) * 0.04
        group.rotation.x += (-mouseY - group.rotation.x) * 0.04
        renderer.render(scene, camera)
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
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
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full border border-[#242424] rounded-xl bg-[#0A0A0A] overflow-hidden">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-[#242424] bg-[#111111] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#242424]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#242424]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#242424]" />
          <span className="ml-2 font-mono text-xs text-[#71717A]">3D System Architecture</span>
        </div>
        <span className="font-mono text-[10px] text-[#22C55E] uppercase tracking-wider font-bold">Interactive WebGL</span>
      </div>

      {/* 3D WebGL Canvas */}
      <div ref={containerRef} className="w-full h-[280px] sm:h-[340px] cursor-grab active:cursor-grabbing" />

      {/* Dynamic Technical Info Panel */}
      <div className="border-t border-[#242424] bg-[#050505] p-4 font-mono text-xs space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-[#22C55E] font-bold">{activeNode.name}</span>
          <span className="text-[#71717A] text-[10px] uppercase">{activeNode.role}</span>
        </div>
        <p className="text-[#A1A1AA] font-sans text-xs leading-relaxed mt-1">
          {activeNode.desc}
        </p>
      </div>
    </div>
  )
}

export default SystemArchitecture3D
