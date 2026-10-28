import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'info' | 'outline' | 'ministry';
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  const variants = {
    default: "bg-[#F4F1EA] text-[#25332E] border border-[#DFD9CC]",
    success: "bg-[#F1F6F4] text-[#1C4B3D] border border-[#BFDBD0]",
    warning: "bg-[#FCF7F2] text-[#B85D19] border border-[#F0D4BE]",
    info: "bg-[#F0F5F8] text-[#1B4B66] border border-[#C5DCE8]",
    outline: "border border-[#DFD9CC] text-[#50615B] bg-white/80",
    ministry: "bg-[#1C4B3D]/8 text-[#1C4B3D] border border-[#1C4B3D]/25 font-semibold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
