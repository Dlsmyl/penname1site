import Link from 'next/link'
const Pagination = ({ total_pages, page }) => {
  return (
    <nav className="flex justify-center">
      <ul className="list-style-none my-8 flex gap-x-4">
        {Array.from({ length: total_pages }).map((_, i) => {
          if (Number(total_pages) < 8) {
            return (
              <li
                key={`breadcrumb${i}`}
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  page === i + 1
                    ? `bg-secondary text-neutral-100`
                    : `hover:bg-primary`
                }`}
              >
                <Link
                  href={`/blog/page/${i + 1}`}
                  className={`p-3 ${page === i + 1 ? `cursor-default` : ``}`}
                >
                  {i + 1}
                </Link>
              </li>
            )
          }
          return (
            <li key={`breadcrumb${i}`}>
              <Link href={`/blog/page/${i + 1}`}>{i + 1}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default Pagination
