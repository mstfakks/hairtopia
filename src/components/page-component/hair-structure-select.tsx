import { useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";
import BaseSelect, { Item } from "../ui/base-select";

const HairStructure: Item[] = [
  { label: "Kıvırcık", value: "curly", name: "hairStructure" },
  { label: "Düz", value: "simple", name: "hairStructure" },
  { label: "Dalgalı", value: "wave", name: "hairStructure" },
];

const HairStructureSelect = () => {
    const { handleNext, handleBack, formik } = useHairContext();
  return (
    <>
      {/*@ts-ignore*/}
      <BaseSelect explainText="Saçın yapısını seçiniz" items={HairStructure} formik={formik} />
      <div className="flex flex-col gap-5 mt-5">
        <BaseButton
          buttonText="Devam Et"
          additionalClassName="text-3xl"
          onClick={handleNext}
          disabled={formik?.values.hairStructure === ''}
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
