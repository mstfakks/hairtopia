import { useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";
import BaseSelect, { Item } from "../ui/base-select";

const hairLengths: Item[] = [
  { label: "EVET", value: "yes", name: 'hairProcess' },
  { label: "HAYIR", value: "no", name: 'hairProcess' },
];

const HairProcessSelect = () => {
  const { handleNext, handleBack, formik } = useHairContext();
  return (
    <>
      {/*@ts-ignore*/}
      <BaseSelect explainText="SAÇLARINIZDA İŞLEM VAR MI?" items={hairLengths} formik={formik} />
      <div className="flex flex-col gap-5 mt-5 w-1/2">
        <BaseButton
          buttonText="DEVAM ET"
          additionalClassName="text-3xl"
          onClick={handleNext}
          disabled={formik?.values.hairProcess === null}
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

export default HairProcessSelect;
