import React, {useState} from "react";
import { NavLink , Outlet} from "react-router-dom";
import styles from '../../resource/Root.module.css';

export const ROUTES = {
    HOME: '/',
ABOUTME: 'about',
SKILL: 'skill',
CONTACT: 'contact'
};

 function Root() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return(
        <>
         <diV className={styles.menuicon}>
         <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"} onClick={toggleMenu} id={styles.menuButton}></i>
         </diV>
      {isMenuOpen &&(
        <div className={styles.navigation}>
        <NavLink to={ROUTES.HOME} >Home</NavLink>
        <NavLink to={ROUTES.ABOUTME} >About Me</NavLink>
        <NavLink to={ROUTES.SKILL} >My Skills</NavLink>
        </div>)}
        <nav className={styles.narbar}>
       
        <div className={styles.standby}>
        <NavLink to={ROUTES.HOME} >Home</NavLink>
        <NavLink to={ROUTES.ABOUTME} >About Me</NavLink>
        <NavLink to={ROUTES.SKILL} >My Skills</NavLink>
        </div>
        </nav>
        <Outlet />
        
        </>
    )
}

export default Root;