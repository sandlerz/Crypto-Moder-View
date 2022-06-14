import { useSelector } from 'react-redux'
import { selectCoins } from '../Pages/Main/MainSlice'
import { cutDecimals } from '../Util/Util'
import { selectCurrency } from '../Pages/Main/MainSlice'
import { useEffect } from 'react'

export default function CurrentBTC() {
  const [BTC] = useSelector(selectCoins)
  const currency = useSelector(selectCurrency)

  useEffect(() => {
    const currentBTC = document.querySelector(`.CurrentBTC__Price`)
    const USD = document.querySelector(`.CurrentBTC__USD`)

    currentBTC.classList.add('coin-change-price-animation')
    USD.classList.add('selectCurrency-animation')

    const clearTime = setTimeout(() => {
      currentBTC.classList.remove('coin-change-price-animation')
      USD.classList.remove('selectCurrency-animation')
    }, 100)

    return () => clearTimeout(clearTime)
  }, [BTC, currency])

  return (
    <div className="CurrentBTC">
      <span className="CurrentBTC__BTC">BTC </span> ={' '}
      <span className="CurrentBTC__Price">
        {BTC ? cutDecimals(BTC.price) : '0.000.000'}
      </span>
      <span className="CurrentBTC__USD"> {currency}</span>
    </div>
  )
}
