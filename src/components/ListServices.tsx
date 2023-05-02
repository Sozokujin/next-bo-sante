/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import zen_nature from '../../public/zen_nature.png';

export const ListServices = () => {
    return <div className="h-full flex justify-center items-center flex-col lg:flex-row py-8 lg:py-20 mx-12 lg:mx-0">
    <div className="w-full lg:w-1/2">
        <p className='text-3xl lg:m-2 lg:ml-24 text-center lg:text-left font-medium'>Mes Services</p>
        <div className='m-auto lg:grid lg:grid-cols-2 lg:gap-6 text-center lg:text-left lg:ml-24'>
            <div className='my-8 lg:my-0'>
                <h2 className='text-lg'>Diététique</h2>
                <p className='font-thin'>Des conseils personnalisés adaptés à chacun. Que ce soit pour des personnes en bonne santé ou avec des pathologies liées à l'alimentation, une grossesse, l'allaitement, une pratique sportive...</p>
            </div>
            <div className='my-8 lg:my-0'>
                <h2 className='text-lg'>Naturopathie</h2>
                <p className='font-thin'>C'est une pratique de soin non conventionnelle qui affirme équilibrer le fonctionnement de l'organisme par des moyens plus naturels : hygiène de vie, phytothérapie, aromathérapie, apithérapie...</p>
           </div>
            <div className='my-8 lg:my-0'>
                <h2 className='text-lg'>Réflexologie</h2>
                <p className='font-thin'>Le Dien Chan est une méthode thérapeutique assez récente. Le visage est utilisé comme une cartographie du corps tout entier, chacun de ces points peut ainsi être stimulé pour soigner une zone spécifique du corps</p>
            </div>
            <div className='my-8 lg:my-0'>
                <p className='text-lg'>Personnalisé</p>
                <p className='font-thin'>Si plusieurs de ces formules vous intéressent, n'hésitez pas à me contacter. Nous verrons ensemble afin de faire un package qui convient à vos besoins et vos attentes</p>
           </div>
        </div>
    </div>
    <div className='w-full lg:w-1/2'>
        <Image src={zen_nature} alt="Naturopathie Reflexologie Dien Chan équilibre" className="m-auto"/>
    </div>
</div>
}