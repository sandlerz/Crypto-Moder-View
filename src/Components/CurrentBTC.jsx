import { useSelector } from 'react-redux'
import { selectCoins } from '../Pages/Main/MainSlice'
import { cutDecimals } from '../Util/Util'

export default function CurrentBTC() {
  const [BTC] = useSelector(selectCoins)

  return (
    <div className="CurrentBTC">
      <span className="CurrentBTC__BTC">BTC</span> ={' '}
      {BTC ? cutDecimals(BTC.price) : '...loading'}{' '}
      <span className="CurrentBTC__USD">USD</span>
    </div>
  )
}
