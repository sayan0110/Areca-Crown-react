type Props = {
  title: string
}

function ScreenPlaceholder({ title }: Props) {
  return (
    <main>
      <div className="container margin_120_95" style={{ paddingTop: 80 }}>
        <div className="title">
          <small>Paradise Hotel</small>
          <h2>{title}</h2>
        </div>
      </div>
    </main>
  )
}

export default ScreenPlaceholder
