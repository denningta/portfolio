import client from "@/lib/sanity-client"

export type Post = Sanity.Default.Schema.Post


const getPost = async (slug: string) => {
  try {
    const res = await client.fetch(`
      *[_type == 'post' && slug.current == $slug][0] {
        ...,
        author->,
        body[]{
          ...,
          _type == "image" => {
            ...,
            asset->
          }
        },
      }
    `, { slug: slug })
    return res

  } catch (e: any) {
    return e
  }
}

export default getPost
