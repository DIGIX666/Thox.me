import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

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
    <div>
      {years.map((year) => (
        <div key={year} className="mb-8">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 post-title">
            {year}
            <span className="ml-2 text-sm font-medium text-neutral-400 dark:text-neutral-500">
              {postsByYear[year].length}
            </span>
          </h3>
          {postsByYear[year].map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <p className="post-title text-[#C8C8C8] text-xl tracking-tight transition-colors hover:text-[#94C5FD]">
                {post.metadata.title}
              </p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}
