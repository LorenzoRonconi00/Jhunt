import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className='h-screen bg-white'>
      <Navbar/>
      <Hero />
      <Footer />
    </div>
  )
}
