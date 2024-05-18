import { useFormik, FormikProps } from "formik";
import React, { createContext, useContext, useState } from "react";

export interface HairContextType {
    activeStep: number,
    handleNext: () => void,
    handleBack: () => void,
    formik?: FormikProps<InitialValues>,
    handleComplete: () => void,
    loading: boolean,
    result?: ResultProps,
    handleReset: () => void
}

const defaultHairContext: HairContextType = {
    handleNext: () => {
        console.log('Next');        
    },
    handleBack: () => {
        console.log('Back');
    },
    handleComplete: () => {
        console.log('complete');
    },
    activeStep: 0,
    loading: false,
    result: undefined,
    handleReset: () => {
        console.log('reset');        
    }
}

const HairContext = createContext<HairContextType>(defaultHairContext)
export const useHairContext = () => useContext(HairContext)

interface InitialValues {
    name: string
    lastName: string
    age: string
    hairType: string
    hairLength: string
    hairStructure: string
    hairProcess: null,
    hairProblem: null,
    hairNeed: string
}

export interface ResultProps {
    title: string
    key: string 
    imgUrl: string   
}

const initialValues = {
    name:'',
    lastName: '',
    age: '',
    hairType: '',
    hairLength: '',
    hairStructure: '',
    hairProcess: null,
    hairProblem: null,
    hairNeed: ''
}

const results: ResultProps[] = [
    {
        title: 'Metal Detox', 
        key: 'protectHairColor', 
        imgUrl: '/assets/images/metal-detox.png'
    },
    {
        title: 'Absolut Repair', 
        key: 'preventDry',
        imgUrl: '/assets/images/absolut-repair.png'
    },
    {
        title: 'Absolut Repair Molecular', 
        key: 'inbugFixed',
        imgUrl: '/assets/images/absolut-repair-molecular.png'
    },
    {
        title: 'Vitamino Color', 
        key: 'protectColor',
        imgUrl: '/assets/images/vitamino-color.png'
    },
    {
        title: 'Pro Longer', 
        key: 'longHairHealthy',
        imgUrl: '/assets/images/pro-longer.png'
    },
    {
        title: 'Aminexil Advanced', 
        key: 'preventHairSkinProblem',
        imgUrl: '/assets/images/aminexil-advanced.png'
    },
    {
        title: 'Silver', 
        key: 'yellowNeutral',
        imgUrl: '/assets/images/silver.png'
    },
    {
        title: 'Curl Expression', 
        key: 'determineWave',
        imgUrl: '/assets/images/curl-expression.png'
    },
    {
        title: 'Liss Unlimited', 
        key: 'angryHair',
        imgUrl: '/assets/images/liss-unlimited.png'
    }
]

const HairProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [activeStep, setActiveStep] = useState(0)
    const [result, setResult] = useState<ResultProps | undefined>(undefined)
    const [loading, setLoading] = useState<boolean>(false);

    const handleNext = () => {        
        setActiveStep(activeStep + 1)
    }

    const handleBack = () => {        
        setActiveStep(activeStep - 1)        
    }

    const findProduct = (hairNeed: string) => {
        setLoading(true)
        setTimeout(() => {
            const findedProduct = results?.find((result) => result.key === hairNeed)
            console.log('findedProduct', findedProduct);
            setResult(findedProduct as ResultProps)
            setLoading(false)
        }, 2000)        
    }

    const handleComplete = async () => {
        findProduct(formik.values.hairNeed)        
    }

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log('values', values);            
        }
    })

    const handleReset = () => {
        setActiveStep(0)
        setResult(undefined)
        formik.resetForm()
    }

    console.log('formik', formik.values);
    
    
    
    return(
        <HairContext.Provider value={{activeStep, handleNext, handleBack, formik, handleComplete, result, loading, handleReset}}>
            {children}
        </HairContext.Provider>  
    )
}

export default HairProvider;
