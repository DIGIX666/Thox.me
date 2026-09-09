import Link from 'next/link'
import { getBlogPosts } from 'app/blog/utils'
import RevealGroup from 'app/components/reveal-group'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  const postsByYear = allBlogs
    .sort((a, b) => {
      if (
        new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ) {
        return -1
      }
      return 1
    })
    .reduce((acc, post) => {
      const year = new Date(post.metadata.publishedAt).getFullYear()
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(post)
      return acc
    }, {} as Record<number, typeof allBlogs>)

  const years = Object.keys(postsByYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <RevealGroup>
      {years.map((year) => (
        <div key={year} className="mb-8" data-gsap-reveal="section">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 post-title">
            {year}
            <span className="ml-2 text-sm font-medium text-neutral-400 dark:text-neutral-500">
              {postsByYear[year].length}
            </span>
          </h3>
          {postsByYear[year].map((post) => (
            <div key={post.slug} className="mb-4 space-y-2" data-gsap-reveal="post">
              <Link href={`/blog/${post.slug}`}>
                <p className="post-title text-[#C8C8C8] text-xl tracking-tight transition-colors hover:text-[#94C5FD]">
                  {post.metadata.title}
                </p>
              </Link>
              {post.metadata.tags?.length ? (
                <div className="flex flex-wrap gap-2">
                  {post.metadata.tags.map((tag) => (
                    <span
                      key={`${post.slug}-${tag}`}
                      className="rounded-full border border-neutral-800 px-2.5 py-0.5 text-[11px] font-medium text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </RevealGroup>
  )
}
