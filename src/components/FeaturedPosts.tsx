import { Post } from "@/sanity-queries/getPost"
import PostThumbnail from "./PostThumbnail"

export interface FeaturedPostsProps {
  posts: Post[]
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <div className="grid grid-cols-2 gap-6 justify-items-center">
      {posts && posts.map((post, i) =>
        post &&
        <PostThumbnail post={post} key={`post-${i}`} />
      )}
    </div>
  )
}

export default FeaturedPosts
