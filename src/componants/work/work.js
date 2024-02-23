import React from 'react';
import '../work/work.css'
import workImg from "../../assets/image1.svg"
import {Link} from 'react-scroll'

const Work = () =>{
    return (
    <section className="works">
        <h2 className="workTitle">My Portfolio</h2>
        <span className="workDesc">I take pride in paying attention to smallest details</span>
        <div className="projectWorks">
            <div className="workdiv">
                <img src={workImg} alt="project Image" className="workImg" />
                <div className="projectDetails">
                    <h2 className="projectName">Project Title</h2>
                    <p className="projectDesc">Project Description</p>
                </div>
            </div>
            <div className="workdiv">
                <img src={workImg} alt="project Image" className="workImg" />
                <div className="projectDetails">
                    <h2 className="projectName">Project Title</h2>
                    <p className="projectDesc">Project Description</p>
                </div>
            </div>
            <div className="workdiv">
                <img src={workImg} alt="project Image" className="workImg" />
                <div className="projectDetails">
                    <h2 className="projectName">Project Title</h2>
                    <p className="projectDesc">Project Description</p>
                </div>
            </div>
            <div className="workdiv">
                <img src={workImg} alt="project Image" className="workImg" />
                <div className="projectDetails">
                    <h2 className="projectName">Project Title</h2>
                    <p className="projectDesc">Project Description</p>
                </div>
            </div>
            <div className="workdiv">
                <img src={workImg} alt="project Image" className="workImg" />
                <div className="projectDetails">
                    <h2 className="projectName">Project Title</h2>
                    <p className="projectDesc">Project Description</p>
                </div>
            </div>
            <div className="workdiv">
                <img src={workImg} alt="project Image" className="workImg" />
                <div className="projectDetails">
                    <h2 className="projectName">Project Title</h2>
                    <p className="projectDesc">Project Description</p>
                </div>
            </div>
        </div>
        <Link to="footer"><button className="btn">See more</button></Link>
    </section>
    )
}
export default Work