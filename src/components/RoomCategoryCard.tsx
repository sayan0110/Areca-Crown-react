import RoomBox, { type RoomCategory } from './RoomBox'

export type { RoomCategory }

type Props = RoomCategory & { featured?: boolean }

function RoomCategoryCard({ featured = false, ...room }: Props) {
  const col = featured ? 'col-xl-6 col-lg-12 col-md-12 col-sm-12' : 'col-xl-3 col-lg-6 col-md-6 col-sm-6'
  return (
    <div className={col}>
      <RoomBox {...room} />
    </div>
  )
}

export default RoomCategoryCard
