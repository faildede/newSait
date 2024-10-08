import { title } from 'process';
import { Item } from '../types/index'
import { MenuItem } from '../types/index';
import { url } from 'inspector';
import { image } from '@nextui-org/theme';
import { ProductcatalogProps } from '../types/index';
 



export const ProductCatalog: ProductcatalogProps[] = [
    {
        tag: 'welding equipment',
        name: 'Сварочные аппараты',
        ImageUrl: 'https://res.cloudinary.com/dt4qeehms/image/upload/v1634376697/',
    },
    {   
        tag: 'cutting-equipment',
        name: 'Оборудование для резки',
        ImageUrl: ''
    },
    {   
        tag: 'flowmeters-reducers',
        name: 'Расходомеры, редукторы',
        ImageUrl: ''
    },
    {   
        tag: 'burners-spare-parts',
        name: 'Горелки, Запасные части',
        ImageUrl: ''
    },
    {   
        tag: 'welding-materials',
        name: 'Сварочные материалы',
        ImageUrl: ''
    },
    {   
        tag: 'contact-welding-machines',
        name: 'Машины контактной сварки',
        ImageUrl: ''
    },
    {   
        tag: 'equipment-for-flux-welding',
        name: 'Оборудование для сварки под флюсом',
        ImageUrl: ''
    },
    {   
        tag: 'metal-bending-machines',
        name: 'Металлогибочные станки',
        ImageUrl: ''
    },
    {   
        tag: 'automation-of-welding-processes',
        name: 'Автоматизация сварочных процессов',
        ImageUrl: ''
    },
    {   
        tag: 'welding-accessories-protection',
        name: 'Сварочные аксессуары, cредства защиты',
        ImageUrl: ''
    },
    {   
        tag: 'laser',
        name: 'Лазер',
        ImageUrl: '',
    },
    {   
        tag: 'spare-parts',
        name: 'Запасные части',
        ImageUrl: '',
    },
];




export const firstHeadItem: Item[] = [
    {
        id: 1,
        name: 'О компании',
        route: '/AboutCompany',
    },
    {
        id: 2,
        name: 'Продукция',
        route: '/catalog',

    },
    {
        id: 3,
        name: 'Услуги',
        route: '/services',
    },
    {
        id: 4,
        name: 'Доставка',
        route: '/delivery',
    },
];

export interface MenuItem {
    title: string;
    route: string;
    img: string;
    tag?: string;
    children?: MenuItem[];
}

