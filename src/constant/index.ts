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
        route: '/products',

    },
    {
        id: 3,
        name: 'Услуги',
        route: '/services',
    },
    {
        id: 4,
        name: 'Контакты',
        route: '/contacts',
    },
    {
        id: 5,
        name: 'Новости',
        route: '/news',
    }
];

export interface MenuItem {
    title: string;
    route: string;
    tag?: string;
    children?: MenuItem[];
}

const menuItems: MenuItem[] = [
    {
        title: 'Сварочные аппараты',
        route: '/welding-machines',
        tag: 'welding-machines',
        children: [
            {
                title: 'Универсальные сварочные аппараты',
                route: '/universal-welding-machines',
                tag: 'universal-welding-machines'
            },
            {
                title: 'Аппараты для сварки в импульсном режиме',
                route: '/welding-machines-in-pulse-mode',
                tag: 'welding-machines-in-pulse-mode'
            },
            {
                title: 'Агрегаты сварочные с ДВС (двигатель внутреннего сгорания)',
                route: '/welding-units-with-internal-combustion-engine',
                tag: 'welding-units-with-internal-combustion-engine'
            },
            {
                title: 'Аргонодуговая сварка',
                route: '/argon-arc-welding',
                tag: 'argon-arc-welding'
            },
            {
                title: 'Аппараты полуавтоматической сварки',
                route: '/semi-automatic-welding-machines',
                tag: 'semi-automatic-welding-machines'
            }
        ]
    },
    {
        title: 'Оборудование для резки',
        route: '/cutting-equipment',
        tag: 'cutting-equipment',
        children: [
            {
                title: 'Резаки Harris',
                route: '/harris-cutters',
                tag: 'harris-cutters'
            },
            {
                title: 'Мобильные системы резки',
                route: '/mobile-cutting-systems',
                tag: 'mobile-cutting-systems'
            },
            {
                title: 'Источники для плазменной резки',
                route: '/plasma-cutting-sources',
                tag: 'plasma-cutting-sources'
            },
            {
                title: 'Портальная резка металла',
                route: '/portal-metal-cutting',
                tag: 'portal-metal-cutting'
            }
        ]
    },
    {
        title: 'Расходомеры, редукторы',
        route: '/flowmeters-reducers',
        tag: 'flowmeters-reducers',
        children: [
            {
                title: 'Редукторы промышленные',
                route: '/industrial-reducers',
                tag: 'industrial-reducers'
            },
            {
                title: 'Редукторы медицинские',
                route: '/medical-reducers',
                tag: 'medical-reducers'
            }
        ]
    },
    {
        title: 'Горелки, Запасные части',
        route: '/burners-spare-parts',
        tag: 'burners-spare-parts',
        children: [
            {
                title: 'Сварочные горелки Mig/Mag',
                route: '/mig-mag-welding-burners',
                tag: 'mig-mag-welding-burners'
            },
            {
                title: 'Сварочные горелки Tig',
                route: '/tig-welding-burners',
                tag: 'tig-welding-burners'
            },
            {
                title: 'Плазменные резаки',
                route: '/plasma-cutters',
                tag: 'plasma-cutters'
            },
            {
                title: 'Расходники на плазму',
                route: '/plasma-consumables',
                tag: 'plasma-consumables'
            },
            {
                title: 'Расходники для TIG',
                route: '/tig-consumables',
                tag: 'tig-consumables'
            }
        ]
    },
    {
        title: 'Сварочные материалы',
        route: '/welding-materials',
        tag: 'welding-materials',
        children: [
            {
                title: 'Сварочные материалы для трубопровода',
                route: '/welding-materials-for-pipeline',
                tag: 'welding-materials-for-pipeline'
            },
            {
                title: 'Сварочные электроды',
                route: '/welding-electrodes',
                tag: 'welding-electrodes'
            },
            {
                title: 'Сварочная проволока, прутки',
                route: '/welding-wire-rods',
                tag: 'welding-wire-rods'
            },
            {
                title: 'Материалы для пайки',
                route: '/soldering-materials',
                tag: 'soldering-materials'
            }
        ]
    },
    {
        title: 'Машины контактной сварки',
        route: '/contact-welding-machines',
        tag: 'contact-welding-machines'
    },
    {
        title: 'Оборудование для сварки под флюсом',
        route: '/equipment-for-flux-welding',
        tag: 'equipment-for-flux-welding'
    },
    {
        title: 'Металлогибочные станки',
        route: '/metal-bending-machines',
        tag: 'metal-bending-machines',
        children: [
            {
                title: 'Вальцы',
                route: '/rollers',
                tag: 'rollers'
            },
            {
                title: 'Производство днищ',
                route: '/bottom-production',
                tag: 'bottom-production'
            },
            {
                title: 'Профилегибочные станки',
                route: '/profile-bending-machines',
                tag: 'profile-bending-machines'
            },
            {
                title: 'Листогибы',
                route: '/bending-presses',
                tag: 'bending-presses'
            }
        ]
    },
    {
        title: 'Автоматизация сварочных процессов',
        route: '/automation-of-welding-processes',
        tag: 'automation-of-welding-processes',
        children: [
            {
                title: 'Сварочные колонны',
                route: '/welding-columns',
                tag: 'welding-columns'
            },
            {
                title: 'Сварочные манипуляторы',
                route: '/welding-manipulators',
                tag: 'welding-manipulators'
            },
            {
                title: 'Оборудование для сварки резервуаров',
                route: '/equipment-for-tank-welding',
                tag: 'equipment-for-tank-welding'
            },
            {
                title: 'Сварочные каретки',
                route: '/welding-carriages',
                tag: 'welding-carriages'
            },
            {
                title: 'Системы слежения',
                route: '/tracking-systems',
                tag: 'tracking-systems'
            },
            {
                title: 'Роликовые опоры',
                route: '/roller-supports',
                tag: 'roller-supports'
            }
        ]
    },
    {
        title: 'Сварочные аксессуары, cредства защиты',
        route: '/welding-accessories-protection',
        tag: 'welding-accessories-protection',
        children: [
            {
                title: 'Электрододержатели',
                route: '/electrode-holders',
                tag: 'electrode-holders'
            },
            {
                title: 'Клеммы заземления',
                route: '/grounding-clamps',
                tag: 'grounding-clamps'
            },
            {
                title: 'Разъёмы',
                route: '/connectors',
                tag: 'connectors'
            },
            {
                title: 'Сварочные шаблоны',
                route: '/welding-templates',
                tag: 'welding-templates'
            },
            {
                title: 'Маркеры',
                route: '/markers',
                tag: 'markers'
            },
            {
                title: 'Сварочные маски',
                route: '/welding-masks',
                tag: 'welding-masks'
            },
            {
                title: 'Сварочные краги',
                route: '/welding-aprons',
                tag: 'welding-aprons'
            },
            {
                title: 'Защитные стекла',
                route: '/protective-glasses',
                tag: 'protective-glasses'
            },
            {
                title: 'Диски и Щетки',
                route: '/disks-brushes',
                tag: 'disks-brushes'
            }
        ]
    },
    {
        title: 'Лазер',
        route: '/laser',
        tag: 'laser',
        children: [
            {
                title: 'Сварка лазером',
                route: '/laser-welding',
                tag: 'laser-welding'
            },
            {
                title: 'Лазерная резка',
                route: '/laser-cutting',
                tag: 'laser-cutting'
            }
        ]
    },
    {
        title: 'Запасные части',
        route: '/spare-parts',
        tag: 'spare-parts',
        children: [
            {
                title: 'KOHLER',
                route: '/kohler',
                tag: 'kohler'
            },
            {
                title: 'Электрические платы и детали',
                route: '/electrical-boards-parts',
                tag: 'electrical-boards-parts'
            }
        ]
    }
];

export default menuItems;
