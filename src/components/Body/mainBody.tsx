import React from 'react';
import Image from 'next/image';
import Carousel from './BodyUi/Carousel';



 const staticCards = [
    {
        imageUrl: 'card/Group.svg',
        title: 'Лучшие цены',
        bodytext: 'Мы являемся официальным представителем множества крупных производителей, что позволяет нам предложить самые выгодные цены на комплексные заказы.'
    },
	{
		imageUrl: 'card/book.svg',
		title: 'Качество',
		bodytext: 'Мы работаем только с проверенными поставщиками, что гарантирует высокое качество продукции.'
	},
	{
		imageUrl: 'card/Comment.svg',
		title: 'Гарантия',
		bodytext: 'На всю продукцию предоставляется гарантия от производителя.'
	},
	{
		imageUrl: 'card/car.svg',
		title: 'Доставка',
		bodytext: 'Мы осуществляем доставку по всему Кзахстану, а также в страны СНГ.'
	},
];



const MainBody = () => {
    return (
        <>
            <div className="bg-grey-2">
                <section className="container mx-auto p-12">
                    <Carousel data={CarouselData} />
                </section>
                <section className='container mx-auto px-4'>
                    <div className='flex  justify-center'>
                        {staticCards.map((card, index) => (
                            <div key={card.title || index} className="flex flex-col bg-white w-64 md:w-1/4 mx-2 my-4 rounded-2xl p-4 shadow-lg">
                                <div className='flex items-center'>
                                    <div className='p-4 rounded-full bg-grey-2'>
                                         <Image src={card.imageUrl} alt={card.title} className=' bg-grey-200' width={30} height={30} />
                                    </div>
                                    <h2 className='ml-4 text-xl'>{card.title}</h2>
                                </div>
                                <p className='mt-4 text-grey-3 text-sm font-thin leading-8 tracking-wide'>{card.bodytext}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};


const CarouselData = [
    { image: '/1.jpg' },
    { image: '/2.jpg' },
    { image: '/3.jpg' },
    { image: '/4.jpg' },
    { image: '/5.jpg' },
];


export default MainBody;


