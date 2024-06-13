import icon1 from "../../assets/TimerIcon-1.svg";
import icon2 from '../../assets/TimerIcon-2.svg'
import icon3 from '../../assets/TimerIcon-3.svg'
import tank300 from '../../assets/tank300mini.png'
import tank500 from '../../assets/tank500mini.png'

const Timer = () => {
  return (
    <div className="bg-main-bg">
      <div className="container mx-auto xl:px-20 px-4 text-white py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-14 pb-24">
          <div className="flex gap-5 border border-[#939697] py-5 px-3 rounded-[10px]">
            <div className="">
              <img src={icon1} alt="icon 1" className="w-full" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-[18px] uppercase">
                Официальный дилер
              </h3>
              <p className="hidden sm:block font-light text-sm">
                {"Гарантируем высокое качество обслуживания."}
              </p>
            </div>
          </div>

          <div className="flex gap-5 border border-[#939697] py-5 px-3 rounded-[10px]">
            <div className="">
              <img src={icon2} alt="icon 2" className="w-full" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-[18px]">ПОКУПКА АВТО ЗА 1 ДЕНЬ</h3>
              <p className="hidden sm:block font-light text-sm">
                {"Удобный процесс покупки, включая оформление всех документов."}
              </p>
            </div>
          </div>

          <div className="flex gap-5 border border-[#939697] py-5 px-3 rounded-[10px]">
            <div className="">
              <img src={icon3} alt="icon 3" className="w-full" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-[18px]">
                ВСЕ КОМПЛЕКТАЦИИ В НАЛИЧИИ
              </h3>
              <p className="hidden sm:block font-light text-sm">
                {"Широкий выбор комплектаций, с полным пакетом документов"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="font-bold text-2xl sm:text-4xl text-center">
            ЗАБРОНИРУЙТЕ Автомобиль СЕГОДНЯ И ПОЛУЧИТЕ ДОПОЛНИТЕЛЬНУЮ ВЫГОДУ 100
            000 ₽
          </h2>
          <div className="flex gap-6 justify-center">
            <div className="text-center">
              <img src={tank300} alt="tank 300" />
              <p className="font-medium text-sm">TANK 300</p>
            </div>
            <div className="text-center">
              <img src={tank500} alt="tank 300" />
              <p className="font-medium text-sm">TANK 500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
