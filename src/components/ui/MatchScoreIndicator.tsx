import React from 'react';
import { cn } from '../../utils/cn';

interface MatchScoreIndicatorProps {
  score: number;
  className?: string;
}

export function MatchScoreIndicator({ score, className }: MatchScoreIndicatorProps) {
  let colorTheme = {
    badge: "bg-[#F1F6F4] text-[#1C4B3D] border-[#BFDBD0]",
    meter: "bg-[#1C4B3D]",
    label: "text-[#1C4B3D]",
  };
  
  if (score >= 90) {
    colorTheme = {
      badge: "bg-[#F1F6F4] text-[#1C4B3D] border-[#BFDBD0]",
      meter: "bg-[#1C4B3D]",
      label: "text-[#1C4B3D]",
    };
  } else if (score >= 70) {
    colorTheme = {
      badge: "bg-[#F0F5F8] text-[#1B4B66] border-[#C5DCE8]",
      meter: "bg-[#1B4B66]",
      label: "text-[#1B4B66]",
    };
  } else if (score >= 50) {
    colorTheme = {
      badge: "bg-[#FCF7F2] text-[#B85D19] border-[#F0D4BE]",
      meter: "bg-[#B85D19]",
      label: "text-[#B85D19]",
    };
  } else {
    colorTheme = {
      badge: "bg-[#F4F1EA] text-[#50615B] border-[#DFD9CC]",
      meter: "bg-[#50615B]",
      label: "text-[#50615B]",
    };
  }

  return (
    <div className={cn(
      "inline-flex flex-col items-center justify-center rounded-xl border px-2.5 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] min-w-[54px]",
      colorTheme.badge,
      className
    )}>
      <span className="font-mono-tabular text-base font-bold leading-none tracking-tight">
        {score}%
      </span>
      <span className={cn("text-[9px] font-semibold uppercase tracking-wider mt-1 opacity-90", colorTheme.label)}>
        Match
      </span>
    </div>
  );
}
