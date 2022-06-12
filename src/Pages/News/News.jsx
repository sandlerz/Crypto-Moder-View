import { selectNews } from './NewsSlice'
import { useSelector } from 'react-redux'
import New from '../../Components/New'

export default function News() {
  const news = useSelector(selectNews)
  const mapNews = news.map(newItem => <New data={newItem} key={newItem.id} />)

  return (
    <main className="simply-page">
      <h1>News</h1>
      <div className="simply-page__container simply-page__container--news">
        {mapNews}
      </div>
    </main>
  )
}
