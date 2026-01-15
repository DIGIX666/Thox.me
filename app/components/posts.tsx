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
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {year}
          </h3>
          {postsByYear[year].map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <p className="text-neutral-600 dark:text-neutral-400 tracking-tight hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                {post.metadata.title}
              </p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}
