import React from "react"

export interface HeadingProps {
    text: string
}

const Heading = ({ text }: HeadingProps) => {
    return (
        <div className="text-xl w-fit mb-4">
            <div>
                {text}
            </div>
            <div className="h-[1px] bg-black dark:bg-white transition ease-in-out rounded-full"></div>
        </div>
    )
}

export default Heading
