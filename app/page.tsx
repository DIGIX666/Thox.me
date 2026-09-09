import { AnimatedTitle } from 'app/components/animated-title'
import RevealGroup from 'app/components/reveal-group'
import type { SVGProps } from 'react'
import {
  SiAngular,
  SiClaudecode,
  SiDocker,
  SiFastapi,
  SiGithubactions,
  SiGo,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiRust,
  SiSolidity,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { BsOpenai } from 'react-icons/bs'
import { LuBlocks, LuBraces, LuCircleDollarSign } from 'react-icons/lu'

function GnoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 329 568" fill="none" {...props}>
      <path
        d="M325.171 382.261c-4.231-15.539-13.268-29.213-25.532-39.66-4.733-4.04-9.897-7.865-15.539-11.427-4.781-3.037-10.805 1.434-9.419 6.932l3.395 13.436c4.303 17.069-14.009 30.91-29.261 22.137l-41-23.572c-26.942-15.491-60.076-15.491-87.018 0l-41 23.572c-15.252 8.773-33.564-5.092-29.261-22.137l3.49-13.818c1.387-5.475-4.614-9.945-9.395-6.933-6.263 3.921-11.953 8.176-17.117 12.646-12.072 10.471-20.463 24.528-24.384 40.02l-.143.573c-9.969 39.589 5.522 81.21 38.943 104.662l103.514 72.603c11.331 7.937 26.416 7.937 37.748 0l103.514-72.603c33.923-23.787 49.366-66.316 38.465-106.407Z"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M320.866 294.956c-9.036-75.496-46.067-151.136-81.879-209.085l53.216-53.215C304.251 20.607 295.717 0 278.672 0H164.065c-8.845 0-17.714 3.897-23.691 11.666C100.02 64.188 21.01 179.751 7.216 294.956c-1.243 10.495 11.069 16.925 18.958 9.897 27.54-24.528 70.499-42.075 137.867-42.075s110.304 17.571 137.868 42.075c7.889 7.028 20.2.574 18.957-9.897Z"
        fill="currentColor"
      />
    </svg>
  )
}

function AptosIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M15.336 9.02a.65.65 0 0 1-.483-.217l-.643-.726a.507.507 0 0 0-.757 0l-.552.623a.95.95 0 0 1-.713.322h-8.68a9 9 0 0 0-.473 2.221h8.196a.53.53 0 0 0 .38-.163l.764-.796a.5.5 0 0 1 .365-.155h.031c.145 0 .283.061.379.17l.643.726a.65.65 0 0 0 .483.218h6.69a9 9 0 0 0-.473-2.221zm-7.341 6.894a.53.53 0 0 0 .38-.163l.764-.796a.5.5 0 0 1 .365-.156h.031c.145 0 .283.062.379.17l.643.727a.65.65 0 0 0 .483.218h9.066c.34-.702.588-1.456.736-2.244h-8.701a.65.65 0 0 1-.483-.217l-.643-.727a.507.507 0 0 0-.757 0l-.552.624a.95.95 0 0 1-.713.321H3.158c.148.789.397 1.542.737 2.243zm6.431-9.32a.53.53 0 0 0 .382-.163l.763-.796a.5.5 0 0 1 .364-.155h.032c.144 0 .283.061.378.17l.643.727a.65.65 0 0 0 .484.217h1.723A8.99 8.99 0 0 0 12.001 3a8.99 8.99 0 0 0-7.195 3.594zm-5.82 11.544a.65.65 0 0 1-.484-.218l-.643-.726a.507.507 0 0 0-.756 0l-.552.623a.95.95 0 0 1-.713.321h-.037A8.97 8.97 0 0 0 12.001 21a8.97 8.97 0 0 0 6.578-2.862z" />
    </svg>
  )
}

const stats = [
  { value: '2+', label: 'Years of Experience' },
  { value: '6+', label: 'Hackathons Completed' },
  { value: '1.8k+', label: 'GitHub Commits' },
]

