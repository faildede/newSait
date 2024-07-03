import Image from 'next/image';
import Gamma from '../../assets/gamma.png';

const SecondSection = () => {
    return (
        <nav className='flex'>
            <Image src={Gamma} alt="Gamma" width={100} height={100} className='' />
            <section className='flex'>
                
            </section>
        </nav>
    );
};

export default SecondSection;
