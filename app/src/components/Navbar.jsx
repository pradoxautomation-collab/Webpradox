import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const isActive = (path) => location.pathname === path ? 'active-link' : '';

    return (
        <header className="navbar-container">
            <div className="container navbar-content">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <span className="logo-text text-gradient">PRADOX</span>
                    <span className="logo-sub">AUTOMATION</span>
                </Link>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </div>

                <nav className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
                    <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
                    <Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={closeMenu}>Serviços</Link>
                    <Link to="/blog" className={`nav-link ${isActive('/blog')}`} onClick={closeMenu}>Blog</Link>
                    <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>Contato</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
