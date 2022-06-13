import { useSelector } from 'react-redux'
import { selectBearishCoins } from '../Main/MainSlice'
import Coin from '../../Components/Coin'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function BearishCoins() {
  const [scroll, setScroll] = useState(50)
  const bullishCoins = useSelector(selectBearishCoins)
  const mapBullishCoins = bullishCoins
    .slice(0, scroll)
    .map(data => <Coin data={data} key={data.id} />)

  const handleSliceMap = () => {
    setScroll(prev => (prev += 25))
  }
  return (
    <main className="simply-page">
      <h1>Bearish Coins</h1>
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
