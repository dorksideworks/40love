'use client'
import React, {useRef, useEffect, useState} from "react";
import anime from 'animejs/lib/anime.es.js';
import AOS from 'aos';
import "aos/dist/aos.css";

import {motion, AnimatePresence} from 'framer-motion';

export default function Hero() {


    return (
        <div className="relative h-auto xl:h-screen " >
            <div className="wrapper h-full flex flex-col-reverse xl:flex-row" >

                <div className="w-full xl:w-[50%] h-full  justify-center flex flex-col p-10 xl:p-10">
                    
                    <motion.h1 className="text-4xl xl:text-6xl font-bold"> Track Every Match, Anywhere. Anytime.</motion.h1>

                    <motion.p className="mt-3 text-lg text-gray-900">Stay in the game with 40love! Get live data on tennis matches happening around the world and find nearby games at your location. Never miss a point—whether you're playing or watching.</motion.p>

                    <motion.h3 className="mt-20 font-bold">GET THE APP NOW</motion.h3>
                    <div className="flex flex-row mt-5 gap-5">
                        <a>
                            <motion.img className="w-auto h-[40px] xl:h-[60px]" src="/download-appstore.png"/>
                        </a>
                        <a>
                            <motion.img className="w-auto h-[40px] xl:h-[60px]"  src="/download-playstore.png"/>
                        </a>
                    </div>
                </div>

                <div className="w-full my-20 xl:my-0 xl:w-[50%] flex relative justify-center items-center">
                    <motion.img 
                        initial={{y:"-100%", opacity: 0}}
                        animate={{y: "-15%", x: "25%", opacity: 1}}
                        transition={{ease: "circOut", duration: 1}}
                        className="absolute w-[42%] translate-x-[25%] -translate-y-[15%] z-20" src="/HERO/hero-1.png"/>
                    <motion.img 
                        initial={{y:"100%", opacity: 0}}
                        animate={{y: "10%", x: "-30%", opacity: 1}}
                        transition={{ease: "circOut", duration: 1}}
                        
                        className="absolute w-[42%] z-10 -translate-x-[30%] translate-y-[10%]" src="/HERO/hero-2.png"/>
                    <motion.img 
                        initial={{scale:0}}
                        animate={{scale:1}}
                        transition={{ease: "circOut", duration: 1}}
                        className=" h-auto xl:h-[50%] xl:scale-125 z-1" src="/HERO/hero-bg-2.png"/>
                </div>

            </div>
        </div>
    )

}