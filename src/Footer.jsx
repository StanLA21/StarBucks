import { useState, } from 'react';
const footerLinks = [
    {
        id: 1,
        title: 'Main',
        href: '#more',
        links: ['Buy', 'More']
    },
    {
        id: 2,
        title: 'We make',
        href: '#more',
        links: ['Process']
    },
    {
        id: 3,
        title: 'Products',
        href: '#products',
        links: ['Cappuccino', 'Late', 'Machiatoast']
    },
    {
        id: 4,
        title: 'Events',
        href: '#events',
        links: ['Drinks', 'Eat']
    },
]

function FooterItem({ title, links, href }) {
    return (
        <div className="footer__menu-item">
            <h4 className="footer__menu-title">{title}</h4>
            {links.map((linkText, index) => (
                <a key={index} href={href} className="footer__menu-link">
                    {linkText}
                </a>
            ))}
        </div>
    )
}




function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__block">
                    <div className="footer__logo">
                        <a href="#" className="footer__logo-link">StarBucks</a>
                    </div>
                    <nav className="footer__menu">
                        {footerLinks.map((item) => (
                            <FooterItem
                                key={item.id}
                                title={item.title}
                                href={item.href}
                                links={item.links} />
                        ))}
                    </nav>
                    <div className="footer__button">
                        <a href="#" className="footer__button-up"><img src="products/arrow/arrow.svg" alt="" /></a>
                    </div>
                </div>
                <p className="footer__me">© Copyright - <span>StarBucks</span> | Coded by <span>Stanislav Aloshyn</span></p>
            </div>
        </footer>
    )
}

export default Footer;