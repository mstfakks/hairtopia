import { useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";
import BaseSelect, { Item } from "../ui/base-select";



const HairTypeSelect = () => {
  const { handleNext, handleBack, formik } = useHairContext();

  const hairTypes: Item[] = [
    { 
      label: "Kuru", 
      value: "dry",
      name: "hairType",
    },
    { 
      label: "Yağlı", 
      value: "oil" ,
      name: "hairType",
    },
    { 
      label: "Normal", 
      value: "normal",
      name: "hairType",
    },
  ];
  
  return (
    <>
      {/*@ts-ignore*/}
      <BaseSelect explainText="Saç tipi seçiniz" items={hairTypes} formik={formik} />
      <div className="flex flex-col gap-5 mt-5">
        <BaseButton
          buttonText="Devam Et"
          additionalClassName="text-3xl"
          onClick={handleNext}
          disabled={formik?.values.hairType === ''}
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
