/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import zen_naturopathy from '../../public/zen_naturopathy.jpg';

export const Naturopathy = () => {
    return <div id='naturopathie' className="flex justify-center items-center flex-col lg:flex-row lg:h-[60vh]">
    <div className="p-6 lg:w-1/2 lg:p-0">
        <h2 className='text-3xl font-medium m-auto pb-6 lg:w-3/4 lg:text-left'>Naturopathie</h2>
        <p className='text-base font-thin m-auto lg:w-3/4 lg:text-left'>
            La naturopathie est une médecine non conventionnelle qui vise à équilibrer le fonctionnement de l'organisme par des solutions naturelles.<br />
            La naturopathie possède un large éventail de techniques pour aider votre organisme à se rééquilibrer naturellement.<br />
            La nutrition en est un pilier fondamental, comme l'exercice physique et la gestion psycho émotionnelle.<br />
            L'aromathérapie, la phytologie, l'hydrologie, ou d'autres techniques peuvent venir compléter ce programme.<br />
            Pour moi la Naturopathie est avant tout un complément ou une approche différente de la diététique.
        </p>
    </div>
    <div className='pt-12 lg:pt-0 h-full lg:w-1/2'>
        <Image src={zen_naturopathy} alt="Naturopathie phytothérapie miel équilibre plante tisane" className="h-full w-full m-auto"/>
    </div>
</div>
}