import React from 'react';
import '../work/work.css'
import workImg from "../../assets/image1.svg"
import {Link} from 'react-scroll'

const Work = () =>{
    return (
        <section className="works">
            <h2 className="workTitle">My Portfolio</h2>
            <span className="workDesc">I take pride in paying attention to smallest details</span>
            <div className="workImgs">
                <img src={workImg} alt="work Image" className="workImg"/>
                <img src={workImg} alt="work Image" className="workImg"/>
                <img src={workImg} alt="work Image" className="workImg"/>
                <img src={workImg} alt="work Image" className="workImg"/>
                <img src={workImg} alt="work Image" className="workImg"/>
                <img src={workImg} alt="work Image" className="workImg"/>
            </div>
            <Link to="footer"><button className="btn">Hire Me</button></Link>
        </section>
        )
    }
    export default Work