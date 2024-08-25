import FirstSection from "@/components/Header/firstSection";
import SecondSection from "@/components/Header/secondSection";
import Footer from "@/components/Body/Footer";

const services = () => {

    return (
        <>
        <nav className="top-0 left-0 right-0 z-50">
        <section className="bg-black-1">
          <div className="container mx-auto my-auto">
            <FirstSection />
          </div>
        </section>
        <section className="border-b-2">
          <div className="container mx-auto py-4">
            <SecondSection />
          </div>
        </section>
      </nav>
        <div>


        </div>

        <footer className='p-24 bg-black-2'>
          <Footer />
        </footer>
        </>
    )
}

export default services;