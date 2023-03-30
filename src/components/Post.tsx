import { PortableText } from "@portabletext/react"
import Author from "./Author"
import Code from "./Code"
import InlineImage from "./InlineImage"

export interface PostProps {
  post: Sanity.Default.Schema.Post
}
const Post = ({ post }: PostProps) => {
  console.log(post)

  return (
    <div>
      {post &&
        <>
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
