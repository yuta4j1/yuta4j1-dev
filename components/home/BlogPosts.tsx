import React from 'react'
import { Box } from '@chakra-ui/react'
import Entry from './Entry'
import { BlogPost } from '../../types/post'

const BlogPosts: React.VFC<{ posts: BlogPost[] }> = ({ posts }) => {
  return (
    <Box>
      {posts.map((v, i) => (
        <Entry key={i} {...v} />
      ))}
    </Box>
  )
}

export default BlogPosts
