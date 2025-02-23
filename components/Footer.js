import React from "react";
import Image from 'next/image';

export default function Footer () {

    return (
        <div class="footer z-50 relative ">
            <div class="wrapper z-20 relative bg-[#F3F3F3] rounded-3xl p-20 border-box">

                <div class="flex flex-row justify-between items-center ">
                    <div>
                        <img className="w-[200px]" src="/40lovelogo.png"/>
                        <p className="mt-5">
                        Stay in the game with 40love! Get live data on tennis matches <br/> happening around the world.
                        </p>
        
                        <div className="bg-white rounded-full p-1 mt-10 flex flex-row overflow-hidden">
                            <input type="text" className="grow" />
                            <div className="bg-40love-primary-900 rounded-full px-5 p-2 text-white font-bold">
                                SUBSCRIBE
                            </div>
                        </div>

                    </div>

                    
                    <div class="socials flex flex-row gap-3 ">
                 
                    </div>

                </div>

                <hr class="mt-20 mb-20"/>

                <div class="flex flex-row justify-between">
                    <div class="">© 2025 40Love. All rights reserved.</div>
                    {/* <Image 
                        priority
                        alt="quickpay crypto logo"
                        height={25}
                    /> */}
                    <ul class="flex flex-row gap-5">
                        <a href="/terms-and-conditions"><li>Terms of Service</li></a>
                        <a href="/privacy-policy"><li>Privacy Policy</li></a>
                    </ul>
                </div>

            </div>

        </div>
    );
}