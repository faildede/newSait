import {Tabs, Tab, Card, CardBody, CardHeader, Input} from "@nextui-org/react"; 


const InfoTab = () => {

    return (
        <>
            <Tabs  variant="underlined"  >
                <Tab  title="Физическое лицо" className="text-xl" aria-label="Tabs variants">
                <Card className="shadow-none border-2">
                    <CardBody className="p-12">
                        <div className="grid gap-6 grid-cols-3">
                        <Input className="m-4 w-full h-12" placeholder="Фамилия"></Input>
                        <Input className="m-4 w-full h-12" placeholder="Имя"></Input>
                        <Input className="m-4 w-full h-12" placeholder="Отчество"></Input>
                        </div>
                        <div className="grid gap-12 grid-cols-2">
                        <Input className="m-4 w-full h-12" pattern="^\+?\d{0,13}" type="tel" placeholder="Телефон"></Input>
                        <Input className="m-4 w-full h-12" placeholder="E-mail"></Input>
                        </div>
                        <div>
                        <p className="text-lg text-grey-1 w-94">Номер телефона и электронная почта используются для связи с вами, отправки уведомлений и подтверждения информации. Заполняя данные, вы соглашаетесь на обработку персональных данных в соответствии с нашей политикой конфиденциальности.</p>

                        </div>
                    </CardBody>
                </Card>
                </Tab>
                <Tab 
                className="text-xl"
                title="Юридическое лицо"  
                aria-label="Tabs variants">
                    <Card className=" shadow-none border-2">
                    <CardBody className="p-12 ">
                            <div className="grid gap-6  grid-cols-3 ">
                            <Input className="m-4" placeholder="Фамилия"></Input>
                            <Input className="m-4" placeholder="Имя"></Input>
                            <Input className="m-4" placeholder="Отчество"></Input>
                            </div>
                            <div className="grid gap-12 grid-cols-2">
                            <Input className="m-4" pattern="^\+?\d{0,13}" type="tel" placeholder="Телефон"></Input>
                            <Input className="m-4" placeholder="E-mail"></Input>
                            </div>
                            <div>
                        <p className="text-lg text-grey-1 w-94">Номер телефона и электронная почта используются для связи с вами, отправки уведомлений и подтверждения информации. Заполняя данные, вы соглашаетесь на обработку персональных данных в соответствии с нашей политикой конфиденциальности.</p>
                            </div>
                            <Input className="my-4" placeholder="ИНН"></Input>
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </>
    )
}

export default InfoTab