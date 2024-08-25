import { Tabs, Tab, Card, CardBody, Input, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

const ClientTabs = ({ user }) => {
    const [isVertical, setIsVertical] = useState(true);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        phone: user?.phone || '',
        email: user?.email || '',
    });

    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token'); 

        if (!token || !user) {
            router.push('/'); 
        }
    }, [user, router]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLogout = () => {
     
        localStorage.removeItem('token');

        
        router.push('/');
    };

  

    return (
        <>
            <div className="flex flex-col px-4">
                <div className="flex w-full flex-col">
                    <Tabs
                        aria-label="Options" 
                        color="primary" 
                        variant="underlined"
                        classNames={{
                            tabList: "gap-6 w-full relative rounded-none p-0 border-divider",
                            cursor: "w-full bg-black-1",
                            tab: "max-w-fit px-0 h-12",
                            tabContent: "group-data-[selected=true]:text-black-1"
                        }}
                        isVertical={isVertical}
                    >
                        <Tab 
                            key="UserInfo" 
                            title={
                                <div className="flex space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                    <span className="px-4">Аккаунт</span>
                                </div>
                            }
                            className="text-xl"
                        >
                            <Card className="shadow-none border-none mx-24">
                                <CardBody>
                                    <div className="mb-4">
                                        <p className="text-gray-600">
                                            В этой вкладке вы можете просмотреть и обновить свои личные данные, включая имя, телефон и почту. Используйте кнопки ниже, чтобы выйти из системы или удалить свой аккаунт. Пожалуйста, убедитесь, что все ваши данные актуальны.
                                        </p>
                                    </div>
                                    <form className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="text-2xl font-base text-grey-1">Ваше имя:</label>
                                            <p className="mx-2 border-b-2 py-4">{formData.name}</p>
                                        </div>  
                                        <div>
                                            <label htmlFor="phone" className="text-2xl font-base text-grey-1">Ваш телефон:</label>
                                            <p className="mx-2 border-b-2 py-4">{formData.phone}</p>
                                        </div>  
                                        <div>
                                            <label htmlFor="email" className="text-2xl font-base text-grey-1">Ваша почта:</label>
                                            <p className="mx-2 border-b-2 py-4">{formData.email}</p>
                                        </div>
                                    </form>

                                    <div className="flex justify-between">
                                        <Button
                                            className="bg-red-1 text-white font-bold text-xl p-6 my-12"
                                            onClick={handleLogout}
                                        >
                                            Выйти 
                                        </Button>
                                        <Button className="bg-black-1 text-white font-bold text-xl p-6 my-12">
                                            Удалить аккаунт
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>  
                        </Tab>

                        <Tab 
                          key={"Orders"}
                          title={
                            <div className="flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>

                                <span className="px-4">Заказы</span>
                            </div>
                          }
                          className="text-xl"
                        >
                              <Card>
                                <CardBody>
                                  {/* Здесь можно разместить содержимое вкладки "Заказы" */}
                                </CardBody>  
                              </Card>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    );
};

export default ClientTabs;
