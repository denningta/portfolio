import AuthorComponent, { Author } from "@/components/Author"
import Layout from "@/components/Layout"

const author: Author = {
  name: 'Tim Denning',
  image: 'test'
}

const Article = () => {
  return (
    <Layout>
      <div className="text-3xl font-extrabold">Article Title</div>
    </Layout>
  )
}

export default Article
