import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/Accordian'
import RandomColor from './components/RandomColor'
import StarRating from './components/StarRating'
import ImageSlider from './components/ImageSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col gap-4'>
      {/* <Accordian/>
      <RandomColor/> */}
      {/* <StarRating/> */}
      <ImageSlider url={`https://picsum.photos/v2/list?page=1&limit=10`} />
    </div>
  )
}

export default App
