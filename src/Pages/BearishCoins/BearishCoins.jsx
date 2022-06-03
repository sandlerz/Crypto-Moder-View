import { useSelector } from 'react-redux'
import { selectBearishCoins } from '../Main/MainSlice'
import Coin from '../../Components/Coin'

export default function BearishCoins() {
  const bullishCoins = useSelector(selectBearishCoins)
  const mapBullishCoins = bullishCoins.map(data => (
    <Coin data={data} key={data.id} />
  ))
  return (
    <main className="trend-coins">
      <h1>Bearish Coins</h1>
      <section className="trend-coins__coins">{mapBullishCoins}</section>
    </main>
  )
}
