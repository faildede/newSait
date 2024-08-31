import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between border-b-2 py-4">
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-semibold">Gamma-ltd</h1>
            <div className="text-lg mt-4">
              <p>Контроль качества: Внешний</p>
              <p>Сертификаты соответствия: ISO 9000/9001/9004/19011: 2000</p>
            </div>
          </div>
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <p className="text-lg font-bold">+7 (707) 700-17-45</p>
              <Link href="tel:+77077001745" className="ml-4">
                <button className="p-2 rounded-lg bg-red-500 text-white">Заказать звонок</button>
              </Link>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <h6 className="ml-2">Почта</h6>
              </div>
              <p className="text-xl mt-2">
                <Link href="mailto:office@kgamma.kz" className="hover:underline">
                  office@kgamma.kz
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between py-4">
          <div className="flex flex-col mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold">Меню</h2>
            <Link href="/" className="mt-4 text-lg">Главная</Link>
            <Link href="/AboutCompany" className="text-lg">О компании</Link>
            <Link href="/products" className="text-lg">Продукция</Link>
          </div>
          <div className="flex flex-col items-start md:items-center mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold">График работы</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-lg">
              <ul>
                <li>Понедельник: 9:00 - 18:00</li>
                <li>Вторник: 9:00 - 18:00</li>
                <li>Среда: 9:00 - 18:00</li>
              </ul>
              <ul>
                <li>Четверг: 9:00 - 18:00</li>
                <li>Пятница: 9:00 - 18:00</li>
              </ul>
              <ul>
                <li>Суббота: Выходной</li>
                <li>Воскресенье: Выходной</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:ml-4">
            <p className="text-lg w-full md:w-96 mt-4 md:mt-0">
              Интернет магазин Gamma-ltd - Казахстанская компания по продаже сварочных оборудование и всех нужных к ним комплектующих. © 1999 Gamma-ltd
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;