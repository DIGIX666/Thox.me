import Link from 'next/link'

interface Position {
  title: string
  period: string
  description: string
  link?: string
  linkText?: string
}

interface Experience {
  title: string
  organization: string
  period: string
  description?: string
  positions?: Position[]
  link?: string
  projectLink?: string
  projectLinkText?: string
  type: 'education' | 'professional'
}

const experiences: Experience[] = [
  {
    title: "Hackathon CapX",
    organization: "CapX",
    period: "December 17 2025 - December 27 2025",
    description: `Hackathon blockchain with AI organized by CapX.
    Our team developed Hivee, a decentralized credit protocol that enables autonomous AI agents to lend and borrow without human intervention. Built on CapX blockchain with ERC-8004 and x402 payment.`,
    link: "https://hackathon.capx.ai/",
    projectLink: "https://github.com/DIGIX666/Hivee",
    type: "professional"
  },     
  {
    title: "Hackathon WCHL",
    organization: "ICP (Internet Computer Protocol)",
    period: "July 2025 - September 2025",
    description: `Hackathon on blockchain organized by ICP (Internet Computer Protocol).
      Our team presented a security solution for transactions against post-quantum attacks.
      . Won the qualifying round
      . Finished 4th in the second phase
      . Qualified for the semifinals`,
    link: "https://wchl25.worldcomputer.com/",
    projectLink: "https://www.qubex-protocol.io/",
    type: "professional"
  },   
  {
    title: "U-Manage",
    organization: "Apprenticeship - Fullstack Web Developer",
    period: "December 2023 - July 2025",
    description: `Apprenticeship as full stack web developer on software enabling efficient risk management, simplified compliance, and real-time tracking of deadlines.
      • Resolved 200 client tickets
      • Deployed 2 client environments
      • Upgraded environments
      • Developed new features within tight deadlines`,
    link: "https://www.u-manage.fr/",
    type: "professional"
  },
  {
    title: "gno.land",
    organization: "gno.land",
    period: "2024 - 2025",
    positions: [
      {
        title: "Grant",
        period: "December 2024 - March 2025",
        description: `Developed a plugin for the Gno language on JetBrains IDE`,
        link: "https://github.com/gnoverse/intellij-gno",
      },
      {
        title: "Grant Explore",
        period: "September 2024 - October 2024",
        description: `Same as for SCP, but with more work on GnoVM and packages/realm`,
        link: "https://github.com/gnolang/hackerspace/issues/84",
      },
      {
        title: "SCP - Student Contributor Program",
        period: "March 2024 - June 2024",
        description: `Developer Relations role focusing on community growth.
        • Created educational content
        • Organized developer workshops
        • Built developer tools and resources`,
        link: "https://github.com/gnolang/hackerspace/issues/84",
      }      
    ],
    link: "https://gno.land",
    type: "professional"
  },
  {
    title: "Hackathon Chiliz",
    organization: "Chiliz",
    period: "11-14 July 2025",
    description: "The proposed concept is a decentralized (dApp) sports engagement application combining free sports betting, fan tokens (“fan tokens”), NFT and customizable 3D avatars. The aim is to innovate by offering new uses for fan tokens that go far beyond traditional governance and rewards, to bring tangible value and authentic interaction to fans and clubs. This all-in-one platform allows fans to betting for free on real events, earn points convertible into official tokens, participate in polls/DAOs, collect exclusive NFTs, while personalizing a virtual avatar in the image of their sporting passion.",
    link: "https://www.chiliz.com/what-is-a-blockchain-hackathon/",
    projectLink: "https://github.com/DIGIX666/Kolise",
    type: "professional"
  }, 
  {
    title: "Hackathon Vierzon",
    organization: "B3 Village by CA Vierzon",
    period: "4-6 October 2024",
    description: `CleanCash is built on the so|cash protocol, which allows financial institutions to perform instant transactions on the blockchain. The project focuses on issuing invoices as NFTs, enabling tracking and payment validation via the blockchain, and managing interbank payments between client and provider accounts.
      • Second place - CACIB / so|cash use case`,
    link: "https://www.sia-partners.com/fr/publications/publications-de-nos-experts/hackathon-blockchain-vierzon",
    projectLink: "https://github.com/DIGIX666/Invoice-CACIB-web3",
    type: "professional"
  },
  {
    title: "Zone01",
    organization: "RNCP 6 - application designer and developer",
    period: "2022 - 2025",
    description: "Certification obtained with honors from the jury (2 out of 40). The school, based on project-based peer-to-peer learning, allowed me to learn through real-world cases and taught me how to adapt when I need to use a new programming language for a project.",
    link: "https://zone01rouennormandie.org/",
    type: "education"
  }
]

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="relative pl-8 pb-12">
      <div className="absolute left-0 top-2 w-3 h-3 bg-neutral-200 dark:bg-neutral-800 rounded-full border-2 border-neutral-400 dark:border-neutral-600"></div>
      <div className="absolute left-1.5 top-5 w-0.5 h-full bg-neutral-200 dark:bg-neutral-800"></div>

      <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
            experience.type === 'professional'
              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
              : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
          }`}>
            {experience.type === 'professional' ? 'Professionnel' : 'Formation'}
          </span>
          <span className="text-sm text-neutral-600 dark:text-neutral-400">
            {experience.period}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
          {experience.title}
        </h3>

        <h4 className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
          {experience.link ? (
            <Link
              href={experience.link}
              target="_blank"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 underline decoration-neutral-400 hover:decoration-neutral-600 transition-colors"
            >
              {experience.organization}
            </Link>
          ) : (
            experience.organization
          )}
        </h4>

        {experience.positions ? (
          <div className="space-y-6">
            {experience.positions.map((position, posIndex) => (
              <div key={posIndex} className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h5 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
                    {position.title}
                  </h5>
                  <span className="text-sm text-neutral-500 dark:text-neutral-500">
                    {position.period}
                  </span>
                </div>
                <div className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {position.description.split('\n').map((line, index) => {
                    if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
                      return (
                        <div key={index} className="flex items-start mb-1">
                          <span className="mr-2 mt-1">•</span>
                          <span>{line.trim().replace(/^[•-]\s*/, '')}</span>
                        </div>
                      )
                    }
                    return line.trim() ? <p key={index} className="mb-2">{line}</p> : <br key={index} />
                  })}
                  {position.link && (
                    <div className="mt-3">
                      <Link
                        href={position.link}
                        target="_blank"
                        className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 underline decoration-blue-400 hover:decoration-blue-600 transition-colors"
                      >
                        {position.linkText || 'Voir le projet'}
                        <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : experience.description ? (
          <div className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {experience.description.split('\n').map((line, index) => {
              if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
                return (
                  <div key={index} className="flex items-start mb-1">
                    <span className="mr-2 mt-1">•</span>
                    <span>{line.trim().replace(/^[•-]\s*/, '')}</span>
                  </div>
                )
              }
              return line.trim() ? <p key={index} className="mb-2">{line}</p> : <br key={index} />
            })}
            {experience.projectLink && (
              <div className="mt-3">
                <Link
                  href={experience.projectLink}
                  target="_blank"
                  className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 underline decoration-blue-400 hover:decoration-blue-600 transition-colors"
                >
                  {experience.projectLinkText || 'Voir le projet'}
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default function About() {
  const professionalExperiences = experiences.filter(exp => exp.type === 'professional')
  const educationExperiences = experiences.filter(exp => exp.type === 'education')

  return (
    <section className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <Link
          href="https://www.canva.com/design/DAGxvRD6CMQ/vqTMVJIBd4JfzmGWVrY5JA/view?utm_content=DAGxvRD6CMQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h37392928c0"
          target="_blank"
          className="inline-flex flex-col items-center p-4 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg transition-colors group"
          title="CV"
        >
          <svg
            className="w-9 h-5 text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7h-4V3"
            />
          </svg>
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
          CV
        </span>
        </Link>
      </div>

      {professionalExperiences.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8 flex items-center">
            <span className="w-2 h-8 bg-blue-500 rounded mr-3"></span>
            Expérience Professionnelle
          </h2>
          <div className="relative">
            {professionalExperiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
        </div>
      )}

      {educationExperiences.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8 flex items-center">
            <span className="w-2 h-8 bg-green-500 rounded mr-3"></span>
            Formation
          </h2>
          <div className="relative">
            {educationExperiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}