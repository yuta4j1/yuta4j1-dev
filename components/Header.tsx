import React from 'react'
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'

const Header = () => {
  return (
    <Box
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
    >
      <Flex>
        <Box p={4} w={60}>
          <Text fontSize={'19'} paddingX={4} fontWeight={'bold'}>
            <Link href={'/'}>yuta4j1.dev</Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
