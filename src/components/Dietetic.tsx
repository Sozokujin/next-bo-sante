/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import healthy_food from '../../public/healthy_food.jpg';

export const Dietetic = () => {
    return <div id='dietetique' className="flex justify-center items-center flex-col-reverse lg:border-t-2 lg:flex-row lg:h-[60vh]">
    <div className='pt-12 lg:pt-0 h-full lg:w-1/2'>
        <Image src={healthy_food} alt="Alimentation équilibré adapté perte de poids prise de poids" className="h-full w-full m-auto"/>
    </div>
    <div className="p-6 lg:w-1/2 lg:p-0">
        <h2 className='text-3xl font-medium m-auto pb-6 lg:w-3/4 lg:text-left'>Diététique</h2>
        <p className='text-base font-thin m-auto lg:w-3/4 lg:text-left'>
            En tant que diététicienne, je privilégie le dialogue et l'échange.<br />
            Spécialiste du rééquilibrage alimentaire, je vous propose un suivi nutritionnel et des conseils diététiques adaptés à vos besoins, dans le respect de l'équilibre alimentaire et sans frustration !<br />
            Dotée d'une balance impédancemètre, je suis en capacité de dresser un bilan précis de votre composition corporelle.<br />
            Par la suite, nous pourrons débuter un suivi diététique et surveiller l'évolution de vos paramètres.<br />
            Répertoriée au registre des professionnels de santé, vos consultations peuvent être remboursées par certaines mutuelles.
        </p>
    </div>
</div>
}
