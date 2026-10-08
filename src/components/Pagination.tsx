type Props = {
  pages: number
  current: number
  onChange: (page: number) => void
}

function Pagination({ pages, current, onChange }: Props) {
  const go = (page: number) => (e: React.MouseEvent) => {
    e.preventDefault()
    if (page >= 1 && page <= pages) onChange(page)
  }

  return (
    <div className="pagination__wrapper">
      <ul className="pagination">
        <li>
          <a href="#0" className="prev" onClick={go(current - 1)}>
            <i className="bi bi-arrow-left-short"></i>
          </a>
        </li>
        {Array.from({ length: pages }, (_, i) => i + 1).map((page) => (
          <li key={page}>
            <a href="#0" className={page === current ? 'active' : undefined} onClick={go(page)}>
              {page}
            </a>
          </li>
        ))}
        <li>
          <a href="#0" className="next" onClick={go(current + 1)}>
            <i className="bi bi-arrow-right-short"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
