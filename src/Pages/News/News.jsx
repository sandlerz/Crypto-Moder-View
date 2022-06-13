import { selectNews } from './NewsSlice'
import { useSelector } from 'react-redux'
import New from '../../Components/New'
import CurrentBTC from '../../Components/CurrentBTC'

export default function News() {
  const news = useSelector(selectNews)
  const mapNews = news.map(newItem => <New data={newItem} key={newItem.id} />)

  return (
    <main className="simply-page">
      <div className="simply-page__top">
        <h1>News</h1>
        <CurrentBTC />
      </div>
      <div className="simply-page__container simply-page__container--news">
        {mapNews}
      </div>
    </main>
  )
}
