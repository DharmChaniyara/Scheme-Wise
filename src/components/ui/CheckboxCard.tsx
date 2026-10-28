import React from 'react';
import { cn } from '../../utils/cn';
import { Check } from 'lucide-react';

interface CheckboxCardProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
}

export const CheckboxCard = React.forwardRef<HTMLInputElement, CheckboxCardProps>(
  ({ className, label, description, checked, ...props }, ref) => {
    return (
      <label
        className={cn(
          "relative flex cursor-pointer items-start justify-between rounded-xl border p-4 transition-all duration-200 select-none",
          checked
            ? "border-[#1C4B3D] bg-[#F1F6F4]/70 shadow-[0_1px_3px_rgba(28,75,61,0.08)]"
            : "border-[#DFD9CC] bg-white hover:border-[#BFDBD0] hover:bg-[#FAF8F5]",
          className
        )}
      >
        <input
          type="checkbox"
          ref={ref}
          className="peer sr-only"
          checked={checked}
          {...props}
        />
        <div className="flex-1 pr-3">
          <span className={cn(
            "text-sm font-semibold transition-colors block leading-tight",
            checked ? "text-[#1C4B3D]" : "text-[#151E1B]"
          )}>
            {label}
          </span>
          {description && (
            <span className="text-xs text-[#50615B] mt-0.5 block leading-normal">
              {description}
            </span>
          )}
        </div>
        <div className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all mt-0.5",
          checked
            ? "border-[#1C4B3D] bg-[#1C4B3D] text-[#FAF8F5]"
            : "border-[#D8D2C4] bg-white text-transparent peer-hover:border-[#8E9F98]"
        )}>
          <Check className="h-3.5 w-3.5 stroke-[2.5]" />
        </div>
      </label>
    );
  }
);
CheckboxCard.displayName = "CheckboxCard";
