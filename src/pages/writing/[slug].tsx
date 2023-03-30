import Layout from "@/components/Layout"
import Post from "@/components/Post"
import getPost from "@/sanity-queries/getPost"
import getPostPaths from "@/sanity-queries/getPostPaths"
import { GetStaticProps, InferGetStaticPropsType } from "next"

const PostPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(props)

  return (
    <Layout>
      <Post post={props.post} />
      <div></div>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const paths = await getPostPaths()
  console.log(paths)
  return {
    paths: paths,
    fallback: false
  }
}

type PostPageStaticProps = GetStaticProps<{
  post: Sanity.Default.Schema.Post
}>

export const getStaticProps: PostPageStaticProps = async (context) => {
  const post = context.params && await getPost(context.params.slug as string)

  return {
    props: {
      post
    }
  }
}

export default PostPage
