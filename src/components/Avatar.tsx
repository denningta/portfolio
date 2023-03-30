import Image from "next/image"
import { urlFor } from "@/lib/sanity-client"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

export interface AvatarProps {
  image: SanityImageSource
  width: number
  height: number
}
const Avatar = ({ image, width, height }: AvatarProps) => {

  return (
    <div
      style={{
        height: height,
        width: width
      }}
      className={`
        p-[4px] rounded-full transition ease-in-out
        bg-gradient-to-b from-white via-neutral-100 to-neutral-400
        dark:bg-gradient-to-b dark:from-neutral-600 dark:via-neutral-900 dark:to-black
        shadow
    `}
    >
      <div className="w-full h-full bg-neutral-100 dark:bg-neutral-900 rounded-full transition ease-in-out">
        <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-sky-100 to-blue-500 dark:from-sky-500 dark:to-blue-700 transition ease-in-out">
          <Image
            src={urlFor(image).url()}
            alt={'Profile photo'}
            fill={true}
            sizes={'33vw'}
            priority={true}
          ></Image>
        </div>
      </div>
    </div>

  )
}

export default Avatar
