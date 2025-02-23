'use client'

import { useEffect, useState } from "react";

export default function CTA2() {

    return (
        <div>
            <div className="wrapper relative flex flex-row justify-center">
                <img className="absolute h-[80px] right-[10%] top-[45%]" src="/download-appstore.png" />
                <img className="absolute h-[80px] left-[10%] top-[45%]"  src="/download-playstore.png" />
                <img className="absolute h-[150%]  -translate-x-[25%]"  src="/CTA/android.png" />
                <img className="absolute h-[150%] translate-x-[25%]"  src="/CTA/ios.png" />
                <img className="w-[70%] mx-auto bottom-0" src="/CTA/cta-bg-pattern.png" />

            </div>
        </div>
    )

}