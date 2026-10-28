import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Bookmark, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Info, 
  Landmark, 
  Check, 
  Building2,
  Calendar,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { schemesData } from '../data/schemes';
import { useAppContext } from '../context/AppContext';
import { calculateMatchScore } from '../utils/matching';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { MatchScoreIndicator } from '../components/ui/MatchScoreIndicator';

export function SchemeDetails() {
  const { id } = useParams<{ id: string }>();
  const { profile, savedSchemeIds, saveScheme, unsaveScheme, checklists, toggleChecklistStep } = useAppContext();
  
  const scheme = useMemo(() => schemesData.find(s => s.id === id), [id]);
  const isSaved = scheme ? savedSchemeIds.includes(scheme.id) : false;
  
  const matchResult = useMemo(() => {
    if (scheme && profile) {
      return calculateMatchScore(profile, scheme);
    }
    return null;
  }, [scheme, profile]);

  if (!scheme) {
    return <Navigate to="/explore" replace />;
  }

  const toggleSave = () => {
    if (isSaved) unsaveScheme(scheme.id);
    else saveScheme(scheme.id);
  };

  const schemeChecklist = checklists[scheme.id] || [];
  const progress = scheme.applicationSteps.length > 0 
    ? Math.round((schemeChecklist.length / scheme.applicationSteps.length) * 100) 
    : 0;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-5xl text-left">
      
      {/* Back Navigation */}
      <Link 
        to={profile ? "/recommendations" : "/explore"} 
        className="inline-flex items-center text-xs font-semibold text-[#50615B] hover:text-[#1C4B3D] mb-6 transition-colors"
      >
        <ArrowLeft className="mr-1.5 h-3.5 w-3.5" /> Back to {profile ? 'Recommendations Docket' : 'Scheme Registry'}
      </Link>

      {/* Main Dossier Container */}
      <div className="card-ledger rounded-2xl p-6 sm:p-10 border border-[#DFD9CC] bg-white shadow-sm space-y-10">
        
        {/* Gazette Header Block */}
        <div className="border-b border-[#E8E3D7] pb-8">
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            
            <div className="space-y-4 flex-1">
              
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="ministry">{scheme.ministry}</Badge>
                <Badge variant={scheme.governmentLevel === 'Central' ? 'default' : 'outline'}>
                  {scheme.governmentLevel} Sovereign Scheme
                </Badge>
                {scheme.category.map((cat, i) => (
                  <span key={i} className="text-[11px] font-semibold text-[#50615B] bg-[#F4F1EA] border border-[#DFD9CC] px-2 py-0.5 rounded">
                    {cat}
                  </span>
                ))}
              </div>

              <h1 className="font-serif-headline text-3xl sm:text-4xl md:text-5xl font-bold text-[#151E1B] tracking-tight leading-tight">
                {scheme.schemeName}
              </h1>

              <p className="text-base sm:text-lg text-[#50615B] leading-relaxed max-w-3xl">
                {scheme.description}
              </p>

            </div>

            {/* Score & Action Button */}
            <div className="flex flex-row md:flex-col items-center sm:items-end gap-4 shrink-0">
              {matchResult && (
                <div className="rounded-xl border border-[#BFDBD0] bg-[#F1F6F4] p-3 text-center min-w-[110px]">
                  <MatchScoreIndicator score={matchResult.score} className="mx-auto mb-1" />
                  <span className="text-[10px] font-mono-tabular uppercase tracking-wider font-bold text-[#1C4B3D] block">
                    {matchResult.label}
                  </span>
                </div>
              )}

              <Button 
                variant={isSaved ? "primary" : "outline"}
                size="sm"
                className="w-full justify-center"
                onClick={toggleSave}
              >
                <Bookmark className={`mr-1.5 h-4 w-4 ${isSaved ? "fill-current" : ""}`} />
                <span>{isSaved ? "Saved to Docket" : "Save Scheme"}</span>
              </Button>
            </div>

          </div>

          {/* Diagnostic Match Reasons */}
          {matchResult && matchResult.reasons.length > 0 && (
            <div className="mt-6 p-4 rounded-xl bg-[#F1F6F4] border border-[#BFDBD0] text-xs">
              <div className="flex items-center gap-2 font-bold text-[#1C4B3D] mb-2">
                <ShieldCheck className="h-4 w-4" />
                <span>Enterprise Qualification Assessment for {profile?.businessName}:</span>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2 text-[#25332E]">
                {matchResult.reasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <Check className="h-3.5 w-3.5 text-[#1C4B3D] shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Benefits & Eligibility Columns */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Key Benefits */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#E8E3D7] pb-2">
              <span className="text-xs font-mono-tabular uppercase tracking-wider font-bold text-[#1C4B3D]">
                Section 01
              </span>
              <h2 className="font-serif-headline text-2xl font-bold text-[#151E1B]">
                Key Policy Benefits
              </h2>
            </div>

            <div className="space-y-3">
              {scheme.benefits.map((benefit, i) => (
                <div key={i} className="p-4 rounded-xl border border-[#DFD9CC] bg-[#FAF8F5]">
                  <h4 className="text-sm font-bold text-[#151E1B] mb-1">{benefit.title}</h4>
                  <p className="text-xs text-[#50615B] leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#E8E3D7] pb-2">
              <span className="text-xs font-mono-tabular uppercase tracking-wider font-bold text-[#1C4B3D]">
                Section 02
              </span>
              <h2 className="font-serif-headline text-2xl font-bold text-[#151E1B]">
                Eligibility Guidelines
              </h2>
            </div>

            <div className="space-y-4">
              
              {/* Plain Language Summary */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1C4B3D] flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#1C4B3D]" />
                  <span>Plain Language Summary</span>
                </span>
                <ul className="space-y-2">
                  {scheme.eligibility.simple.map((item, i) => (
                    <li key={i} className="flex items-start text-xs text-[#25332E] bg-[#F1F6F4] p-3 rounded-lg border border-[#BFDBD0]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1C4B3D] mt-1.5 mr-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Official Gazette Criteria */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6D7F78] flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5" />
                  <span>Statutory Gazette Terms</span>
                </span>
                <ul className="space-y-1.5 pl-5 list-disc text-xs text-[#50615B] leading-relaxed">
                  {scheme.eligibility.official.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* Preparation & Application Filing Workflow */}
        <div className="rounded-2xl bg-[#111A16] p-6 sm:p-10 text-[#FAF8F5] space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-[10px] font-mono-tabular uppercase tracking-wider font-bold text-[#BFDBD0]">
                Application Docket
              </span>
              <h3 className="font-serif-headline text-2xl font-bold text-white mt-0.5">
                Preparation &amp; Submission Workflow
              </h3>
            </div>
            {isSaved && (
              <span className="self-start sm:self-auto text-xs font-mono-tabular font-bold px-3 py-1 rounded-md bg-[#1C4B3D] text-[#FAF8F5] border border-white/15">
                {progress}% Prepared
              </span>
            )}
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            
            {/* Required Documents Checklist */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#BFDBD0]">
                Mandated Filing Records
              </h4>
              <ul className="space-y-2">
                {scheme.documents.map((doc, i) => (
                  <li key={i} className="flex items-start bg-white/5 p-3 rounded-xl border border-white/10 text-xs text-[#EAE6DC]">
                    <FileText className="h-4 w-4 mr-2 text-[#E4B594] shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Application Steps Checklist */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#BFDBD0]">
                Step-by-Step Filing Checklist {isSaved && <span className="text-[#8E9F98]">(Click to toggle progress)</span>}
              </h4>
              
              <div className="space-y-2.5">
                {scheme.applicationSteps.map((step, i) => {
                  const isChecked = schemeChecklist.includes(step);
                  return (
                    <div 
                      key={i}
                      onClick={() => isSaved && toggleChecklistStep(scheme.id, step)}
                      className={`flex items-start p-3.5 rounded-xl border transition-all text-xs ${
                        isSaved ? 'cursor-pointer hover:border-white/30' : ''
                      } ${
                        isChecked 
                          ? 'bg-[#1C4B3D]/50 border-[#1C4B3D] text-[#BFDBD0]' 
                          : 'bg-white/5 border-white/10 text-[#FAF8F5]'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mr-3 border text-[11px] font-mono-tabular font-bold ${
                        isChecked ? 'bg-[#1C4B3D] border-[#1C4B3D] text-white' : 'border-white/20 text-[#8E9F98]'
                      }`}>
                        {isChecked ? <Check className="h-3 w-3 stroke-[3]" /> : i + 1}
                      </div>
                      <p className={`leading-relaxed ${isChecked ? 'line-through opacity-70' : ''}`}>
                        {step}
                      </p>
                    </div>
                  );
                })}
              </div>

              {!isSaved && (
                <div className="flex items-center gap-2 text-xs text-[#E4B594] bg-[#B85D19]/10 p-3 rounded-xl border border-[#B85D19]/30 mt-3">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>Save this scheme to persist and track your interactive checklist progress.</span>
                </div>
              )}
            </div>

          </div>

          {/* Official Apex Portal CTA */}
          <div className="pt-6 border-t border-white/10 text-center space-y-3">
            <a 
              href={scheme.officialWebsite} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block w-full sm:w-auto"
            >
              <Button size="lg" className="w-full sm:w-auto bg-[#FAF8F5] text-[#111A16] hover:bg-white font-bold border-0 shadow-lg">
                <span>Access Official Sovereign Portal</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <p className="text-[11px] text-[#8E9F98] max-w-xl mx-auto">
              You are being directed to the official government URL ({scheme.officialWebsite}). SchemeWise does not collect fees or represent the government.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
