'use client';

import React, { useState } from "react";
import Image from "next/image";
import Catalog from "../../../assets/icons/Catalog.svg";
import Cross from "../../../assets/icons/Cross.svg";
import { Props, MenuItem } from "../../../types";
import { Link } from "@nextui-org/react";
import menuItems from "../../../constant/index";

const DropDownUI = ({ item }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [expandedParents, setExpandedParents] = useState<{ [key: string]: boolean }>({}); // Хранение состояния открытых родителей

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const toggleParent = (parentRoute: string) => {
        setExpandedParents((prev) => ({
            ...prev,
            [parentRoute]: !prev[parentRoute], // Переключение состояния родителя
        }));
    };

    const renderMenuItems = (items: MenuItem[]) => {
        return items.map((item) => (
            <div key={item.route} className="mb-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        {item.img && (
                            <Image src={item.img} alt={item.title} width={50} height={50} /> // Отображение картинки родителя
                        )}
                        <Link
                            className="font-semibold px-4 py-1 text-lg block group font-rubik text-black hover:border-b-red-1 transition-colors duration-300"
                            href={`/catalog${item.route}`}
                        >
                            {item.title}
                        </Link>
                    </div>
                    {item.children && (
                        <button
                            className="text-red-1 font-semibold text-lg group-hover:border-b-red-1 transition-colors duration-300"
                            onClick={() => toggleParent(item.route)} 
                        >
                            {expandedParents[item.route] ? '-' : '+'}
                        </button>
                    )}
                </div>
                {item.children && expandedParents[item.route] && (
                    <div className="ml-4 mt-2 text-sm">
                        {item.children.map((child) => (
                            <div key={child.route} className="flex items-center mb-2 ">
                                {child.imageUrl && (
                                    <Image src={child.imageUrl} alt={child.title} width={40} height={40} /> 
                                )}
                                <Link
                                    className="ml-2 text-xl text-black-1 hover:text-red-1 transition-colors duration-300"
                                    href={`/catalog${child.route}`}
                                >
                                    {child.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        ));
    };

    return (
        <section>
            <div
                onClick={toggle}
                className={`px-6 container p-4 border-2 border-red-1 mx-auto rounded-xl flex items-center cursor-pointer font-rubik transition-all duration-700 transform ${
                    isOpen ? "bg-white text-red-1" : "bg-red-1 text-white"
                }`}
            >
                {isOpen ? (
                    <Image src={Cross} alt="cross" height={39} width={39} className="transition-transform duration-300" />
                ) : (
                    <Image src={Catalog} alt="catalog" height={36} width={36} className="transition-transform duration-300" />
                )}
                <p className="text-lg font-semibold font-rubik md:text-3xl mx-auto">Каталог</p>
            </div>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
                        onClick={toggle}
                        style={{ zIndex: 10 }}
                    ></div>
                    <div
                        className="absolute left-0 right-0 mt-4 bg-white p-2 text-black border-2 rounded-md shadow-lg z-10 transition-all duration-300 transform opacity-100 scale-100 max-w-7xl mx-auto md:w-screen md:max-w-screen-lg"
                        style={{ zIndex: 10 }}
                    >
                        <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white"></div>
                        <div className="p-4">{renderMenuItems(menuItems)}</div>
                    </div>
                </>
            )}

            {isOpen && (
                <div className="block md:hidden">
                    <div className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto">
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-semibold">Каталог</p>
                            <button onClick={toggle}>
                                <Image src={Cross} alt="close" height={30} width={30} />
                            </button>
                        </div>
                        <div className="mt-6 space-y-4">{renderMenuItems(menuItems)}</div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default DropDownUI;