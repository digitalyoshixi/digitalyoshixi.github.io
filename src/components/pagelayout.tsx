import { ReactNode } from 'react';
import Character from './character';

export default function PageLayout( { children }  : {children : ReactNode} ){

    return (
        <div className="bg-red-400 h-screen w-screen">
            <div className="h-screen flex flex-row"> 
                {/* Profile Sidebar */}
                <div className="flex flex-col w-1/5 mx-[1%]">
                    <div className="flex-none rounded-lg my-[6%] h-[20%] w-[50%] mx-auto">
                        <Character></Character>
                    </div> 
                    <div className="flex-none bg-white rounded-lg w-full h-[65%] mb-[5%]">
                        Directory
                    </div> 
                    <div className="flex-grow bg-white rounded-lg w-full mb-[6%]">
                        Links
                    </div> 
                </div>
                <div className="flex flex-col w-3/5">
                    <div className="rounded-lg font-acme font-light text-4xl text-neutral-900 text-center flex-none h-[6%] w-[50%] mx-auto bg-white my-[2%]">
                        Yoshixis Web
                    </div>
                    <div className='rounded-lg font-sourGummy flex-grow p-5 bg-white mb-[2%]'>
                        {children}
                    </div>
                </div>
                <div className="flex flex-col w-1/5 mx-[1%] justify-center items-center">
                    <div className="flex-none bg-white rounded-lg my-[7%] h-[5%] w-[50%] mx-auto">
                        Obsidian Notes
                    </div> 
                    <div className="flex-none bg-white rounded-lg w-full h-[15%]">
                        Themes
                    </div> 
                    <div className="flex-none bg-white rounded-lg w-full h-[40%] my-[6%]">
                        Games
                    </div> 
                    <div className="flex-grow bg-white rounded-lg w-full mb-[6%]">
                        88x31
                    </div> 
                </div>
            </div>

        </div>
    )
}