import { Tabs, Tab, Card, CardBody, Input } from "@nextui-org/react";

const InfoTab = ({ onInputChange, setClientType }) => {
  const handleClientTypeChange = (type) => {
    setClientType(type);
  };

  return (
    <>
      <Tabs variant="underlined">
        <Tab
          title="Физическое лицо"
          className="text-xl"
          aria-label="Tabs variants"
          onClick={() => handleClientTypeChange('individual')}
        >
          <Card className="shadow-none border-2">
            <CardBody className="p-12">
              <div className="grid gap-6 grid-cols-3">
                <Input
                  className="m-4 w-full h-12"
                  placeholder="Фамилия"
                  name="surname"
                  onChange={onInputChange}
                />
                <Input
                  className="m-4 w-full h-12"
                  placeholder="Имя"
                  name="name"
                  onChange={onInputChange}
                />
                <Input
                  className="m-4 w-full h-12"
                  placeholder="Отчество"
                  name="patronymic"
                  onChange={onInputChange}
                />
              </div>
              <div className="grid gap-12 grid-cols-2">
                <Input
                  className="m-4 w-full h-12"
                  pattern="^\+?\d{0,13}"
                  type="tel"
                  placeholder="Телефон"
                  name="phone"
                  onChange={onInputChange}
                />
                <Input
                  className="m-4 w-full h-12"
                  placeholder="E-mail"
                  name="email"
                  onChange={onInputChange}
                />
              </div>
              <div>
                <p className="text-lg text-grey-1 w-94">
                  Номер телефона и электронная почта используются для связи с вами, отправки уведомлений и подтверждения информации. Заполняя данные, вы соглашаетесь на обработку персональных данных в соответствии с нашей политикой конфиденциальности.
                </p>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab
          className="text-xl"
          title="Юридическое лицо"
          aria-label="Tabs variants"
          onClick={() => handleClientTypeChange('corporate')}
        >
          <Card className="shadow-none border-2">
            <CardBody className="p-12">
              <div className="grid gap-6 grid-cols-3">
                <Input
                  className="m-4"
                  placeholder="Фамилия"
                  name="surname"
                  onChange={onInputChange}
                />
                <Input
                  className="m-4"
                  placeholder="Имя"
                  name="name"
                  onChange={onInputChange}
                />
                <Input
                  className="m-4"
                  placeholder="Отчество"
                  name="patronymic"
                  onChange={onInputChange}
                />
              </div>
              <div className="grid gap-12 grid-cols-2">
                <Input
                  className="m-4"
                  pattern="^\+?\d{0,13}"
                  type="tel"
                  placeholder="Телефон"
                  name="phone"
                  onChange={onInputChange}
                />
                <Input
                  className="m-4"
                  placeholder="E-mail"
                  name="email"
                  onChange={onInputChange}
                />
              </div>
              <div>
                <p className="text-lg text-grey-1 w-94">
                  Номер телефона и электронная почта используются для связи с вами, отправки уведомлений и подтверждения информации. Заполняя данные, вы соглашаетесь на обработку персональных данных в соответствии с нашей политикой конфиденциальности.
                </p>
              </div>
              <Input
                className="my-4"
                placeholder="ИНН"
                name="inn"
                onChange={onInputChange}
              />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </>
  );
};

export default InfoTab;
