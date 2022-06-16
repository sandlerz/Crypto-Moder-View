import { useSelector } from 'react-redux'
import { selectBullishCoins } from '../Main/MainSlice'
import Coin from '../../Components/Coin'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState } from 'react'
import CurrentBTC from '../../Components/CurrentBTC'

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
      <div className="simply-page__top">
        <h1>Bullish Coins</h1>
        <CurrentBTC />
      </div>
      <InfiniteScroll
        dataLength={mapBullishCoins.length}
        next={handleSliceMap}
        hasMore={true}
        style={{ overflow: 'initial' }}
      >
        <section className="simply-page__container">{mapBullishCoins}</section>
      </InfiniteScroll>
    </main>
  )
}
