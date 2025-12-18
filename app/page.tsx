import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        <i>~Thox~</i>
      </h1>
      <p className="mb-4">
        {`I’m Theo, known as Thox. I build, I break, I rebuild. Full-stack by training, blockchain by obsession. 
          I learn fast, iterate hard, and make code understandable by confronting it, not observing it.
          I like systems that scale, products that matter, and ideas that survive real-world chaos. 
          Some tests pass, others explode, but each one teaches me something. 
          The value lives in fast exploration, constant learning, and building products that actually stand on their own.
          Tech is never linear. That’s why I keep going.`}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
