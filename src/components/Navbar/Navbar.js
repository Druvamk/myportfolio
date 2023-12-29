import React, { useState } from 'react';
import './Navbar.css';
import druva from '../../assests/druva.png';
import { Link } from 'react-scroll';
import contacting from '../../assests/123.png'
import menu from '../../assests/pngegg (58).png'
const Navbar = () => {
  const [showMenu,setShowmenu] = useState(false)
  return (
    
   <nav className='navbar' id='id1'>
    <img src={druva} alt='druva logo' className='logo'/>
    <div className='destopMenu'>
     <Link activeClass='active' to='id1' spy={true} smooth={true} offset={-100} duration={500} className='destopMenuListItem'   >Home</Link>
     <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='destopMenuListItem' >About</Link>
     <Link activeClass='active' to='skills1' spy={true} smooth={true} offset={-100} duration={500} className='destopMenuListItem' >Portfolio</Link>
    </div>
    <button className='destopMenuBtn' onClick={() => {
      document.getElementById("contact").scrollIntoView({behavior:"smooth"})
    }}>
      <img src={contacting} alt='' className='destopMenuImg'/>Contact Me
    </button>
    <img src={menu} alt='druva logo' className='mobmenu' onClick={() => setShowmenu(!showMenu)}/>
    <div className='navmenu' style={{display : showMenu? 'flex':'none'}}>
     <Link activeClass='active' to='id1' spy={true} smooth={true} offset={-100} duration={1000} className='ListItem' onClick={() => setShowmenu(false)}>Home</Link>
     <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowmenu(false)}>About</Link>
     <Link activeClass='active' to='skills1' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowmenu(false)}>Portfolio</Link>
     <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowmenu(false)}>Contact</Link>
    </div>
   </nav>
   
  )
}

export default Navbar
