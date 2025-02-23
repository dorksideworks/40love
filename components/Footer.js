import React from "react";
import Image from 'next/image';

export default function Footer () {

    return (
        <div class="footer z-50 relative">
            {/* <div className="absolute -top-20 xl:-top-72 z-10 w-[100vw]">
                <svg id="visual" viewBox="0 0 900 200" width="100%" height="100%" >
                        <path d="M0 43L75 58C150 73 300 103 450 103C600 103 750 73 825 58L900 43L900 201L825 201C750 201 600 201 450 201C300 201 150 201 75 201L0 201Z" fill="#181444" stroke-linecap="round" stroke-linejoin="miter"></path>
                </svg>
            </div> */}
            <div class="wrapper py-5 z-20 relative bg-[#F3F3F3] rounded-3xl p-10">

                <div class="flex flex-row justify-between items-center ">
                    <ul class="text-white flex flex-row gap-5 ">
                        {/* <li>CARD</li> */}
                        <li><a href="/frequently-asked-questions">FAQ</a></li>
                        <li><a href="https://welcome.quickpaycrypto.com/quickpaycrypto/affiliate/">BECOME AN AFFILIATE</a></li>
                        <li><a href="/contact">CONTACT</a></li>
                    </ul>

                    
                    <div class="socials flex flex-row gap-3 ">
                 
                    </div>
                </div>

                <hr class="mt-20 mb-20"/>

                <div class="flex flex-row justify-between">
                    <div class="text-white">© 2025 40Love. All rights reserved.</div>
                    {/* <Image 
                        priority
                        alt="quickpay crypto logo"
                        height={25}
                    /> */}
                    <ul class="text-white flex flex-row gap-5">
                        <a href="/terms-and-conditions"><li>Terms of Service</li></a>
                        <a href="/privacy-policy"><li>Privacy Policy</li></a>
                    </ul>
                </div>

            </div>

        </div>
    );
}