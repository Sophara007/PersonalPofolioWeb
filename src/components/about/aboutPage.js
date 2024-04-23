import React from "react";
import aboutstyle from "../../resource/aboutme.module.css";
export function AboutPage() {
    return (
        <main className={aboutstyle.abouttmain}>
<div className={aboutstyle.mystory}>
            <p className={aboutstyle.intro}>Hello there!</p>
            <p className={aboutstyle.paragraph}>My name is Kiet Sophara. I'm currently a fourth-year student at Norton University,I've been diligently honing my skills in Web Development over the past several months.</p>
            <p className={aboutstyle.paragraph}>I am deeply passionate about coding and am constantly seeking opportunities to expand my knowledge and expertise. I am particularly interested in pursuing internship opportunities that will allow me to further develop my skills and contribute to innovative projects.</p>
            <p className={aboutstyle.paragraph}>In addition to my academic pursuits, I have a keen interest in sports, particularly football and swimming.</p>
            <p className={aboutstyle.paragraph}>If you have any exciting projects or internship openings available, I would love to connect and discuss how I can add value to your team!</p>
        </div>

        </main>
    )
}