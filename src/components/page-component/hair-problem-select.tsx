import { useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";
import BaseSelect, { Item } from "../ui/base-select";

const hairSkinProblem: Item[] = [
  { label: "Var", value: "yes", name: 'hairProblem' },
  { label: "Yok", value: "no", name: 'hairProblem' },
];

const HairProblemSelect = () => {
  const { handleNext, handleBack, formik } = useHairContext();
  return (
    <>
      {/*@ts-ignore*/}
      <BaseSelect explainText="Saç derinizle ilgili sorununuz var mı?" items={hairSkinProblem} formik={formik} />
      <div className="flex flex-col gap-5 mt-5">
        <BaseButton
          buttonText="Devam Et"
          additionalClassName="text-3xl"
          onClick={handleNext}
          disabled={formik?.values.hairProblem === null}
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

export default HairProblemSelect;
