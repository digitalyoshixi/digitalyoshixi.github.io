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
                                <li><Link href="/projects" className="hover:text-green-400">/Projects</Link></li>
                                <li><Link href="/blog" className="hover:text-green-400">/Blog</Link></li>
                                <li><Link href="/ctfs" className="hover:text-green-400">/CTFs</Link></li>
                                <li><Link href="/3d" className="hover:text-green-400">/3D-Models</Link></li>
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
                            <div className="prose dark:prose-invert p-5 text-2xl max-w-none w-[100%] font-acme">{children}</div>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/5 mx-[1%] justify-center items-center">
                        <div className="flex-none text-center font-sourgummy bg-white rounded-lg my-[7%] h-[5%] w-[50%] mx-auto">
                            Obsidian Notes
                        </div> 
                        <div className="flex-none font-sourgummy bg-white rounded-lg w-full h-[15%]">
                            Themes
                        </div> 
                        <div className="flex-none font-sourgummy bg-white rounded-lg w-full h-[40%] my-[6%]">
                            Games
                        </div> 
                        <div className="flex-grow font-sourgummy bg-white rounded-lg w-full mb-[6%]">
                            88x31
                        </div> 
                    </div>
                </div>

            </div>
        </>
        
    )
}