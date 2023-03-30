import client from "@/lib/sanity-client"

const getFeaturedPosts = async (): Promise<Sanity.Default.Schema.Post[]> => {
  try {
    const res = await client.fetch(`
      *[_type == 'post' && featured == true]
    `)

    console.log(res)
    return res

  } catch (e: any) {
    console.log(e)
    return e
  }


}

export default getFeaturedPosts
