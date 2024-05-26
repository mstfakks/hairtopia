import { ResultProps, useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";

const ResultComponent = () => {
    const { result, handleReset } = useHairContext()
    return(
        <>
            <h1 className="text-8xl text-white ">ÖNERİLEN ÜRÜN: {result?.title}</h1>
            <div className="flex h-[60%] mt-4">
                <img
                    src={result?.imgUrl}
                    alt={result?.title}
                    className="object-cover w-full h-full rounded-xl"                 
                />
            </div>
            <BaseButton
                buttonText="BAŞA DÖN"
                onClick={handleReset}
                additionalClassName="text-3xl mt-4 w-1/2"                         
            />

        </>
    )
}

export default ResultComponent;