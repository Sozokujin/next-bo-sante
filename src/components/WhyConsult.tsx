/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import healthy_drink from '../../public/healthy_drink.jpg';

export const WhyConsult = () => {
    return <div className="bg-gray-100 flex justify-center items-center flex-col-reverse lg:flex-row lg:h-[100vh]">
        <div className='flex justify-center items-center bg-white h-3/4 lg:ml-24 pt-12 w-full lg:pt-0 lg:w-1/2'>
            <Image src={healthy_drink} alt="Santé bien être healthy food équilibre" className="h-3/4 m-auto w-3/4 lg:w-auto"/>
        </div>
        <div className="bg-white flex flex-col items-center justify-center lg:mr-24 h-3/4 w-full lg:w-1/2 lg:p-0">
            <p className='text-5xl font-medium lg:w-3/4 lg:text-left'>POURQUOI<br />CONSULTER ?</p>
            <p className='text-base font-thin mt-6 w-3/4 lg:text-left'>
            Notre corps est soumis au quotidien à diverses agressions : pollution, stress, sédentarité, mauvaise alimentation...<br />
            Ce que nous mangeons, ce que nous buvons, l'air que nous respirons jouent un rôle primordial sur notre santé.<br />
            Notre alimentation doit être variée, équilibrée et de bonne qualité pour apporter au corps tous les nutriments dont il a besoin.<br />
            La combinaison de mes 3 formations me permet de maintenir votre équilibre mais aussi de le réguler en cas de problème déjà existant.<br />
            Que ce soit par l'alimentation, des conseils naturopathies ou encore par des séances de réflexologie.
            </p>
            <p className='text-lg mt-6 w-3/4 lg:text-left'>
                <a type="button" href="https://www.doctolib.fr/dieteticien/roanne/oceane-banhegyi" target="_blank" rel="noopener noreferrer" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5">Prendre rendez-vous en ligne</a>
            </p>
        </div>
    </div>
}