
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Experience', path: '/experience' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="navbar">
            <div className="container nav-content">
                <NavLink to="/" className="logo">
                    <Code2 size={28} color="var(--accent-primary)" />
                    <span>Yogi<span className="text-highlight">.dev</span></span>
                </NavLink>

                {/* Desktop Menu */}
                <ul className="nav-links desktop-only">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div className="mobile-menu-btn" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
