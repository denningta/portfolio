import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: 'j7795n6l',
  dataset: 'production',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2023-03-18', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

const imageBuilder = imageUrlBuilder(client)

export const urlFor: typeof imageBuilder.image = (source) => {
  return imageBuilder.image(source)
}

export default client
