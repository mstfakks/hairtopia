import { useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";
import BaseSelect from "../ui/base-select";

const HairStructure = [
  { label: "Kıvırcık", value: "curly" },
  { label: "Düz", value: "simple" },
  { label: "Dalgalı", value: "wave" },
];

const HairStructureSelect = () => {
    //@ts-ignore
    const { handleNext, handleBack } = useHairContext();
  return (
    <>
      <BaseSelect explainText="Saçın yapısını seçiniz" items={HairStructure} />
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
export default HairStructureSelect;
