import React from "react";
import Button from "./Button";
import Image from "next/image"
import { urlFor } from "../lib/sanity-client"
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Avatar from "./Avatar";

export interface HeroProps {
  data: Sanity.Default.Schema.Me
}

const Hero = ({ data }: HeroProps) => {

  return (
    <>
      {data &&
        <div className="flex items-center">
          <div className="flex justify-end mr-6">
            <Avatar image={data.photo as SanityImageSource} width={160} height={160} />
          </div>

          <div className="flex flex-col">
            <div className="text-3xl mr-6 font-extrabold">
              {data.name}
            </div>
            <div className="flex font-light">
              Software Engineer | Manufacturing Technologist | Mechanical Engineer
            </div>
            <div className="mt-6">
              <Button title="Contact me" />
            </div>
          </div>

        </div>
      }
    </>
  )
}

export default Hero
