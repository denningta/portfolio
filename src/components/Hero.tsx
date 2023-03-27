import React from "react";
import Button from "./Button";
import Image from "next/image"
import { urlFor } from "../lib/sanity-client"
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface HeroProps {
  data: Sanity.Default.Schema.Me
}

const Hero = ({ data }: HeroProps) => {

  data && console.log(urlFor(data.photo as SanityImageSource).url())

  return (
    <>
      {data &&
        <div className="flex items-center">
          <div className="flex justify-end mr-6">
            <div
              className={`
                h-[160px] w-[160px] p-[4px] rounded-full transition ease-in-out
                bg-gradient-to-b from-white via-neutral-100 to-neutral-400
                dark:bg-gradient-to-b dark:from-neutral-600 dark:via-neutral-900 dark:to-black
                shadow
            `}
            >
              <div className="w-full h-full bg-neutral-100 dark:bg-neutral-900 rounded-full transition ease-in-out">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-sky-100 to-blue-500 dark:from-sky-500 dark:to-blue-700 transition ease-in-out">
                  <Image
                    src={urlFor(data.photo as SanityImageSource).url()}
                    alt={'Profile photo'}
                    fill={true}
                    sizes={'33vw'}
                    priority={true}
                  ></Image>
                </div>
              </div>
            </div>
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
