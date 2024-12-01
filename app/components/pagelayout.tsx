import { ReactNode } from 'react';

export default function PageLayout( { children }  : {children : ReactNode} ){

    return (
        <div className="bg-blue-500 h-screen w-screen">
            <div className="h-screen flex flex-row"> 
                {/* Profile Sidebar */}
                <div className="w-1/5 mx-5 justify-center items-center">
                    <div className="bg-white rounded-lg my-[5%]  h-[20%] mx-auto">
                    </div> 
                    <div className="bg-white rounded-lg w-full h-[67%]">
                        He
                    </div> 
                </div>
                <div className="w-3/5">
                    <div className="font-acme font-light text-4xl text-neutral-900 text-center h-[6%] my-[1%] flex bg-white w-[50%] mx-auto justify-center items-center">
                          Yoshixis Web
                    </div>
                    <div className="font-sourGummy rounded-lg bg-white shadow-md w-full h-[90%] text-center"> 
                        {children}
                    </div>
                </div>
                <div className="bg-white w-1/5 mx-5  flex justify-center items-center">
                    Hello
                </div>
            </div>

        </div>
    )
}