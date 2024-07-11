import { title } from 'process';
import { Item } from '../types/index'
import { MenuItem } from '../types/index'
import { url } from 'inspector';
import { image } from '@nextui-org/theme';








export const firstHeadItem: Item[] = [
    {
        id: 1,
        name: 'О компании',
        route: '/about',
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
    }
];

const menuItems: MenuItem[] = [
    {
        title: 'Сварочные аппараты',
        route: '/welding-machines',
       
        children: [
            {
                title: 'Универсальные сварочные аппараты',
                route: '/universal-welding-machines',
               
            },
            {
                title: 'Аппараты для сварки в импульсном режиме',
                route: '/welding-machines-in-pulse-mode',
               
            },
            {
                title: 'Агрегаты сварочные с ДВС (двигатель внутреннего сгорания)',
                route: '/welding-units-with-internal-combustion-engine',
               
            },
            {
                title: 'Аргонодуговая сварка',
                route: '/argon-arc-welding',
               
            },
            {
                title: 'Аппараты полуавтоматической сварки',
                route: '/semi-automatic-welding-machines',
               
            }
        ]
    },

    {
        title: 'Оборудование для резки',
        route: '/cutting-equipment',
       
        children: [
            {
                title: 'Резаки Harris',
                route: '/harris-cutters',
               
            },
            {
                title: 'Мобильные системы резки',
                route: '/mobile-cutting-systems',
               
            },
            {
                title: 'Источники для плазменной резки',
                route: '/plasma-cutting-sources',
               
            },
            {
                title: 'Портальная резка металла',
                route: '/portal-metal-cutting',
               
            }
        ]
    }, 
    {
        title: 'Расходомеры, редукторы',
        route: '/flowmeters-reducers',
       
        children: [
            {
                title: 'Редукторы промышленные',
                route: '/industrial-reducers',
               
            },
            {
                title: 'Редукторы медицинские',
                route: '/medical-reducers',
               
            }
        ]
    },
    {
        title: 'Горелки, Запасные части',
        route: '/burners-spare-parts',
       
        children: [
            {
                title: 'Сварочные горелки Mig/Mag',
                route: '/mig-mag-welding-burners',
               
            },
            {
                title: 'Сварочные горелки Tig',
                route: '/tig-welding-burners',
               
            },
            {
                title: 'Плазменные резаки',
                route: '/plasma-cutters',
               
            },
            {
                title: 'Расходники на плазму',
                route: '/plasma-consumables',
               
            },
            {
                title: 'Расходники для TIG',
                route: '/tig-consumables',
               
            },
        ]
    },
    {
        title: 'Сварочные материалы',
        route: '/welding-materials',
       
        children: [ 
            {
                title: 'Сварочные материалы для трубопровода',
                route: '/welding-materials-for-pipeline',
               
            },
            {
                title: 'Сварочные электроды',
                route: '/welding-electrodes',
               
            },
            {
                title: 'Сварочная проволока, прутки',
                route: '/welding-wire-rods',
               
            },
            {
                title: 'Материалы для пайки',
                route: '/soldering-materials',
               
            }
        ]
    },
    {
        title: 'Машины контактной сварки',
        route: '/contact-welding-machines',
       
    },
    {
        title: 'Оборудование для сварки под флюсом',
        route: '/equipment-for-flux-welding',
       
    },
    {
        title: 'Металлогибочные станки',
        route: '/metal-bending-machines',
       
        children: [
            {
                title: 'Вальцы',
                route: '/rollers',
               
            },
            {
                title: 'Производство днищ',
                route: '/bottom-production',
               
            },
            {
                title: 'Профилегибочные станки',
                route: '/profile-bending-machines',
               
            },
            {
                title: 'Листогибы',
                route: '/bending-presses',
               
            },
           
        ]
    },
    {
        title: 'Автоматизация сварочных процессов',
        route: '/automation-of-welding-processes',
       
        children: [
            {
                title: 'Сварочные колонны',
                route: '/welding-columns',
               
            },
            {
                title: 'Сварочные манипуляторы',
                route: '/welding-manipulators',
               
            },
            {
                title: 'Оборудование для сварки резервуаров',
                route: '/equipment-for-tank-welding',
               
            },
            {
                title: 'Сварочные каретки',
                route: '/welding-carriages',
               
            },
            {
                title: 'Системы слежения',
                route: '/tracking-systems',
               
            },
            {
                title: 'Роликовые опоры',
                route: '/roller-supports',
               
            }
        ]
    },
    {
        title: 'Сварочные аксессуары, cредства защиты',
        route: '/welding-accessories-protection',
       
        children:[
            {
                title: 'Электрододержатели',
                route: '/electrode-holders',
               
            },
            {
                title: 'Клеммы заземления',
                route: '/grounding-clamps',
               
            },
            {
                title: 'Разъёмы',
                route: '/connectors',
               
            },
            {
                title: 'Сварочные шаблоны',
                route: '/welding-templates',
               
            },
            {
                title: 'Маркеры',
                route: '/markers',
               
            },
            {
                title: 'Сварочные маски',
                route: '/welding-masks',
               
            },
            {
                title: 'Сварочные краги',
                route: '/welding-aprons',
               
            },
            {
                title: 'Защитные стекла',
                route: '/protective-glasses',
               
            },
            {
                title: 'Диски и Щетки',
                route: '/disks-brushes',
               
            }
        ]
    },
    {
        title: 'Лазер',
        route: '/laser',
       
        children: [
            {
                title : 'Сварка лазером',
                route: '/laser-welding',
               
            },
            {
                title: 'Лазерная резка',
                route: '/laser-cutting',
               
            }
        ]
    },
    { 
        title: 'Запасные части',
        route: '/spare-parts',
       
        children: [
            {
                title: 'KOHLER',
                route : '/kohler',
               
            },
            {
                title: 'Электрические платы и детали',
                route: '/electrical-boards-parts',
               
            }
        ]
    }


];
export default menuItems;

