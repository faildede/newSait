import Image from 'next/image';

interface logocompany  {
    imageUrl: string;
}

const logocompanys: logocompany[] = [ 
    {
        imageUrl: '/brands/Lincoln-Logo.jpg'
    },
    {
        imageUrl: '/brands/Bugo.png'
    },
    {
        imageUrl: '/brands/carpan.png'
    },
    {
        imageUrl: '/brands/elettro.png'
    },
    {
        imageUrl: '/brands/Harris.jpg'
    },
    {
        imageUrl: '/brands/logo-faccin.jpg'
    },
    {
        imageUrl: '/brands/logo-maus.png'
    },
    {
        imageUrl: '/brands/osborn-logo-vector.png'
    },
    {
        imageUrl: '/brands/TECNA-logo.png'
    },
    {
        imageUrl: '/brands/trafimet.png'
    },

 ]





const AboutFirstBlock = () => {
    return (
        <>
            <div className="container mx-auto my-auto">
                <section className='my-24'>
                    <div>
                        <p className='text-black-3 text-3xl font-semibold'>Перейдите в каталог, чтобы ознакомиться с полным ассортиментом товаров</p>
                        <div className='flex justify-between mt-12'>
                            <div>
                             <p className=' my-4 font-thin text-2xl'>Мы понимаем, что выбор правильного оборудования и материалов для сварки является ключевым для достижения высоких результатов в вашей работе. Именно поэтому мы собрали для вас лучшие предложения в одном месте.</p>
                            <p className=' my-4 font-thin text-2xl'>Мы уверены, что вы найдете то, что вам нужно, и останетесь довольны качеством нашей продукции и уровнем обслуживания.</p>
                            </div>
                            <div>
                                <p className='text-2xl'>Что вы найдете в нашем каталоге?</p>
                                <ol>
                                    <li className='my-4 text-grey-5 text-xl '>Сварочные аппараты: Различные модели для различных типов сварки, включая MIG, TIG, MMA и другие.</li>
                                    <li className='my-4 text-grey-5 text-xl '>Резка металла: Оборудование для плазменной и лазерной резки, обеспечивающее точность и эффективность.</li>
                                    <li className='my-4 text-grey-5 text-xl'>Сварочные материалы: Электроды, проволока, прутки и флюсы для различных видов сварки.</li>
                                    <li className='my-4 text-grey-5 text-xl'>Аксессуары и запасные части: Всё, что необходимо для поддержания и улучшения вашего оборудования.</li>
                                    <li className='my-4 text-grey-5 text-xl'>Защитное оборудование: Маски, перчатки, костюмы и другие средства защиты для обеспечения вашей безопасности на рабочем месте.</li>
                                    <li className='my-4 text-grey-5 text-xl'>Автоматизация сварочных процессов: Решения для повышения производительности и качества сварки.</li>
                                </ol>
                            </div>
                        </div>                      
                    </div>
                        <button className='rounded-lg mt-12 text-2xl text-white bg-red-1 px-6 py-4'>
                            Перейти в каталог
                        </button>
                </section>

                <section>
                    <div>
                        <p className="text-3xl text-black-2 w-1/2">Мы являемся официальными представителями таких брендов, как :</p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap gap-4">
                            {logocompanys.map((logo, index) => (
                                <li key={logo.imageUrl || index} className="flex flex-col items-center">
                                    <div className='p-4 '>
                                        <Image src={logo.imageUrl} alt={logo.imageUrl} className='container mx-auto my-auto w-80' width={500} height={500} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AboutFirstBlock;