import { tailwindColors } from "@/lib/tailwind-config"
import { useContext } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { darcula, docco, nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs"
import { DarkModeContext } from "./DarkModeContext"

export interface CodeProps {
  index: number
  isInline: boolean
  value: {
    code: string
    language: string
    _key: string
    _type: string
  }
}

const Code = ({ value, index, isInline }: CodeProps) => {
  const darkMode = useContext(DarkModeContext)

  return (
    <div className="mt-4 ronded-lg overflow-hidden border-slate-300">
      <SyntaxHighlighter
        language={value.language}
        style={darkMode ? nightOwl : docco}
        customStyle={{
          borderRadius: '10px',
          padding: '20px',
          border: `1px solid ${darkMode ? tailwindColors.neutral['800'] : tailwindColors.neutral['300']}`
        }}
      >
        {value.code}
      </SyntaxHighlighter>
    </div>
  )

}

export default Code
