import Layout from "@/components/Layout"
import Posts from "@/components/Posts"
import { getPosts, Post } from "@/sanity-queries/getPost"
import { InferGetStaticPropsType, GetStaticProps } from "next"

const WritingPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <Layout animateChildren={false}>
      <Posts posts={props.posts} />
      <div></div>
    </Layout>
  )
}

type WritingPageStaticProps = GetStaticProps<{
  posts: Post[]
}>

export const getStaticProps: WritingPageStaticProps = async (context) => {
  const posts = await getPosts()

  return {
    props: {
      posts
    }
  }
}

export default WritingPage
