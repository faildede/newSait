import React, { useEffect, useRef } from 'react';

const ToolTipUI = () => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let map: { destroy: () => void; };

        const initMap = async () => {
            // if (mapContainerRef.current) {
            //     const mapglModule = await import('@2gis/mapgl');
            //     const map = new mapglModule.default.Map(mapContainerRef.current, {
            //         center: [76.989406, 43.353836],
            //         zoom: 16,
            //         key: '70000001060665627',//TODO: Взять Api карты и встроить в проект
            //     });
            // }
        };

        initMap();

        return () => {
            if (map) {
                map.destroy();
            }
        };
    }, []);

    return (
        <section className="rounded-xl border-2 border-black p-4 text-roboto bg-white w-80">
            <h4 className="font-medium">Найти нас стало проще!</h4>
            <p className="font-light text-base">
                Мы с гордостью объявляем, что наш главный офис открыт и ждет вас по адресу:
            </p>
            <div id="map-container" ref={mapContainerRef} style={{ width: '100%', height: '300px', overflow: 'hidden' }}></div>
            <p className="text-xs text-grey-1 font-light">
                Приходите познакомиться с нашими специалистами, получить консультации и воспользоваться нашими услугами. Ждем Вас в удобном месте с комфортными условиями!
            </p>
        </section>
    );
}

export default ToolTipUI;