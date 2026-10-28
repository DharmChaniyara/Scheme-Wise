import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { schemesData } from '../data/schemes';
import { SchemeCard } from '../components/SchemeCard';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export function SavedSchemes() {
  const { savedSchemeIds, checklists } = useAppContext();

  const savedSchemes = useMemo(() => {
    return schemesData.filter(s => savedSchemeIds.includes(s.id));
  }, [savedSchemeIds]);

  const totalStepsCompleted = useMemo(() => {
    return Object.values(checklists).reduce((sum, steps) => sum + steps.length, 0);
  }, [checklists]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-1 flex flex-col text-left">
      
      {/* Editorial Header */}
      <div className="mb-8 border-b border-[#E8E3D7] pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge variant="ministry">Application Docket</Badge>
              <span className="text-xs font-mono-tabular text-[#6D7F78]">
                {savedSchemes.length} Policies Tracked
              </span>
            </div>
            <h1 className="font-serif-headline text-3xl sm:text-4xl font-bold text-[#151E1B] tracking-tight">
              Saved Schemes &amp; Application Docket
            </h1>
            <p className="text-sm text-[#50615B] mt-1 max-w-2xl leading-relaxed">
              Consolidated registry of government programs you have shortlisted for application, document assembly, and bank submission.
            </p>
          </div>

          {savedSchemes.length > 0 && (
            <div className="rounded-xl bg-[#F4F1EA] border border-[#DFD9CC] px-4 py-2 text-xs flex items-center gap-3">
              <div className="flex items-center gap-1.5 font-semibold text-[#1C4B3D]">
                <CheckCircle2 className="h-4 w-4" />
                <span>{totalStepsCompleted} Filing Milestones Checked</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {savedSchemes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {savedSchemes.map(scheme => (
            <div key={scheme.id} className="h-full">
              <SchemeCard scheme={scheme} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="card-ledger p-10 sm:p-12 rounded-2xl flex flex-col items-center text-center max-w-md w-full border border-[#DFD9CC] space-y-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F4F1EA] text-[#50615B] border border-[#DFD9CC]">
              <Bookmark className="h-6 w-6 text-[#7C8B86]" />
            </div>
            <h2 className="font-serif-headline text-2xl font-bold text-[#151E1B]">
              No Shortlisted Schemes Yet
            </h2>
            <p className="text-xs text-[#50615B] leading-relaxed max-w-xs">
              Bookmark schemes from the Sovereign Registry or your personalized diagnostic recommendations to track your preparation checklists here.
            </p>
            <div className="pt-2">
              <Link to="/explore">
                <Button size="sm">
                  <Compass className="mr-1.5 h-3.5 w-3.5" />
                  <span>Explore Sovereign Schemes</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
