import img from "../assets/ordered-img-1.png";
import icon1 from "../assets/ordered-icon.svg";
import { Button, ButtonOutline } from "./Button";

const OrderedCart = () => {
  return (
    <div className="flex justify-between gap-5 md:flex-row flex-col border border-[#939697] rounded-xl p-2 w-full">
      <div className="md:w-[300px]">
        <img src={img} alt="ordered img" className="w-full" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="">
          <h2 className="font-bold text-3xl">TANK 300</h2>
          <p className="font-light text-base text-[#939697]">
            2.0 л. Бензин, Полный, Автоматическая
          </p>
        </div>
        <h2 className="font-bold text-2xl line-through">3 649 000 ₽</h2>
        <div className="flex md:flex-col md:gap-2 gap-4 flex-wrap">
          <div className="flex gap-2">
            <img src={icon1} alt="icon 1" />
            <h4 className="font-medium text-base">
              Выгода по Trade-in до 450 000 ₽{" "}
            </h4>
          </div>
          <div className="flex gap-2">
            <img src={icon1} alt="icon 1" />
            <h4 className="font-medium text-base">
              Выгода по Trade-in до 450 000 ₽{" "}
            </h4>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full md:max-w-[250px] pt-5">
        <Button>Получить предложение</Button>
        <ButtonOutline>Тест-драйв</ButtonOutline>
      </div>
    </div>
  );
};

export default OrderedCart;
