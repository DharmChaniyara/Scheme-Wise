import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C4B3D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F5] disabled:pointer-events-none disabled:opacity-50 active:translate-y-[1px]";
    
    const variants = {
      primary: "bg-[#1C4B3D] text-[#FAF8F5] hover:bg-[#153C31] shadow-[0_1px_2px_rgba(0,0,0,0.08),0_2px_6px_rgba(28,75,61,0.18)] border border-[#163E32]",
      secondary: "bg-[#F4F1EA] text-[#151E1B] hover:bg-[#EAE5DC] border border-[#DFD9CC]",
      outline: "border border-[#D8D2C4] bg-white hover:bg-[#FAF8F5] text-[#151E1B] hover:border-[#1C4B3D]/40 shadow-xs",
      ghost: "bg-transparent hover:bg-[#F4F1EA] text-[#25332E]",
      accent: "bg-[#B85D19] text-white hover:bg-[#9C4D14] shadow-[0_1px_2px_rgba(0,0,0,0.08)] border border-[#A34E14]",
    };

    const sizes = {
      sm: "h-9 px-3.5 text-xs font-semibold rounded-lg gap-1.5",
      md: "h-11 px-5 text-sm font-semibold rounded-xl gap-2",
      lg: "h-12 px-7 text-base font-semibold rounded-xl gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
