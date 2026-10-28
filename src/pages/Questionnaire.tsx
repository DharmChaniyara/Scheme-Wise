import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check, Sparkles, Building, Briefcase, MapPin, Target } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { TextInput } from '../components/ui/TextInput';
import { Select } from '../components/ui/Select';
import { CheckboxCard } from '../components/ui/CheckboxCard';
import { Badge } from '../components/ui/Badge';
import { useAppContext } from '../context/AppContext';
import { BusinessProfile } from '../types';

const steps = [
  { id: 'basics', title: 'Legal Constitution', icon: Building, desc: 'Identity & Registration' },
  { id: 'industry', title: 'Industry & Maturity', icon: Briefcase, desc: 'Sector & Operational Stage' },
  { id: 'location', title: 'Jurisdiction & Scale', icon: MapPin, desc: 'State & Fiscal Turnover' },
  { id: 'needs', title: 'Capital Requirements', icon: Target, desc: 'Grants, Debt & Subsidies' },
];

export function Questionnaire() {
  const navigate = useNavigate();
  const { profile, setProfile } = useAppContext();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<BusinessProfile>>(profile || {
    businessName: '',
    businessType: '',
    industry: '',
    businessStage: '',
    annualTurnover: '',
    state: '',
    city: '',
    requirements: []
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateForm = (key: keyof BusinessProfile, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: '' }));
  };

  const toggleRequirement = (req: string) => {
    const reqs = formData.requirements || [];
    if (reqs.includes(req)) {
      updateForm('requirements', reqs.filter(r => r !== req));
    } else {
      updateForm('requirements', [...reqs, req]);
    }
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    if (currentStep === 0) {
      if (!formData.businessName || formData.businessName.trim().length === 0) {
        newErrors.businessName = 'Enterprise or trading name is required';
      }
      if (!formData.businessType) {
        newErrors.businessType = 'Please select your legal entity structure';
      }
    } else if (currentStep === 1) {
      if (!formData.industry) {
        newErrors.industry = 'Please select your operating industry domain';
      }
      if (!formData.businessStage) {
        newErrors.businessStage = 'Please indicate current business maturity';
      }
    } else if (currentStep === 2) {
      if (!formData.state) {
        newErrors.state = 'Please designate your registered state';
      }
      if (!formData.annualTurnover) {
        newErrors.annualTurnover = 'Please designate annual turnover band';
      }
    } else if (currentStep === 3) {
      if (!formData.requirements || formData.requirements.length === 0) {
        newErrors.requirements = 'Please select at least one capital or policy support requirement';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const submitForm = () => {
    if (validateStep()) {
      setProfile(formData as BusinessProfile);
      navigate('/recommendations');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-14 max-w-3xl flex-1 flex flex-col text-left">
      
      {/* Header */}
      <div className="mb-10 text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 mx-auto">
          <Badge variant="ministry">Diagnostic Protocol</Badge>
          <span className="text-xs font-mono-tabular text-[#7C8B86]">Step {currentStep + 1} of {steps.length}</span>
        </div>
        <h1 className="font-serif-headline text-3xl sm:text-4xl font-bold text-[#151E1B] tracking-tight">
          Enterprise Eligibility Diagnostic
        </h1>
        <p className="text-xs sm:text-sm text-[#50615B] max-w-xl mx-auto leading-relaxed">
          Provide your corporate constitution and operating metrics to cross-reference against central and state policy frameworks.
        </p>
      </div>

      {/* Stepper Timeline */}
      <div className="mb-10">
        <div className="grid grid-cols-4 gap-2 sm:gap-4 relative">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;
            return (
              <div key={step.id} className="flex flex-col items-center text-center">
                <div className={`h-1 w-full mb-3 rounded-full transition-colors duration-300 ${
                  isCompleted ? 'bg-[#1C4B3D]' :
                  isCurrent ? 'bg-[#1C4B3D]' : 'bg-[#E8E3D7]'
                }`} />
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono-tabular font-bold transition-all ${
                  isCompleted ? 'bg-[#1C4B3D] text-[#FAF8F5]' :
                  isCurrent ? 'bg-white border-2 border-[#1C4B3D] text-[#1C4B3D] shadow-xs' :
                  'bg-[#F4F1EA] text-[#8E9F98] border border-[#DFD9CC]'
                }`}>
                  {isCompleted ? <Check className="w-4 h-4 stroke-[2.5]" /> : index + 1}
                </div>
                <span className={`text-[11px] font-semibold mt-2 leading-tight hidden sm:block ${
                  isCurrent ? 'text-[#1C4B3D]' : 'text-[#6D7F78]'
                }`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Card Container */}
      <div className="card-ledger rounded-2xl p-6 sm:p-10 border border-[#DFD9CC] bg-white shadow-sm flex-1 flex flex-col">
        
        <div className="flex-1 space-y-6">
          
          {/* STEP 0: BASICS */}
          {currentStep === 0 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-[#E8E3D7] pb-4">
                <span className="text-[10px] font-mono-tabular uppercase tracking-wider font-bold text-[#1C4B3D]">
                  Module 01 / 04
                </span>
                <h2 className="font-serif-headline text-2xl font-bold text-[#151E1B] mt-0.5">
                  Corporate Identity &amp; Constitution
                </h2>
                <p className="text-xs text-[#50615B] mt-1">
                  Government schemes strictly differentiate between unregistered enterprises, recognized startups, and MSMEs.
                </p>
              </div>

              <TextInput 
                label="Enterprise or Trading Name"
                placeholder="e.g. Apex Industrial Components LLP"
                value={formData.businessName}
                onChange={e => updateForm('businessName', e.target.value)}
                error={errors.businessName}
                hint="Used strictly to contextualize your personalized recommendation docket."
              />

              <Select 
                label="Legal Entity Constitution"
                value={formData.businessType}
                onChange={e => updateForm('businessType', e.target.value)}
                error={errors.businessType}
                hint="Entity type dictates qualification under DPIIT, CGTMSE, and Mudra guidelines."
                options={[
                  { value: 'Startup', label: 'Startup (DPIIT Recognized Certificate holder)' },
                  { value: 'MSME', label: 'Registered MSME (Udyam Certificate holder)' },
                  { value: 'Private Limited Company', label: 'Private Limited Company (MCA Registered)' },
                  { value: 'LLP', label: 'Limited Liability Partnership (LLP)' },
                  { value: 'Partnership', label: 'Registered Partnership Firm' },
                  { value: 'Sole Proprietorship', label: 'Sole Proprietorship / Individual Enterprise' },
                  { value: 'Other', label: 'Early Concept / Not Yet Legally Incorporated' }
                ]}
              />
            </div>
          )}

          {/* STEP 1: INDUSTRY & STAGE */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-[#E8E3D7] pb-4">
                <span className="text-[10px] font-mono-tabular uppercase tracking-wider font-bold text-[#1C4B3D]">
                  Module 02 / 04
                </span>
                <h2 className="font-serif-headline text-2xl font-bold text-[#151E1B] mt-0.5">
                  Sectoral Domain &amp; Operational Stage
                </h2>
                <p className="text-xs text-[#50615B] mt-1">
                  Policies such as SISFS cater to validation, while CGTMSE and PLI support commercial expansion.
                </p>
              </div>

              <Select 
                label="Primary Industry Sector"
                value={formData.industry}
                onChange={e => updateForm('industry', e.target.value)}
                error={errors.industry}
                options={[
                  { value: 'Technology', label: 'Technology / Software / Deep Tech' },
                  { value: 'Manufacturing', label: 'Manufacturing & Heavy Engineering' },
                  { value: 'Agriculture', label: 'Agriculture & Agri-Tech Innovations' },
                  { value: 'Food Processing', label: 'Food Processing & Cold Chain (MoFPI)' },
                  { value: 'Healthcare', label: 'Healthcare, MedTech & Pharmaceuticals' },
                  { value: 'Renewable Energy', label: 'Renewable Energy, Solar & Cleantech' },
                  { value: 'Education', label: 'Education & Educational Technology' },
                  { value: 'Retail', label: 'Retail, Wholesale & E-Commerce' },
                  { value: 'Textiles', label: 'Textiles, Handlooms & Apparel' },
                  { value: 'Handicrafts', label: 'Handicrafts, Artisans & Rural Arts' },
                  { value: 'Services', label: 'Commercial & Professional Services' },
                  { value: 'Other', label: 'Other Industrial Sectors' }
                ]}
              />

              <Select 
                label="Current Operational Maturity"
                value={formData.businessStage}
                onChange={e => updateForm('businessStage', e.target.value)}
                error={errors.businessStage}
                options={[
                  { value: 'Idea Stage', label: 'Idea / Validation (Pre-incorporation / Proof of Concept)' },
                  { value: 'Early Stage', label: 'Early Stage (Prototype developed, pre-revenue / initial trials)' },
                  { value: 'Operating', label: 'Active Operations (Commercial product launched, regular billing)' },
                  { value: 'Growth Stage', label: 'Expansion & Scale (Established positive cashflow, plant expansion)' }
                ]}
              />
            </div>
          )}

          {/* STEP 2: LOCATION & FINANCE */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-[#E8E3D7] pb-4">
                <span className="text-[10px] font-mono-tabular uppercase tracking-wider font-bold text-[#1C4B3D]">
                  Module 03 / 04
                </span>
                <h2 className="font-serif-headline text-2xl font-bold text-[#151E1B] mt-0.5">
                  Jurisdiction &amp; Financial Turnover
                </h2>
                <p className="text-xs text-[#50615B] mt-1">
                  State-specific industrial policies offer localized stamp duty rebates, power tariff subsidies, and capital incentives.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Select 
                  label="Registered State / Territory"
                  value={formData.state}
                  onChange={e => updateForm('state', e.target.value)}
                  error={errors.state}
                  options={[
                    { value: 'Maharashtra', label: 'Maharashtra' },
                    { value: 'Karnataka', label: 'Karnataka' },
                    { value: 'Delhi', label: 'Delhi NCR' },
                    { value: 'Gujarat', label: 'Gujarat' },
                    { value: 'Tamil Nadu', label: 'Tamil Nadu' },
                    { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
                    { value: 'Telangana', label: 'Telangana' },
                    { value: 'Other', label: 'Other Indian State / UT' }
                  ]}
                />
                
                <TextInput 
                  label="Registered City (Optional)"
                  placeholder="e.g. Pune / Bengaluru"
                  value={formData.city}
                  onChange={e => updateForm('city', e.target.value)}
                />
              </div>

              <Select 
                label="Annual Turnover Band (Last Financial Year)"
                value={formData.annualTurnover}
                onChange={e => updateForm('annualTurnover', e.target.value)}
                error={errors.annualTurnover}
                hint="MSME categorization under MSMED Act relies strictly on annual turnover & plant investment."
                options={[
                  { value: 'Pre-revenue', label: 'Pre-revenue (Zero operational turnover)' },
                  { value: 'Below ₹10 lakh', label: 'Micro Tier I: Below ₹10 Lakhs' },
                  { value: '₹10 lakh – ₹50 lakh', label: 'Micro Tier II: ₹10 Lakhs to ₹50 Lakhs' },
                  { value: '₹50 lakh – ₹1 crore', label: 'Small Tier I: ₹50 Lakhs to ₹1 Crore' },
                  { value: '₹1 crore – ₹5 crore', label: 'Small Tier II: ₹1 Crore to ₹5 Crores' },
                  { value: 'Above ₹5 crore', label: 'Medium Tier: Above ₹5 Crores' }
                ]}
              />
            </div>
          )}

          {/* STEP 3: CAPITAL REQUIREMENTS */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-[#E8E3D7] pb-4">
                <span className="text-[10px] font-mono-tabular uppercase tracking-wider font-bold text-[#1C4B3D]">
                  Module 04 / 04
                </span>
                <h2 className="font-serif-headline text-2xl font-bold text-[#151E1B] mt-0.5">
                  Target Sovereign Support Modalities
                </h2>
                <p className="text-xs text-[#50615B] mt-1">
                  Select all specific categories of government assistance you are actively seeking.
                </p>
                {errors.requirements && (
                  <p className="text-xs font-semibold text-[#C53030] mt-2 bg-[#FCF2F2] p-2.5 rounded-lg border border-[#F5C2C2]">
                    {errors.requirements}
                  </p>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: 'Funding', desc: 'Proof-of-concept seed grants & incubator allocations' },
                  { title: 'Business Loan', desc: 'Collateral-free credit backed by sovereign guarantee' },
                  { title: 'Subsidy', desc: 'Capital machinery subsidy & interest subvention' },
                  { title: 'Tax Benefits', desc: 'Section 80-IAC tax holiday & angel tax exemptions' },
                  { title: 'Startup Support', desc: 'Fast-track patent rebates & public tender exemptions' },
                  { title: 'Women Entrepreneur Support', desc: 'Higher guarantee cover & dedicated margin concessions' },
                  { title: 'Technology Upgrade', desc: 'ZED quality certification & clean technology incentives' },
                  { title: 'Skill Development', desc: 'Workforce training subsidies & apprentice support' },
                  { title: 'Market Access', desc: 'GeM public procurement priority & trade fair subsidies' },
                  { title: 'Other', desc: 'General state industrial park & infrastructure support' }
                ].map(item => (
                  <CheckboxCard 
                    key={item.title}
                    label={item.title}
                    description={item.desc}
                    checked={formData.requirements?.includes(item.title) || false}
                    onChange={() => toggleRequirement(item.title)}
                  />
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Action Controls Footer */}
        <div className="mt-10 pt-6 border-t border-[#E8E3D7] flex items-center justify-between">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={prevStep}
            disabled={currentStep === 0}
            className={currentStep === 0 ? 'invisible' : 'text-[#50615B]'}
          >
            <ChevronLeft className="mr-1.5 h-4 w-4" />
            <span>Previous Step</span>
          </Button>
          
          {currentStep < steps.length - 1 ? (
            <Button onClick={nextStep} size="md">
              <span>Save &amp; Continue</span>
              <ChevronRight className="ml-1.5 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={submitForm} size="md" className="bg-[#1C4B3D] hover:bg-[#153C31] text-white">
              <Sparkles className="mr-2 h-4 w-4 text-[#E4B594]" />
              <span>Generate Diagnostic Docket</span>
            </Button>
          )}
        </div>

      </div>

    </div>
  );
}
