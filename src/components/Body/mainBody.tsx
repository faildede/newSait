import Carousel from "./BodyUi/Carousel";


const CarouselData = [
    {image: '/Gamma.svg'},
    {image: '/Gamma.svg'},
    {image: '/Gamma.svg'},
    {image: '/Gamma.svg'},
]


const mainBody = () => {

    return (
        <>
        <div className="bg-grey-2">
            <section className="container mx-auto p-12">
                <Carousel data={CarouselData} />
            </section>
        </div>
        
            
        </>
    )
}

export default mainBody;