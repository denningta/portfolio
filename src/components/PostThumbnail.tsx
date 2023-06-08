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
              src={urlFor(post.mainImage as SanityImageSource).width(600 * 2).height(400 * 2).url()}
              alt={'Profile photo'}
              priority={true}
              width={600}
              height={400}
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
