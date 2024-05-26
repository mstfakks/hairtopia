import { useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";
import BaseSelect, { Item } from "../ui/base-select";

const HairStructure: Item[] = [
  { label: "KIVIRCIK", value: "curly", name: "hairStructure" },
  { label: "DÜZ", value: "simple", name: "hairStructure" },
  { label: "DALGALI", value: "wave", name: "hairStructure" },
];

const HairStructureSelect = () => {
    const { handleNext, handleBack, formik } = useHairContext();
  return (
    <>
      {/*@ts-ignore*/}
      <BaseSelect explainText="SAÇIN YAPISINI SEÇİNİZ" items={HairStructure} formik={formik} />
      <div className="flex flex-col gap-5 mt-5 w-1/2">
        <BaseButton
          buttonText="DEVAM ET"
          additionalClassName="text-3xl"
          onClick={handleNext}
          disabled={formik?.values.hairStructure === ''}
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
export default HairStructureSelect;
