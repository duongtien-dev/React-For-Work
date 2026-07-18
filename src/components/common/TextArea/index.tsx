interface TextAreaProps extends React.ComponentProps<'textarea'> { }

const TextArea = ({ className = '', disabled, ...props }: TextAreaProps) => {
    return (
        <textarea
            className={`max-h-48 w-full resize-none rounded-lg border border-gray-300 px-3 py-2.5 text-[14px] placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className} `}
            rows={4}
            disabled={disabled}
            placeholder="Nội dung"
            {...props}
        />
    )
}

export default TextArea
