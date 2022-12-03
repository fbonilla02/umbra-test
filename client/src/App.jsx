import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ItemContextProvider } from './context/ItemContext'
import Mainpage from './page/Mainpage'
import NotFound from './page/NotFound'

function App() {
  

  return (
    <ItemContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Mainpage/>}/>
        <Route path='/:id'  element={<Mainpage/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </ItemContextProvider>
  )
}

export default App
