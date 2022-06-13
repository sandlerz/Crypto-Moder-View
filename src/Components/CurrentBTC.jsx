import { useSelector } from 'react-redux'
import { selectCoins } from '../Pages/Main/MainSlice'
export default function CurrentBTC() {
  const [BTC] = useSelector(selectCoins)

  return (
    <div>
      BTC = <span>{BTC.price}</span> USD
    </div>
  )
}
