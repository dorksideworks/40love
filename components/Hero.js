'use client'
import React, {useRef, useEffect, useState} from "react";
import anime from 'animejs/lib/anime.es.js';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Hero() {


    return (
        <div className="relative h-screen" >
            <div className="wrapper h-full flex flex-row" >

                <div className="w-[50%] h-full  justify-center flex flex-col p-10">
                    <h1 className="text-6xl font-bold"> Track Every Match, Anywhere. Anytime.</h1>
                    <p className="mt-3 text-lg text-gray-900">Stay in the game with 40love! Get live data on tennis matches happening around the world and find nearby games at your location. Never miss a point—whether you're playing or watching.</p>

                    <h3 className="mt-5 font-bold">GET THE APP NOW</h3>
                    <div className="flex flex-row mt-5 gap-5">
                        <a>
                            <img className="h-[60px]" src="/download-appstore.png"/>
                        </a>
                        <a>
                            <img className="h-[60px]"  src="/download-playstore.png"/>
                        </a>
                    </div>
                </div>

                <div className="w-[50%] flex relative justify-center items-center">
                    <img className="absolute w-[42%] translate-x-[25%] -translate-y-[15%] z-20" src="/HERO/hero-1.png"/>
                    <img className="absolute w-[42%] z-10 -translate-x-[30%] translate-y-[10%]" src="/HERO/hero-2.png"/>
                    <img className=" h-[50%] scale-125 z-1" src="/HERO/hero-bg-2.png"/>
                </div>

            </div>
        </div>
    )

}