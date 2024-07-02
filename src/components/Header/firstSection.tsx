import  {firstHeadItem}  from '../../constant/index';
import { Item } from '../../types/index';




const FirstSection = () => {
    return (
        <nav className="header bg-black">
            {firstHeadItem.map((item: Item) => (
                <h6 className='font-roboto' key={item.id}>{item.name}</h6>
            ))}
        </nav>
    );
};

export default FirstSection;