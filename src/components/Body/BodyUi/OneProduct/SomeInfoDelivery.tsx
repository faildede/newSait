

const SomeInfoDelivery = () => { 

    return (
        <>
<div className=" p-6 rounded-lg ">
  <h2 className="text-2xl font-semibold mb-6 text-gray-800">Информация для заказа</h2>

  <div className="mb-6">
    <h3 className="text-xl font-medium text-gray-700 mb-3">Способы доставки:</h3>
    <ul className="list-disc list-inside space-y-2 text-gray-600">
      <li><strong>Курьерская доставка:</strong> Доставка курьером до двери в течение 3-5 рабочих дней. Стоимость доставки составляет расчитывается из заказа.</li>
      <li><strong>Почтовая доставка:</strong> Отправка через почту  с возможностью отслеживания. Время доставки — 7-10 рабочих дней. Стоимость доставки зависит от региона.</li>
      <li><strong>Самовывоз:</strong> Вы можете самостоятельно забрать товар из нашего пункта выдачи, расположенного по адресу:  г. Алматы, ул. Зимняя 1-Б. Самовывоз бесплатный.</li>
    </ul>
  </div>

  <div className="mb-6">
    <h3 className="text-xl font-medium text-gray-700 mb-3">Способы оплаты:</h3>
    <ul className="list-disc list-inside space-y-2 text-gray-600">
      <li><strong>Банковская карта:</strong> Оплата производится через защищенный платежный шлюз. Мы принимаем карты Visa, MasterCard, и МИР.</li>
      <li><strong>Наличный расчет:</strong> Возможен при получении товара через курьерскую доставку или при самовывозе.</li>
    </ul>
  </div>

  <div className="mb-6">
    <h3 className="text-xl font-medium text-gray-700 mb-3">Условия возврата:</h3>
    <p className="text-gray-600">Вы можете вернуть товар в течение 14 дней с момента получения при условии, что товар не был в употреблении и сохранен его товарный вид. Для возврата свяжитесь с нашей службой поддержки по номеру <a href="tel:+77077001745" className="text-grey-1 hover:underline">+7 (707) 700-17-45</a> или отправьте запрос на электронную почту <a href="mailto:office@kgamma.kz" className="text-grey-1 hover:underline">office@kgamma.kz</a>.</p>
  </div>

  <div>
    <h3 className="text-xl font-medium text-gray-700 mb-3">Контакты для связи:</h3>
    <p className="text-gray-600">Если у вас возникли вопросы или вам нужна помощь, свяжитесь с нами по телефону <a href="tel:+77077001745" className="text-grey-1 hover:underline">+7 (707) 700-17-45</a>, или отправьте сообщение на электронную почту <a href="mailto:office@kgamma.kz" className="text-grey-1 hover:underline">office@kgamma.kz</a>. Мы работаем с 9:00 до 18:00 по московскому времени.</p>
  </div>
</div>
        </>
    )
 }

 export default SomeInfoDelivery;