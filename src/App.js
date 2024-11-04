import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Homepage = lazy(() => import('./components/Homepage.jsx'));
const ProductDetail = lazy(() => import('./components/ProductDetail.jsx'));
const Checkout = lazy(() => import('./components/Checkout'));
const PaymentStatus = lazy(() => import('./components/PaymentStatus.jsx'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/payment-status" element={<PaymentStatus/>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
