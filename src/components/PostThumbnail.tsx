import { urlFor } from "@/lib/sanity-client"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import Link from "next/link"
import Image from "next/image"
import { Post } from "@/sanity-queries/getPost"

export interface PostThumbnailProps {
  post: Post
}

const PostThumbnail = ({ post }: PostThumbnailProps) => {
  return (
    <>
      {post &&
        <Link href={`writing/${post.slug?.current}`} className="w-full">
          <div className="relative w-full aspect-video overflow-hidden rounded border dark:border-neutral-700 border-neutral-300">
            <Image
              src={urlFor(post.mainImage as SanityImageSource).url()}
              alt={'Profile photo'}
              fill={true}
              sizes={'33vw'}
              priority={true}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="text-center mt-3">
            {post.title}
          </div>
        </Link>
      }
    </>
  )
}

export default PostThumbnail
