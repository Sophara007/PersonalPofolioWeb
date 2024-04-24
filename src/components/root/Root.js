import React, { useState, useRef, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from '../../resource/Root.module.css';

export const ROUTES = {
    HOME: '/',
    ABOUTME: 'about',
    SKILL: 'skill',
    CONTACT: 'contact'
};

function Root() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on cleanup
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    return (
        <>
            <div className={styles.menuicon}>
                <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"} onClick={toggleMenu} id={styles.menuButton}></i>
            </div>
            {isMenuOpen && (
                <div ref={menuRef} className={styles.navigation}>
                    <NavLink to={ROUTES.HOME} >Home</NavLink>
                    <NavLink to={ROUTES.ABOUTME}>About Me</NavLink>
                    <NavLink to={ROUTES.SKILL}>My Skills</NavLink>
                </div>
            )}
            <nav className={styles.narbar}>
                <div className={styles.standby}>
                    <NavLink to={ROUTES.HOME}>Home</NavLink>
                    <NavLink to={ROUTES.ABOUTME}>About Me</NavLink>
                    <NavLink to={ROUTES.SKILL}>My Skills</NavLink>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Root;
