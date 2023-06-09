import Head from 'next/head'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Bio from '@/components/Bio'
import SankeyChart from '@/components/sankey-diagram/SankeyChart'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import getSankeyData from '@/sanity-queries/getSankeyData'
import { SankeyData } from '@/components/sankey-diagram/Sankey'
import { useEffect, useState } from 'react'
import getMe from '@/sanity-queries/getMe'
import FeaturedPosts from '@/components/FeaturedPosts'
import getFeaturedPosts from '@/sanity-queries/getFeaturedPosts'
import { Post } from '@/sanity-queries/getPost'

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {

  const [sankeyData, setSankeyData] = useState<SankeyData | undefined>(undefined)

  useEffect(() => {
    setSankeyData(props.sankeyData)
  }, [props.sankeyData])

  return (
    <>
      <Head>
        <title>Tim Denning</title>
        <meta name="description" content="Portfolio Website for Tim Denning" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`h-screen`}>
        <Layout>
          <Hero data={props.me} />
          <Bio data={props.me} />
          {sankeyData &&
            <SankeyChart data={sankeyData} width={600} height={1000} />
          }
          <FeaturedPosts posts={props.featuredPosts} />
        </Layout>
      </main>
    </>
  )
}

type HomePageStaticProps = GetStaticProps<{
  sankeyData: SankeyData,
  me: Sanity.Default.Schema.Me
  featuredPosts: Post[]
}>

export const getStaticProps: HomePageStaticProps = async (context) => {
  const sankeyData: SankeyData = await getSankeyData()
  const me = await getMe()
  const featuredPosts = await getFeaturedPosts()

  return {
    props: { sankeyData, me, featuredPosts }
  }
}
