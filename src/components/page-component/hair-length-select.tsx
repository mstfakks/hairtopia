import { useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";
import BaseSelect from "../ui/base-select";

const hairLengths = [
  { label: "Kısa", value: "short" },
  { label: "Orta", value: "mid" },
  { label: "Uzun", value: "long" },
];

const HairLengthSelect = () => {
  //@ts-ignore
  const { handleNext, handleBack } = useHairContext();
  return (
    <>
      <BaseSelect explainText="Saç uzunluğu seçiniz" items={hairLengths} />
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

export default HairLengthSelect;
