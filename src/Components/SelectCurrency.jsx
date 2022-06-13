import { useState } from 'react'

export default function SelectCurrency() {
  const [currency, setCurrency] = useState('USD')

  const handleCurrency = () => {
    setCurrency(prev => (prev === 'USD' ? 'EUR' : 'USD'))
  }

  return (
    <div onClick={handleCurrency}>
      Currency = <span>{currency}</span>
    </div>
  )
}
