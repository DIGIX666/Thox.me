'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  '/about': {
    name: 'about',
  },
}

type AvailabilityStatus = 'available' | 'not-available' | 'partially-available'

const availabilityConfig: Record<AvailabilityStatus, {
  color: string
  bgColor: string
  text: string
  pulse?: boolean
}> = {
  'available': {
    color: 'bg-green-500',
    bgColor: 'bg-green-100 dark:bg-green-900/20',
    text: 'Available for work',
    pulse: true
  },
  'not-available': {
    color: 'bg-red-500',
    bgColor: 'bg-red-100 dark:bg-red-900/20',
    text: 'Not available'
  },
  'partially-available': {
    color: 'bg-yellow-500',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/20',
    text: 'Partially available'
  }
}

// Change this to update your status
const currentStatus: AvailabilityStatus = 'available'

export function Navbar() {
  const status = availabilityConfig[currentStatus]
  const pathname = usePathname()

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row items-center space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path
              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 ${
                    isActive
                      ? 'text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 rounded-md font-medium'
                      : 'text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  {name}
                </Link>
              )
            })}

            <div className="ml-4 flex items-center">
              <div
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${status.bgColor}`}
                title={status.text}
              >
                <div className="relative mr-2">
                  <div
                    className={`w-2 h-2 rounded-full ${status.color} ${status.pulse ? 'animate-pulse' : ''}`}
                  />
                </div>
                <span className="text-neutral-700 dark:text-neutral-300">
                  {status.text}
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}
