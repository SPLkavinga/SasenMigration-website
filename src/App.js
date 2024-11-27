import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Services from './Pages/Services';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Services/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
