import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Bio from '@/components/Bio'
import Skills from '@/components/Skills'
import SankeyChart from '@/components/SankeyChart'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import getSankeyData from '@/sanity-queries/getSankeyData'
import { SankeyData } from '@/components/Sankey'
import testData from '../components/sankey-data'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {

  const [data, setData] = useState<SankeyData | undefined>(undefined)

  useEffect(() => {
    setData(props.data)
  }, [props.data])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`h-screen`}>
        <Layout>
          <Hero />
          <Bio />
          <SankeyChart data={data} width={600} height={800} />
          <Skills />
        </Layout>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<{ data: SankeyData }> = async (context) => {
  const sankeyData: SankeyData = await getSankeyData()

  return {
    props: { data: sankeyData }
  }
}
