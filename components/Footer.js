import React from "react";
import Image from 'next/image';
import Logo from '../public/ASSETS/quickpaycrypto-logo.svg';
import LogoLight from '../public/ASSETS/quickpaycrypto-logo-light.svg';

export default function Footer () {

    return (
        <div class="footer pt-10 z-30 relative">
            {/* <div className="absolute -top-20 xl:-top-72 z-10 w-[100vw]">

                <svg id="visual" viewBox="0 0 900 200" width="100%" height="100%" >
                        <path d="M0 43L75 58C150 73 300 103 450 103C600 103 750 73 825 58L900 43L900 201L825 201C750 201 600 201 450 201C300 201 150 201 75 201L0 201Z" fill="#181444" stroke-linecap="round" stroke-linejoin="miter"></path>
                </svg>
            </div> */}
            <div class="wrapper py-5 z-20 relative">

                <div class="flex flex-row justify-between items-center ">
                    <ul class="text-white flex flex-row gap-5 ">
                        {/* <li>CARD</li> */}
                        <li><a href="/frequently-asked-questions">FAQ</a></li>
                        <li><a href="https://welcome.quickpaycrypto.com/quickpaycrypto/affiliate/">BECOME AN AFFILIATE</a></li>
                        <li><a href="/contact">CONTACT</a></li>
                    </ul>

                    
                    <div class="socials flex flex-row gap-3 ">
                        {/* <a href="#" target="_blank">
                            <img src="./footer/ri_facebook-fill.png" class="grayscale hover:grayscale-0 duration-500"/>
                        </a> */}
                        <a href="https://www.x.com/quickpaycrypto" target="_blank">

                            <img src="./footer/mdi_twitter.png" class="grayscale hover:grayscale-0 duration-500"/>
                        </a>
                        <a href="https://www.instagram.com/qpccard?igsh=em9jOGNyaDNnOXhs" target="_blank">
                        <img src="./footer/ri_instagram-fill.png" class="grayscale hover:grayscale-0 duration-500"/>
                        </a>
                        <a href="https://www.tiktok.com/@quickpaycrypto?_t=ZT-8rkbpaNi759&_r=1" target="_blank">
                        <img src="./footer/tik-tok.png" class="grayscale hover:grayscale-0 duration-500"/>
                        </a>
                        {/* <a href="#" target="_blank">
                        <img src="./footer/mdi_youtube.png" class="grayscale hover:grayscale-0 duration-500"/>
                        </a> */}
                    </div>
                </div>

                <hr class="mt-20 mb-20"/>

                <div class="flex flex-row justify-between">
                    <div class="text-white">© 2024 QuickPayCrypto. All rights reserved.</div>
                    <Image 
                        priority
                        src={LogoLight}
                        alt="quickpay crypto logo"
                        height={25}
                    />
                    <ul class="text-white flex flex-row gap-5">
                        <a href="/terms-and-conditions"><li>Terms of Service</li></a>
                        <a href="/privacy-policy"><li>Privacy Policy</li></a>
                    </ul>
                </div>
            </div>
        </div>
    );
}