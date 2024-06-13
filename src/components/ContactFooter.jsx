import { GoDotFill } from "react-icons/go";
import { BsTelephoneInbound } from "react-icons/bs";
import { CiLocationOn, CiSettings } from "react-icons/ci";
import { SlSpeedometer } from "react-icons/sl";

const ContactFooter = () => {
  return (
    <div className="border-b border-t border-[#939697] py-14 mt-14 mb-5 flex flex-col gap-y-10">
      <div className="text-white flex flex-col md:flex-row gap-y-5 justify-between ">
        <div className="">
          <h3 className="font-medium text-base">
            АВТОРУСЬ TANK Лосиный Остров
          </h3>
          <p className="font-light text-sm text-[#939697]">Официальный дилер</p>
        </div>

        <div className="flex gap-10 sm:flex-row flex-col">
          <div className="flex flex-col gap-1 sm:items-end">
            <h3 className="font-medium text-xl">+7 (999) 999-99-99</h3>
            <div className="flex gap-1 items-center">
              <GoDotFill color="#00D154" />
              <p className="font-light text-xs lg:text-sm text-[#939697] leading-[15.4px]">
                Мы на связи
              </p>
            </div>
          </div>

          <a
            href="tel:+79999999999"
            className="flex items-center justify-center gap-2 bg-main-color text-main-bg rounded-lg sm:w-44 text-sm font-medium py-4 w-full border border-main-color hover:bg-transparent hover:text-white"
          >
            <BsTelephoneInbound />
            Заказать звонок
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-y-2 justify-between">
        <div className="text-[#939697] flex gap-[6px] items-center font-medium text-sm">
          <CiLocationOn size="25px" />
          <p className="">
            Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
          </p>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-[6px] items-center">
            <CiSettings color="#FF9549" size={"23px"} />
            <p className="font-medium text-sm text-white">
              Записаться на сервис
            </p>
          </div>
          <div className="flex gap-[6px] items-center">
            <SlSpeedometer color="#FF9549" size={"18px"} />
            <p className="font-medium text-sm text-white">Тест-драйв</p>
          </div>
        </div>
      </div>

      <div className="">
        <p className="font-light text-sm text-[#939697]">Официальный дилер</p>
        <h3 className="font-light text-base text-white">
          ООО А АВТОРУСЬ МЫТИЩИ | ОГРН - 1147746695161, ИНН - 7728881903
        </h3>
      </div>
    </div>
  );
}

export default ContactFooter