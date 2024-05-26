import { useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";
import BaseSelect, { Item } from "../ui/base-select";



const HairTypeSelect = () => {
  const { handleNext, handleBack, formik } = useHairContext();

  const hairTypes: Item[] = [
    { 
      label: "KURU", 
      value: "dry",
      name: "hairType",
    },
    { 
      label: "YAĞLI", 
      value: "oil" ,
      name: "hairType",
    },
    { 
      label: "NORMAL", 
      value: "normal",
      name: "hairType",
    },
  ];
  
  return (
    <>
      {/*@ts-ignore*/}
      <BaseSelect explainText="SAÇ TİPİ SEÇİNİZ" items={hairTypes} formik={formik} />
      <div className="flex flex-col gap-5 mt-5 w-1/2">
        <BaseButton
          buttonText="DEVAM ET"
          additionalClassName="text-3xl"
          onClick={handleNext}
          disabled={formik?.values.hairType === ''}
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

export default HairTypeSelect;
