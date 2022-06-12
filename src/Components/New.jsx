export default function New({ data }) {
  const { description, feedDate, imgURL, link, source, title } = data

  return (
    <div className="new">
      <div className="new__img">
        <img src={imgURL} alt="" />
      </div>
      <p className="new__title">{title}</p>
    </div>
  )
}
