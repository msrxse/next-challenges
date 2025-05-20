import React from 'react'

const data = [
  {
    id: 1,
    title:
      'Writing on software design, company building, and the aerospace industry.',
    content:
      'All of my long - form thoughts on programming, leadership, product design, and more, collected in chronological order.',
    date: 'September 1, 2023',
  },
  {
    id: 2,
    title: 'Crafting a design system for a multiplanetary future',
    content:
      'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
    date: 'September 5, 2022',
  },
  {
    id: 3,
    title: 'Introducing Animaginary: High performance web animations.',
    content:
      'When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.',
    date: 'September 2, 2022',
  },
  {
    id: 4,
    title: 'Rewriting the cosmOS kernel in Rust',
    content:
      'When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.',
    date: 'September 2, 2022',
  },
]

function Page() {
  return (
    <main className="flex flex-col items-center justify-between bg-gray-100">
      <div className="grid bg-amber-100 lg:grid-cols-6">
        <p className="w-full pl-2 lg:col-start-2">Notes:</p>
        <ul className="list-disc space-y-4 pl-6 lg:col-span-3">
          <li className="text-xs text-gray-900">
            Starts on small screens with 1 column flex layout. Time tag repeated
            twice, one seen on sm and the other hidden until md breakpoint is
            passed.
          </li>
          <li className="text-xs text-gray-900">
            Pass md break point the layout switches to grid with 4 columns. The
            card content spans 3 cols and the time the first col. The md time
            tag is placed second and then changed order to showcase
            &apos;isolate&apos;, which isolates z indexes withing the component,
            and z-10 within the a tag to bring it above the time tab itself. So
            the click works above it as well.
          </li>
          <li className="text-xs text-gray-900">
            The h2 link has a span tag that spreads the whole card (absolute
            inset-0), for that we have the parent div to have
            &apos;relative&apos; position, so serve as anchor.
          </li>
        </ul>
      </div>
      <div className="my-4 mt-4 flex max-w-3xl flex-1 flex-col space-y-4 px-4">
        {data.map((each) => (
          <article className="md:grid md:grid-cols-4" key={each.id}>
            <div className="relative isolate flex flex-col items-start rounded-2xl px-4 py-3 hover:bg-zinc-200/70 md:col-span-3">
              <h2 className="font-semibold tracking-tight">
                <a href="#">
                  <span className="absolute inset-0 z-10"></span>
                  {each.title}
                </a>
              </h2>
              <time
                className="relative order-first text-sm text-zinc-400 md:hidden"
                dateTime={each.date}
              >
                <span>{each.date}</span>
              </time>
              <p className="mt-2 text-sm text-zinc-600">{each.content}</p>
              <div
                aria-hidden="true"
                className="mt-4 flex items-center text-sm font-medium text-teal-500"
              >
                Read article &rarr;
              </div>
            </div>
            <time
              className="relative order-first hidden text-sm text-zinc-400 md:block md:py-3"
              dateTime={each.date}
            >
              {each.date}
            </time>
          </article>
        ))}
      </div>
    </main>
  )
}

export default Page
