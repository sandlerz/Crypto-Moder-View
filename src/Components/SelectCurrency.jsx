import { setCurrency, selectCurrency } from '../Pages/Main/MainSlice'
import { useSelector, useDispatch } from 'react-redux/es/exports'

export default function SelectCurrency() {
  const currency = useSelector(selectCurrency)
  const dispatch = useDispatch()

  const handleCurrency = () => {
    dispatch(setCurrency(currency === 'USD' ? 'EUR' : 'USD'))
  }

  return (
    <div onClick={handleCurrency}>
      Currency = <span>{currency}</span>
    </div>
  )
}
