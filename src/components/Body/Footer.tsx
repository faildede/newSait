import Image from "next/image";
import secondGamma from '../../assets/SecondGama.png';
import Link from "next/link";


const Footer = () => {

    return (
        <>
            <section className="container mx-auto my-auto text-white">
                <div className="flex justify-between border-b-2 py-4">
                    <h1 className="text-4xl font-semibold">Gamma-ltd</h1>
                    <div className="font-medium text-lg">
                        <p> Контроль качества: Внешний</p>
                        <p> Сертификаты соответствия: ISO 9000/9001/9004/19011: 2000</p>
                    </div>
                    <div className="flex text-lg font-bold">
                        <p className="my-auto">+7 (707) 700-17-45</p>
                        <Link href='' className="my-auto p-4 rounded-lg bg-red-1  mx-2"><button>Заказать звонок</button> </Link>
                    </div>
                    <div className="">
                    <div className="text-lg font-semibold flex  items-center justify-center">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                        </svg>
                        <h6 className="mx-2">Почта</h6>
                    </div>
                    <p className="text-xl">
                        <Link href="mailto:office@kgamma.kz" className="text-white transition duration-500 ease-in-out hover:underline">
                        
                        office@kgamma.kz
    
                        </Link>
                    </p>
                    </div>

                 
                </div>
                <div className="flex justify-between py-4">
                   
                    <div className="flex flex-col mx-4">
                        <h2 className="text-2xl font-semibold">Меню</h2>
                        <Link href="/"><p className="text-lg mt-4">Главная</p></Link>
                        <Link href="/AboutCompany"><p className="text-lg">О компании</p></Link>
                        <Link href="/products"><p className="text-lg">Продукция</p></Link>
                    </div>
                    <div className="flex justify-center">
                    <div className="text-center">
   <div className="flex  items-center justify-center text-2xl font-semibold">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mx-2 my-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>

  <h2 className="">График работы</h2>
   </div>
  <div className="grid grid-cols-3 gap-4 mt-4">
    <ul className="text-left">
      <li className="text-lg">Понедельник: 9:00 - 18:00</li>
      <li className="text-lg">Вторник: 9:00 - 18:00</li>
      <li className="text-lg">Среда: 9:00 - 18:00</li>
    </ul>
    <ul className="text-left">
      <li className="text-lg">Четверг: 9:00 - 18:00</li>
      <li className="text-lg">Пятница: 9:00 - 18:00</li>

    </ul>
    <ul className="text-left"> 
    <li className="text-lg">Суббота: Выходной</li>
    <li className="text-lg">Воскресенье: Выходной</li>
    </ul>
  </div>
</div>
                </div>
                <div>
                <p className="text-lg w-96 mt-4">Интернет магазин Gamma-ltd - Казахстанская компания по продаже сварочных оборудование и всех нужных к ним комплектующих. © 1999 Gamma-ltd</p>
            </div>
            </div>
            </section>
        </>
    )
}

export default Footer;

