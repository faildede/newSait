import FirstSection from "@/components/Header/firstSection"
import SecondSection from "@/components/Header/secondSection"
import Footer from "@/components/Body/Footer"
import FirstAbout from "@/components/AboutBody/FirstAbout"

const AboutCompany = () => {
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
      <main className=" container mx-auto mt-24">
        <div>
            <h1 className="text-3xl text-grey-1 font-bold mt-2">О нашей компании</h1>
            <FirstAbout />
        </div>
      </main>
      <footer className="mt-24 p-24 bg-black-2">
        <Footer />
      </footer>
        </>
    )
}

export default AboutCompany