const menuItems: MenuItem[] = [
    {
        title: 'Сварочные аппараты',
        route: '/welding equipment',
        tag: 'welding equipment',
        img: '/categoryImage/aparat.svg',
        children: [
            {
                title: 'Универсальные сварочные аппараты',
                route: '/universal-welding-machines',
                tag: 'universal-welding-machines',
                imageUrl: '/categoryImage/childrenImg/Unevercal.svg',
            },
            {
                title: 'Аппараты для сварки в импульсном режиме',
                route: '/welding-machines-in-pulse-mode',
                tag: 'welding-machines-in-pulse-mode',
                imageUrl: '/categoryImage/childrenImg/Impuls.svg',
            },
            {
                title: 'Агрегаты сварочные с ДВС (двигатель внутреннего сгорания)',
                route: '/welding-units-with-internal-combustion-engine',
                tag: 'welding-units-with-internal-combustion-engine',
                imageUrl: '/categoryImage/childrenImg/Dvc.svg',
            },
            {
                title: 'Аргонодуговая сварка',
                route: '/argon-arc-welding',
                tag: 'argon-arc-welding',
                imageUrl: '/categoryImage/childrenImg/Argon.svg',
            },
            {
                title: 'Аппараты полуавтоматической сварки',
                route: '/semi-automatic-welding-machines',
                tag: 'semi-automatic-welding-machines',
                imageUrl: '/categoryImage/childrenImg/Poly.svg',
            }
        ]
    },
    {
        title: 'Оборудование для резки',
        route: '/Cutting equipment',
        tag: 'Cutting equipment',
        img: '/categoryImage/apparatDlyaRezk.svg',
        children: [
            {
                title: 'Резаки Harris',
                route: '/harris-cutters',
                tag: 'harris-cutters',
                imageUrl: '/categoryImage/childrenImg/RezakHarris.svg',
            },
            {
                title: 'Мобильные системы резки',
                route: '/mobile-cutting-systems',
                tag: 'mobile-cutting-systems',
                imageUrl: '/categoryImage/childrenImg/Mobil.svg',
            },
            {
                title: 'Источники для плазменной резки',
                route: '/plasma-cutting-sources',
                tag: 'plasma-cutting-sources',
                imageUrl: '/categoryImage/childrenImg/Istoch.svg',
            },
            {
                title: 'Портальная резка металла',
                route: '/portal-metal-cutting',
                tag: 'portal-metal-cutting',
                imageUrl: '/categoryImage/childrenImg/Portal.svg',
            }
        ]
    },
    {
        title: 'Расходомеры, редукторы',
        route: '/Flow meters, reducers',
        tag: 'Flow meters, reducers',
        img:'/categoryImage/Rashod.svg',
        children: [
            {
                title: 'Редукторы промышленные',
                route: '/industrial-reducers',
                tag: 'industrial-reducers',
                imageUrl: '/categoryImage/childrenImg/Redutor.svg',
            },
            {
                title: 'Редукторы медицинские',
                route: '/medical-reducers',
                tag: 'medical-reducers',
                imageUrl: '/categoryImage/childrenImg/MedReductor.svg',
            }
        ]
    },
    {
        title: 'Горелки, Запасные части',
        route: '/Burners. Spare parts',
        tag: 'Burners. Spare parts',
        img: '/categoryImage/Gorelki.svg',
        children: [
            {
                title: 'Сварочные горелки Mig/Mag',
                route: '/mig-mag-welding-burners',
                tag: 'mig-mag-welding-burners',
                imageUrl: '/categoryImage/childrenImg/MigMag.svg',

            },
            {
                title: 'Сварочные горелки Tig',
                route: '/tig-welding-burners',
                tag: 'tig-welding-burners',
                imageUrl: '/categoryImage/childrenImg/Tig.svg',
            },
            {
                title: 'Плазменные резаки',
                route: '/plasma-cutters',
                tag: 'plasma-cutters',
                imageUrl: '/categoryImage/childrenImg/PlasmRezak.svg',
            },
            {
                title: 'Расходники на плазму',
                route: '/plasma-consumables',
                tag: 'plasma-consumables',
                imageUrl: '/categoryImage/childrenImg/Rashodniki.svg',
            },
            {
                title: 'Расходники для TIG',
                route: '/tig-consumables',
                tag: 'tig-consumables',
                imageUrl: '/categoryImage/childrenImg/TigRashodniki.svg',
            }
        ]
    },
    {
        title: 'Сварочные материалы',
        route: '/Welding materials',
        tag: 'Welding materials',
        img: '/categoryImage/Provolka.svg',
        children: [
            {
                title: 'Сварочные материалы для трубопровода',
                route: '/welding-materials-for-pipeline',
                tag: 'welding-materials-for-pipeline',
                imageUrl: '/categoryImage/childrenImg/Materials.svg',
            },
            {
                title: 'Сварочные электроды',
                route: '/welding-electrodes',
                tag: 'welding-electrodes',
                imageUrl: '/categoryImage/childrenImg/Electrodi.svg',
            },
            {
                title: 'Сварочная проволока, прутки',
                route: '/welding-wire-rods',
                tag: 'welding-wire-rods',
                imageUrl: '/categoryImage/childrenImg/Provolka.svg',
            },
            {
                title: 'Материалы для пайки',
                route: '/soldering-materials',
                tag: 'soldering-materials',
                imageUrl: '/categoryImage/childrenImg/Payka.svg',
            }
        ]
    },
    {
        title: 'Машины контактной сварки',
        route: '/Resistance welding machines',
        tag: 'Resistance welding machines',
        img: '/categoryImage/Contact.svg',
    },
    {
        title: 'Оборудование для сварки под флюсом',
        route: '/Submerged Welding Equipment',
        tag: 'Submerged Welding Equipment',
        img: '/categoryImage/flus.svg',
    },
    {
        title: 'Металлогибочные станки',
        route: '/Metal bending machines',
        tag: 'Metal bending machines',
        img: '/categoryImage/MetalGib.svg',
        children: [
            {
                title: 'Вальцы',
                route: '/rollers',
                tag: 'rollers',
                imageUrl: '/categoryImage/childrenImg/Valci.svg',
            },
            {
                title: 'Производство днищ',
                route: '/bottom-production',
                tag: 'bottom-production',
                imageUrl: '/categoryImage/childrenImg/Dnishi.svg',
            },
            {
                title: 'Профилегибочные станки',
                route: '/profile-bending-machines',
                tag: 'profile-bending-machines',
                imageUrl: '/categoryImage/childrenImg/Profil.svg',
            },
            {
                title: 'Листогибы',
                route: '/bending-presses',
                tag: 'bending-presses',
                imageUrl: '/categoryImage/childrenImg/Listogib.svg',
            }
        ]
    },
    {
        title: 'Автоматизация сварочных процессов',
        route: '/automation of welding processes',
        tag: 'automation of welding processes',
        img: '/categoryImage/avtoMat.svg',
        children: [
            {
                title: 'Сварочные колонны',
                route: '/welding-columns',
                tag: 'welding-columns',
                imageUrl: '/categoryImage/childrenImg/Kolona.svg',
            },
            {
                title: 'Сварочные манипуляторы',
                route: '/welding-manipulators',
                tag: 'welding-manipulators',
                imageUrl: '/categoryImage/childrenImg/Manipulator.svg',
            },
            {
                title: 'Оборудование для сварки резервуаров',
                route: '/equipment-for-tank-welding',
                tag: 'equipment-for-tank-welding',
                imageUrl: '/categoryImage/childrenImg/Rezervuar.svg',
            },
            {
                title: 'Сварочные каретки',
                route: '/welding-carriages',
                tag: 'welding-carriages',
                imageUrl: '/categoryImage/childrenImg/Karetka.svg',
            },
            {
                title: 'Системы слежения',
                route: '/tracking-systems',
                tag: 'tracking-systems',
                imageUrl: '/categoryImage/childrenImg/Sled.svg',
            },
            {
                title: 'Роликовые опоры',
                route: '/roller-supports',
                tag: 'roller-supports',
                imageUrl: '/categoryImage/childrenImg/Rolik.svg',
            }
        ]
    },
    {
        title: 'Сварочные аксессуары, cредства защиты',
        route: '/Welding accessories Protective equipment',
        tag: 'Welding accessories Protective equipment',
        img: '/categoryImage/Maska.svg',
        children: [
            {
                title: 'Электрододержатели',
                route: '/electrode-holders',
                tag: 'electrode-holders',
                imageUrl: '/categoryImage/childrenImg/Electrodid.svg',
            },
            {
                title: 'Клеммы заземления',
                route: '/grounding-clamps',
                tag: 'grounding-clamps',
                imageUrl: '/categoryImage/childrenImg/Klemi.svg',
            },
            {
                title: 'Разъёмы',
                route: '/connectors',
                tag: 'connectors',
                imageUrl: '/categoryImage/childrenImg/Razem.svg',
            },
            {
                title: 'Сварочные шаблоны',
                route: '/welding-templates',
                tag: 'welding-templates',
                imageUrl: '/categoryImage/childrenImg/Shabl.svg',
                
            },
            {
                title: 'Маркеры',
                route: '/markers',
                tag: 'markers',
                imageUrl: '/categoryImage/childrenImg/Marker.svg',
            },
            {
                title: 'Сварочные маски',
                route: '/welding-masks',
                tag: 'welding-masks',
                imageUrl: '/categoryImage/childrenImg/Maska.svg',
            },
            {
                title: 'Сварочные краги',
                route: '/welding-aprons',
                tag: 'welding-aprons',
                imageUrl: '/categoryImage/childrenImg/Kragi.svg',
            },
            {
                title: 'Защитные стекла',
                route: '/protective-glasses',
                tag: 'protective-glasses',
                imageUrl: '/categoryImage/childrenImg/Stekla.svg',
            },
            {
                title: 'Диски и Щетки',
                route: '/disks-brushes',
                tag: 'disks-brushes',
                imageUrl: '/categoryImage/childrenImg/Diski.svg',
            }
        ]
    },
    {
        title: 'Лазер',
        route: '/Laser',
        tag: 'Laser',
        img: '/categoryImage/secondLaser.svg',
        children: [
            {
                title: 'Сварка лазером',
                route: '/laser-welding',
                tag: 'laser-welding',
                imageUrl: '/categoryImage/childrenImg/Svarkabylaser.svg',
            },
            {
                title: 'Лазерная резка',
                route: '/laser-cutting',
                tag: 'laser-cutting',
                imageUrl: '/categoryImage/childrenImg/Rezkalaser.svg',
            }
        ]
    },
    {
        title: 'Запасные части',
        route: '/Spare parts',
        tag: 'Spare parts',
        img: '/categoryImage/Shatyn.svg',
        children: [
            {
                title: 'KOHLER',
                route: '/kohler',
                tag: 'kohler',
                imageUrl: '/categoryImage/childrenImg/Kohler.svg',
            },
            {
                title: 'Электрические платы и детали',
                route: '/electrical-boards-parts',
                tag: 'electrical-boards-parts',
                imageUrl: '/categoryImage/childrenImg/ElectroPlata.svg',
            }
        ]
    }
];

export default menuItems;
