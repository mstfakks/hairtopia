import HairLengthSelect from "./components/page-component/hair-length-select";
import HairNeedSelect from "./components/page-component/hair-need-select";
import HairProblemSelect from "./components/page-component/hair-problem-select";
import HairProcessSelect from "./components/page-component/hair-process-select";
import HairStructureSelect from "./components/page-component/hair-structure-select";
import Hero from "./components/page-component/hero";
import UserForm from "./components/page-component/user-form";
import HairTypeSelect from "./components/page-component/hair-type-select";
import { useHairContext } from "./context/hair-provider";

function App() {
  //@ts-ignore
  const { activeStep } = useHairContext()

  return (
    <div className="container mx-auto h-screen p-4 ">
      <div className="flex justify-center flex-col items-center w-full h-full gap-3">
        {activeStep === 0 && <Hero />}  
        {activeStep === 1 && <UserForm />}  
        {activeStep === 2 && <HairTypeSelect />}  
        {activeStep === 3 && <HairLengthSelect />}  
        {activeStep === 4 && <HairStructureSelect />}  
        {activeStep === 5 && <HairProcessSelect />}  
        {activeStep === 6 && <HairProblemSelect />}  
        {activeStep === 7 && <HairNeedSelect />}  
      </div>
    </div>
  );
}

export default App;
