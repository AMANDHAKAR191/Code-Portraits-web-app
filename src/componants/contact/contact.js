import React from 'react';
import './contact.css'
import githib from "../../assets/GitHub.svg"
import linked from "../../assets/LinkedIn.svg"
import gmail from "../../assets/GitHub.svg"
import instagram from "../../assets/Instagram.svg"

const Contact = () =>{
    return (
        <section className="contactPage" id='contactPage'>
            <div className="contact" id='contact'>
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactPageDesc">Please fill out the form below to discuss my work opprtunities.</span>
                <form action="" className="contactForm">
                    <input type="text" className="name" placeholder='Your name'/>
                    <input type="email" className="email" placeholder='Your email'/>
                    <textarea name="message" rows="5" className="message" placeholder='Your message'></textarea>
                    <button type='submit' value="send" className="submitBtn">Send</button>
                </form>
                <div className="links">
                    <img src={githib} alt="Icons" className="link"/>
                    <img src={linked} alt="Icons" className="link"/>
                    <img src={gmail} alt="Icons" className="link"/>
                    <img src={instagram} alt="Icons" className="link"/>
                </div>
            </div>
        </section>
    )
}
export default Contact