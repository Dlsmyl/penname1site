import Image from 'next/future/image'
export default function Home() {
  return (
    <>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost normal-case text-xl">Jamie Whitmann</a>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="/images/free_book_cover.png"
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
            width={240}
            height={400}
          />
          <div>
            <h1 className="text-5xl font-bold text-primary">Hello Friends!</h1>
            <p className="py-6">
              I am hard at work on my first series. While you are waiting, would
              you like a copy of my first book? It is free! Honestly.
            </p>
            <p className="pb-6">
              If you grab a copy of my free book, I promise I will keep you
              updated with my progress on this new series. I think you will love
              it.
            </p>
            <button className="btn btn-primary">Grab Your Free Copy</button>
          </div>
        </div>
      </div>
    </>
  )
}
