

export default function MatchTracker() {

    return(
        <div className="xl:my-44">
            <div className="wrapper flex flex-col xl:flex-row">

                <div className="flex flex-row justify-center items-center w-full xl:w-1/2">
                    <div className=" relative w-[60%] h-auto rounded-xl">
                        
                        <img 
                            className="absolute w-[15em] xl:w-[20em] rotate-[15deg] right-0 -bottom-[10%] translate-x-[50%]" src="/FEATURES/image-01.1.png"
                        />
                        <img 
                            className="absolute w-[15em] xl:w-[20em] rotate-[-15deg] left-0 bottom-[20%] -translate-x-[70%]" src="/FEATURES/image-01.2.png"
                        />
                        <img src="/FEATURES/image-01.png" className="object-cover" />
                    </div>
                </div>

                <div className="flex flex-col justify-center w-full xl:w-1/2 xl:px-20 px-10 mt-20 xl:mt-0">
                    <div  className="flex flex-row">
                        <div className="bg-40love-primary-900 py-2 px-5 rounded-full font-bold text-white mb-5">
                            40LOVE FEATURE
                        </div>
                    </div>
                    <h3 className="text-5xl font-bold">Never miss a Moment with <br/> our Live Match Tracking</h3>
                    <p className="text-lg mt-5">Track live matches in real-time, with score updates and match <br/> progress at your fingertips.</p>

                    <div className="grid grid-cols-2 mt-10 xl:mr-24 xl:ml-5">

                        <ul className="flex flex-col gap-3">
                            <li> <img className="h-5 inline mr-4" src="/FEATURES/feature-check.png"/>Lorem Ipsum dolor sit amet</li>
                            <li> <img className="h-5 inline mr-4" src="/FEATURES/feature-check.png"/>Lorem Ipsum dolor sit amet</li>
                            <li> <img className="h-5 inline mr-4" src="/FEATURES/feature-check.png"/>Lorem Ipsum dolor sit amet</li>
                        </ul>

                        <ul className="flex flex-col gap-3">
                            <li> <img className="h-5 inline mr-4" src="/FEATURES/feature-check.png"/>Lorem Ipsum dolor sit amet</li>
                            <li> <img className="h-5 inline mr-4" src="/FEATURES/feature-check.png"/>Lorem Ipsum dolor sit amet</li>
                            <li> <img className="h-5 inline mr-4" src="/FEATURES/feature-check.png"/>Lorem Ipsum dolor sit amet</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}