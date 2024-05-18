interface BaseButtonProps {
    buttonText: string
    additionalClassName: string
    onClick: () => void
}

const BaseButton = ({ buttonText, additionalClassName, onClick }: BaseButtonProps) => {
    return(
        <button
            onClick={onClick}
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
                ${additionalClassName}
            `}
        >
            {buttonText}
        </button>
    )
}

export default BaseButton;