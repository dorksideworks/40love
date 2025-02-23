'use client'


import { useEffect, useState } from "react";


export default function Features() {

    return(
        <div className="mt-20">

                
            <div className="wrapper 
                p-10
                xl:p-0
                flex flex-col align-center justify-center min-h-screen">
                
                <div className="flex flex-row justify-center">
                    <div className="bg-40love-primary-900 text-white font-bold rounded-full px-5 py-2 text-center shrink-12">     
                        40LOVE APP FEATURES
                    </div>
                </div>

                <h3 className="text-4xl xl:text-5xl text-center mt-3 font-bold">Manage and track <br/>
                Everything in one platform</h3>

                <div className="flex flex-col mt-10 gap-10">
                    
                    <div className="grid 
                    grid-rows-2 grid-cols-1
                    xl:grid-cols-2 xl:grid-rows-1 gap-10">

                        <div className="relative bg-40love-primary-900 text-white pt-10 pl-10 border-box rounded-xl min-h-[400px]">
                            
                            <div className="z-10">
                                <h3 className="font-bold text-3xl"> Leagues & Tournaments </h3>
                                <p className="w-[50%] mt-5  text-gray-200">Easily organize and manage leagues and tournaments for players to join and compete in.</p>
                            </div>

                            <img className="absolute right-0 bottom-0" src="/FEATURES/feature-01.png" />

                            <img className="absolute right-0 bottom-0 z-[1] w-full" src="/FEATURES/block-pattern.png" />

                        </div>

                        <div className="relative bg-40love-primary-900 text-white p-10 border-box rounded-xl">
                            
                            <h3 className="font-bold text-3xl"> Live Match Tracking </h3>
                            <p className="w-[50%] text-gray-200">Track live matches in real-time, with score updates and match progress at your fingertips.</p>

                        </div>

                    </div>

                    <div className="grid 
                        grid-rows-3 grid-cols-1
                        xl:grid-cols-3 xl:grid-rows-1 gap-5"> 

                        <div className="relative bg-40love-primary-900 text-white p-10 border-box rounded-xl">
                            
                            <div className="z-10">
                                <h3 className="font-bold text-3xl"> Match Finder </h3>
                                <p className="w-[50%]  text-gray-200"> Discover and connect with local players near you to set up matches and improve your game. </p>    
                            </div> 
                         

                            

                        </div>

                        <div className="relative bg-40love-primary-900 text-white p-10 border-box rounded-xl min-h-[400px]">
                            
                            <div className="z-10">
                                <h3 className="font-bold text-3xl"> 40Love Social </h3>
                                <p className="w-[100%]  text-gray-200"> Share photos, experiences, and posts with the community, just like on social media, but for tennis lovers. </p>     
                            </div>
                            <img className="absolute  right-0 bottom-0" src="/FEATURES/feature-04.png" />
                            <img className="absolute h-full object-cover right-0 bottom-0 z-[1]" src="/FEATURES/block-pattern.png" />
                        </div>

                        <div className="relative bg-40love-primary-900 text-white p-10 border-box rounded-xl">
                            
                            <h3 className="font-bold text-3xl"> Match Finder </h3>
                            <p className="w-[50%]  text-gray-200"> Discover and connect with local players near you to set up matches and improve your game. </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}