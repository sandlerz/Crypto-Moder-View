import { useSelector } from 'react-redux'
import { selectCoins } from '../Pages/Main/MainSlice'
import { cutDecimals } from '../Util/Util'
import { selectCurrency } from '../Pages/Main/MainSlice'

export default function CurrentBTC() {
  const [BTC] = useSelector(selectCoins)
  const currency = useSelector(selectCurrency)

  return (
    <div className="CurrentBTC">
      <span className="CurrentBTC__BTC">BTC</span> ={' '}
      {BTC ? cutDecimals(BTC.price) : '...loading'}{' '}
      <span className="CurrentBTC__USD">{currency}</span>
    </div>
  )
}
