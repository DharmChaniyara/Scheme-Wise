import React, { useEffect, useState, useMemo } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Landmark, Sparkles, Building, MapPin, CheckCircle, SlidersHorizontal } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { schemesData } from '../data/schemes';
import { getRecommendations } from '../utils/matching';
import { SchemeCard } from '../components/SchemeCard';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export function Recommendations() {
  const { profile } = useAppContext();
  const [loadingStep, setLoadingStep] = useState(0);
  
  const loadingSteps = [
    { title: "Verifying entity constitution against Central Gazette archives...", status: "Parsing DPIIT & Udyam parameters" },
    { title: "Evaluating sectoral eligibility & capital limits...", status: "Screening debt guarantee frameworks" },
    { title: "Synthesizing sovereign advisory recommendations docket...", status: "Calibrating match confidence" }
  ];

  // Mock analytical sequence
  useEffect(() => {
    if (!profile) return;
    
    const timer1 = setTimeout(() => setLoadingStep(1), 600);
    const timer2 = setTimeout(() => setLoadingStep(2), 1300);
    const timer3 = setTimeout(() => setLoadingStep(3), 2000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [profile]);

  const recommendations = useMemo(() => {
    if (!profile) return [];
    return getRecommendations(profile, schemesData);
  }, [profile]);

  if (!profile) {
    return <Navigate to="/find" replace />;
  }

  // Elegant Analytical Loading Screen
  if (loadingStep < 3) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-[#FAF8F5]">
        <div className="card-ledger p-8 sm:p-10 rounded-2xl max-w-md w-full border border-[#DFD9CC] text-center space-y-6">
          
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#1C4B3D] text-[#FAF8F5] shadow-sm">
            <svg className="w-7 h-7 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>

          <div className="space-y-2">
            <div className="text-[10px] font-mono-tabular uppercase tracking-widest text-[#1C4B3D] font-bold">
              Policy Diagnostic Engine
            </div>
            <h2 className="font-serif-headline text-xl font-bold text-[#151E1B]">
              {loadingSteps[loadingStep].title}
            </h2>
            <p className="text-xs text-[#6D7F78] font-mono-tabular">
              {loadingSteps[loadingStep].status}...
            </p>
          </div>

          <div className="w-full bg-[#E8E3D7] h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-[#1C4B3D] h-full rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${((loadingStep + 1) / 3) * 100}%` }}
            />
          </div>

        </div>
      </div>
    );
  }

  const topMatches = recommendations.filter(r => r.score >= 50);
  const otherMatches = recommendations.filter(r => r.score < 50);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-1 flex flex-col text-left">
      
      {/* Top Breadcrumb & Profile Context */}
      <div className="mb-8 border-b border-[#E8E3D7] pb-6">
        <Link 
          to="/find" 
          className="inline-flex items-center text-xs font-semibold text-[#50615B] hover:text-[#1C4B3D] mb-4 transition-colors"
        >
          <ArrowLeft className="mr-1.5 h-3.5 w-3.5" /> Modify Enterprise Profile
        </Link>
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="ministry">Diagnostic Complete</Badge>
              <span className="text-xs font-mono-tabular text-[#6D7F78]">
                {topMatches.length} Matches Calibrated
              </span>
            </div>
            <h1 className="font-serif-headline text-3xl sm:text-4xl font-bold text-[#151E1B] tracking-tight">
              Sovereign Recommendations Docket
            </h1>
            <p className="text-sm text-[#50615B] mt-1">
              Customized policy assessment synthesized for <strong className="text-[#151E1B]">{profile.businessName}</strong>.
            </p>
          </div>

          {/* Profile Quick Pill */}
          <div className="rounded-xl bg-[#F4F1EA] border border-[#DFD9CC] p-3 text-xs text-[#50615B] flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1 font-semibold text-[#151E1B]">
              <Building className="h-3.5 w-3.5 text-[#1C4B3D]" /> {profile.businessType}
            </span>
            <span className="text-[#DFD9CC]">•</span>
            <span className="font-medium text-[#25332E]">
              {profile.industry}
            </span>
            <span className="text-[#DFD9CC]">•</span>
            <span className="flex items-center gap-1 font-medium text-[#25332E]">
              <MapPin className="h-3.5 w-3.5 text-[#B85D19]" /> {profile.state}
            </span>
          </div>
        </div>
      </div>

      {topMatches.length > 0 ? (
        <div className="space-y-12">
          
          {/* Top Matches Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <div className="h-2 w-2 rounded-full bg-[#1C4B3D]" />
                <h2 className="font-serif-headline text-2xl font-bold text-[#151E1B]">
                  High Qualification Mandates
                </h2>
                <span className="text-xs font-mono-tabular font-bold px-2 py-0.5 rounded-md bg-[#F1F6F4] text-[#1C4B3D] border border-[#BFDBD0]">
                  {topMatches.length} Verified
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {topMatches.map((result) => (
                <div key={result.scheme.id} className="h-full">
                  <SchemeCard 
                    scheme={result.scheme} 
                    score={result.score} 
                    matchLabel={result.label}
                    matchReasons={result.reasons}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Secondary & Allied Matches */}
          {otherMatches.length > 0 && (
            <section className="pt-8 border-t border-[#E8E3D7]">
              <div className="mb-6">
                <h2 className="font-serif-headline text-xl font-bold text-[#151E1B]">
                  Secondary &amp; Allied Schemes
                </h2>
                <p className="text-xs text-[#6D7F78] mt-1">
                  These policies match your geographic or sectoral presence, but may have narrower eligibility criteria or lower scores for your stage.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 opacity-90">
                {otherMatches.slice(0, 3).map(result => (
                  <SchemeCard 
                    key={result.scheme.id} 
                    scheme={result.scheme} 
                    score={result.score} 
                    matchLabel={result.label}
                  />
                ))}
              </div>

              {otherMatches.length > 3 && (
                <div className="mt-8 text-center">
                  <Link to="/explore">
                    <Button variant="outline" size="sm">
                      <SlidersHorizontal className="mr-2 h-3.5 w-3.5" />
                      <span>Explore all {otherMatches.length} allied schemes in registry</span>
                    </Button>
                  </Link>
                </div>
              )}
            </section>
          )}

        </div>
      ) : (
        /* Empty state without emoji */
        <div className="card-ledger p-12 text-center max-w-lg mx-auto my-12 rounded-2xl border border-[#DFD9CC] space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#F4F1EA] text-[#50615B] border border-[#DFD9CC]">
            <Landmark className="h-6 w-6 text-[#1C4B3D]" />
          </div>
          <h2 className="font-serif-headline text-2xl font-bold text-[#151E1B]">
            No direct sovereign match identified
          </h2>
          <p className="text-xs text-[#50615B] leading-relaxed max-w-md mx-auto">
            Based strictly on the parameters provided, no single program met the 50% qualification threshold. Try updating your operating turnover or explore the complete central registry manually.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link to="/find" className="w-full sm:w-auto">
              <Button variant="outline" size="sm" className="w-full">
                Adjust Diagnostic Profile
              </Button>
            </Link>
            <Link to="/explore" className="w-full sm:w-auto">
              <Button size="sm" className="w-full">
                Examine All Sovereign Schemes
              </Button>
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}
