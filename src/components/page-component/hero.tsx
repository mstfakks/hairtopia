import { useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";

const Hero = () => {
  //@ts-ignore
  const { handleNext } = useHairContext();
  return (
    <>
      <p className="text-white text-3xl">
        SAÇ İHTİYACINA GÖRE PROFESYONEL BAKIM RUTİNİ OLUŞTURUN
      </p>
      <BaseButton
        buttonText="TEŞHİSE BAŞLAMAK İÇİN DOKUNUN"
        onClick={handleNext}
        additionalClassName="font-extrabold px-16 text-2xl"     
      />      
      <p className="text-white text-lg mt-2">
        SORULARI YANITLAYARAK FARKLI SAÇ TİPLERİ VE İHTİYAÇLARINA UYGUN SERİE EXPERT ÜRÜNLERİNİ KEŞFEDİN
      </p>

      <div className="flex h-[82%]">
        <img
          loading="lazy"
          src="./assets/images/hero.png"
          alt="kv"
          className="object-contain w-full h-full"
        />
      </div>
    </>
  );
};

export default Hero;
