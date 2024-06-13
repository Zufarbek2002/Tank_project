import {Button} from "../../components/Button";
import heroImg from "../../assets/hero-img.png";
const Hero = () => {
  return (
    <div className="bg-main-bg sm:bg-[url('/src/assets/hero-bg-img.png')] bg-cover bg-center bg-no-repeat">
      <div className="sm:hidden w-full mb-5">
        <img src={heroImg} alt="background img" className="w-full" />
      </div>
      <div className="container sm:h-screen mx-auto px-4 flex flex-col gap-10 justify-center">
        <div className="text-white text-[18px] sm:text-[28px] font-medium">
          <h3 className="">Улучшим любые условия</h3>
          <h2 className="font-bold text-4xl sm:text-6xl">TANK 500</h2>
          <h3 className="">Осталось всего 5 автомобилей!</h3>
        </div>
        <div className="w-full sm:w-[246px]">
          <Button>Получить предложение</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero