import { GoDotFill } from 'react-icons/go';
import map from '../assets/maps.png'
import map2 from '../assets/maps-2.png'
import { Button } from './Button';

const Maps = () => {
  return (
    <div className="relative">
      <div className="hidden md:block h-[451px] ">
        <img src={map} alt="map img" className="h-full" />
      </div>
      <div className="block md:hidden h-[345px] w-full">
        <img src={map2} alt="map img" className="h-full w-full" />
      </div>

      <div className="bg-main-bg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 text-white items-center gap-y-5 gap-2 absolute left-2 right-2 md:left-7 md:right-7 top-[220px] md:top-[340px] px-2 py-2 rounded-lg">
        <div className="lg:col-span-2">
          <p className="text-[#939697] font-light text-sm">Адрес</p>
          <h3 className="font-medium text-base sm:text-lg">
            Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
          </h3>
        </div>

        <div className="">
          <p className="text-[#939697] font-light text-sm">Телефон</p>
          <h3 className="font-medium text-base sm:text-lg">
            +7 (999) 999-99-99
          </h3>
          <div className="flex gap-1 items-center">
            <GoDotFill color="#00D154" />
            <p className="font-light text-sm text-[#939697] leading-[15.4px]">
              Мы на связи
            </p>
          </div>
        </div>

        <div className="">
          <p className="text-[#939697] font-light text-sm">Режим работы</p>
          <h3 className="font-medium text-base sm:text-lg">
            Ежедневно с 09:00 до 21:00
          </h3>
        </div>

        <div className="">
          <Button>Заказать звонок</Button>
        </div>
      </div>
    </div>
  );
}

export default Maps