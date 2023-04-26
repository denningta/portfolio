import { PortableText } from "@portabletext/react"
import Heading from "./Heading"

export interface BioProps {
  data: Sanity.Default.Schema.Me
}

const Bio = ({ data }: BioProps) => {
  return (
    <div>
      <Heading>Bio</Heading>

      {data && data.bio &&
        <div>
          <PortableText value={data.bio} />
        </div>
      }
    </div>
  )
}

export default Bio
