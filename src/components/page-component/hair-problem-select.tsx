import { useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";
import BaseSelect from "../ui/base-select";

const hairSkinProblem = [
  { label: "Var", value: "yes" },
  { label: "Yok", value: "no" },
];

const HairProblemSelect = () => {
  //@ts-ignore
  const { handleNext, handleBack } = useHairContext();
  return (
    <>
      <BaseSelect
        explainText="Saç derinizle ilgili sorununuz var mı?"
        items={hairSkinProblem}
      />
      <div className="flex flex-col gap-5 mt-5">
        <BaseButton
          buttonText="Devam Et"
          additionalClassName="text-3xl"
          onClick={handleNext}
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
