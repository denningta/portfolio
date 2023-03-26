import client from "@/lib/sanity-client"


const getMe = async (): Promise<Sanity.Default.Schema.Me> => {
  try {
    const res = await client.fetch(`
      *[_type == 'me'][0]
    `)

    return res

  } catch (e: any) {
    console.log(e)
  }


}

export default getMe
