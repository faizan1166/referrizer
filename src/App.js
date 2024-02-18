import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import Banner from './Components/Banner';
import ToolsAndResources from './Components/ToolsAndResources';
import Marketplace from './Components/Marketplace';
import AddPartners from './Components/AddPartners';
import DevDocs from './Components/DevDocs';
import TestMonials from './Components/TestMonials';
import Accordian from './Components/Accordian';
import QuoteCards from './Components/QuoteCards';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <NavBar/>
    <Banner/>
    {/* <Marketplace/> */}
    <AddPartners/>
    <ToolsAndResources/>
    <DevDocs/>
    <TestMonials/>
    <Accordian/>
    <QuoteCards/>
    <Footer/>
    </>
  );
}

export default App;
