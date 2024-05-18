import { useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";
import BaseSelect, { Item } from "../ui/base-select";

const hairWants: Item[] = [
  {
    label: "Uzun süre kalıcı renk koruması ve kırılmayı önleme",
    value: "protectHairColor",
    name: "hairNeed"
  },
  { label: "Kuruluğu giderme ve yeniden yapılandırma", value: "preventDry", name: "hairNeed" },
  { label: "Moleküler düzeyde içten onarım", value: "inbugFixed", name: "hairNeed" },
  { label: "Renk koruması", value: "protectColor", name: "hairNeed" },
  { label: "Uzun saçlar için canlılık kazandırma", value: "longHairHealthy", name: "hairNeed" },
  { label: "Saç derisi sorunlarını giderme", value: "preventHairSkinProblem", name: "hairNeed" },
  {
    label: "İstenmeyen sarı alt tonları nötralize etme",
    value: "yellowNeutral",
    name: "hairNeed"
  },
  { label: "Dalga ve bukleleri belirginleştirme", value: "determineWave", name: "hairNeed" },
  { label: "Kabaran asi saçları yatıştırma", value: "angryHair", name: "hairNeed" },
];

const HairNeedSelect = () => {
  const { handleComplete, handleBack, formik } = useHairContext();
  return (
    <>
      <BaseSelect
        explainText="Saçlarınızla ilgili en büyük ihtiyacınız nedir?"
        items={hairWants}
        //@ts-ignore
        formik={formik}
      />
      <div className="flex flex-col gap-5 mt-5">
        <BaseButton
            buttonText="Sonucu Göster"
            additionalClassName="text-3xl"
            onClick={handleComplete}
            disabled={formik?.values.hairNeed === ''}
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
