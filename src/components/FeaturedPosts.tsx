import { urlFor } from "@/lib/sanity-client"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import Image from "next/image"
import Link from "next/link"

export interface FeaturedPostsProps {
  posts: Sanity.Default.Schema.Post[]
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <div className="grid grid-cols-2 gap-6 justify-items-center">
      {posts && posts.map((post, i) =>
        post &&
        <Link key={`post-${i}`} href={`writing/${post.slug?.current}`} className="w-full">
          <div className="relative w-full aspect-video overflow-hidden rounded border dark:border-neutral-700 border-neutral-300">
            <Image
              src={urlFor(post.mainImage as SanityImageSource).url()}
              alt={'Profile photo'}
              fill={true}
              sizes={'33vw'}
              priority={true}
              style={{ objectFit: 'cover' }}
            ></Image>
          </div>
          <div className="text-center mt-3">
            {post.title}
          </div>
        </Link>
      )}
    </div>
  )
}

export default FeaturedPosts
