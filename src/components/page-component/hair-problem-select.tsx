import { useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";
import BaseSelect, { Item } from "../ui/base-select";

const hairSkinProblem: Item[] = [
  { label: "VAR", value: "yes", name: 'hairProblem' },
  { label: "YOK", value: "no", name: 'hairProblem' },
];

const HairProblemSelect = () => {
  const { handleNext, handleBack, formik } = useHairContext();
  return (
    <>
      {/*@ts-ignore*/}
      <BaseSelect explainText="SAÇ DERİNİZLE İLGİLİ SORUNUNUZ VAR MI ?" items={hairSkinProblem} formik={formik} />
      <div className="flex flex-col gap-5 mt-5 w-1/2">
        <BaseButton
          buttonText="DEVAM ET"
          additionalClassName="text-3xl"
          onClick={handleNext}
          disabled={formik?.values.hairProblem === null}
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

export default HairProblemSelect;
