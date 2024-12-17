import {Header} from './components/Header';
import {Home} from './components/Home';
import {Footer} from './components/Footer';
// import {Product} from './components/Productinsert';
import {About} from './components/About';
import {Blog} from './components/Blog';
import {Join} from './components/Join';
import {Contact} from './components/Contact';
import {Main} from './Admin/Main'
import {Productpage} from './components/Productpage';
import {Productui} from './components/Productui';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {Productinsert} from './components/Productinsert';


import './App.css';
function App() {
  return (
   <>
<Router>
<Header />
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/product' element={<Productpage/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/blog' element={<Blog/>}></Route>
  <Route path='/join' element={<Join/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/main' element={<Main/>}></Route>
  {/* <Route path='/productpage' element={<Product/>}></Route> */}
  <Route path='/productui' element={<Productui/>}></Route>
  <Route path='/productpage' element={<Productpage/>}></Route>
  <Route path='/productinsert' element={<Productinsert/>}></Route>
</Routes>
<Footer />
</Router>
   </> 
  );
}

export default App;
