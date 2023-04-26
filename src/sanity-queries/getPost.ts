import client from "@/lib/sanity-client"

export type Post = Omit<Exclude<Sanity.Default.Schema.Post, undefined>, "author" | "categories"> & {
  author: Sanity.Default.Schema.Author
  categories: Sanity.Default.Schema.Category[]
} | undefined

const postPipe = `
  {
    ...,
    author->,
    categories[]->,
    body[]{
      ...,
      _type == "image" => {
        ...,
        asset->
      }
    },
  }
`

export const getPost = async (slug: string) => {
  try {
    const res = await client.fetch(`
      *[_type == 'post' && slug.current == $slug][0] ${postPipe}
    `, { slug: slug })
    return res

  } catch (e: any) {
    return e
  }
}


export const getPosts = async (categories: string[]): Promise<Post[]> => {
  try {
    if (!categories) {
      const res = await client.fetch(`
        *[_type == 'post'] ${postPipe} 
      `)
      return res
    }

    const res = await client.fetch(`
      *[_type == "post" && count((categories[]->slug.current)[@ in $categories]) > 0]
    `, { categories: categories })

    return res

  } catch (e: any) {
    return e
  }
}
