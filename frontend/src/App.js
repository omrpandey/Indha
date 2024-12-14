import {Header} from './components/Header';
import {Home} from './components/Home';
import {Footer} from './components/Footer';
import {Product} from './components/Product';
import {About} from './components/About';
import {Blog} from './components/Blog';
import {Join} from './components/Join';
import {Contact} from './components/Contact';
import {Main} from './Admin/Main'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
   <>
<Router>
<Header />
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/product' element={<Product/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/blog' element={<Blog/>}></Route>
  <Route path='/join' element={<Join/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/main' element={<Main/>}></Route>
</Routes>
<Footer />
</Router>
   </>
  );
}

export default App;
