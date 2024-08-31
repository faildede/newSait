'use client';

import { useEffect, useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Checkbox, Input, Button } from '@nextui-org/react';
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { EyeFilledIcon } from "./someSvg/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./someSvg/EyeSlashFilledIcon";
import { useRouter } from 'next/navigation';

const LoginModal = ({ isOpen, onOpenChange }) => {
  const [selected, setSelected] = useState("login");
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const router = useRouter();

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name, phone }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User registered successfully:', data);
        setIsAuthenticated(true); 
        router.push("/UserPage"); 
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Failed to register user:', error);
    }
  };

  const handleLogin = async () => { 
    try {
      const response = await fetch("http://localhost:4000/api/clients/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token); 
  
        
        const token = localStorage.getItem('token');
        console.log("Токен из localStorage:", token); 
  
        setIsAuthenticated(true); 
        router.push("/UserPage"); 
      } else {
        console.error('Failed to log in user');
      } 
    } catch (error) {
      console.error('Failed to log in user:', error);
    }
  };
  

  const toggleVisibility = () => setIsVisible(!isVisible);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("Токен из localStorage:", token); 
    if (token) {
      setIsAuthenticated(true); 
    }
  }, []);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {(onClose) => (
          <>
            <div className="flex flex-col w-full">
              <Card className="max-w-full m-16 shadow-none border-none">
                <CardBody className="overflow-hidden ">
                  <Tabs
                    fullWidth
                    size="md"
                    aria-label="Tabs form"
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                  >
                    <Tab key="login" title="Войти">
                      <form className="flex flex-col gap-6 py-12">
                        <Input 
                          isRequired
                          isClearable
                          type="email"
                          label="Почта"
                          variant="bordered"
                          placeholder="Введите вашу почту"
                          onChange={(e) => setEmail(e.target.value)}
                          onClear={() => console.log("input cleared")}
                          className="max-w-xs"
                        />
                        <Input
                          label="Пароль"
                          variant="bordered"
                          placeholder="Введите ваш пароль"
                          onChange={(e) => setPassword(e.target.value)}
                          endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                              {isVisible ? (
                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                              ) : (
                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                              )}
                            </button>
                          }
                          type={isVisible ? "text" : "password"}
                          className="max-w-xs"
                        />
                       
                        <div className="flex gap-2 justify-end">
                          <Button fullWidth color="primary" onPress={handleLogin} className='bg-grey-1 font-medium text-xl'>
                            Войти
                          </Button>
                        </div>
                        <p className="text-center text-lg">
                          Нет аккаунта ?{" "}
                          <Button size="xl" className='border-none bg-white text-lg' onPress={() => setSelected("sign-up")}>
                            Зарегистрироваться
                          </Button>
                        </p>
                      </form>
                    </Tab>
                    <Tab key="sign-up" title="Зарегистрироваться">
                      <form className="flex flex-col gap-6 py-4">
                        <Input 
                          isRequired 
                          label="Ваше имя" 
                          placeholder="Введите ваше имя" 
                          type="name" 
                          isClearable
                          variant="bordered"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <Input 
                          isRequired
                          isClearable
                          type="email"
                          label="Почта"
                          variant="bordered"
                          placeholder="Введите вашу почту"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onClear={() => console.log("input cleared")}
                          className="max-w-xs"
                        />
                        <Input
                          variant="bordered"
                          type="tel"
                          label="Номер телефона"
                          placeholder="+7 (700) 123-45-67"
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          maxLength="14"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                        <Input
                          isRequired
                          label="Пароль"
                          variant="bordered"
                          placeholder="Введите ваш пароль"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                              {isVisible ? (
                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                              ) : (
                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                              )}
                            </button>
                          }
                          type={isVisible ? "text" : "password"}
                          className="max-w-xs"
                        />
                        
                        <div className="flex gap-2 justify-end">
                          <Button fullWidth color="primary" onPress={handleRegister} className='bg-grey-1 font-medium text-xl'>
                            Зарегистрироваться
                          </Button>
                        </div>
                        <p className="text-center text-lg">
                          Уже есть акаунт?{"  "}
                          <Button  className='border-none text-lg bg-white' onPress={() => setSelected("login")}>
                            Войти
                          </Button>
                        </p>
                      </form>
                    </Tab>
                  </Tabs>
                </CardBody>
              </Card>
            </div>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;