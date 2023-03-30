import Layout from "@/components/Layout"
import { InferGetStaticPropsType, GetStaticProps } from "next"
import Post from "../../../sanity/schemas/post"

const WritingPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(props)

  return (
    <Layout>
      <div></div>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  return {
  }
}

type WritingPageStaticProps = GetStaticProps<{
}>

export const getStaticProps: WritingPageStaticProps = async (context) => {

  return {
    props: {
    }
  }
}

export default WritingPage
