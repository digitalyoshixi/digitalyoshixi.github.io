import { ReactNode } from 'react';

export default function PageLayout( { children }  : {children : ReactNode} ){

    return (
        <div className="bg-blue-500 h-screen w-screen">
            <div className="h-screen flex flex-row"> 
                {/* Profile Sidebar */}
                <div className="flex flex-col w-1/5 mx-[1%]">
                    <div className="bg-white rounded-lg my-[2%] h-[20%] flex-none mx-auto">
                        H
                    </div> 
                    <div className='rounded-lg flex-grow p-5 bg-white mb-[2%]'>
                        H
                    </div>
                </div>
                <div className="flex flex-col w-3/5">
                    <div className="rounded-lg font-acme font-light text-4xl text-neutral-900 text-center flex-none h-[6%] w-[50%] mx-auto bg-white my-[2%]">
                        Yoshixis Web
                    </div>
                    <div className='rounded-lg flex-grow p-5 bg-white mb-[2%]'>
                        H
                    </div>
                </div>
                <div className="bg-white w-1/5 mx-[1%]  flex justify-center items-center">
                    Hello
                </div>
            </div>

        </div>
    )
}