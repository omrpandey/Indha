import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Dashboard } from "./components/Dashboard";
import admHeader from './components/admHeader';
import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Join } from "./components/Join";
import { OrderDetails } from "./components/OrderDetails"
import { Contact } from "./components/Contact";
import { Productpage } from "./components/Productpage";
import { Cart } from "./components/Cart";
import  Showcontact  from "./components/Showcontact";
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
import { MailSender } from './components/Bulk-mail';
import {PaymentPage} from './components/payment-gateway';
import {Admindashboard} from './components/Admindashboard'
import UserPage from "./components/UserPage";
import ShowProduct from "./components/ShowProduct";
import {Productedit} from './components/Productedit';
import { AdminDash } from "./components/AdminDash";
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
        {/* < Route path="/admindashboard" element={<AdmDash />} />
  <Route path="/productinsert" element={<Productinsert />} /> */}
         <Route path="/layout/*" element={<Layout />} /> 
       

    {/* =================================user admin ========================== */}
        <Route path="/admin/*" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="address" element={<Address />} />
          <Route path="order" element={<Orders />} />
          <Route path="update" element={<Update />} />
          <Route path="payment" element={<PaymentPage />} />
        </Route>
        {/* =============admin ===================== */}
        <Route path="/admindashboard/*" element={<Admindashboard />}>
          <Route path="productinsert" element={<Productinsert />} />
          <Route path="userpage" element={<UserPage />} />
          <Route path="admindash" element={<AdminDash />} />
          <Route path="showcontact" element={<Showcontact />} />
          <Route path="showproduct" element={<ShowProduct />} />
          <Route path="productedit/:id" element={<Productedit />} />
          <Route path="bulkmail" element={<MailSender />} />
        </Route>

   
      </Routes>
      <Footer />
    </Router>
  );
};
