import { Button } from "../../components/Button";

const Equipment = () => {
  return (
    <div className="bg-[url('/src/assets/equipment-bg-2.png')] sm:bg-[url('/src/assets/equipment-img.png')] bg-center bg-no-repeat bg-cover">
      <div className="container mx-auto px-4 text-white flex flex-col gap-10 pt-[40px] sm:pt-[79px] pb-[207px] sm:pb-[56px]">
        <div className="sm:w-[320px] flex flex-col gap-2">
          <h2 className="font-bold text-2xl sm:text-4xl">Оставьте заявку на кредит</h2>
          <p className="font-light text-lg">и получите одобрение за 1 день!</p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-5 sm:items-end sm:flex-row flex-col">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="phone"
                className="text-[#939697] font-light text-sm"
              >
                Телефон
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="+7 (___) ___-__-__"
                className="bg-[#252C2C] border border-[#939697] rounded-lg px-5 py-2.5 w-full  max-w-[300px]"
              />
            </div>
            <div className="w-full max-w-[300px] sm:max-w-[250px]">
              <Button>Отправить заявку</Button>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="" id="check" />
            <label htmlFor="check" className="font-light text-xs">
              Согласен на обработку персональных данных.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
