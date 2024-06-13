import { Button } from "./Button";
import sales from '../assets/sales.png'
const ForClient = () => {
  return (
    <div className="bg-[#1C2121] flex flex-col md:flex-row justify-between md:items-center gap-10 md:gap-0 rounded-xl text-white p-5 sm:p-10">
      <div className="flex flex-col gap-10">
        <h2 className="font-bold text-2xl md:text-3xl w-full max-w-[524px]">
          Индивидуальное предложение для корпоративных клиентов
        </h2>
        <div className="max-w-[207px]">
          <Button>Отправить заявку</Button>
        </div>
      </div>

      <div className="flex gap-5 items-center w-full max-w-[400px]">
        <div className="w-[140px]">
          <img src={sales} alt="" className="w-full" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-sm sm:text-2xl">Татьяна Санникова</h3>
          <p className="font-light text-[#939697] text-xs sm:text-sm">
            Отдел корпоративных продаж АВТОРУСЬ
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForClient