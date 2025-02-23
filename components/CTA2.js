'use client'

import { useEffect, useState } from "react";

export default function CTA2() {

    return (
        <div className="mt-44 xl:mt-20">
            <div className="wrapper 
            min-h-[300px]
            xl:min-h-auto
            relative flex flex-row justify-center ">

                <img className="absolute 
                    h-[40px] -top-[50px] -translate-x-[60%]

                    xl:-translate-x-0 xl:h-[80px] xl:right-[10%] xl:top-[45%]" src="/download-appstore.png" />

                <img className="absolute
                    h-[40px] -top-[50px] translate-x-[60%]
                    xl:translate-x-0 xl:h-[80px] xl:left-[10%] xl:top-[45%]"  src="/download-playstore.png" />

                <img className="absolute
                    h-[150%] z-10
                    xl:h-[150%]  -translate-x-[25%]"  src="/CTA/android.png" />

                <img className="absolute
                    h-[150%] z-10
                    xl:h-[150%] translate-x-[25%]"  src="/CTA/ios.png" />

                <img className="
                    scale-150 w-[100%] 
                    xl:w-[70%] xl:scale-100
                    mx-auto bottom-0" src="/CTA/cta-bg-pattern.png" />

            </div>
        </div>
    )

}