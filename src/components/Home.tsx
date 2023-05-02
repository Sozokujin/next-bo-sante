/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import zen_mood from '../../public/zen_mood.jpg';

export const Profile = () => {
    return <div className="relative h-screen w-full">
    <Image src={zen_mood} alt="Diététique Naturopathie Régime Miel" className="h-full w-full object-cover brightness-50"/>
    <div className='absolute w-full top-1/2 text-white'>
        <h1 className='font-thin text-2xl m-2'>Diététicienne, Réflexologue, Naturopathe à Roanne</h1>
        <h3 className='font-light text-6xl m-2'>Océane Banhegyi</h3>
        <p className='font-thin text-2xl m-2'>L'harmonie naturelle de votre corps et de votre esprit</p>
    </div>
</div>
}