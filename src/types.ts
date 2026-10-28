export interface Scheme {
  id: string;
  schemeName: string;
  governmentLevel: 'Central' | 'State';
  ministry: string;
  description: string;
  shortDescription: string;
  category: string[]; // e.g., 'Funding', 'Subsidy', 'Startup Support'
  industries: string[];
  businessTypes: string[];
  businessStages: string[];
  states: string[]; // 'All' or specific states
  turnoverLimits?: { min?: number; max?: number }; // in Crores
  employeeLimits?: { min?: number; max?: number };
  benefits: { title: string; description: string }[];
  eligibility: { official: string[]; simple: string[] };
  documents: string[];
  applicationSteps: string[];
  officialWebsite: string;
  tags: string[];
}

export interface BusinessProfile {
  businessName: string;
  businessType: string;
  industry: string;
  businessStage: string;
  annualTurnover: string;
  state: string;
  city: string;
  requirements: string[];
}
