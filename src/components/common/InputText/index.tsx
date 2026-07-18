
interface InputTextProps extends React.ComponentProps<'input'> { }
//  tự động nhận được các props từ input, optional props

const InputText = ({ className = '', type = 'text', disabled, ...props }: InputTextProps) => {
    return (
        <input
            className={`rounded-lg border border-gray-300 px-3 py-2.5 text-[14px] placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className} `}
            type={type}
            {...props}
        />
    )
}

export default InputText

