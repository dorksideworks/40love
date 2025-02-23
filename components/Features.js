'use client'


import { useEffect, useState } from "react";


export default function Features() {

    return(
        <div>

            <div className="wrapper flex flex-col align-center justify-center min-h-screen">
                
                <div className="bg-40love-primary-900 text-white font-bold rounded-full px-5 py-2 text-center ">     
                    40LOVE APP FEATURES
                </div>

                <h3 className="text-5xl text-center mt-3 font-bold">Manage and track <br/>
                Everything in one platform</h3>

                <div className="flex flex-col mt-10 gap-5">
                    
                    <div className="grid grid-cols-2 gap-5">

                        <div className="relative bg-40love-primary-900 text-white pt-10 pl-10 border-box rounded-xl">
                            
                            <h3 className="font-bold text-3xl"> Leagues & Tournaments </h3>
                            <p className="w-[75%]  text-gray-200">Easily organize and manage leagues and tournaments for players to join and compete in.</p>

                            <img className="relative right-0 bottom-0" src="/FEATURES/feature-01.png" />

                        </div>

                        <div className="relative bg-40love-primary-900 text-white p-10 border-box rounded-xl">
                            
                            <h3 className="font-bold text-3xl"> Live Match Tracking </h3>
                            <p className="w-[75%] text-gray-200">Track live matches in real-time, with score updates and match progress at your fingertips.</p>

                        </div>

                    </div>

                    <div className="grid grid-cols-3 gap-5"> 

                        <div className="relative bg-40love-primary-900 text-white p-10 border-box rounded-xl">
                            
                            <h3 className="font-bold text-3xl"> Match Finder </h3>
                            <p className="w-[75%]  text-gray-200"> Discover and connect with local players near you to set up matches and improve your game. </p>     

                        </div>

                        <div className="relative bg-40love-primary-900 text-white p-10 border-box rounded-xl">
                            
                            <h3 className="font-bold text-3xl"> Match Finder </h3>
                            <p className="w-[75%]  text-gray-200"> Discover and connect with local players near you to set up matches and improve your game. </p>
                                  
                        </div>

                        <div className="relative bg-40love-primary-900 text-white p-10 border-box rounded-xl">
                            
                            <h3 className="font-bold text-3xl"> Match Finder </h3>
                            <p className="w-[75%]  text-gray-200"> Discover and connect with local players near you to set up matches and improve your game. </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}