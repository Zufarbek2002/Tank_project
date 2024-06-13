import { FiAlertTriangle } from "react-icons/fi";
import { Button, ButtonOutline } from "../../components/Button";
import tank1 from "../../assets/Tank300/tank300.png";
import tank2 from "../../assets/Tank300/tank300-2.png";
import tank3 from "../../assets/Tank300/tank300-3.png";
import tank4 from "../../assets/Tank300/tank300-4.png";
import tank5 from "../../assets/Tank300/tank300-5.png";
import icon1 from "../../assets/tank300Icon-1.svg";
import img1 from "../../assets/tank300Img-1.png";
import { useState } from "react";

const Tank300 = () => {
  const [select, setSelect] = useState(true)
  const [select2, setSelect2] = useState(false)
  const [select3, setSelect3] = useState(false);
  const [select4, setSelect4] = useState(false);
  const [select5, setSelect5] = useState(false);

  const hadleSelect =()=>{
    setSelect(true)
    setSelect2(false)
    setSelect3(false)
    setSelect4(false)
    setSelect5(false)
  }
  const hadleSelect2 =()=>{
    setSelect(false)
    setSelect2(true)
    setSelect3(false)
    setSelect4(false)
    setSelect5(false)
  }
  const hadleSelect3 =()=>{
    setSelect(false)
    setSelect2(false)
    setSelect3(true)
    setSelect4(false)
    setSelect5(false)
  }
  const hadleSelect4 =()=>{
    setSelect(false)
    setSelect2(false)
    setSelect3(false)
    setSelect4(true)
    setSelect5(false)
  }
  const hadleSelect5 =()=>{
    setSelect(false)
    setSelect2(false)
    setSelect3(false)
    setSelect4(false)
    setSelect5(true)
  }
  return (
    <div className="bg-[#1C2121]">
      <div className="container mx-auto xl:px-20 px-4 py-20 flex flex-col gap-7">
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

          <div className="md:col-span-2 row-start-1 md:row-start-auto flex items-center">
            {select && <img src={tank1} alt="tank 300" />}
            {select2 && <img src={tank2} alt="tank 300" />}
            {select3 && <img src={tank3} alt="tank 300" />}
            {select4 && <img src={tank4} alt="tank 300" />}
            {select5 && <img src={tank5} alt="tank 300" />}
            <div className="flex flex-col gap-2">
              <button
                onClick={hadleSelect}
                className="bg-[#EF2929] w-[30px] h-[30px] rounded-full cursor-pointer text-white text-xl text-center"
              >
                {select && "✓"}
              </button>
              <button
                onClick={hadleSelect2}
                className="bg-[#DF4C30] w-[30px] h-[30px] rounded-full cursor-pointer text-white text-xl text-center"
              >
                {select2 && "✓"}
              </button>
              <button
                onClick={hadleSelect3}
                className="bg-[#C6C9CE] w-[30px] h-[30px] rounded-full cursor-pointer text-black text-xl text-center"
              >
                {select3 && "✓"}
              </button>
              <button
                onClick={hadleSelect4}
                className="bg-[#212329] w-[30px] h-[30px] rounded-full cursor-pointer border border-[#939697] text-white text-xl text-center"
              >
                {select4 && "✓"}
              </button>
              <button
                onClick={hadleSelect5}
                className="bg-[#E6E7E8] w-[30px] h-[30px] rounded-full cursor-pointer text-black text-xl text-center"
              >
                {select5 && "✓"}
              </button>
            </div>
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
};

export default Tank300;
