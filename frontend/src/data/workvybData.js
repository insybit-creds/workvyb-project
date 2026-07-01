// Central static content for the Workvyb landing page.
import {
  Sparkles,
  Filter,
  UserCheck,
  Zap,
  Building2,
  LayoutGrid,
  TrendingUp,
  Megaphone,
  Code2,
  Landmark,
  Boxes,
  Crown,
  ClipboardList,
  Radar,
  ListChecks,
  Handshake,
  Brain,
  Clock,
  Layers,
  ShieldCheck,
  Users,
  FileWarning,
  SearchX,
  UserX,
  PuzzleIcon,
  Hourglass,
  MailWarning,
} from 'lucide-react';

export const WHATSAPP_NUMBER = '918010545225';
export const WHATSAPP_DISPLAY_NUMBER = '8010545225';
export const CONTACT_EMAIL = 'contact@workvyb.com';
export const WHATSAPP_MESSAGE =
  'Hi Workvyb, I am looking to hire for my company. Please help me with recruitment support.';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const NAV_LINKS = [
  { label: 'Why Workvyb', href: '#why-workvyb', testKey: 'navWhyWorkvyb' },
  { label: 'Roles We Hire', href: '#roles-we-hire', testKey: 'navRolesWeHire' },
  { label: 'Recent Closures', href: '#recent-closures', testKey: 'navRecentClosures' },
  { label: 'Process', href: '#process', testKey: 'navProcess' },
  { label: 'Contact', href: '#contact', testKey: 'navContact' },
];

export const HERO_BADGES = [
  'AI-Powered Sourcing',
  'Relevant Candidate Shortlists',
  'Startup & MNC Hiring',
  'Shortlists in as fast as 4 days',
];

export const PROBLEM_POINTS = [
  { icon: FileWarning, text: 'Too many irrelevant resumes' },
  { icon: Hourglass, text: 'Slow sourcing and screening' },
  { icon: UserX, text: 'Poor candidate quality' },
  { icon: PuzzleIcon, text: 'Difficulty hiring for niche roles' },
  { icon: SearchX, text: 'Internal HR teams spending too much time on filtering' },
  { icon: MailWarning, text: 'Candidate drop-offs and delayed closures' },
  { icon: Users, text: 'Traditional agencies sending bulk CVs without proper role fit' },
];

export const SOLUTION_CARDS = [
  {
    icon: Sparkles,
    title: 'AI-Led Candidate Sourcing',
    description: 'Discover relevant profiles faster across multiple talent pools.',
    span: 'lg:col-span-2',
  },
  {
    icon: Filter,
    title: 'Smart Filtering',
    description:
      'Filter candidates based on role fit, experience, location, salary, domain, and urgency.',
    span: 'lg:col-span-1',
  },
  {
    icon: UserCheck,
    title: 'Recruiter-Led Screening',
    description:
      'Human recruiters validate interest, relevance, and availability before sharing profiles.',
    span: 'lg:col-span-1',
  },
  {
    icon: Zap,
    title: 'Faster Shortlists',
    description: 'Receive qualified candidates without going through hundreds of irrelevant resumes.',
    span: 'lg:col-span-2',
  },
  {
    icon: Building2,
    title: 'Startup & MNC Experience',
    description:
      'Workvyb understands fast-moving startup requirements as well as structured enterprise hiring processes.',
    span: 'lg:col-span-1',
  },
  {
    icon: LayoutGrid,
    title: 'Multi-Function Hiring',
    description: 'Hire across Sales, Marketing, Tech, Finance, Product, GTM, and niche roles.',
    span: 'lg:col-span-2',
  },
];

export const ROLE_CATEGORIES = [
  {
    icon: TrendingUp,
    title: 'Sales Hiring',
    roles: ['B2B Sales', 'Enterprise Sales', 'Inside Sales', 'SDR / BDR', 'Account Managers', 'Sales Managers'],
  },
  {
    icon: Megaphone,
    title: 'Marketing Hiring',
    roles: [
      'Product Marketing',
      'Growth Marketing',
      'Performance Marketing',
      'Brand Marketing',
      'Content Marketing',
      'Marketing Managers',
    ],
  },
  {
    icon: Code2,
    title: 'Tech Hiring',
    roles: [
      'Fullstack Developers',
      'Frontend Developers',
      'Backend Developers',
      'AI / ML Engineers',
      'Data Analysts',
      'QA Engineers',
    ],
  },
  {
    icon: Landmark,
    title: 'Finance Hiring',
    roles: ['Accountants', 'Finance Analysts', 'Finance Managers', 'Controllers', 'Financial Consultants'],
  },
  {
    icon: Boxes,
    title: 'Product Hiring',
    roles: ['Product Managers', 'Product Analysts', 'Program Managers', 'GTM Consultants', 'Product Marketing Managers'],
  },
  {
    icon: Crown,
    title: 'Niche & Leadership Roles',
    roles: ['Function Heads', 'Strategy Roles', 'Business Consultants', 'Early Team Members', 'Critical Startup Hires'],
  },
];

export const WHY_WORKVYB_POINTS = [
  { icon: Brain, text: 'AI-powered sourcing and candidate discovery' },
  { icon: Filter, text: 'Relevant shortlists instead of bulk CV dumping' },
  { icon: Clock, text: 'Faster turnaround for urgent roles' },
  { icon: Building2, text: 'Experience across startups and MNCs' },
  { icon: Layers, text: 'Understanding of Sales, Marketing, Tech, Finance, Product, and GTM roles' },
  { icon: ShieldCheck, text: 'Better candidate filtering before profiles are shared' },
  { icon: Users, text: 'Reduced workload for internal hiring teams' },
  { icon: Handshake, text: 'Support from requirement understanding to offer closure' },
];

