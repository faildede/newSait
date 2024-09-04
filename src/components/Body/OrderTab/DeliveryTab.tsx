'use client';

import { useState, useEffect } from "react";
import { Tabs, Tab, Card, CardBody, Input } from "@nextui-org/react";
import Link from "next/link";

const DeliveryTab = ({ handleInputChange }) => {
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');

  const checkAddressFields = (newCity, newStreet) => {
    if (newCity.trim() || newStreet.trim()) {
      handleInputChange({ target: { name: 'deliveryMethod', value: 'delivery' } });
    } else {
      handleInputChange({ target: { name: 'deliveryMethod', value: 'pickup' } });
    }
  };

  
  const handleCityChange = (e) => {
    const newCity = e.target.value;
    setCity(newCity);
    handleInputChange(e); 
    checkAddressFields(newCity, street);
  };

  const handleStreetChange = (e) => { 
    const newStreet = e.target.value;
    setStreet(newStreet);
    handleInputChange(e); 
    checkAddressFields(city, newStreet); 
  };

  useEffect(() => {
    checkAddressFields(city, street);
  }, [city, street]);

  return (
    <>
      <Tabs variant="underlined">
        <Tab title="Самовывоз" className="text-xl" aria-label="Tabs variants">
          <Card className="shadow-none border-2">
            <CardBody className="p-12">
              <div className="flex justify-between">
                <div className="container mx-auto">
                  <p className="text-xl font-bold text-black-3">Адрес где мы находимся</p>
                  <div className="mt-12">
                    <p className="text-xl font-medium text-grey-4">Город Алматы, Улица Зимняя 1-Б</p>
                    <div className="mt-4 text-xl font-medium text-grey-3 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 my-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                      <Link href="tel:+77272520906" className="mx-2 my-auto">+7 (727) 252-09-06</Link>
                    </div>
                  </div>
                </div>
                <div>
                  <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afa50d764ec9d8d620f0ddddb3c864d700243be4479360c52da51ce5379ebaa24&amp;source=constructor" style={{ width: '600px', height: '400px', border: '0' }} frameBorder="0"></iframe>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab className="text-xl font-semibold focus:outline-none focus:border-b-2" title="Доставка" aria-label="Tabs variants">
          <Card className="shadow-lg border rounded-lg">
            <CardBody className="p-6">
              <div className="space-y-6">
                <Input 
                  className="w-full p-3"
                  placeholder="Город"
                  name="city"
                  value={city}
                  onChange={handleCityChange}
                />
                <Input 
                  className="w-full p-3"
                  placeholder="Улица, дом / корпус"
                  name="street"
                  value={street}
                  onChange={handleStreetChange}
                />
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </>
  );
};

export default DeliveryTab;