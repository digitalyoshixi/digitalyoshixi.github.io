import Character from './character';
import Link from 'next/link';
import Image from 'next/image';

export default function PageLayout( { title, children } ){
    return (
        <>
            <div className="bg-cover bg-center h-screen bg-aiforest">
                <div className="h-screen flex flex-row"> 
                    {/* Profile Sidebar */}
                    <div className="flex flex-col w-1/5 mx-[1%]">
                        <div className="flex-none rounded-lg my-[6%] h-[20%] w-[50%] mx-auto">
                            <Character></Character>
                        </div> 
                        <div className="opacity-80 flex-none text-center text-white font-sourgummy bg-black border-2 border-white rounded-lg w-full h-[65%] mb-[5%]">
                            <h1 className="text-3xl">Directory</h1>
                            <ul className="text-2xl ">
                                <li><Link href="/" className="hover:text-green-400">~</Link></li>
                                <li><Link href="/about" className="hover:text-green-400">/About</Link></li>
                                <li><Link href="/tech" className="hover:text-green-400">/Tech</Link></li>
                                <li><Link href="/blog" className="hover:text-green-400">/Blog</Link></li>
                                <li><Link href="/ctfs" className="hover:text-green-400">/CTFs</Link></li>
                                <li><Link href="/hackathons" className="hover:text-green-400">/Hackathons</Link></li>
                                <li><Link href="/3d" className="hover:text-green-400">/3D-Models</Link></li>
                                <li><Link href="/about/CV.pdf" className="hover:text-green-400">/Resume</Link></li>
                            </ul>
                        </div> 
                        <div className="flex-grow font-sourgummy w-full mb-[6%]">
                            <div className="w-full flex flex-row justify-center">
                                <Link href="https://ctftime.org/user/181893">
                                    <Image src="/images/ctftime.png" width={30} height={30}  className="bg-black text-white rounded-lg border-2 border-white mx-2 drop-shadow-white" alt="CTFTime"></Image>
                                </Link> 
                                <Link href="https://github.com/digitalyoshixi">
                                    <Image src="/images/github.png" width={30} height={30} className="bg-black text-white rounded-lg border-2 border-white mx-2 drop-shadow-white" alt="Github"></Image>
                                </Link> 
                                <Link href="https://devpost.com/davidchenyuhe">
                                    <Image src="/images/devpost.png" width={30} height={30} className="bg-black text-white rounded-lg border-2 border-white mx-2 drop-shadow-white" alt="Devpost"></Image>
                                </Link> 
                            </div>
                        </div> 
                    </div>
                    <div className="flex flex-col w-3/5">
                        <div className="opacity-90 rounded-lg font-acme font-light text-4xl text-neutral-900 text-center flex-none h-[6%] w-[50%] mx-auto bg-white my-[2%]">
                            |Yoshixis Web|
                        </div>
                        <div className='border-2 border-black rounded-lg flex-grow p-5 bg-[#E4EFD8] mb-[2%] overflow-y-auto max-h-[100vh]'>
                            <h1 className="text-center font-sourgummy text-5xl">{title}</h1>
                            <div className="text-2xl max-w-none w-full prose-none m-0 p-5 text-2xl w-[100%] font-acme">{children}</div>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/5 mx-[1%] justify-center items-center">
                        <Link href="https://digitalyoshixi.github.io/zettelkasten/" className="flex-row flex text-center font-sourgummy text-white bg-black border-2 rounded-lg my-[7%] h-[5%] w-[60%] mx-auto">
                                <img className="p-1" src="/images/obsidian.png"></img>
                                <p className="text-purple-300 ml-2">Zettelkasten</p>
                        </Link> 
                        <div className="flex-none font-sourgummy text-white bg-black border-2 rounded-lg w-full h-[15%]">
                            <div className="text-center">
                                Themes
                            </div>
                        </div> 
                        <div className="flex-none font-sourgummy text-white bg-black border-2 rounded-lg w-full h-[40%] my-[6%]">
                            <div className="text-center">
                                Selfhosted Services / Tools / Toys
                            </div>
                            <Link className="flex justify-center text-2xl mx-10 my-5 rounded-sm bg-gray-800 text-purple-500" href="/excalidraw">Excalidraw Rice</Link>
                            <Link className="flex justify-center text-2xl mx-10 my-5 rounded-sm bg-gray-800 text-red-500" href="">Invidious</Link>
                            <Link className="flex justify-center text-2xl mx-10 my-5 rounded-sm bg-gray-800 text-orange-500" href="">Redlib</Link>
                            <Link className="flex justify-center text-2xl mx-10 my-5 rounded-sm bg-gray-800 text-green-500" href="">Personal CTFd</Link>
                            <Link className="flex justify-center text-2xl mx-10 my-5 rounded-sm bg-gray-800 text-pink-500" href="">Cat Musics</Link>
                        </div> 
                        <div className="flex-grow font-sourgummy text-white bg-black border-2 rounded-lg w-full mb-[6%]">
                            
                            <div className="text-center">
                                88x31
                            </div>
                            <div className="grid grid-cols-2 justify-items-center overflow-y-auto max-h-[20vh]">
                            <a href="https://digitalyoshixi.github.io" >
                                <img className="p-1" src="/88x31/yoshixiweb.png"></img>
                            </a>
                            <a href="https://binary.ninja/" >
                                <img className="p-1" src="/88x31/binaryninja.png"></img>
                            </a>
                            <a href="https://www.blender.org/" >
                                <img className="p-1" src="/88x31/blender.gif"></img>
                            </a>
                            <a href="https://nixos.org/" >
                                <img className="p-1" src="/88x31/nixos.png"></img>
                            </a>
                            <a href="https://notnite.com/" >
                                <img className="p-1" src="/88x31/notnite.png"></img>
                            </a>
                            <a href="https://uoftwebloggingclub.neocities.org/" >
                                <img className="p-1" src="/88x31/webloggingclub.gif"></img>
                            </a>
                            <a href="https://sonechka.neocities.org/" >
                                <img className="p-1" src="/88x31/sonechka.png"></img>
                            </a>
                            <a href="https://farazkaleemmalik.cyou/" >
                                <img className="p-1" src="/88x31/farazkaleemmalik.png"></img>
                            </a>
                            <a href="https://izzys.casa/" >
                                <img className="p-1" src="/88x31/izzy.gif"></img>
                            </a>
                            <a href="https://sageland.neocities.org/" >
                                <img className="p-1" src="/88x31/sage.png"></img>
                            </a>
                            <a href="https://nadeko.net/" >
                                <img className="p-1" src="/88x31/nadekodotnetbanner.png"></img>
                            </a>
                            </div>
                        </div> 
                    </div>
                </div>

            </div>
    <Image src="/gifs/wormhole.gif" width={50} height={50} className="absolute bottom-2 left-2"></Image>     
        </>
    )
}
