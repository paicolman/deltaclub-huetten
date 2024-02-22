
import { BrowserRouter as Navigate, Routes, Route } from 'react-router-dom'
import './App.css'
import ClubEvents from './pages/club-events/ClubEvents'
import Fluggebiete from './pages/fluggebiete/Fluggebiete'
import Flugpraxis from './pages/flugpraxis/Flugpraxis'
import FotoGallery from './pages/gallery/FotoGallery'
import Merch from './pages/merch/Merch'
import SelberFliegen from './pages/selber-fliegen/SelberFliegen'
import UeberUns from './pages/ueber-uns/UeberUns'
import Videos from './pages/videos/Videos'

function App() {

  return (
    <>
      <Navigate>
        <Routes>
          <Route path='/' element={<UeberUns />} />
          <Route path='/club-events' element={<ClubEvents />} />
          <Route path='/fluggebiete' element={<Fluggebiete />} />
          <Route path='/flugpraxis' element={<Flugpraxis />} />
          <Route path='/gallerie' element={<FotoGallery />} />
          <Route path='/merch' element={<Merch />} />
          <Route path='/selber-fliegen' element={<SelberFliegen />} />
          <Route path='/ueber-uns' element={<UeberUns />} />
          <Route path='/videos' element={<Videos />} />
        </Routes>
      </Navigate>
    </>
  )
}

export default App
