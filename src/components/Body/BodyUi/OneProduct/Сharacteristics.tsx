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
      {slider.length > 0 ? (
        slider.map((slide) => (
          <div className="relative flex  text-lg font-bold text-grey-1 my-6" key={slide.id}>
            <h3 className="w-1/2">{slide.title}</h3>
            <p className="w-1/4 text-left">{slide.caption}</p>
            <div className="absolute bottom-0 left-0 w-full border-2 border-t border-dotted border-gray-400"></div>
          </div>
        ))
      ) : (
        <p className="container mx-auto my-auto text-xl text-grey-1 font-bold">Нет дополнительных характеристик на товар</p>
      )}
    </>
  );
}

export default Characteristics;