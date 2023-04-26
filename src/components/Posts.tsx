import { Category } from "@/sanity-queries/getCategories"
import { Post } from "@/sanity-queries/getPost"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import PostsFilter from "./PostsFilter"
import PostThumbnail from "./PostThumbnail"

export interface PostsProps {
  posts: Post[]
  categories: Category[]
}

const Posts = ({ posts, categories }: PostsProps) => {
  const router = useRouter()
  const [filters, setFilters] = useState({})

  useEffect(() => {
    setFilters(router.query)
  })

  return (
    <>

      <div className="mt-6">
        <div className="grid grid-cols-2 gap-6 mt-6 mb-6">
          {posts && posts.map((post, i) =>
            <motion.div
              key={`child-${i}`}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
            >
              <PostThumbnail post={post} />
            </motion.div>
          )}
        </div>
      </div>
    </>

  )
}

export default Posts
