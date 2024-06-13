import { FiAlertTriangle } from "react-icons/fi";
import { Button, ButtonOutline } from "../../components/Button";
import tank300 from "../../assets/tank300.png"
import icon1 from "../../assets/tank300Icon-1.svg"
import img1 from "../../assets/tank300Img-1.png"

const Tank300 = () => {
  return (
    <div className="bg-[#1C2121]">
      <div className="container mx-auto px-4 py-20 flex flex-col gap-7">
        <div className="grid grid-cols-1  md:grid-rows-1 md:grid-cols-3">
          <div className="md:col-span-1 flex flex-col gap-10">
            <div className="text-white">
              <h4 className="text-main-color text-xl font-medium">
                Только в АВТОРУСЬ!
              </h4>
              <h2 className="text-4xl font-bold">TANK 300</h2>
              <h3 className="text-3xl font-medium">
                Выгода по Trade-In до 450 000 ₽{" "}
              </h3>
              <div className="flex items-center gap-2 bg-[#FF2B00] w-full max-w-[264px] justify-center rounded-lg">
                <FiAlertTriangle />
                <p className="text-sm font-medium">Ограниченное предложение!</p>
                <FiAlertTriangle />
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <Button>Узнать стоимость по акции</Button>
              <ButtonOutline>Тест-драйв</ButtonOutline>
              <ButtonOutline>Рассчитать кредит</ButtonOutline>
            </div>
          </div>

          <div className="md:col-span-2 row-start-1 md:row-start-auto">
            <img src={tank300} alt="tank 300" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex gap-2 text-white bg-main-bg py-[11px] px-[14px] rounded-xl">
            <img src={icon1} alt="icon 1" />
            <h4 className="font-medium text-sm">Автомобили в наличии с ПТС</h4>
          </div>
          <div className="flex gap-2 text-white bg-main-bg py-[11px] px-[14px] rounded-xl">
            <img src={icon1} alt="icon 1" />
            <h4 className="font-medium text-sm">Автомобили в наличии с ПТС</h4>
          </div>
          <div className="flex gap-2 text-white bg-main-bg py-[11px] px-[14px] rounded-xl">
            <img src={icon1} alt="icon 1" />
            <h4 className="font-medium text-sm">Автомобили в наличии с ПТС</h4>
          </div>
          <div className="flex gap-2 text-white bg-main-bg py-[11px] px-[14px] rounded-xl">
            <img src={icon1} alt="icon 1" />
            <h4 className="font-medium text-sm">Автомобили в наличии с ПТС</h4>
          </div>
        </div>

        <div className="flex  gap-5 overflow-x-scroll md:overflow-hidden no-scrollbar">
          <div className="w-28 md:w-52 flex-shrink-0 md:flex-shrink">
            <img src={img1} alt="img 1" className="w-full" />
          </div>
          <div className="w-28 md:w-52 flex-shrink-0 md:flex-shrink">
            <img src={img1} alt="img 1" className="w-full" />
          </div>
          <div className="w-28 md:w-52 flex-shrink-0 md:flex-shrink">
            <img src={img1} alt="img 1" className="w-full" />
          </div>
          <div className="w-28 md:w-52 flex-shrink-0 md:flex-shrink">
            <img src={img1} alt="img 1" className="w-full" />
          </div>
          <div className="w-28 md:w-52 flex-shrink-0 md:flex-shrink">
            <img src={img1} alt="img 1" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tank300