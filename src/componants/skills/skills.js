import React from 'react';
import "./skills.css"
import tempImage from "../../assets/Vector a.svg"

const Skills = () =>{
    return (
        <section className="skills" id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">Transforming Ideas into Cutting-Edge Solutions</span>
            <div class="skillBars">
                <div class="skillBar">
                    <img src={tempImage} alt="skill bar image" class="skillBarImg"/>
                    <div class="skillBarText">
                        <h2>Android Developer</h2>
                        <p>Experienced in crafting user-friendly Android apps with Java/Kotlin, focusing on seamless functionality and innovation.</p>
                    </div>
                </div>
                <div class="skillBar">
                    <img src={tempImage} alt="skill bar image" class="skillBarImg"/>
                    <div class="skillBarText">
                        <h2>Web Developer</h2>
                        <p>Skilled in building dynamic websites with HTML, CSS, and JavaScript, emphasizing engaging user experiences and performance optimization.</p>
                    </div>
                </div>
                <div class="skillBar">
                    <img src={tempImage} alt="skill bar image" class="skillBarImg"/>
                    <div class="skillBarText">
                        <h2>UI Designer</h2>
                        <p>Passionate about creating visually appealing interfaces that prioritize user experience and brand identity, from wireframing to final design.</p>
                    </div>
                </div>
            </div>
        </section>
        )
    }
    export default Skills