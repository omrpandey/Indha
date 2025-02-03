import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Dashboard } from "./components/Dashboard";
import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Join } from "./components/Join";
import { OrderDetails } from "./components/OrderDetails"
import { Contact } from "./components/Contact";
import { Productpage } from "./components/Productpage";
import { Cart } from "./components/Cart";
import { Productui } from "./components/Productui";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Productinsert } from "./components/Productinsert";
import { Sales } from "./components/Sales";
import { Wishlist } from "./components/Wishlist";
import { Layout } from "./components/Layout";
import { AdminLayout } from "./components/AdminLayout";
import { Address } from './components/Address';
import { Try } from './components/Try';
import { Checkout } from './components/Checkout';
import { Orders } from './components/Orders';
import { Update } from './components/Update';
import {AdmDash} from './components/AdmDash'
import "./App.css";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productpage" element={<Productpage />} />
        <Route path="/productui/:productId" element={<Productui />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Sales" element={<Sales />} />
        <Route path="/orderdetails" element={<OrderDetails />} />
        < Route path="/admindashboard" element={<AdmDash />} />
  <Route path="/productinsert" element={<Productinsert />} />

       
         <Route path="/layout/*" element={<Layout />} /> 
       

    {/* =================================user admin ========================== */}
        <Route path="/admin/*" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="address" element={<Address />} />
          <Route path="order" element={<Orders />} />
          <Route path="update" element={<Update />} />
        </Route>
        {/* =============admin ===================== */}
     
      </Routes>
      <Footer />
    </Router>
  );
};
