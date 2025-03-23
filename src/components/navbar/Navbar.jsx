import { useState } from 'react'
import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'
import { useNavigate } from "react-router-dom";
import { x } from 'react-icons-kit/feather/x'
import './Navbar.css';

export default function Navbar() {

  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate()

  function handleToggle() {
    console.log('toggle')
    setToggle(!toggle);
  }

  return (
    <>
      <nav className={toggle ? 'navbar expanded' : 'navbar'}>
        <a className={toggle ? 'logo expanded' : 'logo'} href='https://deltaclub-huetten.ch/'>
          <img className={toggle ? 'logo expanded' : 'logo'} src='assets/logo_schwarz.png' alt='Logo DCH' />
        </a>
        <div className='toggle-icon' onClick={handleToggle}>
          {toggle ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
        </div>
        <ul className='links'>
          <li onClick={() => { navigate('/ueber-uns') }}>Über uns</li>
          <li onClick={() => { navigate('/fluggebiete') }}>Fluggebiete</li>
          <li onClick={() => { navigate('/club-events') }}>Club Events</li>
          <li onClick={() => { navigate('/gallerie') }}>Gallerie</li>
          <li onClick={() => { navigate('/videos') }}>Videos</li>
          <li onClick={() => { navigate('/flugpraxis') }}>Flugpraxis</li>
          <li onClick={() => { navigate('/selber-fliegen') }}>Selber fliegen?</li>
          <li onClick={() => { navigate('/merch') }}>Merch</li>
          {/* <li onClick={() => { navigate('/wind') }}>Wind</li> */}
        </ul>
      </nav>
    </>
  )
}