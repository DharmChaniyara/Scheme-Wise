import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, Home, Bookmark, LayoutDashboard, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useAppContext } from '../../context/AppContext';

export function Navbar() {
  const location = useLocation();
  const { savedSchemeIds } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Explore Schemes', path: '/explore', icon: Compass },
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { 
      name: 'Saved', 
      path: '/saved', 
      icon: Bookmark, 
      count: savedSchemeIds.length > 0 ? savedSchemeIds.length : undefined 
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E8E3D7] bg-[#FAF8F5]/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand identity */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1C4B3D] text-[#FAF8F5] shadow-[0_1px_3px_rgba(28,75,61,0.2)] transition-transform duration-200 group-hover:scale-105">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-serif-headline text-xl font-bold tracking-tight text-[#151E1B]">
                SchemeWise
              </span>
              <span className="hidden sm:inline-block rounded px-1.5 py-0.5 text-[9px] font-mono-tabular font-semibold uppercase tracking-wider bg-[#F1F6F4] text-[#1C4B3D] border border-[#BFDBD0]">
                MSME • Startup
              </span>
            </div>
            <span className="text-[10px] font-medium tracking-wide text-[#7C8B86] -mt-1 hidden sm:block">
              Sovereign Enterprise Ledger
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 border border-[#E8E3D7] bg-white/70 px-2 py-1 rounded-xl shadow-xs">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150",
                  isActive 
                    ? "bg-[#1C4B3D] text-[#FAF8F5] shadow-xs" 
                    : "text-[#50615B] hover:text-[#151E1B] hover:bg-[#F4F1EA]"
                )}
              >
                <span>{item.name}</span>
                {item.count !== undefined && (
                  <span className={cn(
                    "ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-mono-tabular font-bold",
                    isActive ? "bg-white/20 text-white" : "bg-[#F1F6F4] text-[#1C4B3D] border border-[#BFDBD0]"
                  )}>
                    {item.count}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          <Link 
            to="/find" 
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-[#1C4B3D] px-4 py-2 text-xs font-semibold text-[#FAF8F5] shadow-[0_1px_2px_rgba(0,0,0,0.08),0_2px_6px_rgba(28,75,61,0.2)] hover:bg-[#153C31] transition-all duration-150 active:translate-y-[1px]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E4B594]" />
            <span>Eligibility Check</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </Link>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl border border-[#D8D2C4] bg-white text-[#151E1B] hover:bg-[#FAF8F5] transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8E3D7] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors",
                    isActive
                      ? "bg-[#1C4B3D] text-[#FAF8F5]"
                      : "text-[#25332E] hover:bg-white border border-transparent hover:border-[#E8E3D7]"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </div>
                  {item.count !== undefined && (
                    <span className={cn(
                      "px-2 py-0.5 rounded-full text-xs font-mono-tabular font-bold",
                      isActive ? "bg-white/20 text-white" : "bg-[#F1F6F4] text-[#1C4B3D]"
                    )}>
                      {item.count}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E8E3D7]">
            <Link
              to="/find"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1C4B3D] px-4 py-3 text-sm font-semibold text-[#FAF8F5] shadow-sm hover:bg-[#153C31]"
            >
              <Sparkles className="w-4 h-4 text-[#E4B594]" />
              <span>Run Eligibility Diagnostic</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
