import client from "@/lib/sanity-client"

export interface Category {
  title: string
}

const getCategories = async () => {
  try {
    const res = await client.fetch(`
      *[_type == 'category']{
        title
      }
    `)

    return res

  } catch (e: any) {
    return e
  }
}


export default getCategories

