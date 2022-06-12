import { useSelector } from 'react-redux'
import { selectCoins, selectTrending, selectCoinsFilter } from './MainSlice'
import Coin from '../../Components/Coin'
import Search from '../../Components/Search'
import TrendingCoin from '../../Components/TrendingCoin'
import { selectNews } from '../News/NewsSlice'
import New from '../../Components/New'

export default function Main() {
  const coins = useSelector(selectCoins)
  const trendingCoins = useSelector(selectTrending)
  const filter = useSelector(selectCoinsFilter)
  const news = useSelector(selectNews)

  const mapCoins = coins
    .filter(data => {
      if (filter === '') return true
      return data.name.toLowerCase().includes(filter)
    })
    .map(data => <Coin data={data} key={data.id} />)

  const trending = trendingCoins.map(data => (
    <TrendingCoin data={data} key={data.id} />
  ))

  const mapNews = news.map(newItem => <New data={newItem} key={newItem.id} />)

  return (
    <main className="main">
      <Search />
      <h1>News</h1>
      <section className="main__news">{mapNews}</section>
      <h1>Trending</h1>
      <section className="main__trendingCoins">{trending}</section>
      <h2>Currencies</h2>
      <section className="main__coins">{mapCoins}</section>
    </main>
  )
}
