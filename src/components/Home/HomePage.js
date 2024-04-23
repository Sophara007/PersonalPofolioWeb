import React from "react";
import transparentImage from "../../resource/img/transparent.jpg.png";
import styles from "../../resource/Home.module.css";
import "@fortawesome/fontawesome-free/css/all.css";
import laptop from "../../resource/img/laptop.jpg"
import earth from "../../resource/img/viewearth.jpg";
import galaxy from "../../resource/img/galaxy.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Home() {
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact');
  };
  return (
    <>
      <main className={styles.mainarea}>
        <div className={styles.container}>
          <div className={styles.introduction}>
            <h1>
              Hello, My name is Kiet Sophara.
              <br />
              I'm a Web Developer
            </h1>
            <p>This is My Porfolio</p>
            <button className={styles.contact} onClick={handleClick}>Contact Me</button>
            <div className={styles.medias}>
              
                <Link to="https://www.linkedin.com/in/kiet-sophara-46b8ab2a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" >
                <i class="fa-brands fa-linkedin" />
                </Link> 
                {/* <Link to="https://www.youtube.com/watch?v=2gJUcTe727E&list=RDSjyAknd6jyE&index=3" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-facebook"></i>
              </Link> */}
              <Link to="https://t.me/SopharaKiet" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-telegram"></i>
              </Link>
            </div>
          </div>
          <img src={transparentImage} alt="Profile img" />
        </div>
        <div className={styles.technologies}>
          <h2>Features Projects</h2>

          <div className={styles.cards}>
          <img src={earth} alt="earth"/>
            <h3>card1</h3>

            <button className={styles.cardbutton}>Learn more</button>
          </div>
          <div className={styles.cards}>
            <img src={galaxy} alt="galaxy"/>
            <h3>card2</h3>
            <button className={styles.cardbutton}>Learn more</button>
          </div>
          <div className={styles.cards}>
          <img src={laptop} alt="laptop"/>
            <h3>card3</h3>
            <button className={styles.cardbutton}>Learn more</button>
          </div>
        </div>
        <footer>
          <p>&copy; 2024. All right reserved by Sophara Kiet</p>
        </footer>
      </main>
    </>
  );
}
