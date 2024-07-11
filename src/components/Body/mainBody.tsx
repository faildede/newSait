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
		bodytext: 'Мы осуществляем доставку по всей России, а также в страны СНГ.'
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
    <div className='flex flex-wrap justify-center'>
        {staticCards.map((card, index) => (
            <div key={card.title || index} className="flex flex-col bg-white w-full md:w-80 mx-2 my-4 rounded-2xl p-8 shadow-lg">
                <div className='flex items-center'>
                    <Image src={card.imageUrl} alt={card.title} className='rounded-full bg-grey-200' width={60} height={60} />
                    <h2 className='ml-4 text-2xl'>{card.title}</h2>
                </div>
                <p className='mt-4 text-grey-600 font-light leading-8'>{card.bodytext}</p>
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


