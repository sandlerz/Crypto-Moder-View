import { Route, Routes } from 'react-router-dom'
import {
  Main,
  BullishCoins,
  BearishCoins,
  Save,
  News,
  Error,
} from '../Pages/index'
import Navbar from '../Components/Navbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCoins,
  getCurrencies,
  selectCurrency,
} from '../Pages/Main/MainSlice'
import { getNewsData, selectNews } from '../Pages/News/NewsSlice'

export default function App() {
  const dispatch = useDispatch()
  const coins = useSelector(selectCoins)
  const news = useSelector(selectNews)
  const currency = useSelector(selectCurrency)

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(getCurrencies({ limit: 1000, currency: currency }))
    }
    if (news.length === 0) {
      dispatch(getNewsData())
    }
  }, [dispatch, coins.length, news.length, currency])

  useEffect(() => {
    dispatch(getCurrencies({ limit: 1000, currency: currency }))
  }, [currency, dispatch])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Main />} />
          <Route path="/bullishCoins" element={<BullishCoins />} />
          <Route path="/bearishCoins" element={<BearishCoins />} />
          <Route path="/save" element={<Save />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  )
}
