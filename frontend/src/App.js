import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
// import { Product } from './components/Productinsert';
import { About } from './components/About';
import { Blog } from './components/Blog';
import { Join } from './components/Join';
import { Contact } from './components/Contact';
import { Main } from './Admin/Main';
import { Productpage } from './components/Productpage';
import { Cart } from './components/Cart';
import { Productui } from './components/Productui';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Productinsert } from './components/Productinsert';
import {Sales} from './components/Sales'

import './App.css';
import { Wishlist } from './components/Wishlist';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Productpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/main" element={<Main />} />
          {/* <Route path='/productpage' element={<Product/>}></Route> */}
          <Route path="/productui/:productId" element={<Productui />} />
          <Route path="/productpage" element={<Productpage />} />
          <Route path="/productinsert" element={<Productinsert />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/sale" element={<Sales />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
