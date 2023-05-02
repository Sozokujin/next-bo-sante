/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { SocialMedia } from './SocialMedia';
import profil from '../../public/oceane_banhegyi_roanne_dieteticienne.jpg';


export const Presentation = () => {
    return <div id='presentation' className="flex justify-center items-center flex-col lg:flex-row lg:h-[75vh]">
        <div className="p-6 lg:w-1/2 lg:p-0 lg:border-r-2">
            <p className='text-6xl font-medium m-auto py-2.5 lg:w-3/4 lg:text-left'>QUI <br /> SUIS-JE ?</p>
            <p className='text-base font-thin m-auto py-2.5 lg:w-3/4 lg:text-left'>
                Je suis diététicienne diplômée de l'école Cours Diderot à Lyon 7 depuis 2020.<br />
                Afin de répondre au mieux à vos besoins j'ai ensuite élargi mon champ de compétences et je me suis formée en réflexologie faciale.<br />
                J'entame aujourd'hui une formation reconnue par l'état en naturopathie.<br />
                L'ensemble de mes formations me permettent de vous donner des conseils adaptés afin de vous épanouir au quotidien.
            </p>
            <p className='text-base font-thin m-auto py-2.5 lg:w-3/4 lg:text-left'>Retrouvez-moi sur : <span className='inline mr-2'><SocialMedia></SocialMedia></span></p>
            
        </div>
        <div className='pb-12 lg:pb-0 lg:w-1/2'>
            <Image src={profil} alt="Océane Banhegyi Diététicienne Réflexologue Naturopathe Roanne" className="h-1/2 w-1/2 m-auto rounded-full shadow"/>
        </div>
    </div>
}