
interface BaseInputProps {
    placeholder: string
}

const BaseInput = ({placeholder}: BaseInputProps) => {
    return(
        <input
            placeholder={placeholder}
            className={`
            text-center 
            py-2 
            px-4 
            rounded-2xl 
            border-white 
            border-2 
            bg-transparent 
            text-white 
            w-1/2
            text-4xl
            placeholder:text-white
          `}
        />
    )
}

export default BaseInput