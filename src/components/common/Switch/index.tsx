

interface SwitchProps extends React.ComponentProps<'input'> { }

const Switch = ({ checked = false, disabled, className, ...props }: SwitchProps) => {
    return (
        <label className="inline-flex cursor-pointer items-center">
            <input
                className={`peer sr-only ${className}`}
                checked={checked}
                disabled={disabled}
                {...props}
            />
            <div className={`relative h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-500 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className}`} />
        </label>
    )
}

export default Switch
