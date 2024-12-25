import { OrbitControls, Preload, useGLTF, Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useState } from "react"

const Ruby = ({ isMobile }) => {
  const ruby = useGLTF('/src/objects/low_poly_ruby/scene.gltf')

  useEffect(() => {
    ruby.scene.traverse((child) => {
      if (child.isMesh) {
        child.material.transparent = true;
        child.material.opacity = 0.8;
        child.material.roughness = 0.7;
        child.material.metalness = 1;
      }
    });
  }, [ruby]);

  return (
    <>        
        <mesh>
            <primitive 
            object={ruby.scene} 
            scale={isMobile ? 0.7 : 1.8} 
            position={[0, 0, 0]}
            rotation={[0, 0.1, 0.4]} 
            />
        </mesh>
    </>
  )
}

const RubyCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 45 }} 
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <Environment preset="city" />
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} autoRotate />
        <Ruby isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default RubyCanvas