import PageLayout from "../components/pagelayout"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <PageLayout title="Tech">
      <p>Heres a list of stuff that I have used before:</p>
    <div className="grid grid-cols-6 gap-4">
      <Link href="https://www.archlinux.org/"><Image src="/images/arch_linux.png" width={100} height={100} alt="Arch Linux Logo" className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://developer.android.com/studio"><Image src="/images/android_studio.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.arduino.cc/"><Image src="/images/arduino.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://aws.amazon.com/"><Image src="/images/aws.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.gnu.org/software/bash/"><Image src="/images/bash.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.binary.ninja/"><Image src="/images/binja.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://getbootstrap.com/"><Image src="/images/bootstrap.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.cprogramming.com/"><Image src="/images/c.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.cplusplus.com/"><Image src="/images/c++.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://cutter.re/"><Image src="/images/cutter.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.docker.com/"><Image src="/images/docker.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.elastic.co/"><Image src="/images/elasticsearch.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://expressjs.com/"><Image src="/images/express.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://flask.palletsprojects.com/"><Image src="/images/flask.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://git-scm.com/"><Image src="/images/git.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://about.gitlab.com/"><Image src="/images/gitlab.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://godotengine.org/"><Image src="/images/godot.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://ghidra-sre.org/"><Image src="/images/ghidra.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML"><Image src="/images/html.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://insomnia.rest/"><Image src="/images/insomnia.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.java.com/"><Image src="/images/java.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><Image src="/images/javascript.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://jupyter.org/"><Image src="/images/jupyter_notebook.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://kubernetes.io/"><Image src="/images/kubernetes.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://llvm.org/"><Image src="/images/llvm.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.lua.org/"><Image src="/images/lua.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.mysql.com/"><Image src="/images/mysql.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://neovim.io/"><Image src="/images/neovim.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://nextjs.org/"><Image src="/images/next_js.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://nixos.org/"><Image src="/images/nixos.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.nginx.com/"><Image src="/images/nginx.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://nodejs.org/"><Image src="/images/node_js.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.notion.so/"><Image src="/images/notion.png" width={100} height={100} className="rounded-lg w-full h-24 bg-white"></Image></Link>
      <Link href="https://www.npmjs.com/"><Image src="/images/npm.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://numpy.org/"><Image src="/images/numpy.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.nasm.us/"><Image src="/images/nasm.svg" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://obsidian.md/"><Image src="/images/obsidian.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://openvpn.net/"><Image src="/images/openvpn.png" width={100} height={100} className="rounded-lg w-full h-24 bg-white"></Image></Link>
      <Link href="https://pandas.pydata.org/"><Image src="/images/pandas.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.postgresql.org/"><Image src="/images/postgresql.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.postman.com/"><Image src="/images/postman.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://docs.microsoft.com/en-us/powershell/"><Image src="/images/powershell.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.python.org/"><Image src="/images/python.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.raspberrypi.org/"><Image src="/images/raspberri_pi.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.rust-lang.org/"><Image src="/images/rust.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://pi-hole.net/"><Image src="/images/pihole.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://reactjs.org/"><Image src="/images/react.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://restfulapi.net/"><Image src="/images/rest.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.rpgmakerweb.com/"><Image src="/images/rpg_maker.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://sass-lang.com/"><Image src="/images/sass.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://shadcn.com/"><Image src="/images/shadcn_ui.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://supabase.io/"><Image src="/images/supabase.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://tailwindcss.com/"><Image src="/images/tailwind_css.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.tensorflow.org/"><Image src="/images/tensorflow.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.vim.org/"><Image src="/images/vim.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://code.visualstudio.com/"><Image src="/images/visual_studio_code.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://visualstudio.microsoft.com/"><Image src="/images/visual_studio.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
      <Link href="https://www.wireguard.com/"><Image src="/images/wireguard.png" width={100} height={100} className="rounded-lg w-full h-24 bg-red-850"></Image></Link>
      <Link href="https://x64dbg.com/"><Image src="/images/x64dbg.png" width={100} height={100} className="rounded-lg w-full h-24 bg-black"></Image></Link>
    </div>
    </PageLayout>
  )
}