import { useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";
import BaseSelect, { Item } from "../ui/base-select";

const hairLengths: Item[] = [
  { label: "Evet", value: "yes", name: 'hairProcess' },
  { label: "Hayır", value: "no", name: 'hairProcess' },
];

const HairProcessSelect = () => {
  const { handleNext, handleBack, formik } = useHairContext();
  return (
    <>
      {/*@ts-ignore*/}
      <BaseSelect explainText="Saçlarınızda işlem var mı?" items={hairLengths} formik={formik} />
      <div className="flex flex-col gap-5 mt-5">
        <BaseButton
          buttonText="Devam Et"
          additionalClassName="text-3xl"
          onClick={handleNext}
          disabled={formik?.values.hairProcess === null}
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

export default HairProcessSelect;
