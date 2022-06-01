import { Route, Routes } from 'react-router-dom'
import { Main, High, Low, Save, News, Error } from '../Pages/index'
import Navbar from '../Components/Navbar'

export default function App() {
  return (
    <Routes>
      <Route to="/" element={<Navbar />}>
        <Route index element={<Main />} />
        <Route to="/high" element={<High />} />
        <Route to="/low" element={<Low />} />
        <Route to="/save" element={<Save />} />
        <Route to="/news" element={<News />} />
        <Route to="*" element={<Error />} />
      </Route>
    </Routes>
  )
}
