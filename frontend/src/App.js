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
import { Productui } from './components/Productui';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Productinsert } from './components/Productinsert';

import './App.css';

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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
