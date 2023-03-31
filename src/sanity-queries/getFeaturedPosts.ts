import client from "@/lib/sanity-client"
import { Post } from "./getPost"

const getFeaturedPosts = async (): Promise<Post[]> => {
  try {
    const res = await client.fetch(`
      *[_type == 'post' && featured == true]
    `)

    return res

  } catch (e: any) {
    return e
  }


}

export default getFeaturedPosts
