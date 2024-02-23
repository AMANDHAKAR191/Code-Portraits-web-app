import React, { useState } from "react";
import './navBar.css'
import logo from "../../assets/Code Portraits logo dark.svg"
import burgerMenu from "../../assets/burger-menu-right.svg"
import {Link} from 'react-scroll'

const NavBar = () =>{
    const [showMenu, setShowMenu] = useState(false)
    return (
    <nav className="navBar">
        <img className="logo" src={logo} alt="logo"/>
        <div className="desktopMenu">
            <Link activeClass="active" to='hero' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass="active" to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={()=>setShowMenu(false)}>works</Link>
            <Link activeClass="active" to='footer' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={()=>setShowMenu(false)}>Shop</Link>
        </div>
        <button className="desktopMenuButton" onClick={()=>{
            document.getElementById('contact').scrollIntoView({behavior:"smooth"})
        }}>Contact Me</button>
        <img className="mobMenu" src={burgerMenu} alt="Menu" onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass="active" to='hero' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass="active" to='works' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>works</Link>
            <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            <Link activeClass="active" to='footer' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Shop</Link>
        </div>
    </nav>
    )
}

export default NavBar