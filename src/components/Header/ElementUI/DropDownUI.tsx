'use client';

import React, { useState } from "react";
import Image from "next/image";
import Catalog from "../../../assets/icons/Catalog.svg";
import Cross from "../../../assets/icons/Cross.svg";
import { Props, MenuItem } from "../../../types";
import { Link } from "@nextui-org/react";
import menuItems from "../../../constant/index";

const DropDownUI = (props: Props) => {
    const { item } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const renderMenuItems = (items: MenuItem[]) => { //TODO: Fix do another way to fetch children
        return items.map(item => (
            <div key={item.route} className="mb-2">
                <Link
                    className="font-semibold px-4 py-1 text-lg block group font-rubik text-black hover:border-b-red-1 transition-colors duration-300"
                    href={item.route || ''}
                >
                    {item.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-1 group-hover:w-full group-hover:transition-all"></span>
                </Link>
                {item.children && (
                    <div className="ml-2 text-xs leading-loose">
                      <Link className="text-xs">{renderMenuItems(item.children)}</Link>
                        
                    </div>
                )}
            </div>
        ));
    };

    return (
        <section className="">
            <div onClick={toggle}
                className={`container p-4 border-2 border-red-1 mx-auto rounded-xl flex items-center cursor-pointer font-rubik transition-all duration-700 transform ${
                    isOpen ? "bg-white text-red-1" : "bg-red-1 text-white"
                }`}>
                {isOpen ? (
                    <Image src={Cross} alt="cross" height={39} width={39} className="transition-transform duration-300" />
                ) : (
                    <Image src={Catalog} alt="catalog" height={46} width={46} className="transition-transform duration-300" />
                )}
                <p className="font-semibold font-rubik text-3xl mx-auto">Каталог</p>
            </div>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
                        onClick={toggle}
                        style={{ zIndex: 5 }}
                    ></div>
                    <div
                        className="absolute left-0 right-0 mt-4 w-screen bg-white p-2 text-black border-2 rounded-md shadow-lg z-10 transition-all duration-300 transform opacity-100 scale-100 max-w-7xl mx-auto"
                        style={{ zIndex: 10 }}
                    >
                        <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white"></div>
                        <div className="p-4 grid grid-cols-4 gap-2">
                            {renderMenuItems(menuItems)}
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default DropDownUI;
