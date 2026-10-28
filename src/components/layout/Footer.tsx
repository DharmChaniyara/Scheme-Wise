import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ExternalLink } from 'lucide-react';

export function Footer() {
  const officialPortals = [
    { name: 'Startup India (DPIIT)', url: 'https://www.startupindia.gov.in/' },
    { name: 'Udyam Registration Portal', url: 'https://udyamregistration.gov.in/' },
    { name: 'CGTMSE Credit Guarantee', url: 'https://www.cgtmse.in/' },
    { name: 'National Portal of India', url: 'https://www.india.gov.in/' },
    { name: 'SIDBI Venture & Credit', url: 'https://www.sidbi.in/' }
  ];

  return (
    <footer className="border-t border-[#E8E3D7] bg-[#F4F1EA] pt-14 pb-10 text-[#50615B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#DFD9CC]">
          
          {/* Column 1: Brand & Purpose */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#1C4B3D] text-[#FAF8F5]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <span className="font-serif-headline text-lg font-bold tracking-tight text-[#151E1B]">
                SchemeWise
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#50615B] max-w-md">
              An independent intelligence ledger decoding sovereign grants, credit guarantees, and industrial subsidies for Indian enterprises, MSMEs, and early-stage founders.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1C4B3D]">
              <ShieldCheck className="h-4 w-4 text-[#1C4B3D]" />
              <span>Independent Public Research & Policy Synthesis</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#151E1B]">
              Platform Index
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#1C4B3D] transition-colors">Overview</Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-[#1C4B3D] transition-colors">All Sovereign Schemes</Link>
              </li>
              <li>
                <Link to="/find" className="hover:text-[#1C4B3D] transition-colors">Eligibility Diagnostic</Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-[#1C4B3D] transition-colors">Enterprise Dashboard</Link>
              </li>
              <li>
                <Link to="/saved" className="hover:text-[#1C4B3D] transition-colors">Saved Application Checklists</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Government Portals Reference */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#151E1B]">
              Sovereign Apex Portals
            </h4>
            <ul className="space-y-2 text-xs">
              {officialPortals.map((portal) => (
                <li key={portal.name}>
                  <a 
                    href={portal.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#50615B] hover:text-[#1C4B3D] transition-colors"
                  >
                    <span>{portal.name}</span>
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 space-y-4">
          <div className="rounded-xl border border-[#DFD9CC] bg-white/60 p-4 text-xs leading-relaxed text-[#6D7F78]">
            <strong className="text-[#25332E] font-semibold">Statutory Notice: </strong>
            SchemeWise is an independent discovery and advisory research index. It is not affiliated with, authorized by, or an agency of the Government of India or any state government. Scheme terms, allocation guidelines, and eligibility requirements are governed exclusively by official gazette notifications. All applications must be submitted directly through verified government portals.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7C8B86]">
            <p>
              &copy; {new Date().getFullYear()} SchemeWise Ledger. Designed for Indian founders and industrial operators.
            </p>
            <p className="font-mono-tabular">
              Vite • React 19 • WCAG AA
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
