import React from 'react';
import { Scheme } from '../types';
import { Link } from 'react-router-dom';
import { Bookmark, ArrowUpRight, Landmark, Layers, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/Card';
import { Badge } from './ui/Badge';
import { MatchScoreIndicator } from './ui/MatchScoreIndicator';
import { Button } from './ui/Button';
import { useAppContext } from '../context/AppContext';
import { cn } from '../utils/cn';

interface SchemeCardProps {
  scheme: Scheme;
  score?: number;
  matchLabel?: string;
  matchReasons?: string[];
}

export function SchemeCard({ scheme, score, matchLabel, matchReasons }: SchemeCardProps) {
  const { savedSchemeIds, saveScheme, unsaveScheme } = useAppContext();
  const isSaved = savedSchemeIds.includes(scheme.id);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isSaved) {
      unsaveScheme(scheme.id);
    } else {
      saveScheme(scheme.id);
    }
  };

  // Primary benefit highlight if available
  const topBenefit = scheme.benefits && scheme.benefits.length > 0 ? scheme.benefits[0] : null;

  return (
    <Card className="flex flex-col h-full bg-white border border-[#E8E3D7] hover:border-[#1C4B3D]/30 transition-all duration-200 group rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(18,24,22,0.03)] hover:shadow-[0_4px_16px_rgba(18,24,22,0.06)]">
      
      {/* Top Banner with Sovereign Level & Ministry */}
      <div className="px-5 pt-5 pb-3 border-b border-[#F4F1EA] bg-[#FAF8F5]/50 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 overflow-hidden">
          <Landmark className="h-3.5 w-3.5 text-[#1C4B3D] shrink-0" />
          <span className="text-[11px] font-semibold text-[#50615B] truncate tracking-wide">
            {scheme.ministry}
          </span>
        </div>
        <Badge variant={scheme.governmentLevel === 'Central' ? 'ministry' : 'outline'} className="shrink-0 text-[10px]">
          {scheme.governmentLevel}
        </Badge>
      </div>

      <CardHeader className="pb-3 pt-4 px-5">
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-1.5 flex-1">
            <h3 className="font-serif-headline text-lg font-bold leading-snug text-[#151E1B] group-hover:text-[#1C4B3D] transition-colors">
              <Link to={`/scheme/${scheme.id}`} className="hover:underline decoration-[#1C4B3D]/40 decoration-1 underline-offset-2">
                {scheme.schemeName}
              </Link>
            </h3>
          </div>
          {score !== undefined && (
            <div className="shrink-0">
              <MatchScoreIndicator score={score} />
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 space-y-4 px-5 pt-0">
        <p className="text-xs text-[#50615B] line-clamp-3 leading-relaxed">
          {scheme.shortDescription || scheme.description}
        </p>

        {/* Highlighted Benefit Snippet */}
        {topBenefit && (
          <div className="rounded-lg bg-[#FAF8F5] p-3 border border-[#E8E3D7] text-left">
            <div className="text-[10px] font-mono-tabular uppercase tracking-wider font-bold text-[#1C4B3D] mb-0.5">
              Principal Provision
            </div>
            <div className="text-xs font-semibold text-[#151E1B] leading-tight mb-1">
              {topBenefit.title}
            </div>
            <div className="text-[11px] text-[#6D7F78] line-clamp-2 leading-relaxed">
              {topBenefit.description}
            </div>
          </div>
        )}

        {/* Match Reasons for Diagnostics */}
        {matchLabel && (
          <div className={cn(
            "rounded-lg p-3 text-xs border text-left",
            score && score >= 90 ? "bg-[#F1F6F4] border-[#BFDBD0] text-[#1C4B3D]" : 
            score && score >= 70 ? "bg-[#F0F5F8] border-[#C5DCE8] text-[#1B4B66]" :
            "bg-[#FAF8F5] border-[#E8E3D7] text-[#50615B]"
          )}>
            <div className="font-semibold mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>{matchLabel}</span>
            </div>
            {matchReasons && matchReasons.length > 0 && (
              <ul className="space-y-1 text-[11px] pl-5 list-disc opacity-90">
                {matchReasons.slice(0, 2).map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            )}
          </div>
        )}

        {/* Categories tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {scheme.category.slice(0, 3).map((cat: string, i: number) => (
            <span key={i} className="inline-flex items-center text-[10px] font-medium text-[#50615B] bg-[#F4F1EA] border border-[#E8E3D7] px-2 py-0.5 rounded">
              <Layers className="mr-1 h-2.5 w-2.5 opacity-60" />
              {cat}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-3 pb-4 px-5 border-t border-[#F4F1EA] flex items-center justify-between gap-3 bg-[#FAF8F5]/30">
        <button
          type="button"
          onClick={toggleSave}
          aria-label={isSaved ? "Unsave Scheme" : "Save Scheme"}
          title={isSaved ? "Remove from bookmarks" : "Save to bookmarks"}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-lg border transition-all cursor-pointer",
            isSaved 
              ? "border-[#1C4B3D] bg-[#F1F6F4] text-[#1C4B3D]" 
              : "border-[#D8D2C4] bg-white text-[#7C8B86] hover:text-[#1C4B3D] hover:border-[#1C4B3D]/30"
          )}
        >
          <Bookmark className={cn("h-4 w-4", isSaved && "fill-current text-[#1C4B3D]")} />
        </button>
        <Link to={`/scheme/${scheme.id}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full justify-center group-hover:bg-[#1C4B3D] group-hover:text-[#FAF8F5] group-hover:border-[#1C4B3D] transition-colors">
            <span>Examine Policy</span>
            <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 opacity-70 group-hover:opacity-100" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
