import client from "@/lib/sanity-client"

export interface PostPath {
  params: {
    slug: string
  }
}

const getPostPaths = async (): Promise<PostPath[]> => {
  try {
    const res = await client.fetch(`
      *[_type == 'post'] {
        "params": {
          "slug": slug.current
        }
      }
    `)

    return res

  } catch (e: any) {
    return e
  }
}

export default getPostPaths
