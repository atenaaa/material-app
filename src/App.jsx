
 import { useState } from 'react';
 import { ThemeProvider } from '@mui/material';
 import { BrowserRouter,Route,Routes} from 'react-router-dom';


 import theme from './components/ui/Theme'
 import Header from "./components/ui/Header";
 import Footer from './components/ui/Footer';
 import LandingPage from './LandingPage';
 import Services from './Services';
 import CustomSoftware from './CustomSoftware';
 import About from './components/ui/About';
 import Contact from "./components/ui/Contact"
 import Estimate from './components/ui/Estimate';
 import Revolution from './components/ui/Revolution';
 import MobileApps from "./components/ui/MobileApps"

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter> 
       <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
       <Routes>
         <Route  path="/" element={<LandingPage/>} /> 
         <Route  path="/services" element={<Services />}/> 
         <Route  path="/customsoftware" element={<CustomSoftware selectedIndex={selectedIndex}/>}/> 
         <Route  path="/mobileapps" element={<MobileApps/>}/> 
         <Route  path="/websites" element={<div>websites</div>}/> 
         <Route  path="/revolution" element={<Revolution/>}/> 
         <Route  path="/about" element={<About/>}/> 
         <Route  path="/contact" element={<Contact/>}/> 
         <Route  path="/estimate" element={<Estimate/>}/> 
       </Routes> 
         <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    
  </ThemeProvider>
    
  );
}

export default App;
