import { useState, useEffect } from 'react';


function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('lock');
        } else {
            document.body.classList.remove('lock');
        }
        return () => {
            document.body.classList.remove('lock');
        };
    }, [isMenuOpen]);

    return (
        <header className="header">
            <div className="header__container">
                <a href="#" className="header__name">StarBucks</a>
                <nav className={`header__menu menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="menu__list">
                        <li className="menu__item">
                            <a href="#" className="menu__link" onClick={toggleMenu}>Home</a>
                        </li>
                        <li className="menu__item">
                            <a href="#" className="menu__link" onClick={toggleMenu}>Select</a>
                        </li>
                        <li className="menu__item">
                            <a href="#" className="menu__link" onClick={toggleMenu}>Shop</a>
                        </li>
                    </ul>
                </nav>
                <div className={`header__burger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="header__burger-line"></span>
                    <span className="header__burger-line"></span>
                    <span className="header__burger-line"></span>
                </div>
            </div>
        </header >
    )
}

export default Header;