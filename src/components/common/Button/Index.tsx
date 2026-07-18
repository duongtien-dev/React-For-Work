import type { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
}

const classType = {
    default:
        'bg-blue-600 text-white hover:bg-blue-700',
    destructive:
        'bg-red-500 text-white hover:bg-red-600',
    outline:
        'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
    secondary:
        'bg-blue-100 text-blue-700 hover:bg-blue-200',
    ghost:
        'text-gray-700 hover:bg-blue-50 hover:text-blue-700',
    link:
        'text-blue-600 underline-offset-4 hover:text-blue-700 hover:underline',
};

const classSize = {
    default: 'h-10 px-4 py-2.5',
    sm: 'h-9 px-3',
    lg: 'h-11 px-8',
    icon: 'h-10 w-10',
};

const Button: FC<ButtonProps> = ({
    children,
    className = '',
    variant = 'default',
    size = 'default',
    ...props
}) => {
    return (
        <button
            className={`
                inline-flex items-center justify-center
                whitespace-nowrap rounded-md
                text-sm font-medium
                transition-colors
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
                focus-visible:ring-offset-2
                disabled:pointer-events-none
                disabled:opacity-50
                ${classType[variant]}
                ${classSize[size]}
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
