import React from 'react';
import './hero.css';
import bg from "../../assets/image1.svg"
import {Link} from 'react-scroll'

const Hero = () =>{
    return (
        <section className="hero" id="hero">
        <div className="heroContent">
            <span className="hello">Hello,</span>
            <span className="introText">
                I'm <span className="introName">Aman</span><br />Android Developer
            </span>
            <p className="introPara">This is into paragraph.</p>
            <Link to="footer"><button className="btn">Hire Me</button></Link>
        </div>
        
        <img src={bg} alt="background" className="bg"/>
        </section>
        
        )
    }
    
    export default Hero