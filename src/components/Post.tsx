import { urlFor } from "@/lib/sanity-client"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Author from "./Author"
import Code from "./Code"
import InlineImage from "./InlineImage"

export interface PostProps {
  post: Sanity.Default.Schema.Post
}

const Post = ({ post }: PostProps) => {

  return (
    <div>
      {post &&
        <>
          {post.mainImage &&
            <div className="relative flex justify-center w-full h-[200px] mb-10">
              <Image
                src={urlFor(post.mainImage).width(800 * 2).height(200 * 2).url()}
                alt="Post main image"
                width={800}
                height={200}
                className="object-cover rounded border border-neutral-500"
              />
            </div>
          }
          <div className="text-3xl font-extrabold">
            {post.title}
          </div>
          <Author author={post.author as Sanity.Default.Schema.Author} publishedAt={post.publishedAt ?? ''} estimatedReadingTime={10} />
          <div className="portable-text">
            <PortableText value={post.body as Sanity.Block[]} components={{ types: { image: InlineImage, inlineCode: Code } }} />
          </div>
        </>
      }
    </div>
  )
}

export default Post
