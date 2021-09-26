import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import Article from '../../components/post/Article'
import { fetchBlogPosts, fetchPost } from '../../contentful/api'
import { ParsedUrlQuery } from 'node:querystring'

interface PostProps {
  id?: string
  title?: string
  content?: string
}

const Post: NextPage<PostProps> = ({ id, title, content }) => {
  if (!id || !title || !content) {
    return <div>コンテンツは存在しません。</div>
  }

  return (
    <Box>
      <Spacer h={10} />
      <Flex justify={'center'}>
        <Article mdText={content} title={title} />
      </Flex>
    </Box>
  )
}

interface PostParams extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async ({
  params,
}) => {
  const id = params?.id
  if (id) {
    const entry = await fetchPost(id)
    return {
      props: {
        id,
        title: entry?.title,
        content: entry?.content,
      },
    }
  }

  return {
    props: {
      id: undefined,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const entries = await fetchBlogPosts()
  const paths = entries.map(v => {
    return {
      params: {
        id: v.id,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export default Post
