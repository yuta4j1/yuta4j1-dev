import type { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BlogPosts from '../components/home/BlogPosts'
import { fetchBlogPosts } from '../contentful/api'
import { Flex, Spacer } from '@chakra-ui/react'
import { BlogPost } from '../types/post'

interface HomeProps {
  posts: BlogPost[]
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Spacer h={20} />
      <Flex justify={'center'}>
        <BlogPosts posts={posts} />
      </Flex>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const entries = await fetchBlogPosts()
  return {
    props: {
      posts: entries,
    },
  }
}

export default Home
