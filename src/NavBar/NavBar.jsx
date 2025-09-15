import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react'

function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navContainer}>
            <Link to="/" className={styles.navLogo}>UpDays</Link>
            <div className={`${styles.navItems} ${menuOpen ? styles.navItemsOpen : ''}`}>
                <Link to="/" className={styles.navLink}>Home</Link>
                <Link to="/good-habits" className={styles.navLink}>Good Habits</Link>
                <Link to="/bad-habits" className={styles.navLink}>Bad Habits</Link>
                <Link to="/resources" className={styles.navLink}>Resources</Link>
                <Link to="/account" className={styles.navLink}>Account</Link>
            </div>
            <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

export default NavBar