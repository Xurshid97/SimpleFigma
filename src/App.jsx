import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import PageNotFound from './components/PageNotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
