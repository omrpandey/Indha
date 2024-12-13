import {Header} from './components/Header';
import {Home} from './components/Home';
import {Footer} from './components/Footer';
import {Product} from './components/Product';
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
</Routes>
<Footer />
</Router>
   </>
  );
}

export default App;
