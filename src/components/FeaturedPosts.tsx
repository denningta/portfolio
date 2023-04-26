import { Post } from "@/sanity-queries/getPost"
import Heading from "./Heading"
import PostThumbnail from "./PostThumbnail"

export interface FeaturedPostsProps {
  posts: Post[]
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <>
      <Heading>Writing</Heading>
      <div className="grid grid-cols-2 gap-6 justify-items-center mt-6">
        {posts && posts.map((post, i) =>
          post && i <= 1 &&
          <PostThumbnail post={post} key={`post-${i}`} />
        )}
      </div>
    </>
  )
}

export default FeaturedPosts
