import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollCue from './components/ScrollCue'
import ScrollToHash from './components/ScrollToHash'
import ErrorPage from './screens/ErrorPage'
import { routes } from './routes'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />
      <ScrollCue />
      <ScrollToHash />
      <Routes>
        {routes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
