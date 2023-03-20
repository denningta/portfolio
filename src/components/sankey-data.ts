import { SankeyData } from './Sankey'
const data: SankeyData = {
  nodes: [
    { name: 'Facture', id: 'facture' },
    { name: 'Colorado Water Export', id: 'colorado-water-export' },
    { name: 'Zeiss PiWeb Implementation', id: 'piweb-project' },
    { name: 'Prototype to Production Machining', id: 'production-machining' },
    { name: 'Quality Management System Integration', id: 'qms' },
    { name: 'USMC Company Commander', id: 'usmc-cdr' },
    { name: 'USMC Project Manager', id: 'usmc-project-manager' },
    { name: 'Home Lab', id: 'home-lab' },
    { name: 'Self Employed', id: 'self-employed' },
    { name: 'Lockheed Martin', id: 'lockheed-martin' },
    { name: 'United States Marine Corps', id: 'usmc' },
    { name: 'Typescript', id: 'typescript' },
    { name: 'NodeJS', id: 'nodejs' },
    { name: 'NextJS', id: 'nextjs' },
    { name: 'React', id: 'react' },
    { name: 'Fauna', id: 'fauna' },
    { name: 'Test Driven Development', id: 'tdd' },
    { name: 'Docker', id: 'docker' },
    { name: 'Language Server Protocol', id: 'lsp' },
    { name: 'Tableau', id: 'tableau' },
    { name: 'Zeiss PiWeb', id: 'zeiss-skill' },
    { name: 'SAP', id: 'sap' },
    { name: 'Manufacturing Engineering', id: 'manufacturing-engineering' },
    { name: 'Quality Engineering', id: 'quality-engineering' },
    { name: 'Leadership and Management', id: 'leadership' },
    { name: 'United States Naval Academy', id: 'usna' },
    { name: 'BS Mechanical Engineering', id: 'meche' }
  ],
  links: [
    { source: 'facture', target: 'typescript', value: 1 },
    { source: 'qms', target: 'leadership', value: 2 },
  ]
}

export default data
