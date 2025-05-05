'use client'
import PageLayout from "../components/pagelayout"
import GeneralModel from "../components/generalview"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { OrbitControls } from "@react-three/drei"

const models = [
  "duelist", "mercenary", "ranger", "shoat", "magician", 
  "halberdier", "headhunter", "salamander", "bombardier",
  "commandant", "alchemist", "cultist"
]

export default function Page() {
  return (
    <PageLayout title="3D">
      <div className="grid grid-cols-4 gap-4">
        {models.map((model, index) => (
          <div key={model} className="bg-black m-2 flex-none rounded-lg h-40 w-40">
            <Canvas>
              <Suspense fallback={null}>
                <directionalLight position={[10, 10, 10]} intensity={3} />
                <directionalLight position={[10, -10, -10]} intensity={3} />
                <directionalLight position={[-10, 0, 0]} intensity={3} />
                <GeneralModel 
                  path={`/3d/${model}.glb`}
                  pos={{x:-1,y:-2.6,z:0}}
                  rot={{x:0.2,y:-1.7,z:0}}
                  scale={{x:1,y:1,z:1}}
                />
                <OrbitControls makeDefault />
              </Suspense>
            </Canvas>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}