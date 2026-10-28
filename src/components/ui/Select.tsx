import React, { SelectHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, hint, options, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1.5 text-left">
        {label && (
          <label className="text-xs font-semibold uppercase tracking-wider text-[#384A44]">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              "flex h-11 w-full appearance-none rounded-xl border border-[#D8D2C4] bg-white px-3.5 pr-10 py-2 text-sm text-[#151E1B] transition-all",
              "hover:border-[#C4BCAB]",
              "focus-visible:outline-none focus-visible:border-[#1C4B3D] focus-visible:ring-2 focus-visible:ring-[#1C4B3D]/20",
              "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[#F4F1EA]",
              error && "border-[#C53030] focus-visible:border-[#C53030] focus-visible:ring-[#C53030]/20",
              className
            )}
            {...props}
          >
            <option value="" disabled hidden>Select an option</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ChevronDown className="h-4 w-4 text-[#6D7F78]" />
          </div>
        </div>
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
Select.displayName = "Select";
