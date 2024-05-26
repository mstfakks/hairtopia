import { useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";
import BaseSelect, { Item } from "../ui/base-select";

const hairLengths: Item[] = [
  { 
    label: "KISA", 
    value: "short",
    name: "hairLength"

  },
  { 
    label: "ORTA", 
    value: "mid",
    name: "hairLength" 
  },
  { 
    label: "UZUN", 
    value: "long",
    name: "hairLength" 
  }
];

const HairLengthSelect = () => {
  const { handleNext, handleBack, formik } = useHairContext();
  return (
    <>
      {/*@ts-ignore*/}
      <BaseSelect explainText="SAÇ UZUNLUĞU SEÇİNİZ" items={hairLengths} formik={formik} />
      <div className="flex flex-col gap-5 mt-5 w-1/2">
        <BaseButton
          buttonText="DEVAM ET"
          additionalClassName="text-3xl"
          onClick={handleNext}
          disabled={formik?.values.hairLength === ''}
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

export default HairLengthSelect;
