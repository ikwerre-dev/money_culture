interface ButtonProps {
    variant: 'primary' | 'outline' | 'whiteoutline' | 'gradient';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function Button({ variant, children, onClick, className = '' }: ButtonProps) {
    const baseStyles = "px-7 py-3 rounded-full font-semibold transition-all duration-300 text-xs";

    const variants = {
        primary: "border-2 border-[#FFAD00] bg-[#FFAD00] text-white hover:bg-[#FF8C00] flex justify-center flex-row text-center items-center gap-2",
        outline: "border-2 border-black hover:bg-gray-100 flex justify-center flex-row text-center items-center text-black",
        whiteoutline: "border-2 border-white hover:bg-gray-100 flex justify-center flex-row text-center items-center text-white",
        gradient: "bg-gradient-to-r from-[#094E8D] to-[#5DBA51] text-white hover:opacity-90 flex justify-center flex-row text-center items-center gap-2"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}