import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, ClipboardList, Lightbulb, Search, ArrowRight, ShieldCheck, Sparkles, Building, ChevronRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { schemesData } from '../data/schemes';
import { getRecommendations } from '../utils/matching';
import { SchemeCard } from '../components/SchemeCard';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export function Dashboard() {
  const { profile, savedSchemeIds, checklists } = useAppContext();

  const savedSchemes = useMemo(() => {
    return schemesData.filter(s => savedSchemeIds.includes(s.id));
  }, [savedSchemeIds]);

  const recommendedSchemes = useMemo(() => {
    if (!profile) return [];
    return getRecommendations(profile, schemesData).filter(r => r.score >= 50);
  }, [profile]);

  const highMatchCount = useMemo(() => {
    return recommendedSchemes.filter(r => r.score >= 90).length;
  }, [recommendedSchemes]);

  // Calculate active checklists (where at least one step is completed)
  const activeChecklistsCount = useMemo(() => {
    return Object.keys(checklists).filter(id => checklists[id].length > 0).length;
  }, [checklists]);

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Morning Briefing';
    if (hour < 18) return 'Afternoon Briefing';
    return 'Evening Briefing';
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-1 flex flex-col text-left">
      
      {/* Header Banner */}
      <div className="mb-8 border-b border-[#E8E3D7] pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-mono-tabular uppercase tracking-wider font-bold text-[#1C4B3D] bg-[#F1F6F4] px-2 py-0.5 rounded border border-[#BFDBD0]">
                {greeting()}
              </span>
              <span className="text-xs font-mono-tabular text-[#6D7F78]">
                Fiscal Year 2026-27
              </span>
            </div>
            <h1 className="font-serif-headline text-3xl sm:text-4xl font-bold text-[#151E1B] tracking-tight">
              {profile ? profile.businessName : 'Enterprise Intelligence Desk'}
            </h1>
            <p className="text-sm text-[#50615B] mt-1">
              {profile 
                ? `Active constitutional status: ${profile.businessType} in ${profile.industry} (${profile.state}).`
                : 'Welcome to SchemeWise. Run your diagnostic to personalize sovereign policy tracking.'}
            </p>
          </div>

          {!profile && (
            <Link to="/find" className="self-start sm:self-center">
              <Button size="sm">
                <Sparkles className="mr-1.5 h-3.5 w-3.5 text-[#E4B594]" />
                <span>Run Diagnostic</span>
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Stats Ledger Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
        
        <div className="card-ledger p-5 rounded-xl border border-[#DFD9CC] bg-white text-left">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-[#6D7F78]">Relevant Schemes</span>
            <Lightbulb className="h-4 w-4 text-[#1C4B3D]" />
          </div>
          <div className="font-mono-tabular text-3xl font-bold text-[#151E1B]">
            {recommendedSchemes.length}
          </div>
          <p className="text-[11px] text-[#7C8B86] mt-1 font-mono-tabular">
            {profile ? 'Filtered for your sector' : 'Awaiting diagnostic'}
          </p>
        </div>

        <div className="card-ledger p-5 rounded-xl border border-[#DFD9CC] bg-white text-left">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-[#6D7F78]">High Confidence (90%+)</span>
            <ShieldCheck className="h-4 w-4 text-[#1C4B3D]" />
          </div>
          <div className="font-mono-tabular text-3xl font-bold text-[#1C4B3D]">
            {highMatchCount}
          </div>
          <p className="text-[11px] text-[#7C8B86] mt-1 font-mono-tabular">
            Direct statutory fit
          </p>
        </div>

        <div className="card-ledger p-5 rounded-xl border border-[#DFD9CC] bg-white text-left">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-[#6D7F78]">Saved Portfolios</span>
            <Bookmark className="h-4 w-4 text-[#B85D19]" />
          </div>
          <div className="font-mono-tabular text-3xl font-bold text-[#151E1B]">
            {savedSchemes.length}
          </div>
          <p className="text-[11px] text-[#7C8B86] mt-1 font-mono-tabular">
            Bookmarked for filing
          </p>
        </div>

        <div className="card-ledger p-5 rounded-xl border border-[#DFD9CC] bg-white text-left">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-[#6D7F78]">Active Checklists</span>
            <ClipboardList className="h-4 w-4 text-[#1B4B66]" />
          </div>
          <div className="font-mono-tabular text-3xl font-bold text-[#151E1B]">
            {activeChecklistsCount}
          </div>
          <p className="text-[11px] text-[#7C8B86] mt-1 font-mono-tabular">
            In-progress applications
          </p>
        </div>

      </div>

      {/* Main Split Content */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Left Column: Top Recommendations (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between border-b border-[#E8E3D7] pb-3">
            <div className="flex items-center gap-2">
              <h2 className="font-serif-headline text-xl font-bold text-[#151E1B]">
                Priority Sovereign Mandates
              </h2>
              {recommendedSchemes.length > 0 && (
                <span className="text-xs font-mono-tabular font-bold px-2 py-0.5 rounded bg-[#F1F6F4] text-[#1C4B3D] border border-[#BFDBD0]">
                  {recommendedSchemes.length}
                </span>
              )}
            </div>
            {profile && (
              <Link to="/recommendations" className="text-xs font-semibold text-[#1C4B3D] hover:underline flex items-center gap-1">
                <span>View Complete Docket</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>

          {profile ? (
            recommendedSchemes.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-6">
                {recommendedSchemes.slice(0, 4).map(result => (
                  <SchemeCard 
                    key={result.scheme.id} 
                    scheme={result.scheme} 
                    score={result.score} 
                    matchLabel={result.label} 
                  />
                ))}
              </div>
            ) : (
              <div className="card-ledger p-8 rounded-xl border border-[#DFD9CC] bg-white text-center space-y-3">
                <p className="text-xs text-[#50615B]">
                  No high-confidence mandates match your current diagnostic parameters.
                </p>
                <Link to="/explore">
                  <Button variant="outline" size="sm">
                    Browse Sovereign Registry Manually
                  </Button>
                </Link>
              </div>
            )
          ) : (
            <div className="card-ledger p-8 rounded-xl border border-[#DFD9CC] bg-white text-center space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4F1EA] text-[#50615B] border border-[#DFD9CC]">
                <Building className="h-6 w-6 text-[#1C4B3D]" />
              </div>
              <h3 className="font-serif-headline text-lg font-bold text-[#151E1B]">
                Diagnostic profile not initialized
              </h3>
              <p className="text-xs text-[#50615B] max-w-sm mx-auto leading-relaxed">
                Complete a 2-minute constitutional questionnaire to activate personalized matching for grants, credit guarantees, and subsidies.
              </p>
              <Link to="/find">
                <Button size="sm">
                  <span>Start 2-Minute Diagnostic</span>
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Right Column: Saved Schemes & Preparation Ledger */}
        <div className="space-y-6">
          
          <div className="rounded-xl border border-[#DFD9CC] bg-white p-6 space-y-5 shadow-[0_1px_3px_rgba(18,24,22,0.03)]">
            <div className="flex items-center justify-between border-b border-[#E8E3D7] pb-3">
              <h2 className="font-serif-headline text-lg font-bold text-[#151E1B]">
                Application Docket
              </h2>
              <Link to="/saved" className="text-xs font-semibold text-[#1C4B3D] hover:underline">
                View All ({savedSchemes.length})
              </Link>
            </div>
            
            {savedSchemes.length > 0 ? (
              <div className="space-y-3">
                {savedSchemes.slice(0, 4).map(scheme => {
                  const completedSteps = checklists[scheme.id]?.length || 0;
                  const totalSteps = scheme.applicationSteps.length;
                  const percentage = totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;

                  return (
                    <Link 
                      key={scheme.id} 
                      to={`/scheme/${scheme.id}`} 
                      className="block p-3.5 rounded-xl border border-[#E8E3D7] bg-[#FAF8F5]/60 hover:border-[#1C4B3D]/40 hover:bg-white transition-all text-left"
                    >
                      <h3 className="text-xs font-bold text-[#151E1B] truncate">
                        {scheme.schemeName}
                      </h3>
                      <p className="text-[11px] text-[#6D7F78] truncate mt-0.5">
                        {scheme.ministry}
                      </p>
                      
                      {/* Progress Bar */}
                      {totalSteps > 0 && (
                        <div className="mt-2.5 pt-2 border-t border-[#E8E3D7]/60">
                          <div className="flex justify-between text-[10px] font-mono-tabular font-medium text-[#7C8B86] mb-1">
                            <span>Filing Checklist</span>
                            <span className="font-bold text-[#1C4B3D]">{percentage}% Complete</span>
                          </div>
                          <div className="w-full h-1 bg-[#E8E3D7] rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-[#1C4B3D] rounded-full transition-all duration-300" 
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-6 text-xs text-[#6D7F78] space-y-2">
                <Bookmark className="h-6 w-6 text-[#DFD9CC] mx-auto" />
                <p>No schemes bookmarked in your application docket yet.</p>
                <Link to="/explore">
                  <Button variant="outline" size="sm" className="mt-2 text-xs">
                    Browse Scheme Registry
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Institutional Compliance Notice Card */}
          <div className="rounded-xl border border-[#DFD9CC] bg-[#F4F1EA] p-5 space-y-3 text-left">
            <span className="text-[10px] font-mono-tabular font-bold uppercase tracking-wider text-[#1C4B3D] block">
              Advisory Compliance
            </span>
            <h3 className="font-serif-headline text-base font-bold text-[#151E1B]">
              Statutory Verification Required
            </h3>
            <p className="text-xs text-[#50615B] leading-relaxed">
              Scheme limits, margin subsidies, and guarantee ratios are governed by gazette circulars. Always confirm current bank sanction criteria prior to disbursement requests.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
