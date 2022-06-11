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
import { selectCoins } from '../Pages/Main/MainSlice'
import { getCurrencies } from '../Pages/Main/MainSlice'

export default function App() {
  const dispatch = useDispatch()
  const coins = useSelector(selectCoins)

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(getCurrencies())
    }
  }, [dispatch, coins.length])

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
