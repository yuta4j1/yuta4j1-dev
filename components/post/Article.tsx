import React from 'react'
import { Box, Text, Heading, Code, useColorModeValue } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { twilight } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import gfm from 'remark-gfm'

const Article: React.VFC<{ title: string; mdText: string }> = ({
  title,
  mdText,
}) => {
  return (
    <Box>
      <Text fontWeight={'bold'} fontSize={24} paddingY={2}>
        {title}
      </Text>
      <Box
        paddingX={12}
        paddingY={8}
        w={900}
        backgroundColor={'#FFFFFF'}
        borderRadius={4}
      >
        <ReactMarkdown
          children={mdText}
          plugins={[gfm]}
          components={{
            h1: ({ node, ...props }) => (
              <Heading
                as={'h1'}
                paddingY={3}
                fontSize={'3xl'}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.300', 'gray.700')}
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              <Heading
                as={'h2'}
                paddingY={3}
                fontSize={'2xl'}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.300', 'gray.700')}
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <Heading as={'h3'} paddingY={3} fontSize={'xl'} {...props} />
            ),
            p: ({ node, ...props }) => <Text paddingY={2} {...props} />,
            code: ({ node, inline, className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={twilight}
                  language={match[1]}
                  children={String(children).replace(/\n$/, '')}
                  {...props}
                />
              ) : (
                <Code p={2} className={className} {...props}>
                  {children}
                </Code>
              )
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default Article
