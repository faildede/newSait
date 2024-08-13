'use client'
import Image from 'next/image';
import Gamma from '../../assets/gamma.png';
import DropDownUI from '../Header/ElementUI/DropDownUI';
import menuItem from '../../constant/index';
import InputUI from './ElementUI/InputUI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faViber, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { useCart } from '../Body/CartContext';

const SecondSection = () => {
    const { getCartCount } = useCart();
    const cartCount = getCartCount();

    return (
        <nav className='flex'>
			<Link href="/">
            <Image src={Gamma} alt="Gamma" width={250} height={250} className='' />
            </Link>
			<section className='container  my-auto mx-5 w-1/2 '>
                <DropDownUI item={menuItem[0]} />
            </section>
            <section className='container mx-auto w-full my-auto'>
                <InputUI />
            </section>
            <section className='my-auto flex'>
                <Link href="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-400 size-12 p-2 hover:text-red-1 ease-out duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </Link>
                <Link href="/cart">
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-400 size-12 p-2 hover:text-red-1 ease-out duration-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-normal font-bold leading-none text-white bg-red-1 rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </div>
                </Link>
            </section>            
        </nav>
    );
};

export default SecondSection; 
