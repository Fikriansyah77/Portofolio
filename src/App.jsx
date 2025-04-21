import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
/*mport Themes from './components/Themes'*/
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portofolio from './pages/portofolio/Portofolio'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portofolio" element={<Portofolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
