import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import './App.css';
import Home from './pages/Home.jsx';

import Login from './pages/Login.jsx';
import AdminPage from './pages/AdminPage.jsx';
import Products from './pages/Products.jsx';
import Categories from './pages/Categories.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';

import SignupPage from './pages/SignupPage.jsx';
import { useUserStore } from './stores/useUserStore.js';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';



const App = () => {
  const { user, checkAuth, checkingAuth } = useUserStore();
  useEffect(() => {
		checkAuth();
	}, [checkAuth]);

  // if (checkingAuth) return <LoadingSpinner />;

  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signup' element={!user ? <SignupPage /> : <Navigate to='/' />} />
          <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
          <Route path='/products'element={<Products />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path='/adminpage' element={<AdminPage />}/>
          <Route path='/categories' element={<Categories />}/>
          <Route path='/profile' element={<ProfilePage />}/>
          <Route path='/contactus' element={<Contact />}/>
          <Route path='/services' element={<Services />}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App