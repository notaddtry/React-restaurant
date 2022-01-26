import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFount from './pages/NotFount'
import Category from './pages/Category'
import Reciept from './pages/Reciept'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="container content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/meal/:id" element={<Reciept />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  )
}

export default App
