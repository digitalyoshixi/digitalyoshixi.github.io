import PageLayout from "../components/pagelayout"
import GeneralModel from "../components/generalview"
import ModelCanvas from "../components/canvas"

export default function Page() {
  return (
    <PageLayout title="3D">
    <div className=" bg-black flex-none rounded-lg h-40 w-40">
      <ModelCanvas className=" bg-black flex-none rounded-lg h-40 w-40">
          <GeneralModel path="/3d/cube.glb" rot={{x : 0, y : 0, z : 0}} scale={{x : 1, y : 1, z : 1}}></GeneralModel>
      </ModelCanvas>
    </div>

    </PageLayout>
  )
}