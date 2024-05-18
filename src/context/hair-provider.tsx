import React, { createContext, useContext, useState } from "react";

export interface HairContextType {
    activeStep: number,
    handleNext: () => void,
    handleBack: () => void,
}

const HairContext = createContext<HairContextType | null>(null)
export const useHairContext = () => useContext(HairContext)


const HairProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [activeStep, setActiveStep] = useState(0)

    const handleNext = () => {        
        setActiveStep(activeStep + 1)
    }

    const handleBack = () => {        
        setActiveStep(activeStep - 1)        
    }
    
    
    return(
        <HairContext.Provider value={{activeStep, handleNext, handleBack}}>
            {children}
        </HairContext.Provider>  
    )
}

export default HairProvider;
