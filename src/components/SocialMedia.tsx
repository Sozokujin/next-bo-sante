import Image from 'next/image'
import instagram from '../../public/logo_instagram.png';
import linkedin from '../../public/logo_linkedin.png';
import facebook from '../../public/logo_facebook.webp';

export const SocialMedia = () => {
    return <>
        <a href='https://www.linkedin.com/in/océane-banhegyi-501151207/' target="_blank" rel="noopener noreferrer"><Image src={linkedin} alt="Logo Linkedin Océane Banhegyi" className="h-6 w-6 inline"/></a>
        <a href='https://www.facebook.com/profile.php?id=100091491156680' target="_blank" rel="noopener noreferrer"><Image src={facebook} alt="Logo Facebook Océane Banhegyi" className="ml-2 h-6 w-6 inline"/></a>
        <a href='https://www.instagram.com/bo_sante42/' target="_blank" rel="noopener noreferrer"><Image src={instagram} alt="Logo Instagram Océane Banhegyi" className="ml-2 h-6 w-6 inline"/></a>
    </>
}
