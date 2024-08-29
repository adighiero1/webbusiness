import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold hover:text-blue-900" smooth to="/#about">
            Sobre Nosotros
            </HashLink>
            <HashLink className="px-4 font-extrabold hover:text-blue-900" smooth to="/#services">
            Servicios
            </HashLink>
            <HashLink className="bg-blue-900 transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" to="/contact#contact">
            Contáctenos
            </HashLink>
        </>
    )
}

export default NavLinks;
