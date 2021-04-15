import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Pdf_main from './Components/Pdf_main';
import Reviews from './Components/Reviews';
import Footer from './Components/Footer';
import Disc from './Components/Disc';
import ShowCasing from './Components/ShowCasing';
function App() {
  return (
  <div>
    <Navbar/>
    <Hero/>
    <Pdf_main/>
    <ShowCasing />
    <Reviews/>
    <Disc/>
    <Footer />
  </div>
 );
}

export default App;
