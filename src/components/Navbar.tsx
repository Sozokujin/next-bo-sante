import Image from 'next/image'
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../../public/logo_bo_sante.png';

export const Navbar = () => {
    const [display, setDisplay] = useState(false);

    function changeDisplay(){
        setDisplay(!display);
    }

    return(
    <nav className="fixed w-full top-0 left-0 bg-white px-2 py-2.5 shadow z-20">
    <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
            <Image src={logo} alt="Logo Océane Banhegyi Naturopathe Reflexologue Diététicienne Roanne" className="m-auto h-16 w-16"/>
        </div>
        <div className="flex lg:order-2">
        <a type="button" href="https://www.doctolib.fr/dieteticien/roanne/oceane-banhegyi" target="_blank" rel="noopener noreferrer" className="text-white bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 lg:mr-0">Prendre RDV</a>
            <button data-collapse-toggle="navbar-sticky" onClick={changeDisplay} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <RxHamburgerMenu></RxHamburgerMenu>
            </button>
        </div>
        <div className={"items-center justify-between "+(display?'':'hidden')+" w-full lg:flex lg:w-auto lg:order-1"} id="navbar-sticky">
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-white">
            <li>
                <a href="#presentation" className="block py-2 pl-3 pr-4 transition delay-150 duration-300 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent hover:text-green-500 lg:p-0">Présentation</a>
            </li>
            <li>
                <a href="#dietetique" className="block py-2 pl-3 pr-4 transition delay-150 duration-300 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent hover:text-green-500 lg:p-0">Diététique</a>
            </li>
            <li>
                <a href="#naturopathie" className="block py-2 pl-3 pr-4 transition delay-150 duration-300 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent hover:text-green-500 lg:p-0">Naturopathie</a>
            </li>
            <li>
                <a href="#reflexologie" className="block py-2 pl-3 pr-4 transition delay-150 duration-300 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent hover:text-green-500 lg:p-0">Réflexologie</a>
            </li>
            <li>
                <a href="#consultation" className="block py-2 pl-3 pr-4 transition delay-150 duration-300 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent hover:text-green-500 lg:p-0">Consultations</a>
            </li>
        </ul>
    </div>
</div>
</nav>
    )
}