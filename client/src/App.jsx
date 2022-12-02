import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Mainpage from './page/Mainpage'
import NotFound from './page/NotFound'

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Mainpage/>}/>
        <Route path='/:id'  element={<Mainpage/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
