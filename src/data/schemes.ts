import { Scheme } from '../types';

export const schemesData: Scheme[] = [
  {
    id: 'startup-india-seed-fund',
    schemeName: 'Startup India Seed Fund Scheme (SISFS)',
    governmentLevel: 'Central',
    ministry: 'Department for Promotion of Industry and Internal Trade (DPIIT)',
    description: 'The Startup India Seed Fund Scheme (SISFS) aims to provide financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization.',
    shortDescription: 'Financial assistance for early-stage startups for proof of concept and prototype development.',
    category: ['Funding', 'Startup Support'],
    industries: ['Technology', 'Healthcare', 'Agriculture', 'Education', 'Renewable Energy', 'Food Processing', 'Other'],
    businessTypes: ['Startup', 'Private Limited Company', 'LLP', 'Partnership'],
    businessStages: ['Idea Stage', 'Early Stage', 'Operating'],
    states: ['All'],
    benefits: [
      { title: 'Grant for Validation', description: 'Up to ₹20 Lakhs as grant for validation of Proof of Concept, or prototype development, or product trials.' },
      { title: 'Investment for Commercialization', description: 'Up to ₹50 Lakhs of investment for market entry, commercialization, or scaling up through convertible debentures or debt or debt-linked instruments.' }
    ],
    eligibility: {
      official: [
        'A startup, recognized by DPIIT, incorporated not more than 2 years ago at the time of application.',
        'Must have a business idea to develop a product or a service with a market fit, viable commercialization, and scope of scaling.',
        'Should be using technology in its core product or service, or business model, or distribution model.',
        'Preference would be given to startups creating innovative solutions in sectors such as social impact, waste management, water management, financial inclusion, education, agriculture, food processing, biotechnology, healthcare, energy, mobility, defence, space, railways, oil and gas, textiles, etc.'
      ],
      simple: [
        'Recognized startup by DPIIT (under 2 years old).',
        'Have an innovative tech-enabled idea.',
        'Need funds for prototype or initial market entry.'
      ]
    },
    documents: [
      'DPIIT Recognition Certificate',
      'Certificate of Incorporation',
      'Pitch Deck / Business Plan',
      'Founders KYC'
    ],
    applicationSteps: [
      'Create an account on Startup India Portal',
      'Apply for DPIIT Recognition if not already done',
      'Navigate to the Seed Fund portal and click on Apply Now',
      'Select Incubators of your choice (up to 3)',
      'Fill in startup details and submit application'
    ],
    officialWebsite: 'https://seedfund.startupindia.gov.in/',
    tags: ['Seed Fund', 'DPIIT', 'Early Stage', 'Grant']
  },
  {
    id: 'cgtmse',
    schemeName: 'Credit Guarantee Scheme for Micro & Small Enterprises (CGTMSE)',
    governmentLevel: 'Central',
    ministry: 'Ministry of Micro, Small and Medium Enterprises',
    description: 'CGTMSE facilitates collateral-free credit to the micro and small enterprise sector. Both term loans and working capital facility up to ₹500 lakh are covered.',
    shortDescription: 'Collateral-free loans for MSMEs up to ₹5 crore.',
    category: ['Business Loan', 'MSME Support'],
    industries: ['Manufacturing', 'Services', 'Retail', 'Technology', 'Healthcare', 'Agriculture', 'Food Processing', 'Other'],
    businessTypes: ['MSME', 'Sole Proprietorship', 'Partnership', 'Private Limited Company', 'LLP'],
    businessStages: ['Operating', 'Growth Stage'],
    states: ['All'],
    benefits: [
      { title: 'Collateral-free loan', description: 'Credit facility up to ₹500 lakh without collateral or third-party guarantee.' },
      { title: 'High Guarantee Cover', description: 'Guarantee cover ranging from 75% to 85% of the sanctioned amount.' }
    ],
    eligibility: {
      official: [
        'New and existing Micro and Small Enterprises (MSEs) engaged in manufacturing or service activity.',
        'Retail trade and educational institutions are also eligible under specific guidelines.'
      ],
      simple: [
        'You are an active Micro or Small Enterprise (MSE).',
        'You need a business loan but lack collateral (like property) to pledge.'
      ]
    },
    documents: [
      'Udyam Registration Certificate',
      'Project Report / Business Plan',
      'Financial Statements / Bank Statements',
      'KYC of Promoters'
    ],
    applicationSteps: [
      'Prepare a viable business plan / project report',
      'Approach a Member Lending Institution (MLI) - most public and private banks',
      'Apply for a loan explicitly requesting CGTMSE coverage',
      'The bank will process the loan and apply to CGTMSE for guarantee cover'
    ],
    officialWebsite: 'https://www.cgtmse.in/',
    tags: ['Loan', 'Collateral Free', 'MSME', 'Credit']
  },
  {
    id: 'pm-mudra',
    schemeName: 'Pradhan Mantri Mudra Yojana (PMMY)',
    governmentLevel: 'Central',
    ministry: 'Ministry of Finance',
    description: 'PMMY provides loans up to ₹10 Lakh to non-corporate, non-farm small/micro enterprises. These loans are classified as MUDRA loans under Shishu, Kishore, and Tarun categories.',
    shortDescription: 'Micro-loans up to ₹10 Lakh for small business owners and vendors.',
    category: ['Business Loan'],
    industries: ['Retail', 'Services', 'Manufacturing', 'Food Processing', 'Handicrafts', 'Textiles', 'Other'],
    businessTypes: ['Sole Proprietorship', 'Partnership', 'MSME'],
    businessStages: ['Idea Stage', 'Early Stage', 'Operating'],
    states: ['All'],
    benefits: [
      { title: 'Shishu', description: 'Loans up to ₹50,000 for startups and new businesses.' },
      { title: 'Kishore', description: 'Loans above ₹50,000 and up to ₹5 Lakh for existing businesses.' },
      { title: 'Tarun', description: 'Loans above ₹5 Lakh and up to ₹10 Lakh for business expansion.' }
    ],
    eligibility: {
      official: [
        'Any Indian Citizen who has a business plan for a non-farm income generating activity such as manufacturing, processing, trading or service sector and whose credit need is less than ₹10 lakh can approach either a Bank, MFI, or NBFC.'
      ],
      simple: [
        'Indian citizen with a small business or plan.',
        'Need a loan under ₹10 lakh.',
        'Not engaged in corporate farming.'
      ]
    },
    documents: [
      'Identity Proof (Aadhaar/PAN/Voter ID)',
      'Proof of Business (Licenses, Registrations)',
      'Quotations of Machinery/Items to be purchased',
      'Passport size photographs'
    ],
    applicationSteps: [
      'Identify the loan category (Shishu, Kishore, Tarun)',
      'Collect necessary documents',
      'Visit nearest commercial or co-operative bank, or apply online on Udyamitra portal',
      'Fill application form and submit'
    ],
    officialWebsite: 'https://www.mudra.org.in/',
    tags: ['Mudra', 'Micro Finance', 'Small Loan']
  },
  {
    id: 'stand-up-india',
    schemeName: 'Stand-Up India Scheme',
    governmentLevel: 'Central',
    ministry: 'Ministry of Finance',
    description: 'Facilitates bank loans between ₹10 lakh and ₹1 Crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and at least one woman borrower per bank branch for setting up a greenfield enterprise.',
    shortDescription: 'Bank loans up to ₹1 Crore for women and SC/ST entrepreneurs.',
    category: ['Business Loan', 'Women Entrepreneur Support'],
    industries: ['Manufacturing', 'Services', 'Agriculture', 'Food Processing', 'Technology', 'Healthcare', 'Retail', 'Other'],
    businessTypes: ['Startup', 'MSME', 'Private Limited Company', 'Partnership', 'Sole Proprietorship', 'LLP'],
    businessStages: ['Idea Stage', 'Early Stage'],
    states: ['All'],
    benefits: [
      { title: 'Large Credit Access', description: 'Composite loan (inclusive of term loan and working capital) between ₹10 lakh and up to ₹100 lakh.' }
    ],
    eligibility: {
      official: [
        'SC/ST and/or woman entrepreneur, above 18 years of age.',
        'Loans under the scheme are available for only greenfield project.',
        'For non-individual enterprises, 51% of the shareholding and controlling stake should be held by either an SC/ST or Woman entrepreneur.',
        'Borrower should not be in default to any bank/financial institution.'
      ],
      simple: [
        'Woman OR SC/ST entrepreneur.',
        'Starting a brand new (greenfield) business.',
        'Majority ownership (51%+) by Woman or SC/ST.'
      ]
    },
    documents: [
      'Proof of Identity and Address',
      'Proof of Category (SC/ST Certificate if applicable)',
      'Business Plan / Project Report',
      'Incorporation Docs (if company/LLP)'
    ],
    applicationSteps: [
      'Access the Stand-Up India portal',
      'Register and answer a few short questions',
      'Select a preferred bank',
      'Submit the application online and follow up with the branch'
    ],
    officialWebsite: 'https://www.standupmitra.in/',
    tags: ['Women', 'SC/ST', 'Loan', 'Greenfield']
  },
  {
    id: 'pmegp',
    schemeName: "Prime Minister's Employment Generation Programme (PMEGP)",
    governmentLevel: 'Central',
    ministry: 'Ministry of Micro, Small and Medium Enterprises',
    description: 'A credit-linked subsidy program aimed at generating employment opportunities in rural as well as urban areas through setting up of new self-employment ventures/projects/micro enterprises.',
    shortDescription: 'Credit-linked subsidy scheme for setting up new micro-enterprises.',
    category: ['Subsidy', 'Business Loan', 'MSME Support'],
    industries: ['Manufacturing', 'Services', 'Handicrafts', 'Food Processing', 'Other'],
    businessTypes: ['Sole Proprietorship', 'Partnership', 'MSME'],
    businessStages: ['Idea Stage', 'Early Stage'],
    states: ['All'],
    benefits: [
      { title: 'High Subsidy Component', description: 'Margin money subsidy ranging from 15% to 35% of project cost depending on area (Urban/Rural) and category (General/Special).' },
      { title: 'Project Cost Support', description: 'Up to ₹50 Lakh for manufacturing and ₹20 Lakh for service sector.' }
    ],
    eligibility: {
      official: [
        'Any individual, above 18 years of age.',
        'At least VIII standard pass for projects costing above ₹10 lakh in manufacturing and ₹5 lakh in the service/business sector.',
        'Only new projects are considered for sanction under PMEGP.'
      ],
      simple: [
        'Setting up a new project (manufacturing or service).',
        'At least 18 years old.',
        'Passed 8th standard (for larger projects).'
      ]
    },
    documents: [
      'Aadhaar Card / PAN',
      'Caste Certificate (if claiming special category)',
      'Detailed Project Report (DPR)',
      'Education/Skill Certificate'
    ],
    applicationSteps: [
      'Apply online on the KVIC online portal',
      'Upload necessary documents',
      'Application goes to a Task Force Committee for selection',
      'Bank sanctions loan and KVIC releases the subsidy'
    ],
    officialWebsite: 'https://www.kviconline.gov.in/pmegpeportal/',
    tags: ['Subsidy', 'Rural', 'Urban', 'Employment']
  },
  {
    id: 'nsic-raw-material',
    schemeName: 'Raw Material Assistance Scheme',
    governmentLevel: 'Central',
    ministry: 'National Small Industries Corporation (NSIC)',
    description: 'Aims at helping MSMEs by way of financing the purchase of Raw Material (both indigenous & imported). This gives an opportunity to MSMEs to focus better on manufacturing quality products.',
    shortDescription: 'Financial assistance to MSMEs for purchasing raw materials.',
    category: ['Funding', 'Manufacturing Support', 'MSME Support'],
    industries: ['Manufacturing', 'Food Processing', 'Textiles'],
    businessTypes: ['MSME', 'Private Limited Company', 'Partnership', 'Sole Proprietorship'],
    businessStages: ['Operating', 'Growth Stage'],
    states: ['All'],
    benefits: [
      { title: 'Credit Facility', description: 'Financial assistance for procurement of Raw Material up to 180 days.' },
      { title: 'Bulk Discounts', description: 'Helps MSMEs avail economics of purchases like bulk discount, cash discount, etc.' }
    ],
    eligibility: {
      official: [
        'Entrepreneurs/ Micro and Small Enterprises having valid Udyam Registration.',
        'Should be in commercial production.',
        'Past financial performance should be satisfactory.'
      ],
      simple: [
        'You are an active manufacturing MSME.',
        'You need short-term funds to buy raw materials.'
      ]
    },
    documents: [
      'Udyam Registration Certificate',
      'Audited Financial Statements (last 3 years)',
      'Bank Sanction Letter',
      'Proforma Invoice of Raw Material'
    ],
    applicationSteps: [
      'Download application form from NSIC website',
      'Submit the filled form with documents to the nearest NSIC branch',
      'NSIC evaluates the request and limits are sanctioned against Bank Guarantee'
    ],
    officialWebsite: 'https://www.nsic.co.in/schemes/Raw-Material-Assistance.aspx',
    tags: ['Manufacturing', 'Raw Material', 'Credit']
  },
  {
    id: 'msme-zed',
    schemeName: 'MSME Sustainable (ZED) Certification',
    governmentLevel: 'Central',
    ministry: 'Ministry of Micro, Small and Medium Enterprises',
    description: 'ZED (Zero Defect Zero Effect) scheme encourages and enables MSMEs for manufacturing of quality products using latest technology, tools & to constantly upgrade their processes for achievement of high quality and high productivity with the least effect on the environment.',
    shortDescription: 'Subsidy for MSMEs to obtain ZED Certification and upgrade tech.',
    category: ['Technology Upgrade', 'Subsidy', 'MSME Support'],
    industries: ['Manufacturing', 'Food Processing', 'Handicrafts', 'Textiles', 'Other'],
    businessTypes: ['MSME'],
    businessStages: ['Operating', 'Growth Stage'],
    states: ['All'],
    benefits: [
      { title: 'Certification Subsidy', description: 'Up to 80% subsidy on the cost of ZED certification for Micro enterprises (60% for Small, 50% for Medium).' },
      { title: 'Financial Assistance', description: 'Support for testing/systems/product certification and technology upgradation.' }
    ],
    eligibility: {
      official: [
        'All manufacturing MSMEs registered with the Udyam Registration portal.'
      ],
      simple: [
        'Registered manufacturing MSME.',
        'Want to improve quality and reduce environmental impact.'
      ]
    },
    documents: [
      'Udyam Registration Number',
      'Basic enterprise details'
    ],
    applicationSteps: [
      'Register on the ZED portal using Udyam Registration Number',
      'Take the ZED Pledge',
      'Apply for Certification (Bronze, Silver, or Gold)',
      'Undergo desktop or site assessment'
    ],
    officialWebsite: 'https://zed.msme.gov.in/',
    tags: ['Quality', 'Certification', 'Zero Defect']
  },
  {
    id: 'startup-india-tax-exemption',
    schemeName: 'Startup India 80IAC Tax Exemption',
    governmentLevel: 'Central',
    ministry: 'Department for Promotion of Industry and Internal Trade (DPIIT)',
    description: 'Post getting DPIIT recognition, a startup may apply for Tax Exemption under section 80 IAC of the Income Tax Act. A recognized startup can avail a tax holiday for 3 consecutive financial years out of its first 10 years.',
    shortDescription: 'Income tax exemption for 3 consecutive years for recognized startups.',
    category: ['Tax Benefits', 'Startup Support'],
    industries: ['Technology', 'Healthcare', 'Agriculture', 'Education', 'Renewable Energy', 'Food Processing', 'Services', 'Other'],
    businessTypes: ['Startup', 'Private Limited Company', 'LLP'],
    businessStages: ['Operating', 'Growth Stage'],
    states: ['All'],
    benefits: [
      { title: 'Tax Holiday', description: '100% deduction of profits and gains from eligible business for 3 consecutive assessment years.' }
    ],
    eligibility: {
      official: [
        'Must be a recognized Startup by DPIIT.',
        'Only Private Limited Companies or Limited Liability Partnerships are eligible.',
        'Must have been incorporated after 1st April 2016.'
      ],
      simple: [
        'DPIIT recognized Startup.',
        'Structured as Pvt Ltd or LLP.',
        'Incorporated post April 1, 2016.'
      ]
    },
    documents: [
      'DPIIT Recognition Certificate',
      'MoA / AoA or LLP Deed',
      'Board Resolution',
      'Annual Accounts and Income Tax Returns'
    ],
    applicationSteps: [
      'Login to Startup India Portal',
      'Go to the Tax Exemption section',
      'Fill out the Form 1',
      'Upload necessary documents and submit to the Inter-Ministerial Board (IMB)'
    ],
    officialWebsite: 'https://www.startupindia.gov.in/',
    tags: ['Tax', 'Exemption', 'DPIIT']
  },
  {
    id: 'wep-support',
    schemeName: 'Women Entrepreneurship Platform (WEP)',
    governmentLevel: 'Central',
    ministry: 'NITI Aayog',
    description: 'WEP is a unified access portal which brings together women from different parts of India to realize their entrepreneurial aspirations. It provides support in incubation, funding, compliance, and marketing.',
    shortDescription: 'Comprehensive support ecosystem for women entrepreneurs by NITI Aayog.',
    category: ['Women Entrepreneur Support', 'Market Access', 'Skill Development'],
    industries: ['Technology', 'Manufacturing', 'Retail', 'Services', 'Education', 'Healthcare', 'Agriculture', 'Other'],
    businessTypes: ['Startup', 'MSME', 'Sole Proprietorship', 'Partnership', 'Private Limited Company', 'LLP'],
    businessStages: ['Idea Stage', 'Early Stage', 'Operating', 'Growth Stage'],
    states: ['All'],
    benefits: [
      { title: 'Networking & Mentorship', description: 'Access to a vast network of mentors, investors, and industry experts.' },
      { title: 'Capacity Building', description: 'Free training programs, masterclasses, and incubation support.' }
    ],
    eligibility: {
      official: [
        'Any existing or aspiring woman entrepreneur in India.'
      ],
      simple: [
        'Woman entrepreneur.',
        'Looking for mentorship, networking, or guidance.'
      ]
    },
    documents: [
      'Basic Identity Proof',
      'Business details (if already operating)'
    ],
    applicationSteps: [
      'Visit the WEP portal',
      'Register as an entrepreneur',
      'Complete your profile to unlock partner benefits and networking opportunities'
    ],
    officialWebsite: 'https://wep.gov.in/',
    tags: ['Women', 'Mentorship', 'Networking']
  },
  {
    id: 'mahila-samridhi-yojana',
    schemeName: 'Mahila Samridhi Yojana',
    governmentLevel: 'Central',
    ministry: 'Ministry of Social Justice and Empowerment',
    description: 'Provides micro finance to women entrepreneurs belonging to the target groups (Backward Classes) for starting any income generating activity.',
    shortDescription: 'Micro finance scheme for women entrepreneurs from backward classes.',
    category: ['Women Entrepreneur Support', 'Business Loan'],
    industries: ['Handicrafts', 'Retail', 'Services', 'Agriculture', 'Textiles', 'Other'],
    businessTypes: ['Sole Proprietorship', 'MSME'],
    businessStages: ['Idea Stage', 'Early Stage'],
    states: ['All'],
    benefits: [
      { title: 'Micro-Finance', description: 'Loan up to ₹1,40,000 provided through State Channelizing Agencies (SCAs).' },
      { title: 'Low Interest Rate', description: 'Interest rate is heavily subsidized, typically around 4% p.a.' }
    ],
    eligibility: {
      official: [
        'Women belonging to Backward Classes as notified by Central/State Govt.',
        'Annual family income should be below ₹3,000,000.'
      ],
      simple: [
        'Woman entrepreneur from a backward class.',
        'Family income is below the specified threshold.'
      ]
    },
    documents: [
      'Caste Certificate',
      'Income Certificate',
      'Identity Proof',
      'Business Plan'
    ],
    applicationSteps: [
      'Approach the State Channelizing Agency (SCA) office in your district',
      'Collect and fill the application form',
      'Submit form with required certificates'
    ],
    officialWebsite: 'https://nbcfdc.gov.in/',
    tags: ['Women', 'Backward Class', 'Micro Finance']
  },
  {
    id: 'maharashtra-cmegp',
    schemeName: 'Chief Minister Employment Generation Programme (CMEGP) - Maharashtra',
    governmentLevel: 'State',
    ministry: 'Government of Maharashtra',
    description: 'To create self-employment opportunities in Maharashtra by establishing micro enterprises in rural and urban areas. A state-level counterpart to PMEGP.',
    shortDescription: 'Maharashtra state scheme offering subsidy-linked loans for new micro-enterprises.',
    category: ['Subsidy', 'Business Loan'],
    industries: ['Manufacturing', 'Services', 'Food Processing', 'Other'],
    businessTypes: ['Sole Proprietorship', 'Partnership', 'MSME'],
    businessStages: ['Idea Stage', 'Early Stage'],
    states: ['Maharashtra'],
    benefits: [
      { title: 'Financial Support', description: 'Project cost up to ₹50 lakh for manufacturing and ₹10 lakh for service sector.' },
      { title: 'Subsidy', description: 'Government subsidy of 15% to 35% depending on the category of the applicant.' }
    ],
    eligibility: {
      official: [
        'Any individual residing in Maharashtra, age between 18 to 45 years (relaxable up to 50 for special categories).',
        'Should possess valid Aadhaar card and Maharashtra domicile.',
        'Minimum 7th standard pass.'
      ],
      simple: [
        'Resident of Maharashtra.',
        'Age 18-45.',
        'Starting a new micro-business.'
      ]
    },
    documents: [
      'Domicile Certificate of Maharashtra',
      'Aadhaar Card',
      'Educational Certificate',
      'Project Report'
    ],
    applicationSteps: [
      'Apply online on the Maha CMEGP portal',
      'Upload necessary documents',
      'Approval by the District Level Task Force Committee (DLTFC)',
      'Bank loan sanction and subsidy release'
    ],
    officialWebsite: 'https://maha-cmegp.gov.in/',
    tags: ['Maharashtra', 'Subsidy', 'State Scheme']
  }
];
