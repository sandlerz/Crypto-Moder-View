import { randomImg, timeDifference } from '../Util/Util'
import { news1, news2, news3, news4 } from '../Assets/Images/NewsImages'

export default function New({ data }) {
  const { feedDate, imgURL, link, source, title } = data
  const arrImg = [news1, news2, news3, news4]

  return (
    <a href={link} target="_blank" rel="noreferrer" className="new">
      <div className="new__img">
        <img
          src={imgURL}
          alt=""
          onError={({ currentTarget }) => {
            currentTarget.onerror = null
            currentTarget.src = randomImg(arrImg)
          }}
        />
      </div>
      <div className="new__body">
        <p className="new__body__title">{title}</p>
        <div className="new__body__source">
          <span>Source: {source}</span>
          <span>{timeDifference(feedDate)} ago</span>
        </div>
      </div>
    </a>
  )
}