const technologies = [
  {
    category: 'Frontend',
    items: [
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Angular', icon: SiAngular, color: '#DD0031' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'REST APIs', icon: LuBraces, color: '#94C5FD' },
      { name: 'Rust', icon: SiRust, color: '#DEA584' },
      { name: 'Go', icon: SiGo, color: '#00ADD8' },
      { name: 'Python', icon: SiPython, color: '#FFD43B' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
    ],
  },
  {
    category: 'DevOps',
    items: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
    ],
  },
  {
    category: 'AI',
    items: [
      { name: 'Codex', icon: BsOpenai, color: '#FFFFFF' },
      { name: 'Claude Code', icon: SiClaudecode, color: '#D97757' },
    ],
  },
  {
    category: 'Web3',
    items: [
      { name: 'Gno', icon: GnoIcon, color: '#F4F4F5' },
      { name: 'Hyperledger Fabric', icon: LuBlocks, color: '#A78BFA' },
      { name: 'Aptos', icon: AptosIcon, color: '#5DE4C7' },
      { name: 'x402', icon: LuCircleDollarSign, color: '#21FF50' },
      { name: 'Solidity', icon: SiSolidity, color: '#A8A8A8' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Redis', icon: SiRedis, color: '#FF4438' },
    ],
  },
]

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.833 14.167 14.167 5.833M7.5 5.833h6.667V12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Page() {
  return (
    <RevealGroup>
      <section className="pb-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_11rem] lg:items-start lg:gap-14">
          <div>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
              <AnimatedTitle />
            </h1>

            <div className="max-w-[70ch] space-y-5 text-base leading-8 text-neutral-300">
              <p>
                I’m Theo, known as Thox. Full-stack by training, blockchain by
                obsession, and product-minded by default.
              </p>
              <p>
                I build products, developer tools, and experimental systems
                across web, AI, and blockchain. I like turning ambiguous ideas
                into reliable software—from TypeScript and React interfaces to
                Node.js APIs and PostgreSQL backends.
              </p>
              <p>
                I learn fast, ship early, debug the hard parts, and iterate with
                real users. I’m happiest in small teams where I can own projects
                end to end, challenge assumptions, and keep learning.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="mailto:theo.dbs6610@gmail.com"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#94C5FD] px-4 py-2.5 text-sm font-semibold text-neutral-950 transition-all hover:bg-white hover:shadow-[0_0_24px_rgba(148,197,253,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#94C5FD] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Hire me
                <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRightIcon />
                </span>
              </a>
            </div>
          </div>

          <aside
            aria-label="Portfolio highlights"
            className="relative overflow-hidden rounded-2xl border border-neutral-700/80 bg-neutral-900/70 px-5 py-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm"
            data-gsap-reveal="section"
          >
            <span className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[#21ff50]/70 to-transparent" />
            <dl className="space-y-7">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <dd className="post-title text-3xl font-semibold tracking-tight text-[#21ff50] tabular-nums">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-xs leading-5 text-neutral-400">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
            <span className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#21ff50]/30 to-transparent" />
          </aside>
        </div>
      </section>

      <section
        id="technology"
        className="scroll-mt-8 border-t border-neutral-800/80 py-16"
        data-gsap-reveal="section"
      >
        <div className="mb-9 flex items-center gap-3">
          <span className="h-8 w-2 rounded bg-[#94C5FD]" />
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#94C5FD]">
              What I work with
            </p>
            <h2 className="post-title text-2xl font-semibold tracking-tight text-neutral-100">
              Technology
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {technologies.map((group) => (
            <article
              key={group.category}
              className="rounded-xl border border-neutral-800 bg-neutral-900/45 p-5 transition-colors hover:border-neutral-700 hover:bg-neutral-900/70"
            >
              <h3 className="post-title mb-4 text-sm font-semibold text-neutral-200">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((technology) => {
                  const TechnologyIcon = technology.icon

                  return (
                    <li
                      key={technology.name}
                      className="group/tech inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-black/30 px-2.5 py-1.5 text-xs text-neutral-400 transition-colors hover:border-neutral-700 hover:text-neutral-200"
                    >
                      <TechnologyIcon
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover/tech:scale-110"
                        style={{ color: technology.color }}
                      />
                      <span>{technology.name}</span>
                    </li>
                  )
                })}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </RevealGroup>
  )
}
