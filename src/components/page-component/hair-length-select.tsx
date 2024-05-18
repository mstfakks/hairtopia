import { useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";
import BaseSelect, { Item } from "../ui/base-select";

const hairLengths: Item[] = [
  { 
    label: "Kısa", 
    value: "short",
    name: "hairLength"

  },
  { 
    label: "Orta", 
    value: "mid",
    name: "hairLength" 
  },
  { 
    label: "Uzun", 
    value: "long",
    name: "hairLength" 
  }
];

const HairLengthSelect = () => {
  const { handleNext, handleBack, formik } = useHairContext();
  return (
    <>
      {/*@ts-ignore*/}
      <BaseSelect explainText="Saç uzunluğu seçiniz" items={hairLengths} formik={formik} />
      <div className="flex flex-col gap-5 mt-5">
        <BaseButton
          buttonText="Devam Et"
          additionalClassName="text-3xl"
          onClick={handleNext}
          disabled={formik?.values.hairLength === ''}
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
