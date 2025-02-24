import React from "react";
import Image from 'next/image';

export default function Footer () {

    return (
        <div class="footer z-50 relative ">
            <div class="wrapper z-20 relative bg-[#F3F3F3] rounded-tr-3xl rounded-tl-3xl p-10 xl:p-20 border-box">

                <div class="flex flex-col xl:flex-row gap-20 justify-around ">

                    <div >
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

                    
                    <div className="flex flex-row justify-around grow">
                        <div class="flex flex-col gap-3">
                            <h3 className="font-bold text-2xl text-40love-primary-900"> Site Links </h3>
                            <ul className="text-xl">
                                <li>Home</li>
                                <li>About</li>
                                <li>Features</li>
                            </ul>
                        </div>

                        <div class="flex flex-col gap-3">
                            <h3 className="font-bold text-2xl text-40love-primary-900"> Organization </h3>
                            <ul className="text-xl">
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>

                        <div class="flex flex-col gap-3">
                            <h3 className="font-bold text-2xl text-40love-primary-900"> Socials </h3>
                            <ul className="text-xl">
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter / X</li>
                                <li>Telegram</li>
                            </ul>
                        </div>
                    </div>


                </div>

                <hr class="my-10 xl:my-20"/>

                <div class="flex flex-col gap-5 xl:flex-row justify-between">
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