export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full max-w-2xl lg:max-w-4xl mx-auto px-2 sm:px-4 overflow-x-hidden">
      {children}
    </div>
  )
}
