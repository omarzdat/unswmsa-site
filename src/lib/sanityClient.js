import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: '7m1h34w2', // You can find this in sanity.json
    dataset: 'production',
    useCdn: false, // Set to `false` for real-time data
    apiVersion: '2025-03-01', // Use a UTC date string
})


// Set up the image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}