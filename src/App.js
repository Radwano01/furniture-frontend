import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/footer/Footer';
import Navbar from './components/layout/navbar/Navbar';
import Home from './components/home/Home';
import Services from './components/services-comp/Services';
import About from './components/about/About';
import Furnitures from './components/furnitures/Furnitures';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/furnitures' element={<Furnitures/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
