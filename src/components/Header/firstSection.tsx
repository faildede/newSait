'use client';

import { firstHeadItem } from '../../constant/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Tooltip, Button } from '@nextui-org/react';
import ToolTipUI from './ElementUI/TooltipUI';

const FirstSection = () => {
    return (
        <nav className="text-white flex font-rubik justify-between my-auto py-2 text-sm font-normal">
            <section className='flex'>
                <FontAwesomeIcon className='py-1 px-2 mx-2 rounded-full bg-grey-1' icon={faLocationDot} />
                <Tooltip showArrow={true} content={<ToolTipUI />}>
                    <Button>Алмата</Button>
                </Tooltip>
            </section>
            <div className="relative overflow-hidden  flex">
                {firstHeadItem.map((item) => (
                    <a
                        className="font-normal text-sm font-rubik relative block mx-4 group"
                        href={item.route}
                        key={item.id}
                    >
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full group-hover:transition-all"></span>
                    </a>
                ))}
            </div>
            <a href='' className='flex '>
                <FontAwesomeIcon className='p-1 mx-2' icon={faUser} />
                <p className='my-auto'>Личный кабинет</p>
            </a>
        </nav>
    );
};

export default FirstSection;
