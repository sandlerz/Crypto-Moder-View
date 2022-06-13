import { useSelector } from 'react-redux'
import { selectCoins, selectTrending, selectCoinsFilter } from './MainSlice'
import Coin from '../../Components/Coin'
import Search from '../../Components/Search'
import TrendingCoin from '../../Components/TrendingCoin'
import { selectNews } from '../News/NewsSlice'
import New from '../../Components/New'
import { useRef } from 'react'
import { useEffect } from 'react'
import { scrollInterval } from '../../Util/Util'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState } from 'react'
import CurrentBTC from '../../Components/CurrentBTC'
import SelectCurrency from '../../Components/SelectCurrency'

const seconds = 3000

export default function Main() {
  const [scroll, setScroll] = useState(25)
  const coins = useSelector(selectCoins)
  const trendingCoins = useSelector(selectTrending)
  const filter = useSelector(selectCoinsFilter)
  const news = useSelector(selectNews)
  const myRef = useRef([])

  const mapCoins = coins
    .filter(data => {
      if (filter === '') return true
      return data.name.toLowerCase().includes(filter)
    })
    .slice(0, scroll)
    .map(data => <Coin data={data} key={data.id} />)

  const trending = trendingCoins.map(data => (
    <TrendingCoin data={data} key={data.id} />
  ))

  const mapNews = news.map(newItem => <New data={newItem} key={newItem.id} />)

  const handleStop = () => clearInterval(myRef.current[1])

  const handleStart = () => {
    myRef.current[1] = scrollInterval(myRef.current[0], seconds)
  }

  useEffect(() => {
    myRef.current[1] = scrollInterval(myRef.current[0], seconds)
    const cleanId = myRef.current[1]

    return () => clearInterval(cleanId)
  }, [])

  const handleSliceMap = () => {
    setScroll(prev => (prev += 25))
  }

  return (
    <main className="main">
      <div className="main__top">
        <Search />
        <CurrentBTC />
      </div>
      <h1>News</h1>
      <section
        className="main__news"
        ref={element => {
          myRef.current.push(element)
        }}
        onMouseEnter={handleStop}
        onMouseLeave={handleStart}
      >
        {mapNews}
      </section>
      <h1>Trending</h1>
      <section className="main__trendingCoins">{trending}</section>
      <div className="main__trendingCoins__header">
        <h2>Currencies</h2>
        <SelectCurrency />
      </div>
      <InfiniteScroll
        dataLength={mapCoins.length}
        next={handleSliceMap}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <section className="main__coins">{mapCoins}</section>
      </InfiniteScroll>
    </main>
  )
}
