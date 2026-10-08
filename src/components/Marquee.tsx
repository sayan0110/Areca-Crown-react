type Props = {
  words?: string[]
  repeat?: number
}

function Marquee({ words = ['Relax', 'Enjoy', 'Luxury', 'Holiday', 'Travel', 'Discover', 'Experience'], repeat = 4 }: Props) {
  const text = Array(repeat).fill(words.join(' ')).join(' ')
  return (
    <div className="marquee">
      <div className="track">
        <div className="content">&nbsp;{text}</div>
      </div>
    </div>
  )
}

export default Marquee
