import React, { useState } from "react"
import { SiAngular, SiDocker, SiFauna, SiNextdotjs, SiReact, SiReactivex, SiTsnode, SiTypescript, SiTableau, SiMocha, SiSap } from 'react-icons/si'
import { FaCode } from 'react-icons/fa'
import { TbMathPi } from 'react-icons/tb'
import { IoSettingsSharp } from 'react-icons/io5'
import { BsCheck2Circle, BsPeopleFill } from "react-icons/bs"
import Heading from "./Heading"

const skills = [
  { id: 'ts', icon: SiTypescript, color: '#3178c6', title: 'Typescript' },
  { id: 'nodejs', icon: SiTsnode, color: '#407f37', title: 'NodeJS' },
  { id: 'nextjs', icon: SiNextdotjs, color: '#000000', title: 'NextJS' },
  { id: 'react', icon: SiReact, color: '#61dafb', title: 'React' },
  { id: 'fauna', icon: SiFauna, color: '#3a1ab6', title: 'Fauna' },
  { id: 'tdd', icon: SiMocha, color: '#8c6949', title: 'Test Driven Development' },
  { id: 'docker', icon: SiDocker, color: '#2496ec', title: 'Docker' },
  { id: 'angular', icon: SiAngular, color: '#de0031', title: 'Angular' },
  { id: 'rxjs', icon: SiReactivex, color: '#d81b60', title: 'RXJS' },
  { id: 'lsp', icon: FaCode, color: '#2753e3', title: 'Language Server Protocol' },
  { id: 'tableau', icon: SiTableau, color: '#fcae3c', title: 'Tableau' },
  { id: 'piweb', icon: TbMathPi, color: '#141e8b', title: 'Zeiss PiWeb' },
  { id: 'sap', icon: SiSap, color: '#027db8', title: 'SAP' },
  { id: 'manufacturing', icon: IoSettingsSharp, color: '', title: 'Manufacturing Engineering' },
  { id: 'quality', icon: BsCheck2Circle, color: '', title: 'Quality Engineering' },
  { id: 'leadership', icon: BsPeopleFill, color: '', title: 'Leadership and Management' }
]

const works = [
  {
    title: 'Colorado Water Export',
    description: 'Micro SaaS that digitizes ground water data reporting to the Colorado Department of Water Resources',
    skills: ['ts', 'nodejs', 'nextjs', 'react', 'fanua'],
    dates: ['2020', '2023'],
    company: 'Self Employeed'
  },
  {
    title: 'Facture',
    description: 'Programming language used for creating manufacturing work instructions',
    skills: ['ts', 'nodejs', 'lsp', 'tdd', 'manufacturing'],
    dates: ['2022', '2023'],
    company: 'Self Employeed'
  },
  {
    title: 'PiWeb Implementation',
    description: 'PiWeb is a Quality Data Management System that enables users analyze and and report industrial metrology data',
    skills: ['piweb', 'tableau'],
    dates: ['2021', '2022'],
    company: 'Lockheed Martin Space'
  },
  {
    title: 'Prototype to Production Machining',
    description: 'Led the effort to upgrade to production manufacturing processes including statistical process control, revision controlled work instructions, and a managed feedback-loop.',
    skills: ['quality', 'manufacturing'],
    dates: ['2020', '2022'],
    company: 'Lockheed Martin Space'
  },
  {
    title: 'Custom Quality Management System',
    description: 'Created a custom quality data management system with tableau, SAP, and PTC Windchill',
    skills: ['tableau', 'quality', 'sap', 'leadership'],
    dates: ['2018', '2020'],
    company: 'Lockheed Martin Space'
  },
  {
    title: 'Marine Corps Officer',
    description: 'Achieved rank of Captain and led a company of 90 Marines',
    skills: ['leadership'],
    dates: ['2013', '2018'],
    company: 'United States Marine Corps'
  }

]


const Skills = () => {
  const [activeSkills, setActiveSkills] = useState<string[]>([])

  const handleMouseOverWork = (skills: string[]) => {
    setActiveSkills(skills)
  }

  const handleMouseLeaveWork = () => {
    setActiveSkills([])
  }

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="grow flex flex-col">
          <Heading text="Work" />
          {works.map((work, i) =>
            <div key={`work-${i}`} className="grow">
              <div
                onMouseOver={() => handleMouseOverWork(work.skills)}
                onMouseLeave={handleMouseLeaveWork}
                className="cursor-pointer bg-cyan-500 bg-opacity-25 hover:bg-opacity-90 transition ease-in-out rounded w-fit px-3"
              >
                {work.title}
              </div>
              <div
                className="font-thin text-opacity-70"
              >
                {work.dates[0]} - {work.dates[1]}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex justify-end">
            <Heading text="Skills" />
          </div>
          {skills.map((skill, i) =>
            <div
              className={`
                flex justify-end items-center mb-1 transition ease-in-out 
                ${!activeSkills.includes(skill.id) && activeSkills.length > 0 ? 'opacity-30' : 'opacity-100'} 
              `}
              key={`skill-${i}`}
            >
              {activeSkills.includes(skill.id) &&
                <div className={`mr-2 text-sm `}>
                  {skill.title}
                </div>
              }
              <div className={`transition ease-in-out p-1 dark:bg-white rounded-lg ${activeSkills.includes(skill.id) ? '' : ''}`}>
                {skill.icon({ size: 30, color: skill.color })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Skills
