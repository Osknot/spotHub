//import './App.css'
import './index.css'
import { HomePage } from './pages/Home'
import { Routes, Route, Link } from 'react-router-dom'
import { BrandPage } from './pages/Brand'
import { DesignPage } from './pages/Design'
import { BuildPage } from './pages/Build'
import { ContactPage } from './pages/Contact'
import { AutomatePage } from './pages/Automate'
import { Navbar } from './components/Navbar'

function App() {
  return (
  <>
   <Navbar/>
  
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/brand" element={<BrandPage/>}/>
      <Route path="/design" element={<DesignPage/>}/>
      <Route path="/automate" element={<AutomatePage/>}/>
      <Route path="/build" element={<BuildPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
    </Routes>
  </>
  )
}

export default App


//In the app, have all the pages that you want to go to and then you will add the link to them using react router