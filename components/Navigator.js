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
            <div className="wrapper h-[100%] flex flex-row justify-between">
                    
                <div className="h-100 w-100 border-box py-3 flex flex-row gap-5">
                    <img src="/40lovelogo.png" className="h-[80%]"/>
                    <div className="ml-10 nav-buttons bg-red-500 flex flex-row gap-5 items-center align-center">
                       

                    </div>
                </div>

                <div className="h-100 w-100 border-box py-3 flex flex-row gap-5 align-center items-center justify-center">
                    
                        <ul className="flex flex-row gap-10 text-xl">
                            <li> HOME</li>
                            <li>ABOUT</li>
                            <li>FEATURES</li>
                        </ul>
                </div>
            </div>
       </div>
    )
}
