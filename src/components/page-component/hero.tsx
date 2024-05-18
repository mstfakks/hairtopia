import { useHairContext } from "../../context/hair-provider";

const Hero = () => {
    //@ts-ignore
    const { handleNext } = useHairContext()
  return (
    <>
      <h1 className="text-white text-5xl">HAIRTOPIA.2' YE HOŞ GELDİNİZ!</h1>
      <p className="text-white text-lg italic">
        Serie Expert ürünleri ile tüm saç bakımı ihtiyaçlarına özel profesyonel
        çözümler sunuyoruz
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
          text-lg
        `}
      >
        Başlatmak İçin Dokunun
      </button>
      <p className="text-white text-base">
        Soruları yanıtlayarak farklı saç tipleri ve ihtiyaçlarına uygun Serie
        Expert ürünlerini keşfedin
      </p>

      <div className="flex w-[590px] h-[826px]">
        <img
          src="/assets/images/hero.png"
          alt="kv"
          className="object-contain"
        />
      </div>
    </>
  );
};

export default Hero;
