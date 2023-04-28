import { SankeyData } from '@/components/sankey-diagram/Sankey'
import { IconType } from 'react-icons'
import client from '../lib/sanity-client'

export interface SankeyNodeCustom {
  name: string,
  id: string,
  color: { hex: string, alpha: number },
  shortDesc: string,
  start: string,
  end: string,
  icon: keyof IconType
}

export interface SankeyLinkCustom {
  sourceColor: { hex: string, alpha: number },
  targetColor: { hex: string, alpha: number },
  value: number
}


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
            "sourceColor": ^.color,
            "target": project->slug.current,
            "targetColor": project->color,
            "value": ^.years * (percent / 100),
          },
          "sublinks": references[] {
            "source": project->slug.current,
            "sourceColor": project->color,
            "skills": project->references[],
            "value": ^.years * (percent / 100)
          } | {
            "links": skills[] {
              "source": ^.source,
              "sourceColor": ^.sourceColor,
              "target": skill->slug.current,
              "targetColor": skill->color,
              "value": ^.value * (percent / 100)
            }
          }
        },
      } | {
        "nodes": nodes[] | {
          "name": title,
          "id": slug.current,
          "color": color,
          start,
          end,
          shortDesc,
          icon
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
