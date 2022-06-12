import { randomImg } from '../Util/Util'
import { news1, news2, news3, news4 } from '../Assets/Images/NewsImages'

export default function New({ data }) {
  const { description, feedDate, imgURL, link, source, title } = data
  const arrImg = [news1, news2, news3, news4]

  return (
    <div className="new">
      <div className="new__img">
        <img
          src={imgURL}
          alt=""
          onError={({ currentTarget }) => {
            currentTarget.onerror = null // prevents looping
            currentTarget.src = randomImg(arrImg)
          }}
        />
      </div>
      <p className="new__title">{title}</p>
    </div>
  )
}
