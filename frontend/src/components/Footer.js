import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../images/widuheader.jpg';
import inst from '../images/instagram.png';
import linke from '../images/linkedin.png';

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-100 border-t border-b">
                <div className="footer max-w-full mx-auto px-4 sm:px-6">

                    {/* Top area: Blocks */}
                    <div className="flex flex-col md:flex-row items-center justify-around text-center space-y-6 md:space-y-0">

                        {/* 1st block */}
                        <div className="flex-shrink-0 md:w-1/4">
                            <img alt="logo" className="rounded-t duration-1000 w-72 mx-auto md:mx-0" src={logo} />
                        </div>

                        {/* 2nd block */}
                        <div className="md:w-1/4">
                            <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
                            <ul className="text-md">
                                <li className="mb-3">
                                    <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                                </li>
                                <li className="mb-3">
                                    <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Services</HashLink>
                                </li>
                                <li className="mb-3">
                                    <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                                </li>
                            </ul>
                        </div>

                        {/* 3rd block */}
                        <div className="md:w-1/4">
                            <h6 className="text-[#013289] text-xl font-bold bg:mt-2">NUESTROS SERVICIOS</h6>
                            <ul className="text-md">
                                <li className="mb-3">
                                    <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Desarrollo Web</Link>
                                </li>
                                <li className="mb-3">
                                    <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Servicios de Dominio y Alojamiento</Link>
                                </li>
                                <li className="mb-3">
                                    <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Consultoría General</Link>
                                </li>
                            </ul>
                        </div>

                        {/* 4th block */}
                        <div className="md:w-1/4">
                            <h6 className="text-[#013289] text-xl font-bold mb-4">ENLACES DE REDES SOCIALES</h6>
                            <p className="text-md font-medium mb-6">Síguenos en las redes sociales.</p>
                            <div className="flex justify-center space-x-4">
                                <Link to="#" aria-label="LinkedIn">
                                    <img src={linke} alt='LinkedIn' className='w-10' />
                                </Link>
                                <Link to="#" aria-label="Instagram">
                                    <img src={inst} alt='Instagram' className='w-10' />
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Bottom area */}
                    <div className="flex flex-wrap items-center justify-center md:justify-between mx-auto px-4 mt-10">
                        <div className="w-full text-center">
                            <p className="text-sm text-gray-600 font-semibold py-2">
                                Copyright &copy; {new Date().getFullYear()}{" "}
                                <HashLink to="#" className="hover:text-gray-900">WiDu Web</HashLink>. Todos los derechos reservados.
                            </p>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
}

export default Footer;
