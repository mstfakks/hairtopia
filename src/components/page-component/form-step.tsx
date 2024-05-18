import { useHairContext } from "../../context/hair-provider";
import HairLengthSelect from "./hair-length-select";
import HairNeedSelect from "./hair-need-select";
import HairProblemSelect from "./hair-problem-select";
import HairProcessSelect from "./hair-process-select";
import HairStructureSelect from "./hair-structure-select";
import HairTypeSelect from "./hair-type-select";
import Hero from "./hero";
import UserForm from "./user-form";

const FormStep = () => {
  const { activeStep } = useHairContext();
  return (
    <>
      {activeStep === 0 && <Hero />}
      {activeStep === 1 && <UserForm />}
      {activeStep === 2 && <HairTypeSelect />}
      {activeStep === 3 && <HairLengthSelect />}
      {activeStep === 4 && <HairStructureSelect />}
      {activeStep === 5 && <HairProcessSelect />}
      {activeStep === 6 && <HairProblemSelect />}
      {activeStep === 7 && <HairNeedSelect />}
    </>
  );
};

export default FormStep;
