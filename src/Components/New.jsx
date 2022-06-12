export default function New({ data }) {
  const { description, feedDate, imgURL, link, source, title } = data
  return (
    <div>
      <div>
        <img src={imgURL} alt="" />
      </div>
      <p>{title}</p>
    </div>
  )
}
