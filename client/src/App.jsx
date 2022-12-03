import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import { ItemContextProvider } from './context/ItemContext'
import Mainpage from './page/Mainpage'
import NotFound from './page/NotFound'

function App() {
  const {pathname} = useLocation()


  return (
    <ItemContextProvider>
      { pathname !== '/' ? null : <Navbar/> }
      <Routes>
        <Route path='/'  element={<Mainpage/>}/>
        <Route path='/photos/:id'  element={<Modal/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </ItemContextProvider>
  )
}

export default App
