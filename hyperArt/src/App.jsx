import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from "./Components/Navbar/Navbar"


function App() {

  return (
    <>
      <div className='min-h-screen bg-slate-950 text-white'>
        <Navbar/>

        <main className='max-w-6xl mx-auto px-4'>
          <Hero/>
        </main>
      </div>

    </>
  )
}

export default App
