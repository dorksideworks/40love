'use client'
import React, {useState, useEffect} from "react";

import {motion, AnimatePresence, cubicBezier} from 'framer-motion';

export default function Navigator() {
    const [nav,setNav] = useState(false);
    const [mode, setMode] = useState("light");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    
    const toggleMobileDropdown = () => setIsMobileOpen(!isMobileOpen);

    const navItemBase = {x: "-150%"}
    const navItemAnimate = {x: "0%"}; 

    function showNav() {
        setNav(nav? false : true)
    }

    function handleTheme() {
        setMode(mode=="light"?"dark" :"light");
    }

    useEffect(()=>{
        localStorage.setItem("theme", mode);
        document.querySelector("html").setAttribute("class", mode);
        
    }, [mode])

    return(
       <div className="fixed w-screen bg-white  h-[80px] z-[50]">

            {/** MOBILE NAVIGATOR */}
            <AnimatePresence>
                {
                    nav? 
                    <div className="fixed z-50 w-screen h-screen">
                        <motion.div 
                            initial={{x: "-100%"}}
                            animate={{x: "0%"}}
                            exit={{x: "-100%"}}
                            transition={{duration: .5, ease: "easeOut"}}
                            className="relative w-[60%] left-0 h-screen bg-white p-10 z-50">
        
                            <img src="/40lovelogo.png" className="w-[50%]"/>
                            <img onClick={() => showNav()} className=" absolute right-10 top-8 w-[40px]" src="/close.png"  />

                            <ul className="flex relative flex-col text-3xl gap-5 mb-5 mt-10">
                                <motion.li 
                                    initial={navItemBase}
                                    animate={navItemAnimate}
                                    exit={navItemBase}
                                    transition={{duration: .5, delay: 0, ease: "easeOut"}}
                                    className="duration-300 hover:text-40love-primary-900">
                                    Home
                                </motion.li>
                                <motion.li 

                                    initial={navItemBase}
                                    animate={navItemAnimate}
                                    exit={navItemBase}
                                    transition={{duration: .5, delay: 0.2, ease: "easeOut"}}
                                    className="duration-300 hover:text-40love-primary-900">
                                    About
                                </motion.li>
                                <motion.li 
                                    initial={navItemBase}
                                    animate={navItemAnimate}
                                    exit={navItemBase}
                                    transition={{duration: .5, delay: 0.4, ease: "easeOut"}}
                                    className="duration-300 hover:text-40love-primary-900">
                                    Feature
                                </motion.li>

                            </ul>
                            <div className="flex flex-col gap-5">

                                <motion.img 
                                    initial={navItemBase}
                                    animate={navItemAnimate}
                                    exit={navItemBase}

                                    transition={{duration: .5, delay: 0.6, ease: "easeOut"}}
                                    className="w-[70%]"  src="/download-appstore.png" />
                                <motion.img 
                                    initial={navItemBase}
                                    animate={navItemAnimate}
                                    exit={navItemBase}
                                    transition={{duration: .5, delay: 0.8, ease: "easeOut"}}
                                    className="w-[70%]" src="/download-playstore.png" />
                            </div>
                        </motion.div> 
                        <motion.div
                            initial={{opacity:0}}
                            animate={{opacity:.3}}
                            exit={{opacity:0}}
                            transition={{ease: "easeOut", duration: 0.5}}
                            onClick={() => showNav()} className="fixed top-0 left-0 bg-black opacity-25 w-screen h-screen"> </motion.div>
                    </div> :""
                }
            </AnimatePresence>

            <div className="wrapper h-[100%] flex flex-row justify-between">
                <div className=" absolute top-[20px] left-[20px] xl:hidden flex justify-center items-center">
                    <img onClick={()=>showNav()} className="h-[40px]" src="/burger.png" />
                </div>

                <div className="h-100 grow
                xl:justify-start xl:items-start xl:align-start
                justify-center items-center align-center
                border-box py-3 flex flex-row gap-5">
                    <img src="/40lovelogo.png" className="h-[80%]"/>
                </div>

                <div 
                
                className="h-100 w-100 border-box 
                hidden
                xl:flex
                py-3 flex flex-row gap-5 align-center items-center justify-center">
                    
                        <ul className="flex flex-row gap-10 text-xl flex flex-row justify-center align-center items-center">
                            <li className="duration-300 hover:text-40love-primary-900">HOME</li>
                            <li className="duration-300 hover:text-40love-primary-900">ABOUT</li>
                            <li className="duration-300 hover:text-40love-primary-900">FEATURES</li>
                            <li className="flex flex-row gap-5">
                                <img className="h-[40px]"  src="/download-appstore.png" />
                                <img className="h-[40px]" src="/download-playstore.png" />
                            </li>
                        </ul>
                </div>

            </div>
       </div>
    )
}
