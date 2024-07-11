'use client';
import FirstSection from '../Header/firstSection';
import SecondSection from '../Header/secondSection';
import MainBody from '../Body/mainBody';

const FirstPage = () => {
    return (
        <>
        <nav>
            <section className='bg-black-1'>
                <div className='container mx-auto my-auto'>
                    <FirstSection />
                </div>    
            </section>
            <section className='border-b-2'>
                <div className='container mx-auto py-4 '>
                <SecondSection />
                </div>
            </section>
        </nav>
        <body>
            <section>
                <MainBody />
            </section>
        </body>
        </>
    );
};

export default FirstPage;
