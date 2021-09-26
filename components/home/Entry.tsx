import React from 'react'
import { Box, Text, useColorModeValue, Tag } from '@chakra-ui/react'
import Link from 'next/link'
import removeMd from 'remove-markdown'

const mdContentOutset = (content: string): string => {
    return removeMd(content).slice(0, 150)  + "..."
}

const Entry: React.VFC<{
  id: string
  title: string
  content: string
  tags: string[]
}> = ({ id, title, content, tags }) => {
  return (
    <Box
      w={700}
      paddingX={8}
      paddingY={6}
      border={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      borderRadius={6}
      marginBottom={4}
    >
      <Text fontSize={20} fontWeight={'bold'}>
        <Link href={`/post/${id}`}>{title}</Link>
      </Text>
      <Text paddingY={4}>{mdContentOutset(content)}</Text>
      {tags.map((v, i) => (
        <Tag key={i} marginRight={2}>
          {v}
        </Tag>
      ))}
    </Box>
  )
}

export default Entry
