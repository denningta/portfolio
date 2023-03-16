import { SankeyData } from './Sankey'
const data: SankeyData = {
    nodes: [
        { name: 'Facture' },
        { name: 'Colorado Water Export', },
        { name: 'Zeiss PiWeb Implementation', },
        { name: 'Prototype to Production Machining', },
        { name: 'Quality Management System Integration', },
        { name: 'USMC Company Commander', },
        { name: 'USMC Project Manager', },
        { name: 'Home Lab', },
        { name: 'Self Employed', },
        { name: 'Lockheed Martin', },
        { name: 'United States Marine Corps', },
        { name: 'Typescript', },
        { name: 'NodeJS', },
        { name: 'NextJS', },
        { name: 'React', },
        { name: 'Fauna', },
        { name: 'Test Driven Development', },
        { name: 'Docker', },
        { name: 'Language Server Protocol', },
        { name: 'Tableau', },
        { name: 'Zeiss PiWeb', },
        { name: 'SAP', },
        { name: 'Manufacturing Engineering', },
        { name: 'Quality Engineering', },
        { name: 'Leadership and Management', },
        { name: 'United States Naval Academy' },
        { name: 'BS Mechanical Engineering' } 
    ],
    links: [
        { source: 8, target: 0, value: 1 },
        { source: 8, target: 1, value: 2 },
        { source: 9, target: 2, value: 0.5 },
        { source: 9, target: 3, value: 0.2 },
        { source: 9, target: 3, value: 1 },
        { source: 9, target: 4, value: 0.7 },
        { source: 0, target: 11, value: 1 },
        { source: 1, target: 11, value: 1 },
        { source: 1, target: 12, value: 0.1 },
        { source: 0, target: 12, value: 0.11 },
    ]
}

export default data
