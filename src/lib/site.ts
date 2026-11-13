export const SITE = {
  name: 'ADK Softech',
  tagline: 'Software that moves business forward.',
  description:
    'ADK Softech builds software, AI solutions and engineering teams for businesses — from product engineering and cloud to application support and IT staffing.',
  url: 'https://adksoftech.com',
  email: 'contact@snypartech.com',
  addressLines: [
    '3U Unit, 3rd Floor, Dwaraka Pride',
    'Plot No.4/1, Survey No.64',
    'Huda Techno Enclave, Madhapur, HITEC City',
    'Hyderabad, Telangana - 500081',
    'India',
  ],
}

export const ADDRESS = SITE.addressLines.join(', ')
export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`
export const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

export type Service = { id: string; title: string; summary: string; points: string[] }

export const SERVICES: Service[] = [
  {
    id: 'consulting',
    title: 'Technology Consulting & Architecture',
    summary: 'Requirements, roadmaps, solution architecture and modernisation planning grounded in business needs.',
    points: ['Requirements and feasibility analysis', 'Solution architecture reviews', 'Product and technology roadmaps', 'Cloud and integration planning'],
  },
  {
    id: 'product-engineering',
    title: 'Software & Product Engineering',
    summary: 'Web and mobile applications, backend services and APIs, taken from design through delivery.',
    points: ['Web apps, dashboards and portals', 'Mobile applications', 'Backend services and APIs', 'Quality engineering and release support'],
  },
  {
    id: 'ai',
    title: 'AI Engineering & Automation',
    summary: 'Generative AI, RAG, agents, voice AI and automation connected to real business workflows.',
    points: ['LLM and RAG applications', 'Agentic and voice AI', 'Computer vision pipelines', 'Workflow and process automation'],
  },
  {
    id: 'enterprise',
    title: 'Enterprise Applications & Integration',
    summary: 'Connect applications, data and enterprise platforms through maintainable integration layers.',
    points: ['API and event-driven integration', 'SAP and ServiceNow integration', 'Identity and SSO integration', 'Data synchronisation'],
  },
  {
    id: 'cloud',
    title: 'Cloud, DevOps & Platform Engineering',
    summary: 'Cloud infrastructure, pipelines, containers and monitoring for dependable operations.',
    points: ['AWS and Azure environments', 'CI/CD and containerisation', 'Kubernetes and observability', 'MLOps for AI workloads'],
  },
  {
    id: 'support',
    title: 'Application Maintenance & Modernisation',
    summary: 'Keep applications running and evolving through fixes, upgrades and ongoing support.',
    points: ['Production support and monitoring', 'Upgrades and performance tuning', 'Legacy modernisation', 'Documentation and handover'],
  },
  {
    id: 'staffing',
    title: 'IT Staffing & Recruitment',
    summary: 'Contract staffing, permanent hiring and staff augmentation to strengthen technical teams.',
    points: ['Contract and permanent hiring', 'Contract-to-hire', 'Staff augmentation', 'Technical screening'],
  },
]

export const PROCESS = [
  { n: '01', title: 'Discover', text: 'We learn your goals, users and constraints before any code is planned.' },
  { n: '02', title: 'Design', text: 'Architecture and interface decisions, agreed with you and written down.' },
  { n: '03', title: 'Build', text: 'Short iterations, working software at every step, tested as we go.' },
  { n: '04', title: 'Support', text: 'Launch, monitor and keep improving long after release.' },
]

export const INDUSTRIES = ['HR & Recruitment', 'IT Operations', 'Contact Centres', 'E-commerce & Retail', 'FinTech', 'Enterprise ERP / SAP']

export const STACK = [
  'Python', 'FastAPI', 'Django', 'React', 'Next.js', 'Node.js', 'Go', 'AWS', 'Azure', 'Kubernetes', 'Docker',
  'Kafka', 'PostgreSQL', 'LLMs', 'RAG', 'n8n', 'SAP', 'ServiceNow',
]
