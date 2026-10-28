import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X, RotateCcw, Filter } from 'lucide-react';
import { schemesData } from '../data/schemes';
import { SchemeCard } from '../components/SchemeCard';
import { Select } from '../components/ui/Select';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export function Explore() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [stageFilter, setStageFilter] = useState('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const quickCategories = [
    { label: 'All Categories', value: '' },
    { label: 'Funding & Grants', value: 'Funding' },
    { label: 'Collateral-Free Loans', value: 'Business Loan' },
    { label: 'Capital Subsidies', value: 'Subsidy' },
    { label: 'Startup Programs', value: 'Startup Support' },
    { label: 'Women Founders', value: 'Women Entrepreneur Support' }
  ];

  const filteredSchemes = useMemo(() => {
    return schemesData.filter(scheme => {
      // Search text match
      const matchesSearch = 
        search === '' || 
        scheme.schemeName.toLowerCase().includes(search.toLowerCase()) ||
        scheme.ministry.toLowerCase().includes(search.toLowerCase()) ||
        scheme.description.toLowerCase().includes(search.toLowerCase()) ||
        scheme.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));

      // Category match
      const matchesCategory = categoryFilter === '' || scheme.category.includes(categoryFilter);
      
      // Industry match
      const matchesIndustry = industryFilter === '' || scheme.industries.includes(industryFilter) || scheme.industries.includes('All');
      
      // Stage match
      const matchesStage = stageFilter === '' || scheme.businessStages.includes(stageFilter) || scheme.businessStages.includes('All');

      return matchesSearch && matchesCategory && matchesIndustry && matchesStage;
    });
  }, [search, categoryFilter, industryFilter, stageFilter]);

  const clearFilters = () => {
    setSearch('');
    setCategoryFilter('');
    setIndustryFilter('');
    setStageFilter('');
  };

  const hasActiveFilters = search !== '' || categoryFilter !== '' || industryFilter !== '' || stageFilter !== '';

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-1 flex flex-col text-left">
      
      {/* Editorial Header */}
      <div className="mb-8 border-b border-[#E8E3D7] pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="ministry">Central &amp; State Repositories</Badge>
          <span className="text-xs font-mono-tabular text-[#7C8B86]">
            Updated for FY 2026-27
          </span>
        </div>
        <h1 className="font-serif-headline text-3xl sm:text-4xl font-bold text-[#151E1B] tracking-tight">
          Sovereign Scheme Registry
        </h1>
        <p className="text-[#50615B] text-sm sm:text-base mt-1 max-w-2xl leading-relaxed">
          Search, filter, and inspect verified industrial assistance programs, credit guarantees, and early-stage capital funds.
        </p>
      </div>

      {/* Quick Category Selector Strip */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
        {quickCategories.map((cat) => {
          const isActive = categoryFilter === cat.value;
          return (
            <button
              key={cat.label}
              type="button"
              onClick={() => setCategoryFilter(cat.value)}
              className={`shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#1C4B3D] text-[#FAF8F5] border-[#1C4B3D] shadow-xs'
                  : 'bg-white text-[#50615B] border-[#DFD9CC] hover:border-[#1C4B3D]/30 hover:bg-[#FAF8F5]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Main Layout: Filters Sidebar + Results */}
      <div className="flex flex-col lg:flex-row gap-8 flex-1">
        
        {/* Mobile Filters Toggle Button */}
        <div className="lg:hidden flex items-center justify-between pb-2 border-b border-[#E8E3D7]">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center gap-2 text-xs"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span>{mobileFiltersOpen ? 'Hide Filters' : 'Refine Filters'}</span>
            {hasActiveFilters && (
              <span className="h-2 w-2 rounded-full bg-[#1C4B3D]" />
            )}
          </Button>

          <span className="text-xs font-mono-tabular text-[#6D7F78]">
            <strong>{filteredSchemes.length}</strong> {filteredSchemes.length === 1 ? 'Scheme' : 'Schemes'}
          </span>
        </div>

        {/* Filters Sidebar */}
        <aside className={`w-full lg:w-72 shrink-0 space-y-6 ${mobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
          <div className="rounded-xl border border-[#DFD9CC] bg-white p-5 space-y-5 shadow-[0_1px_3px_rgba(18,24,22,0.03)]">
            
            <div className="flex items-center justify-between border-b border-[#E8E3D7] pb-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#151E1B]">
                <Filter className="h-4 w-4 text-[#1C4B3D]" />
                <span>Search &amp; Filter</span>
              </div>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-[11px] font-semibold text-[#B85D19] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Keyword Search Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#384A44]">
                Keyword or Ministry
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-[#8E9F98]" />
                <input 
                  type="text" 
                  placeholder="e.g. CGTMSE, DPIIT, subsidy..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 border border-[#D8D2C4] rounded-xl text-sm bg-white text-[#151E1B] placeholder:text-[#8E9F98] focus:outline-none focus:border-[#1C4B3D] focus:ring-2 focus:ring-[#1C4B3D]/20 transition-all"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch('')}
                    className="absolute right-2.5 top-2.5 text-[#8E9F98] hover:text-[#151E1B]"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <Select
              label="Primary Objective"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              options={[
                { value: '', label: 'All Objectives' },
                { value: 'Funding', label: 'Early-Stage Funding & Grants' },
                { value: 'Business Loan', label: 'Collateral-Free Debt & Credit' },
                { value: 'Subsidy', label: 'Capital & Interest Subsidies' },
                { value: 'Tax Benefits', label: 'Direct Tax & Duty Incentives' },
                { value: 'Startup Support', label: 'Startup India & Incubator Grants' },
                { value: 'Women Entrepreneur Support', label: 'Women Founder Incentives' }
              ]}
            />

            {/* Industry Filter */}
            <Select
              label="Industry Domain"
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
              options={[
                { value: '', label: 'All Industries' },
                { value: 'Technology', label: 'Technology / Deep Tech' },
                { value: 'Manufacturing', label: 'Industrial Manufacturing' },
                { value: 'Agriculture', label: 'Agri-Tech & Allied' },
                { value: 'Food Processing', label: 'Food Processing (MoFPI)' },
                { value: 'Healthcare', label: 'Healthcare & Pharma' },
                { value: 'Renewable Energy', label: 'Renewable & Cleantech' },
                { value: 'Services', label: 'Professional & Business Services' },
                { value: 'Retail', label: 'Retail & Domestic Trade' }
              ]}
            />

            {/* Stage Filter */}
            <Select
              label="Operating Stage"
              value={stageFilter}
              onChange={(e) => setStageFilter(e.target.value)}
              options={[
                { value: '', label: 'All Stages' },
                { value: 'Idea Stage', label: 'Concept / Pre-incorporation' },
                { value: 'Early Stage', label: 'Early Prototype / Pre-revenue' },
                { value: 'Operating', label: 'Commercial Operations' },
                { value: 'Growth Stage', label: 'Expansion & Scale' }
              ]}
            />

            {/* Active Filter Chips */}
            {hasActiveFilters && (
              <div className="pt-2 border-t border-[#E8E3D7]">
                <span className="text-[10px] font-mono-tabular font-bold uppercase tracking-wider text-[#7C8B86] block mb-2">
                  Active Filter Matrix
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {search && (
                    <span className="inline-flex items-center gap-1 rounded bg-[#F4F1EA] border border-[#DFD9CC] px-2 py-0.5 text-xs text-[#25332E]">
                      "{search}"
                      <X className="h-3 w-3 cursor-pointer hover:text-[#B85D19]" onClick={() => setSearch('')} />
                    </span>
                  )}
                  {categoryFilter && (
                    <span className="inline-flex items-center gap-1 rounded bg-[#F1F6F4] border border-[#BFDBD0] px-2 py-0.5 text-xs text-[#1C4B3D]">
                      {categoryFilter}
                      <X className="h-3 w-3 cursor-pointer hover:text-[#B85D19]" onClick={() => setCategoryFilter('')} />
                    </span>
                  )}
                  {industryFilter && (
                    <span className="inline-flex items-center gap-1 rounded bg-[#F4F1EA] border border-[#DFD9CC] px-2 py-0.5 text-xs text-[#25332E]">
                      {industryFilter}
                      <X className="h-3 w-3 cursor-pointer hover:text-[#B85D19]" onClick={() => setIndustryFilter('')} />
                    </span>
                  )}
                  {stageFilter && (
                    <span className="inline-flex items-center gap-1 rounded bg-[#F4F1EA] border border-[#DFD9CC] px-2 py-0.5 text-xs text-[#25332E]">
                      {stageFilter}
                      <X className="h-3 w-3 cursor-pointer hover:text-[#B85D19]" onClick={() => setStageFilter('')} />
                    </span>
                  )}
                </div>
              </div>
            )}

          </div>
        </aside>

        {/* Results Column */}
        <div className="flex-1">
          
          <div className="hidden lg:flex items-center justify-between mb-4 pb-2 border-b border-[#E8E3D7] text-xs font-mono-tabular text-[#6D7F78]">
            <span>
              Showing <strong className="text-[#151E1B]">{filteredSchemes.length}</strong> of {schemesData.length} Sovereign Assistance Policies
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-[#1C4B3D] hover:underline font-semibold cursor-pointer"
              >
                Clear all filters
              </button>
            )}
          </div>

          {filteredSchemes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredSchemes.map(scheme => (
                <div key={scheme.id} className="h-full">
                  <SchemeCard scheme={scheme} />
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#DFD9CC] bg-white p-12 text-center max-w-lg mx-auto my-8 space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4F1EA] text-[#50615B] border border-[#DFD9CC]">
                <Search className="h-6 w-6 text-[#7C8B86]" />
              </div>
              <h3 className="font-serif-headline text-xl font-bold text-[#151E1B]">
                No matching sovereign schemes found
              </h3>
              <p className="text-xs text-[#50615B] leading-relaxed">
                We couldn't find active programs matching your current filter combination. Try clearing your search term or broadening category filters.
              </p>
              <Button onClick={clearFilters} variant="outline" size="sm">
                <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
                <span>Reset All Filters</span>
              </Button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
