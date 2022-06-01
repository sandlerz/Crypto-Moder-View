import { Route, Routes } from 'react-router-dom'
import { Main, High, Low, Save, News, Error } from '../Pages/index'

export default function App() {
  return (
    <Routes>
      <Route to="/" element={Main} />
      <Route to="/high" element={High} />
      <Route to="/low" element={Low} />
      <Route to="/save" element={Save} />
      <Route to="/news" element={News} />
      <Route to="*" element={Error} />
    </Routes>
  )
}
