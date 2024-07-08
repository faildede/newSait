import Image from 'next/image';
import Gamma from '../../assets/gamma.png';
import DropDownUI from '../Header/ElementUI/DropDownUI';
import menuItem from '../../constant/index';
import InputUI from './ElementUI/InputUI';

const SecondSection = () => {
    return (
        <nav className='flex'>
            <Image src={Gamma} alt="Gamma" width={100} height={100} className='' />
            <section className='container  my-auto mx-5  '>
                <DropDownUI item={menuItem[0]} />
            </section>
            <section className='container mx-auto my-auto'>
                <InputUI />
            </section>
            <section>
                <p>wpeogjnmpweigjnwepi0gj</p>
            </section>
            <section>
                <p>wpeogjnmpweigjnwepi0gj</p>
            </section>
            <section>
                <p>wpeogjnmpweigjnwepi0gj</p>
            </section>
            <section>
                <p>wpeogjnmpweigjnwepi0gj</p>
            </section>
            
        </nav>
    );
};

export default SecondSection;         
