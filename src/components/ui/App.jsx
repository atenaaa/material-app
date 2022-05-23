
 
 import { ThemeProvider } from '@mui/material';
 import { BrowserRouter,Route,Routes} from 'react-router-dom';


 import theme from './Theme'
 import Header from "./Header";
 import Footer from './Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter> 
       <Header/>
       <Routes>
         <Route  path="/" element={<div style={{height:"2000px"}}>home</div>} /> 
         <Route  path="/services" element={<div>services</div>}/> 
         <Route  path="/customsoftware" element={<div>customsoftware</div>}/> 
         <Route  path="/mobileapps" element={<div>mobileapps</div>}/> 
         <Route  path="/websites" element={<div>websites</div>}/> 
         <Route  path="/revolution" element={<div>revolotion</div>}/> 
         <Route  path="/about" element={<div>about</div>}/> 
         <Route  path="/contact" element={<div>contact</div>}/> 
         <Route  path="/estimate" element={<div>estimate</div>}/> 
       </Routes> 
         <Footer/>
      </BrowserRouter>
    
  </ThemeProvider>
    
  );
}

export default App;
