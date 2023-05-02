/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import reflexology from '../../public/dien_chan_reflexology.jpg';

export const Reflexology = () => {
    return <div id='reflexologie' className="flex justify-center items-center flex-col-reverse lg:flex-row lg:h-[60vh]">
    <div className='pt-12 lg:pt-0 h-full lg:w-1/2'>
        <Image src={reflexology} alt="Reflexologie Dien Chan Moxa Acupuncture bien être" className="h-full w-full m-auto"/>
    </div>
    <div className="p-6 lg:w-1/2 lg:p-0">
        <h2 className='text-3xl font-medium m-auto pb-6 lg:w-3/4 lg:text-left'>Dien Chan</h2>
        <p className='text-base font-thin m-auto lg:w-3/4 lg:text-left'>
            Le Dien Chan est une technique non invasive (sans aiguilles) de réflexologie faciale, créée au Vietnam par le professeur Bui Quoc Chau, acupuncteur.<br />
            Le visage étant proche du cerveau, richement vascularisé et pourvu de nombreuses terminaisons nerveuses.<br />
            Il est possible par des techniques de stimulation sur des points ou des zones reflexes afin d'obtenir un soulagement rapide des douleurs et de ressentir un mieux-être.<br />
            Cette méthode vietnamienne de réflexothérapie apporte au patient une détente immédiate et un soulagement à la fois sur l'aspect physiologique que psychologique, aidant ainsi à libérer le corps de toutes ses tensions et visant à rétablir l'équilibre énergétique.
        </p>
    </div>
</div>
}