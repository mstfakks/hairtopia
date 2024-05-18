import { useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";
import BaseSelect from "../ui/base-select";

const hairWants = [
  {
    label: "Uzun süre kalıcı renk koruması ve kırılmayı önleme",
    value: "protectHairColor",
  },
  { label: "Kuruluğu giderme ve yeniden yapılandırma", value: "preventDry" },
  { label: "Moleküler düzeyde içten onarım", value: "inbugFixed" },
  { label: "Renk koruması", value: "protectColor" },
  { label: "Uzun saçlar için canlılık kazandırma", value: "longHairHealthy" },
  { label: "Saç derisi sorunlarını giderme", value: "preventHairSkinProblem" },
  {
    label: "İstenmeyen sarı alt tonları nötralize etme",
    value: "yellowNeutral",
  },
  { label: "Dalga ve bukleleri belirginleştirme", value: "determineWave" },
  { label: "Kabaran asi saçları yatıştırma", value: "angryHair" },
];

const HairNeedSelect = () => {
  //@ts-ignore
  const { handleNext, handleBack } = useHairContext();
  return (
    <>
      <BaseSelect
        explainText="Saçlarınızla ilgili en büyük ihtiyacınız nedir?"
        items={hairWants}
      />
      <div className="flex flex-col gap-5 mt-5">
        <BaseButton
            buttonText="Devam Et"
            additionalClassName="text-3xl"
            onClick={handleNext}
        />
        <BaseButton
            buttonText="Geri"
            additionalClassName="text-3xl"
            onClick={handleBack}
        />
      </div>
    </>
  );
};

export default HairNeedSelect;
