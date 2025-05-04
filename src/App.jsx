import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Info from './pages/Info'
import About from './pages/About'

function App() {

  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ margin: 5 }}>Home</Link> | 
        <Link to='/info' style={{ margin: 5 }}>Info</Link> | 
        <Link to="/about" style={{ margin: 5 }}>About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
