import Image from 'next/image'
import { SocialMedia } from './SocialMedia';
import { MdPlace,MdPhone,MdOutlineEmail } from "react-icons/md";
import logo from '../../public/logo_bo_sante.png';

export const Footer = () => {
    const style = {display: 'inline'};
    return (
        <footer className="inset-x-0 bottom-0 text-gray-500 bg-white rounded-lg pt-1">
            <iframe className='w-full h-[40vh]' title='Emplacement cabinet Roanne' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.8961405036025!2d4.063678476224796!3d46.03322089529334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f40fc472e65257%3A0x2b1cbc14411a98cb!2sOc%C3%A9ane%20Banhegyi!5e0!3m2!1sfr!2sfr!4v1683057198109!5m2!1sfr!2sfr" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="py-8 flex flex-col justify-center items-center gap-12 lg:flex-row lg:gap-32">
                <div className='text-center'>
                    <Image src={logo} alt="Logo Océane Banhegyi Naturopathe Reflexologue Diététicienne Roanne" className="m-auto h-32 w-32"/>
                </div>
                <div className="text-center lg:text-left">
                    <p className="font-normal text-base underline">Informations</p>
                    <ul className='font-thin text-sm'>
                        <li className='my-2'><MdPlace style={style}></MdPlace> Rue Alexandre Raffin, 42300 Roanne <br /></li>
                        <li className='my-2'><MdPhone style={style}></MdPhone><a href='tel:+33780352000'> 07 80 35 20 00</a></li>
                        <li className='my-2'><MdOutlineEmail style={style}></MdOutlineEmail><a href='mailto:bosante42@gmail.com'> bosante42@gmail.com</a></li>
                    </ul>
                </div>
                <div className="text-center lg:text-left">
                    <p className="font-normal text-base underline">Horaires</p>
                    <ol className='font-thin text-sm'>
                        <li>Lundi : 9h00 - 18h00</li>
                        <li>Mardi : 9h00 - 18h00</li>
                        <li>Mercredi : 9h00 - 18h00</li>
                        <li>Jeudi : 9h00 - 18h00</li>
                        <li>Vendredi : 9h00 - 18h00</li>
                    </ol>
                </div>

                <div>
                    <SocialMedia></SocialMedia>
                    <h3 className="text-xl font-thin mt-2">Océane Banhegyi</h3>
                    <h2 className='font-thin text-base'>Diététicienne, Naturopathe, Reflexologue</h2>
                    <span className="block font-thin text-sm">© 2023 Océane Banhegyi</span>
                </div>
            </div>
        </footer>
    )
}        