'use client'
import React, {useState, useEffect} from "react";



export default function Navigator() {
    const [nav,setNav] = useState(false);
    const [mode, setMode] = useState("light");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    
    const toggleMobileDropdown = () => setIsMobileOpen(!isMobileOpen);

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
       <div className="w-100 relative  h-[80px]">

            {
                nav? 
                <div className="relative fixed w-[60%] left-0 h-screen bg-white p-10 z-50">
    
                    <img src="/40lovelogo.png" className="w-[50%]"/>
                    <img onClick={() => showNav()} className=" absolute right-10 top-8 w-[40px]" src="/close.png"  />
    
                    <ul className="flex flex-col text-3xl gap-5 mb-5 mt-10">
                        <li className="duration-300 hover:text-40love-primary-900">Home</li>
                        <li className="duration-300 hover:text-40love-primary-900">About</li>
                        <li className="duration-300 hover:text-40love-primary-900">Features</li>
    
                    </ul>
                    <div className="flex flex-col gap-5">
    
                        <img className="w-[70%]"  src="/download-appstore.png" />
                        <img className="w-[70%]" src="/download-playstore.png" />
                    </div>
                </div> :""
            }

            <div className="wrapper h-[100%] flex flex-row justify-between">
                <div className="xl:hidden flex justify-center items-center">
                    <img onClick={()=>showNav()} className="h-[50%]" src="/burger.png" />
                </div>

                <div className="h-100 grow
                xl:justify-start xl:items-start xl:align-start
                justify-center items-center align-center
                border-box py-3 flex flex-row gap-5">
                    <img src="/40lovelogo.png" className="h-[80%]"/>
                </div>

                
                <div className="h-100 w-100 border-box 
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
