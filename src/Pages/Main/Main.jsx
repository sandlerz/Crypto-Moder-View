import { useSelector } from 'react-redux'
import { selectCoins, selectTrending, selectCoinsFilter } from './MainSlice'
import Coin from '../../Components/Coin'
import Search from '../../Components/Search'
import TrendingCoin from '../../Components/TrendingCoin'

export default function Main() {
  const coins = useSelector(selectCoins)
  const trendingCoins = useSelector(selectTrending)
  const filter = useSelector(selectCoinsFilter)
  const mapCoins = coins
    .filter(data => {
      if (filter === '') return true
      return data.name.toLowerCase().includes(filter)
    })
    .map(data => <Coin data={data} key={data.id} />)

  const trending = trendingCoins.map(data => (
    <TrendingCoin data={data} key={data.id} />
  ))

  return (
    <main className="main">
      <Search />
      <h1>Trending</h1>
      <section className="main__trendingCoins">{trending}</section>
      <h2>Currencies</h2>
      <section className="main__coins">{mapCoins}</section>
    </main>
  )
}
