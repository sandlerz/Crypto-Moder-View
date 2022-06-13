import { useSelector } from 'react-redux'
import { selectCoins } from '../Pages/Main/MainSlice'
import { cutDecimals } from '../Util/Util'

export default function CurrentBTC() {
  const [BTC] = useSelector(selectCoins)

  return (
    <div>
      BTC = <span>{cutDecimals(BTC.price)}</span> USD
    </div>
  )
}
