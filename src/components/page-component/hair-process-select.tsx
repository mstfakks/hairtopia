import { useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";
import BaseSelect from "../ui/base-select";

const hairLengths = [
  { label: "Evet", value: "yes" },
  { label: "Hayır", value: "no" },
];

const HairProcessSelect = () => {
  //@ts-ignore
  const { handleNext, handleBack } = useHairContext();
  return (
    <>
      <BaseSelect
        explainText="Saçlarınızda işlem var mı?"
        items={hairLengths}
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

export default HairProcessSelect;
