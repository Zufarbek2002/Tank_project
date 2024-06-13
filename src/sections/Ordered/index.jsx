import { useState } from "react";
import OrderedCart from "../../components/OrderedCart";
import PriceCar from "../../assets/price-car.png";
import { Button } from "../../components/Button";

const Ordered = () => {
  const [order, setOrder] = useState(false);
  const handleClick = () => {
    order ? setOrder(false) : setOrder(true);
  };
  return (
    <div className="bg-main-bg">
      <div className="container mx-auto xl:px-20 px-4 py-24 text-white flex flex-col gap-10">
        <h2 className="font-bold text-2xl sm:text-4xl text-center">
          ПОДБЕРИТЕ КОМПЛЕКТАЦИЮ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="">
            <p className="text-[#939697] font-light text-sm pb-1">Модель</p>
            <select className="w-full rounded-lg bg-[#252C2C] text-white p-2 outline-none border border-[#939697] focus:border-white">
              <option value=""></option>
              <option value="">Tank300</option>
              <option value="">Tank300</option>
              <option value="">Tank300</option>
            </select>
          </div>
          <div className="">
            <p className="text-[#939697] font-light text-sm pb-1">
              Комплектация
            </p>
            <select className="w-full rounded-lg bg-[#252C2C] text-white p-2 outline-none border border-[#939697] focus:border-white">
              <option value=""></option>
              <option value="">Tank300</option>
              <option value="">Tank300</option>
              <option value="">Tank300</option>
            </select>
          </div>
          <div className="">
            <p className="text-[#939697] font-light text-sm pb-1">Двигатель</p>
            <select className="w-full rounded-lg bg-[#252C2C] text-white p-2 outline-none border border-[#939697] focus:border-white">
              <option value=""></option>
              <option value="">Tank300</option>
              <option value="">Tank300</option>
              <option value="">Tank300</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center">
          {order ? (
            <div className="flex flex-col gap-2 w-full">
              <OrderedCart />
              <OrderedCart />
              <OrderedCart />
              <OrderedCart />
              <OrderedCart />
            </div>
          ) : (
            <div className="flex flex-col gap-2 w-full">
              <OrderedCart />
              <OrderedCart />
              <OrderedCart />
            </div>
          )}
          <button
            className="border border-[#939697] rounded-lg py-2 px-4"
            onClick={handleClick}
          >
            {order ? "Сокращать" : "Загрузить еще"}
          </button>
        </div>

        <div className="flex gap-10 items-center flex-col md:flex-row md:pt-24 pt-10">
          <div className="md:w-[636px]">
            <img src={PriceCar} alt="Price car" className="w-full" />
          </div>
          <div className="flex flex-col gap-10">
            <h2 className="font-bold text-2xl md:text-4xl">
              ОБМЕН ПО TRADE-IN НА ВЫГОДНЫХ УСЛОВИЯХ
            </h2>
            <div className="w-full sm:max-w-[207px]">
              <Button>Отправить заявку</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordered;
