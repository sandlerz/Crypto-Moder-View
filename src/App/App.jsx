import { Route, Routes } from 'react-router-dom'
import { Main, High, Low, Save, News, Error } from '../Pages/index'
import Navbar from '../Components/Navbar'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Main />} />
        <Route path="/high" element={<High />} />
        <Route path="/low" element={<Low />} />
        <Route path="/save" element={<Save />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}
