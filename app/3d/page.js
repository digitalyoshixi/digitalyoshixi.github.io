import PageLayout from "../components/pagelayout"
import GeneralModel from "../components/generalview"
import ModelCanvas from "../components/canvas"

export default function Page() {
  return (
    <PageLayout title="3D">
    <div className="grid grid-cols-4 gap-4">
    <div className=" bg-black m-2 flex-none rounded-lg h-40 w-40"><ModelCanvas className=" bg-black flex-none rounded-lg h-40 w-40"><GeneralModel path="/3d/duelist.glb" pos={{x:-1,y:-2.6,z:0}} rot={{x : 0.2, y : -1.7, z : 0}} scale={{x : 1, y : 1, z : 1}}></GeneralModel></ModelCanvas></div>
    <div className=" bg-black m-2 flex-none rounded-lg h-40 w-40"><ModelCanvas className=" bg-black flex-none rounded-lg h-40 w-40"><GeneralModel path="/3d/mercenary.glb" pos={{x:-1,y:-2.6,z:0}} rot={{x : 0.2, y : -1.7, z : 0}} scale={{x : 1, y : 1, z : 1}}></GeneralModel></ModelCanvas></div>
    <div className=" bg-black m-2 flex-none rounded-lg h-40 w-40"><ModelCanvas className=" bg-black flex-none rounded-lg h-40 w-40"><GeneralModel path="/3d/ranger.glb" pos={{x:-1,y:-2.6,z:0}} rot={{x : 0.2, y : -1.7, z : 0}} scale={{x : 1, y : 1, z : 1}}></GeneralModel></ModelCanvas></div>
    <div className=" bg-black m-2 flex-none rounded-lg h-40 w-40"><ModelCanvas className=" bg-black flex-none rounded-lg h-40 w-40"><GeneralModel path="/3d/shoat.glb" pos={{x:-1,y:-2.6,z:0}} rot={{x : 0.2, y : -1.7, z : 0}} scale={{x : 1, y : 1, z : 1}}></GeneralModel></ModelCanvas></div>
    <div className=" bg-black m-2 flex-none rounded-lg h-40 w-40"><ModelCanvas className=" bg-black flex-none rounded-lg h-40 w-40"><GeneralModel path="/3d/magician.glb" pos={{x:-1,y:-2.6,z:0}} rot={{x : 0.2, y : -1.7, z : 0}} scale={{x : 1, y : 1, z : 1}}></GeneralModel></ModelCanvas></div>
    <div className=" bg-black m-2 flex-none rounded-lg h-40 w-40"><ModelCanvas className=" bg-black flex-none rounded-lg h-40 w-40"><GeneralModel path="/3d/halberdier.glb" pos={{x:-1,y:-2.6,z:0}} rot={{x : 0.2, y : -1.7, z : 0}} scale={{x : 1, y : 1, z : 1}}></GeneralModel></ModelCanvas></div>
    <div className=" bg-black m-2 flex-none rounded-lg h-40 w-40"><ModelCanvas className=" bg-black flex-none rounded-lg h-40 w-40"><GeneralModel path="/3d/headhunter.glb" pos={{x:-1,y:-2.6,z:0}} rot={{x : 0.2, y : -1.7, z : 0}} scale={{x : 1, y : 1, z : 1}}></GeneralModel></ModelCanvas></div>
    <div className=" bg-black m-2 flex-none rounded-lg h-40 w-40"><ModelCanvas className=" bg-black flex-none rounded-lg h-40 w-40"><GeneralModel path="/3d/salamander.glb" pos={{x:-1,y:-2.6,z:0}} rot={{x : 0.2, y : -1.7, z : 0}} scale={{x : 1, y : 1, z : 1}}></GeneralModel></ModelCanvas></div>
    <div className=" bg-black m-2 flex-none rounded-lg h-40 w-40"><ModelCanvas className=" bg-black flex-none rounded-lg h-40 w-40"><GeneralModel path="/3d/bombardier.glb" pos={{x:-1,y:-2.6,z:0}} rot={{x : 0.2, y : -1.7, z : 0}} scale={{x : 1, y : 1, z : 1}}></GeneralModel></ModelCanvas></div>
    <div className=" bg-black m-2 flex-none rounded-lg h-40 w-40"><ModelCanvas className=" bg-black flex-none rounded-lg h-40 w-40"><GeneralModel path="/3d/commandant.glb" pos={{x:-1,y:-2.6,z:0}} rot={{x : 0.2, y : -1.7, z : 0}} scale={{x : 1, y : 1, z : 1}}></GeneralModel></ModelCanvas></div>
    <div className=" bg-black m-2 flex-none rounded-lg h-40 w-40"><ModelCanvas className=" bg-black flex-none rounded-lg h-40 w-40"><GeneralModel path="/3d/alchemist.glb" pos={{x:-1,y:-2.6,z:0}} rot={{x : 0.2, y : -1.7, z : 0}} scale={{x : 1, y : 1, z : 1}}></GeneralModel></ModelCanvas></div>
    <div className=" bg-black m-2 flex-none rounded-lg h-40 w-40"><ModelCanvas className=" bg-black flex-none rounded-lg h-40 w-40"><GeneralModel path="/3d/cultist.glb" pos={{x:-1,y:-2.6,z:0}} rot={{x : 0.2, y : -1.7, z : 0}} scale={{x : 1, y : 1, z : 1}}></GeneralModel></ModelCanvas></div>
    </div>


    </PageLayout>
  )
}