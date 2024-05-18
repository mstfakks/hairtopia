import { useHairContext } from "./context/hair-provider";
import ResultComponent from "./components/page-component/result-component";
import FormStep from "./components/page-component/form-step";
import Loading from "./components/page-component/loading";

function App() {
  const { loading, result } = useHairContext()

  return (
    <div className="container mx-auto h-screen p-4 ">
      <Loading loading={loading} />
      <div className="flex justify-center flex-col items-center w-full h-full gap-3">
        
        {
          result ?
            <ResultComponent /> : 
            <FormStep />          
        }  
      </div>
    </div>
  );
}

export default App;
