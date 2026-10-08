import { Link } from 'react-router-dom'

export type RoomCategory = {
  image: string
  price: string
  title: string
  to?: string
}

function RoomBox({ image, price, title, to = '/rooms' }: RoomCategory) {
  return (
    <Link to={to} className="box_cat_rooms">
      <figure>
        <div className="background-image" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="info">
          <small>{price}</small>
          <h3>{title}</h3>
          <span>Read more</span>
        </div>
      </figure>
    </Link>
  )
}

export default RoomBox
