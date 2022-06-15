import { setCurrency, selectCurrency } from '../Pages/Main/MainSlice'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { useRef } from 'react'
import { useEffect } from 'react'

export default function SelectCurrency() {
  const currency = useSelector(selectCurrency)
  const dispatch = useDispatch()
  const myRef = useRef(null)

  const handleCurrency = () => {
    dispatch(setCurrency(currency === 'USD' ? 'EUR' : 'USD'))
  }

  const handleAnimation = () => {
    const element = document.querySelector('.SelectCurrency__currency')
    element.classList.add('selectCurrency-animation')
    myRef.current = setTimeout(() => {
      element.classList.remove('selectCurrency-animation')
    }, 300)
  }

  useEffect(() => {
    return () => clearTimeout(myRef.current)
  }, [])

  return (
    <div
      onClick={() => {
        handleCurrency()
        handleAnimation()
      }}
      className="SelectCurrency"
    >
      Currency = <span className="SelectCurrency__currency">{currency}</span>
    </div>
  )
}
