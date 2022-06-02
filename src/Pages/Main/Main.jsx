import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCurrencies,
  selectCoins,
  selectTrending,
  selectCoinsFilter,
} from './MainSlice'
import Coin from '../../Components/Coin'
import Search from '../../Components/Search'
import TrendingCoin from '../../Components/TrendingCoin'

export default function Main() {
  const dispatch = useDispatch()
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

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(getCurrencies())
    }
  }, [dispatch, coins.length])

  return (
    <main className="main">
      <Search />
      <h1>Trending</h1>
      <section>{trending}</section>
      <h2>Currencies</h2>
      <section className="main__coins">{mapCoins}</section>
    </main>
  )
}
