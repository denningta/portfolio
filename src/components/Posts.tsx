import { Post } from "@/sanity-queries/getPost"
import { motion } from "framer-motion"
import PostThumbnail from "./PostThumbnail"

export interface PostsProps {
  posts: Post[]
}

const Posts = ({ posts }: PostsProps) => {
  console.log(posts)

  return (
    <div>
      <div className="text-3xl font-extrabold w-full text-center">
        Writing
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6 mb-6">
        {posts && posts.map((post, i) =>
          <motion.div
            key={`child-${i}`}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
          >
            <PostThumbnail key={`post-${i}`} post={post} />
          </motion.div>
        )}

      </div>
    </div>

  )
}

export default Posts
