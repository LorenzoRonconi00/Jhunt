import Navbar from './components/Navbar'
import Hero from "./components/Hero"

export default function Home() {
  return (
    <div className='h-screen bg-white'>
      <Navbar/>
      <Hero />
    </div>
  )
}
