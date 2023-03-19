import client from '../lib/sanity-client'

client.fetch(`
  {
    "nodes": *[_type in ["employment", "project", "skill"]] {
      "name": title,
      "id": slug.current
    },
    "linksData": *[_type in ["employment", "project"]] {
      "links": references[] | {
        "source": ^.slug.current,
        "value": percent,
        ^._type == "employment" => {
          "target": project->slug.current,
        },
        ^._type == "project" => {
          "target": skill->slug.current
        },
      }
    }
  } | {
    "links": linksData[].links[],
    "nodes": nodes
  }
`)
