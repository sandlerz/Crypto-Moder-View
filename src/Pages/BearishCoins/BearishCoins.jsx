import { useSelector } from 'react-redux'
import { selectBearishCoins } from '../Main/MainSlice'
import Coin from '../../Components/Coin'

export default function BearishCoins() {
  const bullishCoins = useSelector(selectBearishCoins)
  const mapBullishCoins = bullishCoins.map(data => (
    <Coin data={data} key={data.id} />
  ))
  return (
    <main className="simply-page">
      <h1>Bearish Coins</h1>
      <section className="simply-page__container">{mapBullishCoins}</section>
    </main>
  )
}
