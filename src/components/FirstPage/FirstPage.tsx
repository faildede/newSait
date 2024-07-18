'use client'
import FirstSection from '../Header/firstSection';
import SecondSection from '../Header/secondSection';
import MainBody from '../Body/mainBody';
import ProductList from './ProductList';

const FirstPage = () => {
  return (
    <>
      <nav className=" top-0 left-0 right-0 z-50">
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
      <main>
        <section>
          <MainBody />
        </section>
        <section className='mt-12'>
          <ProductList />
        </section>
      </main>
    </>
  );
};

export default FirstPage;