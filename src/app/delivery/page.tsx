import FirstSection from "@/components/Header/firstSection";
import SecondSection from "@/components/Header/secondSection";
import Footer from "@/components/Body/Footer";
import { title } from "process";
import Image from 'next/image';

const PaymantInfo = [
  {
    photo: '/deliveryPhoto/BankCard.svg',
    title: 'Безналичный расчет',
    text: 'Возможность оплаты переводом или на расчетный счет компании. Также есть возможность оплатить с помощью банковской карты.'
  },
  {
    photo: '/deliveryPhoto/MoneyPhoto.svg',
    title: 'Наличными',
    text: 'Заказ можно оплатить наличными в офисе нашей компании.'
  }
]

const deliveryInfo = [
  {
    photo: '/deliveryPhoto/TruckDelivery.svg',
    title: 'Доставка',
    text: 'Доставка транспортной компанией для наших клиентов по всему Казахстану. Стоимость доставки рассчитывается индивидуально.'
  },
  {
    photo: '/deliveryPhoto/labelShop.svg',
    title: 'Самовывоз',
    text: 'Самовывоз осуществляется с нашего склада в городе Алматы.'
  },
  {
    photo: '/deliveryPhoto/MapDelivery.svg',
    title: 'Адресная доставка',
    text:'Возможность доставки курьером по городу Алматы.'
  }
]

const delivery = () => {
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
      <div className="container mx-auto text-center my-24">
          <h6 className="text-4xl font-bold  text-grey-1">Способы оплаты</h6>
          <div className="sm:flex justify-between my-8 text-3xl">
            {PaymantInfo.map((info, index) => ( 
              <div key={info.title || index} className="mx-12">
                <img src={info.photo} alt={info.title}  className="container mx-auto   w-24  h-24" />
                <h4 className="text-red-1 font-bold my-4">{info.title}</h4>  
                <p className="text-grey-1 text-lg w-96">{info.text}</p>
              </div>
            ))}
          </div>

          <div>
            <h6 className="text-4xl font-bold  text-grey-1">Способы доставки</h6>
            <div className="sm:flex justify-between my-8  text-3xl">
              {deliveryInfo.map((info, index) => ( 
                <div key={info.title || index} className="mx-12 my-12">
                  <img src={info.photo} alt={info.title}  className="container mx-auto   w-24  h-24" />
                  <h4 className="text-red-1 font-bold my-4">{info.title}</h4>  
                  <p className="text-grey-1 container text-lg w-96 mx-auto">{info.text}</p>
                </div>
              ))}
            </div>  

         </div> 
            
      </div>
      <footer className='p-24 bg-black-2'>
        <Footer />
      </footer>
      </>
  )
}

export default delivery;