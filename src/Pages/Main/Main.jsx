import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrencies, selectCoins } from './MainSlice'

export default function Main() {
  const dispatch = useDispatch()
  const coins = useSelector(selectCoins)

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(getCurrencies())
    }
  }, [dispatch, coins.length])

  return <main>{}</main>
}
