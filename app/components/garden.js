import Image from "next/image"
import Link from "next/link"
export default function Garden() {
  return (
    <div className="flex flex-col items-center justify-center w-[100%] mx-auto h-[100%] relative">
    <Image className="rounded-lg" src="/blog/garden2/gardenstatus.png" width={800} height={600}>
    </Image>
        <Link href="/unfinished" className="w-10 h-10 absolute right-[8.5rem] top-[1.5rem] hover:opacity-50 bg-blue-500 opacity-0">
        </Link>

    </div>
  )
}