import { useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";
import BaseSelect, { Item } from "../ui/base-select";

const hairWants: Item[] = [
  {
    label: "UZUN SÜRE KALICI RENK KORUMASI VE KIRILMAYI ÖNLEME",
    value: "protectHairColor",
    name: "hairNeed"
  },
  { label: "KURULUĞU GİDERME VE YENİDEN YAPILANDIRMA", value: "preventDry", name: "hairNeed" },
  { label: "MOLEKÜLER DÜZEYDE İÇTEN ONARIM", value: "inbugFixed", name: "hairNeed" },
  { label: "RENK KORUMASI", value: "protectColor", name: "hairNeed" },
  { label: "UZUN SAÇLAR İÇİN CANLILIK KAZANDIRMA", value: "longHairHealthy", name: "hairNeed" },
  { label: "SAÇ DERİSİ SORUNLARINI GİDERME", value: "preventHairSkinProblem", name: "hairNeed" },
  {
    label: "İSTENMEYEN SARI ALT TONLARI NÖTRALİZE ETME",
    value: "yellowNeutral",
    name: "hairNeed"
  },
  { label: "DALGA VE BUKLELERİ BELİRGİNLEŞTİRME", value: "determineWave", name: "hairNeed" },
  { label: "KABARAN ASİ SAÇLARI YATIŞTIRMA", value: "angryHair", name: "hairNeed" },
];

const HairNeedSelect = () => {
  const { handleComplete, handleBack, formik } = useHairContext();
  return (
    <>
      <BaseSelect
        explainText="SAÇLARINIZLA İLGİLİ EN BÜYÜK İHTİYACINIZ NEDİR ?"
        items={hairWants}
        //@ts-ignore
        formik={formik}
      />
      <div className="flex flex-col gap-5 mt-5 w-1/2">
        <BaseButton
            buttonText="SONUCU GÖSTER"
            additionalClassName="text-3xl"
            onClick={handleComplete}
            disabled={formik?.values.hairNeed === ''}
        />
        <BaseButton
            buttonText="GERİ"
            additionalClassName="text-3xl"
            onClick={handleBack}
        />
      </div>
    </>
  );
};

export default HairNeedSelect;
