import { Link } from 'react-router-dom'

export type NewsItem = {
  image: string
  date: string
  category: string
  title: string
  to?: string
}

type Props = NewsItem & { delay?: number }

function NewsCard({ image, date, category, title, to = '/explore-kaziranga', delay }: Props) {
  return (
    <div className="item col-xl-4 col-lg-6">
      <Link to={to} className="box_contents" data-cue="slideInUp" data-delay={delay}>
        <figure>
          <img src={image} alt="" className="img-fluid" />
          <em>{date}</em>
        </figure>
        <div className="wrapper">
          <small>
            {category}
            <span></span>
          </small>
          <h2>{title}</h2>
          <em>Read more</em>
        </div>
      </Link>
    </div>
  )
}

export default NewsCard
