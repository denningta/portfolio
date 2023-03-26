import { SankeyData } from '@/components/sankey-diagram/Sankey'
import client from '../lib/sanity-client'

const getSankeyData = async (): Promise<SankeyData> => {
  try {
    const response = await client.fetch(`
      {
        "nodes": 
          *[_type == "sankey"].employment[]-> 
          + *[_type == "sankey"].projects[]-> 
          + *[_type == "sankey"].skills[]->,
        "linkdata": *[_type == "sankey"].employment[]-> {
          "links": references[] {
            "source": ^.slug.current,
            "target": project->slug.current,
            "value": ^.years * (percent / 100),
          },
          "sublinks": references[] {
            "source": project->slug.current,
            "skills": project->references[],
            "value": ^.years * (percent / 100)
          } | {
            "links": skills[] {
              "source": ^.source,
              "target": skill->slug.current,
              "value": ^.value * (percent / 100)
            }
          }
        },
      } | {
        "nodes": nodes[] | {
          "name": title,
          "id": slug.current,
          "color": iconColor
        },
        "links": linkdata[].links[] + linkdata[].sublinks[].links[],
      }
    `)

    return response

  } catch (error: any) {
    console.log(error)
    return error
  }
}

export default getSankeyData
