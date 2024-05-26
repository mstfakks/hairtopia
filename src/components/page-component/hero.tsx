import { useHairContext } from "../../context/hair-provider";

const Hero = () => {
  //@ts-ignore
  const { handleNext } = useHairContext();
  return (
    <>
      <h1 className="text-white text-5xl">HAIRTOPIA.2' YE HOŞ GELDİNİZ!</h1>
      <p className="text-white text-lg">
        SAÇ İHTİYACINA GÖRE PROFESYONEL BAKIM RUTİNİ OLUŞTURUN
      </p>
      <button
        onClick={() => handleNext()}
        className={`
          text-white
          shadow-lg
          shadow-[#FFE6E6]
          py-3
          px-6
          bg-gradient-to-r
          from-[#BD1616]
          to-black
          animate-pulse
          rounded-xl
          hover:border-[#FFE6E6]
          hover:border-2
          hover:transition-colors
          hover:bg-transparent
          text-2xl
        `}
      >
        TEŞHİSE BAŞLAMAK İÇİN DOKUNUN
      </button>
      <p className="text-white text-lg">
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
