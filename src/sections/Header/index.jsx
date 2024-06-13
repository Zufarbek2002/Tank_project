import { useState } from "react";
import logo from "../../assets/logo.svg";
import { CiLocationOn } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { SlSpeedometer } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { BsTelephoneInbound } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoTimeOutline } from "react-icons/io5";

const Header = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    modal ? setModal(false) : setModal(true);
  };
  return (
    <div className="bg-main-bg">
      <div className="container mx-auto py-4 px-4 flex gap-[10px] sm:gap-4 lg:gap-8 items-center">
        <div className="w-[31px] sm:w-[54px] h-[40px] sm:h-[70px]">
          <img src={logo} alt="logo" />
        </div>
        <div className="w-full">
          <div className=" hidden sm:flex flex-col lg:flex-row gap-y-2 justify-between border-0 border-b pb-2 border-[#FFFFFF33]">
            <div className="text-[#939697] flex gap-[6px] items-center font-medium text-sm">
              <CiLocationOn size="25px" />
              <p className="">
                Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
              </p>
            </div>
            <div className="hidden lg:flex gap-5">
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
          <div className="flex justify-between items-center text-white sm:pt-[11px]">
            <div className="flex lg:items-center flex-col lg:flex-row lg:gap-5 ">
              <h2 className="lg:border-0 lg:border-r border-[#FFFFFF33] pr-0 lg:pr-5 font-medium sm:font-bold text-sm sm:text-xl lg:text-3xl">
                АВТОРУСЬ TANK <span className="sm:hidden">Лосиный Остров</span>
              </h2>
              <h4 className="font-light text-xs sm:text-base lg:text-lg leading-5 lg:leading-8 text-[#939697]">
                Официальный дилер
              </h4>
            </div>
            <div className="hidden sm:flex gap-10">
              <div className="flex flex-col gap-1 items-end">
                <h3 className="font-medium text-base lg:text-xl leading-5">
                  +7 (999) 999-99-99
                </h3>
                <div className="flex gap-1 items-center">
                  <GoDotFill color="#00D154" />
                  <p className="font-light text-xs lg:text-sm text-[#939697] leading-[15.4px]">
                    Мы на связи
                  </p>
                </div>
              </div>
              <a
                href="tel:+79999999999"
                className="flex items-center justify-center gap-2 bg-main-color text-main-bg rounded-lg w-44 text-sm font-medium"
              >
                <BsTelephoneInbound />
                Заказать звонок
              </a>
            </div>
            <div className="flex gap-[14px] sm:hidden">
              <BiPhoneCall size={"25px"} className="cursor-pointer" />
              <HiMiniBars3CenterLeft
                size={"25px"}
                className="cursor-pointer"
                onClick={handleModal}
              />
            </div>
          </div>
        </div>
        {/* Modal */}
        <div
          className={`w-screen h-screen bg-main-bg fixed top-[72px] right-0 sm:hidden px-[15px] pt-10 text-white  ${
            modal
              ? "translate-x-0 transition-all duration-300"
              : "translate-x-[100%] transition-all duration-300"
          }`}
        >
          <div className="h-[430px] overflow-y-scroll flex flex-col gap-y-10 pb-3 no-scrollbar">
            <div className="">
              <h2 className="font-bold text-xl">
                АВТОРУСЬ TANK Лосиный Остров
              </h2>
              <h4 className="font-light text-base text-[#939697]">
                Официальный дилер
              </h4>
            </div>

            <div className="">
              <h3 className="font-medium text-3xl leading-8">
                +7 (999) 999-99-99
              </h3>
              <div className="flex gap-1 items-center">
                <GoDotFill color="#00D154" />
                <p className="font-light text-sm text-[#939697] leading-[15.4px]">
                  Мы на связи
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="text-[#939697] font-medium text-base flex gap-[6px] leading-5">
                <div className="">
                  <CiLocationOn size="25px" />
                </div>
                <p className="">
                  Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
                </p>
              </div>
              <div className="text-[#939697] font-medium text-base flex gap-[6px] leading-5">
                <IoTimeOutline size="25px" />
                <p className="">Ежедневно с 09:00 до 21:00</p>
              </div>
            </div>

            <a
              href="tel:+79999999999"
              className="flex items-center justify-center gap-2 bg-main-color text-main-bg rounded-lg text-sm font-medium py-2.5 w-full mt-10"
            >
              <BsTelephoneInbound />
              Заказать звонок
            </a>

            <div className="flex flex-col gap-6 items-center">
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
        </div>
      </div>
    </div>
  );
};

export default Header;
