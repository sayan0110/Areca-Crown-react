import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import NewsCard, { type NewsItem } from './NewsCard'

type Props = {
  items: NewsItem[]
  eyebrow?: string
  heading?: string
  viewAllTo?: string
}

function NewsSection({ items, eyebrow = 'Luxury experience', heading = 'News & Events', viewAllTo = '/explore-kaziranga' }: Props) {
  return (
    <div className="container margin_120_95">
      <SectionTitle className="mb-3" eyebrow={eyebrow} heading={heading} animated headingDelay={200} />
      <div className="row justify-content-center home">
        {items.map((item, i) => (
          <NewsCard key={item.title} {...item} delay={300 + i * 100} />
        ))}
      </div>
      <p className="text-end">
        <Link to={viewAllTo} className="btn_1 outline mt-2" data-cue="slideInUp" data-delay="600">
          View all News
        </Link>
      </p>
    </div>
  )
}

export default NewsSection
