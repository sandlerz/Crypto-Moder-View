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

export default function App() {
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
