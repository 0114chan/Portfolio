import React, { useState } from 'react';
import styles from '../../styles/Navbar.module.css';

interface NavbarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection, isDarkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (section: string) => {
        setActiveSection(section);
        setIsMenuOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${isMenuOpen ? styles.open : ''}`}>
            <div className={styles.logo}>PORTFOLIO</div>
            <div className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={styles.navLinks}>
                <li>
                    <a href="/home" className={activeSection === 'home' ? styles.active : ''} onClick={() => handleNavClick('home')}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="/AboutMe" className={activeSection === 'about' ? styles.active : ''} onClick={() => handleNavClick('AboutMe')}>
                        About
                    </a>
                </li>
                <li>
                    <a href="/projects" className={activeSection === 'Projects' ? styles.active : ''} onClick={() => handleNavClick('Projects')}>
                        Projects
                    </a>
                </li>
                <li>
                    <a href="/Skills" className={activeSection === 'skills' ? styles.active : ''} onClick={() => handleNavClick('Skills')}>
                        Skills
                    </a>
                </li>
                <li>
                    <a href="/Contact" className={activeSection === 'contact' ? styles.active : ''} onClick={() => handleNavClick('Contact')}>
                        Contact
                    </a>
                </li>
                <li>
                    <button onClick={toggleDarkMode} className={styles.darkModeToggle}>
                        {isDarkMode ? '라이트 모드' : '다크 모드'}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;