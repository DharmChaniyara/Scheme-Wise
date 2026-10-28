import React, { InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, label, error, hint, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1.5 text-left">
        {label && (
          <label className="text-xs font-semibold uppercase tracking-wider text-[#384A44]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "flex h-11 w-full rounded-xl border border-[#D8D2C4] bg-white px-3.5 py-2 text-sm text-[#151E1B] transition-all placeholder:text-[#8E9F98]",
            "hover:border-[#C4BCAB]",
            "focus-visible:outline-none focus-visible:border-[#1C4B3D] focus-visible:ring-2 focus-visible:ring-[#1C4B3D]/20",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[#F4F1EA]",
            error && "border-[#C53030] focus-visible:border-[#C53030] focus-visible:ring-[#C53030]/20",
            className
          )}
          {...props}
        />
        {hint && !error && (
          <span className="text-xs text-[#6D7F78]">{hint}</span>
        )}
        {error && (
          <span className="text-xs font-medium text-[#C53030]">{error}</span>
        )}
      </div>
    );
  }
);
TextInput.displayName = "TextInput";
