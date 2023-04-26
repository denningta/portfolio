import Layout from "@/components/Layout"
import Posts from "@/components/Posts"
import getCategories, { Category } from "@/sanity-queries/getCategories"
import { getPosts, Post } from "@/sanity-queries/getPost"
import { InferGetStaticPropsType, GetStaticProps } from "next"

const ProjectsPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <Layout animateChildren={false}>
      <div className="text-3xl font-extrabold w-full text-center">
        Projects
      </div>
      <Posts posts={props.posts} categories={props.categories} />
      <div></div>
    </Layout>
  )
}

type WritingPageStaticProps = GetStaticProps<{
  posts: Post[]
  categories: Category[]
}>

export const getStaticProps: WritingPageStaticProps = async (context) => {
  const posts = await getPosts(['project'])
  const categories = await getCategories()

  return {
    props: {
      posts,
      categories
    }
  }
}

export default ProjectsPage
