import React from "react";
import Button from "./Button";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Avatar from "./Avatar";

export interface HeroProps {
  data: Sanity.Default.Schema.Me
}

const Hero = ({ data }: HeroProps) => {
  console.log(data)

  return (
    <div className="sm:flex sm:justify-center">
      {data &&
        <div className="flex flex-col sm:flex-row items-center">
          <div className="sm:flex sm:justify-end justify-center sm:mr-6 mb-5">
            <Avatar image={data.photo as SanityImageSource} width={160} height={160} />
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-3xl sm:mr-6 font-extrabold">
              {data.name}
            </div>
            <div className="flex flex-col items-center sm:items-start font-light">
              {data.title && data.title.map(el =>
                <div>{el}</div>
              )}
            </div>
            <div className="mt-6">
              <Button title="Contact me" />
            </div>
          </div>

        </div>
      }
    </div>
  )
}

export default Hero
