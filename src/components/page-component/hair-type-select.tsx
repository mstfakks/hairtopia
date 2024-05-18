import { useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";
import BaseSelect from "../ui/base-select";

const hairTypes = [
  { label: "Kuru", value: "dry" },
  { label: "Yağlı", value: "oil" },
  { label: "Normal", value: "normal" },
];

const HairTypeSelect = () => {
  //@ts-ignore
  const { handleNext, handleBack } = useHairContext();
  return (
    <>
      <BaseSelect explainText="Saç tipi seçiniz" items={hairTypes} />
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

export default HairTypeSelect;
