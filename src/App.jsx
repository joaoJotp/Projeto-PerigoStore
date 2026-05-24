import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Categories from './components/Categories'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import ContactPage from './pages/ContactPage'
import CollectionPage from './pages/CollectionPage'
import ReviewsPage from './pages/ReviewsPage'
import NacionaisPage from './pages/NacionaisPage'
import SelcoesPage from './pages/SelcoesPage'
import InternacionaisPage from './pages/InternacionaisPage'
import { CartProvider } from './CartContext'

export default function App() {
  const [page, setPage] = useState('home')

  const navigate = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <CartProvider>
      <CartDrawer />
      {page === 'contact' && <ContactPage navigate={navigate} />}
      {page === 'collection' && <CollectionPage navigate={navigate} />}
      {page === 'reviews' && <ReviewsPage navigate={navigate} />}
      {page === 'nacionais' && <NacionaisPage navigate={navigate} />}
      {page === 'selecoes' && <SelcoesPage navigate={navigate} />}
      {page === 'internacionais' && <InternacionaisPage navigate={navigate} />}
      {page === 'home' && (
        <>
          <Navbar navigate={navigate} currentPage={page} />
          <Hero navigate={navigate} />
          <TrustBar />
          <Categories navigate={navigate} />
          <Products navigate={navigate} />
          <Testimonials navigate={navigate} />
          <Footer navigate={navigate} />
        </>
      )}
      {page !== 'home' && <Navbar navigate={navigate} currentPage={page} />}
    </CartProvider>
  )
}
