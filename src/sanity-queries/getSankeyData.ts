import client from '../lib/sanity-client'

const getSankeyData = async () => {
  try {
    const response = await client.fetch(`
      {
        "nodes": *[_type in ["employment", "project", "skill"]] {
          "name": title,
          "id": slug.current
        },
        "linkData": *[_type == "employment"] {
          "links": references[] {
            "source": ^.slug.current,
            "target": project->slug.current,
            "value": ^.years * (percent / 100),
          },
          "subLinks": references[] {
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
        "nodes": nodes,
        "links": linkData[].links[] + linkData[].subLinks[].links[],
      }
    `)

    return response

  } catch (error: any) {
    console.log(error)
  }
}

export default getSankeyData
