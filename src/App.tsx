import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import ApplyPage from './pages/ApplyPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="apply" element={<ApplyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
