import Image from 'next/future/image'
export default function Home() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <nav className="navbar bg-base-100 justify-center lg:justify-start">
          <a className="btn btn-ghost normal-case text-xl">Jamie Whitmann</a>
        </nav>
      </div>
      <div className="hero min-h-screen bg-base-200 bg-gradient-to-b from-transparent to-secondary dark:to-gray-900">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="/images/free_book_cover.png"
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
            width={240}
            height={400}
            priority
          />
          <div className="ml-4 text-center lg:text-left">
            <h1 className="text-5xl font-bold text-secondary-focus text-center lg:text-left">
              Hello Friends!
            </h1>
            <p className="py-6 text-left">
              I am hard at work on my first series. While you are waiting, would
              you like a copy of my first book? It is free! Honestly.
            </p>
            <p className="pb-6 text-left">
              If you grab a copy of my free book,{' '}
              <span className="font-semibold">
                I promise I will keep you updated
              </span>{' '}
              with my progress on this new series. I think you will love it.
            </p>
            <button className="btn btn-primary">Grab Your Free Copy</button>
          </div>
        </div>
      </div>
    </>
  )
}
