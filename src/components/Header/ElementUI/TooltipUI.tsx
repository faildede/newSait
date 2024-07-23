import { useEffect, useRef } from 'react';

const MapWidget = () => {
    return (
        <section className="rounded-xl p-4 bg-white w-80 overflow-hidden">
            <h4 className="font-medium">Найти нас стало проще!</h4>
            <p className="font-light text-base">
                Мы с гордостью объявляем, что наш главный офис открыт и ждет вас по адресу:
            </p>
            <div style={{ width: '100%', overflow: 'hidden' }}>
        
				<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afa50d764ec9d8d620f0ddddb3c864d700243be4479360c52da51ce5379ebaa24&amp;source=constructor" style={{ width: '100%', height: '300px', border: '0' }} frameBorder="0"></iframe>
            </div>
            <p className="text-xs text-grey-1 font-light">
                Приходите познакомиться с нашими специалистами, получить консультации и воспользоваться нашими услугами. Ждем Вас в удобном месте с комфортными условиями!
            </p>
        </section>
    );
}

export default MapWidget;
