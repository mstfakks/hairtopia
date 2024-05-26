
interface BaseInputProps {
    placeholder: string
    name: string
    onChange: any
    onBlur: any
    value: any
}

const BaseInput = ({placeholder, name, onChange, onBlur, value}: BaseInputProps) => {
    return(
        <input                        
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
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
                w-full
                text-4xl
                placeholder:text-white
          `}
        />
    )
}

export default BaseInput