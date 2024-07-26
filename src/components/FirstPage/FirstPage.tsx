'use client'
import FirstSection from '../Header/firstSection';
import SecondSection from '../Header/secondSection';
import MainBody from '../Body/mainBody';
import ProductList from './ProductList';
import AboutFirstBlock from '../Body/AboutFirstBlock';
import MapBlock from '../Body/BodyUi/MapBlock';
import SomeInfo from '../Body/BodyUi/SomeInfo';
import SaleCarousel from '../Body/BodyUi/SaleCarousel';
import Footer from '../Body/Footer';


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
        <section className='mt-12'>
          <AboutFirstBlock />
        </section>
        <section className='mt-24 bg-grey-2 p-24'>
          <MapBlock />
        </section>
        <section className='mt-24  p-24'>
          <SomeInfo />
        </section>
        <section className='mt-24  p-24'>
          <SaleCarousel />
        </section>
      </main>
      <footer className='mt-24 p-24 bg-black-2'>
        <Footer />
      </footer>
    </>
  );
};

export default FirstPage;
