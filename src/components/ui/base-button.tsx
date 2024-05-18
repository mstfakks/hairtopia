interface BaseButtonProps {
    buttonText: string
    additionalClassName?: string
    onClick: () => void
    disabled?:boolean
}

const BaseButton = ({ buttonText, additionalClassName, onClick, disabled }: BaseButtonProps) => {
    return(
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                text-white
                shadow-lg
                shadow-white                
                py-3
                px-6
                animate-pulse
                rounded-xl
                border-white
                border
                disabled:shadow-none
                disabled:animate-none
                disabled:opacity-50

                ${additionalClassName}
            `}
        >
            {buttonText}
        </button>
    )
}

export default BaseButton;