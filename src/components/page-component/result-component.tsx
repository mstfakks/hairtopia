import { ResultProps, useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";

const ResultComponent = () => {
    const { result, handleReset } = useHairContext()
    return(
        <>
            <h1 className="text-8xl text-white ">Önerilen Ürün: {result?.title}</h1>
            <div className="flex h-[60%] mt-4">
                <img
                    src={result?.imgUrl}
                    alt={result?.title}
                    className="object-cover w-full h-full rounded-xl"                 
                />
            </div>
            <BaseButton
                buttonText="Başa Dön"
                onClick={handleReset}
                additionalClassName="text-3xl mt-4"                             
            />

        </>
    )
}

export default ResultComponent;