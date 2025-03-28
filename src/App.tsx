import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Services } from '@/pages/Services'
import { Philosophy } from '@/pages/Philosophy'
import { Toaster } from '@/components/ui/toaster'
import { useEffect } from 'react'
import { scrollToTop } from '@/lib/utils'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    scrollToTop()
  }, [location.pathname])

  return null
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/philosophy" element={<Philosophy />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  )
} 