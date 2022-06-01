import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrencies, selectCoins } from './MainSlice'
import Coin from '../../Components/Coin'

export default function Main() {
  const dispatch = useDispatch()
  const coins = useSelector(selectCoins)
  const mapCoins = coins.map(data => <Coin data={data} key={data.id} />)

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(getCurrencies())
    }
  }, [dispatch, coins.length])

  return <main>{mapCoins}</main>
}
