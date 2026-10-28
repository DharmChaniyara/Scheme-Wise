import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  Coins, 
  Cpu, 
  Compass,
  Landmark,
  FileCheck
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { schemesData } from '../data/schemes';

export function LandingPage() {
  const [activeDossierTab, setActiveDossierTab] = useState<'sisfs' | 'cgtmse' | 'mudra'>('sisfs');

  const dossierMap = {
    sisfs: {
      id: 'startup-india-seed-fund',
      title: 'Startup India Seed Fund Scheme (SISFS)',
      authority: 'DPIIT • Ministry of Commerce & Industry',
      level: 'Central',
      ceiling: '₹50 Lakhs Grant & Debt',
      focus: 'Proof of concept, prototype trials, market entry',
      eligibilitySummary: 'DPIIT-recognized entity, incorporated < 2 years, proprietary tech component.',
      documents: ['DPIIT Certificate', 'Incorporation Deed', 'Pitch Deck & Runway Plan'],
    },
    cgtmse: {
      id: 'cgtmse',
      title: 'Credit Guarantee Trust for MSEs (CGTMSE)',
      authority: 'Ministry of MSME & SIDBI',
      level: 'Central',
      ceiling: '₹500 Lakhs (₹5 Cr) Limit',
      focus: 'Collateral-free credit facility with 75% to 85% sovereign risk cover',
      eligibilitySummary: 'Active Micro & Small Enterprises in manufacturing or service sectors.',
      documents: ['Udyam Registration', 'Project Report', 'Bank Statements / ITR'],
    },
    mudra: {
      id: 'pm-mudra',
      title: 'Pradhan Mantri MUDRA Yojana (PMMY)',
      authority: 'Department of Financial Services • MoF',
      level: 'Central',
      ceiling: 'Up to ₹10 Lakhs',
      focus: 'Working capital and asset acquisition under Shishu, Kishore, and Tarun tiers',
      eligibilitySummary: 'Non-corporate, non-farm small/micro enterprises and proprietary traders.',
      documents: ['KYC of Promoters', 'Proof of Business Address', 'Quotation of Machinery'],
    }
  };

  const currentDossier = dossierMap[activeDossierTab];

  return (
    <div className="flex-1 flex flex-col">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#E8E3D7] bg-[#FAF8F5] grid-pattern-subtle overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Editorial Masthead */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Sovereign Tag */}
              <div className="inline-flex items-center gap-2 rounded-lg border border-[#BFDBD0] bg-[#F1F6F4] px-3 py-1 text-xs font-semibold text-[#1C4B3D]">
                <span className="flex h-2 w-2 rounded-full bg-[#1C4B3D]" />
                <span>Verified Public Policy Intelligence • 2026 Sovereign Ledger</span>
              </div>

              {/* Display Headline */}
              <h1 className="font-serif-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-[#151E1B] leading-[1.08] tracking-tight">
                Sovereign capital &amp; credit guarantees, <span className="text-[#1C4B3D] italic font-normal">decrypted</span> for Indian enterprise.
              </h1>

              {/* Authoritative Subtext */}
              <p className="text-base sm:text-lg text-[#50615B] leading-relaxed max-w-2xl">
                Central and state ministries allocate over ₹3.5 Lakh Crore in MSME subsidies, tech modernization grants, and collateral-free credit. SchemeWise translates dense gazette notifications into clear eligibility requirements and structured document checklists.
              </p>

              {/* Primary Call to Action */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link to="/find">
                  <Button size="lg" className="w-full sm:w-auto shadow-sm">
                    <Sparkles className="h-4 w-4 text-[#E4B594]" />
                    <span>Run 2-Minute Diagnostic</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/explore">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <Compass className="h-4 w-4 mr-1 text-[#50615B]" />
                    <span>Examine Scheme Index</span>
                  </Button>
                </Link>
              </div>

              {/* Sovereign Trust Commitments */}
              <div className="pt-6 border-t border-[#DFD9CC] grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="font-mono-tabular text-sm font-bold text-[#151E1B]">50+ Policies</div>
                  <div className="text-[11px] text-[#6D7F78] uppercase tracking-wider font-semibold">Central &amp; State</div>
                </div>
                <div>
                  <div className="font-mono-tabular text-sm font-bold text-[#1C4B3D]">100% Free</div>
                  <div className="text-[11px] text-[#6D7F78] uppercase tracking-wider font-semibold">Public Access</div>
                </div>
                <div>
                  <div className="font-mono-tabular text-sm font-bold text-[#151E1B]">Direct Portals</div>
                  <div className="text-[11px] text-[#6D7F78] uppercase tracking-wider font-semibold">Zero Commission</div>
                </div>
              </div>

            </div>

            {/* Right Column: Live Policy Dossier Preview */}
            <div className="lg:col-span-5">
              <div className="card-ledger rounded-2xl overflow-hidden border border-[#D8D2C4] shadow-[0_4px_24px_rgba(18,24,22,0.06)] bg-white text-left">
                
                {/* Dossier Header */}
                <div className="bg-[#1C4B3D] text-[#FAF8F5] p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono-tabular uppercase tracking-widest text-[#BFDBD0] font-semibold">
                      Official Scheme Briefing
                    </span>
                    <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-mono-tabular font-bold text-white border border-white/20">
                      LIVE SPECIFICATION
                    </span>
                  </div>

                  {/* Tab Selector */}
                  <div className="grid grid-cols-3 gap-1 bg-[#123228] p-1 rounded-lg text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setActiveDossierTab('sisfs')}
                      className={`py-1.5 px-2 rounded-md transition-all cursor-pointer ${
                        activeDossierTab === 'sisfs' ? 'bg-[#FAF8F5] text-[#1C4B3D] shadow-xs' : 'text-[#BFDBD0] hover:text-white'
                      }`}
                    >
                      Startup Seed
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveDossierTab('cgtmse')}
                      className={`py-1.5 px-2 rounded-md transition-all cursor-pointer ${
                        activeDossierTab === 'cgtmse' ? 'bg-[#FAF8F5] text-[#1C4B3D] shadow-xs' : 'text-[#BFDBD0] hover:text-white'
                      }`}
                    >
                      CGTMSE Loan
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveDossierTab('mudra')}
                      className={`py-1.5 px-2 rounded-md transition-all cursor-pointer ${
                        activeDossierTab === 'mudra' ? 'bg-[#FAF8F5] text-[#1C4B3D] shadow-xs' : 'text-[#BFDBD0] hover:text-white'
                      }`}
                    >
                      PM Mudra
                    </button>
                  </div>
                </div>

                {/* Dossier Content Body */}
                <div className="p-6 space-y-5">
                  
                  <div>
                    <span className="text-[11px] font-medium text-[#7C8B86] uppercase tracking-wider">
                      {currentDossier.authority}
                    </span>
                    <h3 className="font-serif-headline text-xl font-bold text-[#151E1B] leading-tight mt-1">
                      {currentDossier.title}
                    </h3>
                  </div>

                  {/* Financial Ceiling Card */}
                  <div className="rounded-xl bg-[#F4F1EA] p-4 border border-[#DFD9CC]">
                    <div className="text-[10px] font-mono-tabular font-semibold uppercase tracking-wider text-[#1C4B3D]">
                      Maximum Sovereign Provision
                    </div>
                    <div className="font-mono-tabular text-2xl font-bold text-[#151E1B] tracking-tight mt-0.5">
                      {currentDossier.ceiling}
                    </div>
                    <div className="text-xs text-[#50615B] mt-1 leading-normal">
                      {currentDossier.focus}
                    </div>
                  </div>

                  {/* Plain Language Criteria */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#384A44] flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#1C4B3D]" />
                      <span>Synthesized Eligibility Criteria</span>
                    </div>
                    <p className="text-xs text-[#50615B] leading-relaxed pl-5 bg-[#FAF8F5] p-3 rounded-lg border border-[#E8E3D7]">
                      {currentDossier.eligibilitySummary}
                    </p>
                  </div>

                  {/* Required Documents Checklist Preview */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#384A44] flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5 text-[#B85D19]" />
                      <span>Prerequisite Filing Checklist</span>
                    </div>
                    <div className="grid grid-cols-1 gap-1.5 text-xs text-[#50615B]">
                      {currentDossier.documents.map((doc, i) => (
                        <div key={i} className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-[#FAF8F5] border border-[#E8E3D7]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#1C4B3D]" />
                          <span className="font-medium text-[#25332E]">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-2">
                    <Link to={`/scheme/${currentDossier.id}`} className="block">
                      <Button variant="outline" size="sm" className="w-full justify-between hover:bg-[#1C4B3D] hover:text-white hover:border-[#1C4B3D]">
                        <span>Review Full Official Protocol</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Sovereign Ministries Strip */}
      <section className="py-6 border-b border-[#E8E3D7] bg-[#F4F1EA]/60 text-xs text-[#50615B]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="font-semibold uppercase tracking-wider text-[#384A44] shrink-0">
              Active Sovereign Authorities:
            </span>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium text-[#50615B]">
              <span className="flex items-center gap-1.5">
                <Landmark className="h-3.5 w-3.5 text-[#1C4B3D]" /> DPIIT Startup India
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5 text-[#1C4B3D]" /> Ministry of MSME
              </span>
              <span className="flex items-center gap-1.5">
                <Coins className="h-3.5 w-3.5 text-[#1C4B3D]" /> CGTMSE &amp; SIDBI
              </span>
              <span className="flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5 text-[#1C4B3D]" /> Ministry of Electronics (MeitY)
              </span>
              <span className="flex items-center gap-1.5">
                <FileCheck className="h-3.5 w-3.5 text-[#1C4B3D]" /> Department of Financial Services
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Editorial Section: The Problem & The Solution */}
      <section className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E8E3D7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 text-left">
            <Badge variant="ministry" className="mb-3">
              The Sovereign Maze Decoded
            </Badge>
            <h2 className="font-serif-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#151E1B] tracking-tight leading-tight">
              Why government support frequently goes unclaimed by legitimate enterprises.
            </h2>
            <p className="text-[#50615B] text-base sm:text-lg mt-4 leading-relaxed">
              India's industrial and startup policies are among the world's most generous, but discovering which scheme matches your exact constitution, stage, and turnover is an administrative hurdle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            
            {/* The Old Way */}
            <div className="rounded-2xl border border-[#DFD9CC] bg-[#F4F1EA]/70 p-8 space-y-6 text-left">
              <div className="flex items-center justify-between pb-4 border-b border-[#DFD9CC]">
                <span className="text-xs font-mono-tabular uppercase tracking-wider font-bold text-[#7C8B86]">
                  Conventional Bureaucracy
                </span>
                <span className="rounded bg-[#EAE5DC] px-2 py-0.5 text-[10px] font-bold text-[#6D7F78]">
                  Scattered Portals
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-[#DFD9CC] text-[#7C8B86] flex items-center justify-center text-xs font-bold font-mono">✕</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#25332E]">Dense Gazette Notifications</h4>
                    <p className="text-xs text-[#6D7F78] mt-1 leading-relaxed">
                      Schemes are published as 40-page administrative orders filled with legal terminology and circular references.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-[#DFD9CC] text-[#7C8B86] flex items-center justify-center text-xs font-bold font-mono">✕</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#25332E]">Dispersed Across 20+ Portals</h4>
                    <p className="text-xs text-[#6D7F78] mt-1 leading-relaxed">
                      DPIIT, MSME Sambandh, Udyam, SIDBI, and individual state portals operate in departmental silos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-[#DFD9CC] text-[#7C8B86] flex items-center justify-center text-xs font-bold font-mono">✕</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#25332E]">Unclear Prerequisite Documentation</h4>
                    <p className="text-xs text-[#6D7F78] mt-1 leading-relaxed">
                      Founders only discover missing certifications or auditor approvals after weeks of back-and-forth bank visits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* The SchemeWise Standard */}
            <div className="rounded-2xl border border-[#BFDBD0] bg-white p-8 space-y-6 shadow-sm text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 h-1.5 w-full bg-[#1C4B3D]" />
              
              <div className="flex items-center justify-between pb-4 border-b border-[#E8E3D7]">
                <span className="text-xs font-mono-tabular uppercase tracking-wider font-bold text-[#1C4B3D]">
                  The SchemeWise Standard
                </span>
                <span className="rounded bg-[#F1F6F4] px-2 py-0.5 text-[10px] font-bold text-[#1C4B3D] border border-[#BFDBD0]">
                  Structured Intelligence
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-[#1C4B3D] text-[#FAF8F5] flex items-center justify-center text-xs font-bold">✓</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#151E1B]">Plain-Language Synthesis</h4>
                    <p className="text-xs text-[#50615B] mt-1 leading-relaxed">
                      Every policy is deconstructed into: Who is eligible, what financial relief is guaranteed, and how to file.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-[#1C4B3D] text-[#FAF8F5] flex items-center justify-center text-xs font-bold">✓</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#151E1B]">Deterministic Profile Matching</h4>
                    <p className="text-xs text-[#50615B] mt-1 leading-relaxed">
                      Input your industry, legal structure (Pvt Ltd, LLP, MSME), stage, and state to filter out 90% of irrelevant noise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-[#1C4B3D] text-[#FAF8F5] flex items-center justify-center text-xs font-bold">✓</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#151E1B]">Turnkey Filing Checklists</h4>
                    <p className="text-xs text-[#50615B] mt-1 leading-relaxed">
                      Assemble all mandated documents (Udyam, DPIIT, CA certifications, projections) before initiating official applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Curated Capital Categories */}
      <section className="py-20 md:py-28 bg-[#F4F1EA]/50 border-b border-[#E8E3D7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 text-left">
            <div>
              <span className="text-xs font-mono-tabular uppercase tracking-wider font-bold text-[#1C4B3D]">
                Policy Domains
              </span>
              <h2 className="font-serif-headline text-3xl sm:text-4xl font-bold text-[#151E1B] tracking-tight mt-1">
                Structured support across every enterprise stage.
              </h2>
            </div>
            <Link to="/explore">
              <Button variant="outline" size="sm">
                <span>View All Schemes</span>
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            <div className="card-ledger p-6 rounded-xl space-y-3">
              <div className="h-10 w-10 rounded-lg bg-[#F1F6F4] text-[#1C4B3D] border border-[#BFDBD0] flex items-center justify-center">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-serif-headline text-lg font-bold text-[#151E1B]">Early Seed Grants</h3>
              <p className="text-xs text-[#50615B] leading-relaxed">
                Non-dilutive proof-of-concept capital, prototype testing, and incubator assistance for recognized startups.
              </p>
              <div className="pt-2 text-[11px] font-mono-tabular font-semibold text-[#1C4B3D]">
                SISFS • NIDHI-PRAYAS • BIG
              </div>
            </div>

            <div className="card-ledger p-6 rounded-xl space-y-3">
              <div className="h-10 w-10 rounded-lg bg-[#F1F6F4] text-[#1C4B3D] border border-[#BFDBD0] flex items-center justify-center">
                <Coins className="h-5 w-5" />
              </div>
              <h3 className="font-serif-headline text-lg font-bold text-[#151E1B]">Collateral-Free Debt</h3>
              <p className="text-xs text-[#50615B] leading-relaxed">
                Institutional credit backed by sovereign guarantee trusts without requiring hypothecation of personal assets.
              </p>
              <div className="pt-2 text-[11px] font-mono-tabular font-semibold text-[#1C4B3D]">
                CGTMSE • PM Mudra • Stand-Up India
              </div>
            </div>

            <div className="card-ledger p-6 rounded-xl space-y-3">
              <div className="h-10 w-10 rounded-lg bg-[#F1F6F4] text-[#1C4B3D] border border-[#BFDBD0] flex items-center justify-center">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="font-serif-headline text-lg font-bold text-[#151E1B]">Technology Upgrades</h3>
              <p className="text-xs text-[#50615B] leading-relaxed">
                Capital subsidies for modern plant machinery, energy efficiency, ZED certification, and patents.
              </p>
              <div className="pt-2 text-[11px] font-mono-tabular font-semibold text-[#1C4B3D]">
                ZED Scheme • CLCSS • Design MSME
              </div>
            </div>

            <div className="card-ledger p-6 rounded-xl space-y-3">
              <div className="h-10 w-10 rounded-lg bg-[#F1F6F4] text-[#1C4B3D] border border-[#BFDBD0] flex items-center justify-center">
                <Building2 className="h-5 w-5" />
              </div>
              <h3 className="font-serif-headline text-lg font-bold text-[#151E1B]">Industrial Subsidies</h3>
              <p className="text-xs text-[#50615B] leading-relaxed">
                Production-linked incentives, power tariff reimbursements, and export incentives for manufacturers.
              </p>
              <div className="pt-2 text-[11px] font-mono-tabular font-semibold text-[#1C4B3D]">
                PLI Scheme • PMEGP • RoDTEP
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Dignified Institutional Call to Action */}
      <section className="py-20 md:py-24 bg-[#111A16] text-[#FAF8F5] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-[#BFDBD0]">
              <ShieldCheck className="h-3.5 w-3.5 text-[#E4B594]" />
              <span>Confidential • Zero Signup Required • 100% Free</span>
            </div>

            <h2 className="font-serif-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Begin your sovereign scheme diagnostic today.
            </h2>

            <p className="text-sm sm:text-base text-[#BFDBD0] leading-relaxed max-w-xl mx-auto">
              Answer 4 short questions about your business structure, turnover, and capital requirements to uncover relevant government support.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/find" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-[#FAF8F5] text-[#111A16] hover:bg-white border-0 font-bold shadow-lg">
                  <span>Start Eligibility Diagnostic</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/explore" className="w-full sm:w-auto">
                <Button size="lg" variant="ghost" className="w-full sm:w-auto text-[#BFDBD0] hover:text-white hover:bg-white/10 border border-white/20">
                  <span>Explore All Schemes</span>
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
