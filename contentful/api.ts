import { createClient } from 'contentful'
import type { BlogPost, BlogPostEntry } from '../types/post'

const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACEID ?? '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
})

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const entries = await contentfulClient.getEntries<BlogPostEntry>()
    if (entries) {
      return entries.items.map(v => ({
        id: v.sys.id,
        title: v.fields.title,
        content: v.fields.content,
        tags: v.fields.tags.split(','),
      }))
    }
  } catch (err) {
    console.error(err)
  }
  return [] as BlogPost[]
}

export const fetchPost = async (id: string): Promise<BlogPost | null> => {
  try {
    const entryItem = await contentfulClient.getEntry<BlogPostEntry>(id)
    if (entryItem) {
      return {
        id: entryItem.sys.id,
        title: entryItem.fields.title,
        content: entryItem.fields.content,
        tags: entryItem.fields.tags.split(','),
      }
    }
  } catch (err) {
    console.error(err)
  }
  return null
}
