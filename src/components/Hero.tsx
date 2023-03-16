import React from "react";


const Hero = () => {
    return (
        <div className="flex items-center">
            <div className="flex justify-end mr-6">
                <div 
                    className={`
                        h-[100px] w-[100px] p-[2px] rounded-full transition ease-in-out
                        bg-gradient-to-b from-white via-neutral-100 to-neutral-400
                        dark:bg-gradient-to-b dark:from-neutral-600 dark:via-neutral-900 dark:to-black
                        shadow
                    `}
                >
                    <div className="w-full h-full p-1 bg-neutral-100 dark:bg-neutral-900 rounded-full transition ease-in-out">
                    </div>
               </div> 
            </div>

            <div className="flex flex-col">
                <div className="text-3xl mr-6">
                    Tim Denning
                </div>
                <div className="flex font-light text-sm">
                    Software Engineer | Manufacturing Technologist | Mechanical Engineer
                </div>
            </div>
        </div>
    )
}

export default Hero
