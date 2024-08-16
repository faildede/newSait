interface ICharacteristics {
  slider: Array<{
    title: string;
    caption: string;
    id: string;
  }>;
}

const Characteristics: React.FC<ICharacteristics> = ({ slider }) => {
  return (
    <>
      <h3 className="font-bold text-2xl text-gray-800 mb-12 ">Основные характеристики продукта: </h3>
      {slider.length > 0 ? (
        slider.map((slide) => (
          <div className="relative flex items-end text-lg font-bold text-grey-1 my-6 mx-12" key={slide.id}>
            <h3 className="">{slide.title}</h3>
            
            <div className="flex-grow mx-2 border-b-5 py-2 border-dotted border-grey-3"></div>
            
            <p className="w-1/3 text-left ">{slide.caption}</p>
          </div>
        ))
      ) : (
        <p className="container mx-auto my-auto text-xl text-grey-3 font-bold">
          Нет дополнительных характеристик на товар
        </p>
      )}
    </>
  );
};

export default Characteristics;