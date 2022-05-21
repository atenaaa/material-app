
 
 import { ThemeProvider } from '@mui/material';
 import { BrowserRouter,Route,Routes} from 'react-router-dom';

 import theme from './Theme'
 import Header from "./Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter> 
       <Header/>
       <Routes>
         <Route  path="/" element={<>home</>}/> 
         <Route  path="/services" element={<>services</>}/> 
         <Route  path="/customsoftware" element={<>customsoftware</>}/> 
         <Route  path="/mobileapps" element={<>mobileapps</>}/> 
         <Route  path="/websites" element={<>websites</>}/> 
         <Route  path="/revolution" element={<>revolotion</>}/> 
         <Route  path="/about" element={<>about</>}/> 
         <Route  path="/contact" element={<>contact</>}/> 
         <Route  path="/estimate" element={<>estimate</>}/> 
       </Routes>
      </BrowserRouter>
    
  </ThemeProvider>
    
  );
}

export default App;
