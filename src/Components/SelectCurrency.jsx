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

  const handleAnimation = event => {
    const element = event.target.querySelector('.SelectCurrency__currency')
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
      onClick={e => {
        handleCurrency()
        handleAnimation(e)
      }}
      className="SelectCurrency"
    >
      Currency ={' '}
      <span
        className="SelectCurrency__currency"
        // ref={myRef}
      >
        {currency}
      </span>
    </div>
  )
}