export const RECENT_CLOSURES = [
  {
    role: 'Product Manager',
    companyType: 'AI SaaS Company',
    location: 'Gurgaon',
    shortlist: '4 days',
    onboarding: 'Onboarded in 2 weeks',
  },
  {
    role: 'B2B Product Marketing Manager',
    companyType: 'AI Cybersecurity Startup',
    location: 'Gurgaon',
    shortlist: '7 days',
    onboarding: 'Onboarded in 3 weeks',
  },
  {
    role: 'Marketing Manager',
    companyType: 'D2C Startup',
    location: 'Gurgaon',
    shortlist: '12 days',
    onboarding: 'Onboarded in 3 weeks',
  },
  {
    role: 'Junior Fullstack Developer',
    companyType: 'AI SaaS Company',
    location: 'Remote',
    shortlist: '9 days',
    onboarding: 'Onboarded in 5 weeks',
  },
  {
    role: 'Marketing Automation Specialist',
    companyType: 'Marketing Agency',
    location: 'Remote / Flexible',
    shortlist: '15 days',
    onboarding: 'Onboarded in 8 weeks',
  },
  {
    role: 'Accountant',
    companyType: 'Financial Consulting Company',
    location: 'Ghaziabad',
    shortlist: '10 days',
    onboarding: 'Onboarded in 3 weeks',
  },
  {
    role: 'GTM Consultant',
    companyType: 'B2B SaaS Company',
    location: 'Remote',
    shortlist: '15 days',
    onboarding: 'Onboarded in 4 weeks',
  },
];

export const PROCESS_STEPS = [
  {
    icon: ClipboardList,
    title: 'Understand Your Hiring Requirement',
    description:
      'We understand the role, company context, must-have skills, salary range, location, urgency, and ideal candidate profile.',
  },
  {
    icon: Radar,
    title: 'Source Using AI + Recruiter Network',
    description:
      'We use AI-powered sourcing along with recruiter expertise to find relevant candidate profiles faster.',
  },
  {
    icon: ListChecks,
    title: 'Screen and Shortlist Relevant Candidates',
    description:
      'Candidates are filtered and screened for role fit, experience, interest, salary alignment, and availability.',
  },
  {
    icon: Handshake,
    title: 'Coordinate Interviews and Support Closure',
    description:
      'We support the process from shortlist to interviews, feedback, offer discussion, and onboarding.',
  },
];

export const COMPARISON_ROWS = [
  { traditional: 'Sends bulk CVs', workvyb: 'Shares relevant, filtered candidates' },
  { traditional: 'Manual sourcing', workvyb: 'AI-assisted sourcing and screening' },
  { traditional: 'Slow turnaround', workvyb: 'Faster shortlists for urgent roles' },
  { traditional: 'Limited role understanding', workvyb: 'Function-wise and domain-wise candidate mapping' },
  { traditional: 'High internal filtering effort', workvyb: 'Reduced screening load for your team' },
  { traditional: 'Generic hiring support', workvyb: 'Startup and MNC-focused recruitment approach' },
];

export const METRICS = [
  { value: '100+', label: 'Roles Filled' },
  { value: '4 Days', label: 'Fastest Shortlist Timeline' },
  { value: 'Multi-Function', label: 'Sales, Marketing, Tech, Finance, Product & GTM' },
  { value: 'Startups + MNCs', label: 'Hiring Experience' },
  { value: 'AI + Human', label: 'Better Candidate Filtering' },
];

export const TESTIMONIALS = [
  {
    quote:
      'Workvyb understood our requirement quickly and helped us shortlist relevant candidates for a B2B Product Marketing role within 7 days. The quality of profiles was strong, and we were able to close the position in 3 weeks.',
    author: 'Founder',
    context: 'AI Cybersecurity Startup, Gurgaon',
  },
  {
    quote:
      'We needed a Marketing Manager who could work in a fast-paced D2C environment. Workvyb shared a focused shortlist, reduced our screening effort, and helped us onboard the right candidate within 3 weeks.',
    author: 'Founder',
    context: 'D2C Startup, Gurgaon',
  },
  {
    quote:
      'Hiring for a Marketing Automation role requires both technical and campaign understanding. Workvyb helped us find relevant candidates and supported the process from shortlist to closure.',
    author: 'VP, Digital Transformation',
    context: 'Marketing Agency',
  },
];

export const FAQS = [
  {
    question: 'What kind of companies does Workvyb work with?',
    answer:
      'Workvyb works with startups, growing companies, agencies, consulting firms, SaaS businesses, D2C brands, and MNCs looking to hire quality talent faster.',
  },
  {
    question: 'What roles does Workvyb hire for?',
    answer:
      'Workvyb hires across Sales, Marketing, Tech, Finance, Product Management, GTM, and niche business-critical roles.',
  },
  {
    question: 'How does AI help in recruitment?',
    answer:
      'AI helps Workvyb source, filter, and identify relevant candidate profiles faster. Human recruiters then validate candidates for role fit, availability, interest, and hiring alignment.',
  },
  {
    question: 'How quickly can Workvyb share candidates?',
    answer:
      'Timeline depends on the role complexity, but Workvyb has delivered shortlists in as fast as 4 days for certain roles.',
  },
  {
    question: 'Does Workvyb only work with startups?',
    answer: 'No. Workvyb works with both startups and MNCs.',
  },
  {
    question: 'Can I share urgent hiring requirements?',
    answer: 'Yes. Companies can submit the form or contact Workvyb directly on WhatsApp for urgent hiring support.',
  },
  {
    question: 'Does Workvyb support remote hiring?',
    answer: 'Yes. Workvyb can support hiring for onsite, hybrid, and remote roles depending on the requirement.',
  },
];
