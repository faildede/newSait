import weld from '@/public/images/weld.jpg'
// import { image } from '@nextui-org/theme'
import Image from 'next/image'

const text = [
    {
        id: 1,
        text: 'LINCOLN ELECTRIC COMPANY LTD (США), Линкольн Электрик, является ведущей мировой компанией в области сварки и производственных технологий. С момента своего основания в 1895 году, компания зарекомендовала себя как новатор в разработке и производстве сварочного оборудования, расходных материалов и автоматизированных сварочных систем.Мы являемся официальными представителями таких мировых брендов, как Lincoln Electric Co (Линкольн Электрик), Trafimet (Italy), Sacit (Italy), Harris (USA), Bug-o-system. Наша компания специализируется в области сварки и предлагает широкий спектр услуг и продукции для удовлетворения потребностей наших клиентов.   Мы можем решить ряд задач: подобрать оборудование и материалы, разработать технологический процесс, переподготовить или произвести аттестацию сварщиков по различным видам сварки. Также мы можем обеспечить комплексное снабжение наших клиентов всем необходимым для успешного выполнения сварочных работ.Наша миссия — предоставлять высококачественные решения для сварки, которые помогут нашим клиентам добиться максимальной производительности и эффективности. Мы гордимся тем, что можем предложить инновационные продукты и услуги, которые соответствуют самым высоким стандартам качества и безопасности.',
        imageUrl: '/About/LincolnPhoto.jpg'
    }
]

export const equipmentData = [
    {
      category: "1. Сварочное оборудование:",
      items: [
        "оборудование для сварки штучным электродом",
        "оборудование для аргонодуговой сварки",
        "оборудование для полуавтоматической сварки (в среде СО2 и Ar, а также порошко-вой проволокой)",
        "оборудование для полуавтоматической сварки в импульсе и импульс в импульсе",
        "оборудование для автоматической сварки",
        "оборудование для сварки теплообменников",
        "сварочные роботы",
        "точечная сварка (переносные клещи, споттера и стационарные машины до 860 кВА)"
      ]
    },
    {
      category: "2. Оборудование для резки:",
      items: [
        "резак для ручной и механизированной резки (кислород + пропан, ацетилен)",
        "ручная плазменная резка",
        "оборудование для резки с ЧПУ (плазма, гидроабразив, гидро, лазер)"
      ]
    },
   {
    category: "3. Оборудование для частичной механизации или автоматизации заготовительных и сварочных процессов, в частности:",    
    items: [
        'каретки для резки и сварки,',
        ' колоны, манипуляторы, позиционеры, роликоопоры и т. д.,',
        'линии по производству сварочной сетки,',
        'линии по производству сварочных балок (прямые и гофрированные),',
        ' комплекс оборудований для автоматической сварки трубопроводов,',
        ' автоматическую сварку резервуаров (горизонтальные и вертикальные швы).',
    ]
    },
    {
        category: "4. Сварочные материалы, в частности:",    
        items: [
            'сварочные электроды,',
            'сварочная проволока,',
            'флюс.',
        ]
        },
        {
            category: "5. Сварочные аксессуары:",    
            items: [
                ' горелки для п/а сварки и запасные части к ним,',
                ' редуктора',
                'маски,',
                'коннектора,',
                'маркеры по металлу,',
            ]
            },
            {
                category: "6. Абразивный инструмент, в частности:",    
                items: [
                    'отрезные и шлифовальные диски,,',
                    ' щетки,',
                    'камень.',
                ]
                },
        {
            category: "7. Оборудование для термообработки, в частности:",    
            items: [
            'нагревательные ленты, маты, муфты и оборудование к ним,',
            ' нагревательные печи (для отпуска и отжига металлов, сушильные, гончарные, лабо-раторные, плавильные, трубные, муфельные, ',
            'камерные, высокотемпературные, подовые, закалочные и индустриальные).',
            ]
        },
        {
            category: "8. Оборудование для ремонта и изготовления теплообменников и трансформаторов, в частности:",    
            items: [
            ' оборудование для раскатывания и развальцовки,',
            'гидравлические расширители,',
            'извлекатели пучков труб,',
            'оборудование для гидродинамической мойки теплообменников,',
            'автоматические рабочие центры для развальцовки, торцовки и сварки двойной осью.',
            ]
        },
        {
            category: "9. Газосмесительное и газоконтролирующие оборудование.",    
            items: [ ],
        },
        {
            category: "10. Электрогенераторы (электростанции), в частности:",    
            items: [
            'электрогенераторы на бензине и дизели малой мощности 0,9 – 10 кВт,',
            ' электрогенераторы для строй площадок 10 – 60 кВт,',
            ' электрогенераторы для аварийного электроснабжения 10 — 2500 кВт,',
            'электростанции большой мощности для постоянной работы 100 – 1000 кВт на га-зовом топливе,',
            'электрогенераторы для освещения.',
            ]
        },
  ];


const FirstAbout = () => {

    return (
        <>
              {
                text.map((item) => (
                    <div key={item.id} className='flex my-12'>
                    <div className='w-1/2'>
                        <p className='text-lg font-thin text-black-2'>{item.text}</p>
                    </div>
                    <div className='w-2/5 container mx-auto my-auto'>
                        <img  className='rounded-lg' src={item.imageUrl} style={{ width: '100%', height: 'auto' }} alt='weld' />
                    </div>
                    </div>
                ))
                }

            <div>
                <h1 className='text-3xl text-grey-1 font-bold mt-2'>Что вы найдете у нас ?</h1>
      {equipmentData.map((category, index) => (
    
        <div className='grid  grid-cols-2 my-12' key={index}>
          <h2 className='text-2xl text-grey-5 font-bold mt-2'>{category.category}</h2>
          <ul className='mt-12'>
            {category.items.map((item, idx) => (
              <li className='text-lg font-thin' key={idx}> - {item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="max-w-4xl  p-6 bg-white ">
      <h1 className="text-2xl font-bold mb-4 text-grey-5">Информация о компании</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-grey-5">Название:</h2>
        <p className='text-lg font-thin text-black-2'>ТОО «Гамма»</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-grey-5">Тип компании:</h2>
        <p className='text-lg font-thin text-black-2'>Торговая компания, Компания, предоставляющая услуги, Дистрибьютор / Реселлер</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-grey-5">Бренды:</h2>
        <p className='text-lg font-thin text-black-2'>Lincoln Electric, Elettro, Harris, Trafimet, Maus</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-grey-5">Количество сотрудников:</h2>
        <p className='text-lg font-thin text-black-2'>11-50 человек</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-grey-5">Год основания:</h2>
        <p className='text-lg font-thin text-black-2'>1999</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-grey-5">Организационно-правовая форма:</h2>
        <p className='text-lg font-thin text-black-2'>Товарищество с ограниченной ответственностью</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-grey-5">Контроль качества:</h2>
        <p className='text-lg font-thin text-black-2'>Внешний</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-grey-5">Сертификаты соответствия:</h2>
        <p className='text-lg font-thin text-black-2'>ISO 9000/9001/9004/19011: 2000</p>
      </div>
    </div>
        </>
    )
}

export default FirstAbout