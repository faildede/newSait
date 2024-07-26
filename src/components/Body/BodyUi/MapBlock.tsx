import Link from "next/link";

const MapBlock = () => {

    return (
        <>
            <div className="container mx-auto my-auto rounded-xl bg-white m-24">
                <div className="flex justify-between">
                    <div className="container mx-auto px-12 py-4">
                        <p className="text-3xl font-bold text-black-3">Адрес где мы находимся</p>
                        <div className="border-b-2 border-red-1">
                            <p className="mt-12 text-2xl font-bold text-black-3 ">Gamma-ltd</p>    
                        </div>
                        <div className="mt-12">
                            <p className="text-2xl font-medium text-grey-4">Город Алматы, Улица Зимняя 1-Б </p>
                            <div className="mt-4 text-xl font-medium text-grey-3 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 my-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <Link href="tel:+77272520906" className="mx-2 my-auto">+7 (727) 252-09-06</Link>
                            </div>
                         
                         <div className="mt-4 text-xl font-medium text-grey-3 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 my-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <Link href="tel:+77077001745" className="mx-2 my-auto">+7 (707) 700-17-45</Link>
                            </div>
                         
                        </div>
                    </div>
                    <div>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afa50d764ec9d8d620f0ddddb3c864d700243be4479360c52da51ce5379ebaa24&amp;source=constructor" style={{ width: '800px', height: '400px', border: '0' }} frameBorder="0"></iframe>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MapBlock;