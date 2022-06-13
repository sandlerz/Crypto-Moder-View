import { useSelector } from 'react-redux'
import { selectBullishCoins } from '../Main/MainSlice'
import Coin from '../../Components/Coin'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState } from 'react'

export default function BullishCoins() {
  const [scroll, setScroll] = useState(50)
  const bullishCoins = useSelector(selectBullishCoins)
  const mapBullishCoins = bullishCoins
    .slice(0, scroll)
    .map(data => <Coin data={data} key={data.id} />)

  const handleSliceMap = () => {
    setScroll(prev => (prev += 25))
  }

  return (
    <main className="simply-page">
      <h1>Bullish Coins</h1>
      <InfiniteScroll
        dataLength={mapBullishCoins.length}
        next={handleSliceMap}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <section className="simply-page__container">{mapBullishCoins}</section>
      </InfiniteScroll>
    </main>
  )
}
