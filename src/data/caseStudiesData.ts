import { MessageSquare, Workflow, Database, Mic, Puzzle, TrendingUp, Clock, DollarSign, Users, Zap, Target, ArrowUp, ArrowDown } from 'lucide-react';

export interface CaseStudyMetric {
  label: string;
  before: string;
  after: string;
  improvement: string;
  isPositive: boolean;
  icon: any;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  serviceSlug: string;
  serviceName: string;
  industry: string;
  companySize: string;
  duration: string;
  color: string;
  gradient: string;
  icon: any;
  // STAR Format
  situation: string;
  task: string;
  actions: string[];
  result: string;
  // Metrics
  metrics: CaseStudyMetric[];
  keyQuote: string;
  quoteAuthor: string;
  quoteRole: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'logistics-chatbot-response-time',
    title: 'How We Cut Inquiry Response Time by 89% for a Logistics Giant',
    subtitle: 'AI-Powered Customer Service Automation',
    serviceSlug: 'ai-chatbots-conversational-interfaces',
    serviceName: 'AI Chatbots & Conversational Interfaces',
    industry: 'Logistics & Supply Chain',
    companySize: 'Fortune 500',
    duration: '3 months',
    color: 'primary',
    gradient: 'from-primary/20 to-primary/5',
    icon: MessageSquare,
    situation: `A leading logistics company with operations across 47 countries was drowning in customer inquiries. Their 200-person support team was handling over 50,000 tickets monthly—tracking requests, rate quotes, shipment status checks. Customers waited an average of 4.5 hours for responses during peak periods. CSAT scores had plummeted to 62%, and the cost-per-ticket had ballooned to $12.50. The situation was unsustainable: they were losing customers to competitors who responded faster.`,
    task: `The executive team set a clear mandate: reduce response time to under 15 minutes, cut support costs by 40%, and improve CSAT to 85%+. The constraint was brutal—no additional headcount allowed, and the system had to handle 6 languages seamlessly while maintaining 99.9% uptime. This wasn't just an optimization project; it was survival.`,
    actions: [
      'Deployed a context-aware conversational AI that understood logistics terminology, tracking formats, and shipping jargon',
      'Integrated with their TMS (Transportation Management System) for real-time shipment data',
      'Built a multi-intent understanding engine that could handle complex follow-up questions in a single conversation',
      'Implemented human handoff protocols for exceptions, disputes, and high-value accounts',
      'Created a continuous learning pipeline that improved accuracy 3% week-over-week'
    ],
    result: `The results shattered expectations. Response time dropped from 4.5 hours to under 8 minutes—an 89% improvement. The AI now handles 78% of all inquiries autonomously, freeing the human team to focus on relationship-building. Monthly support costs fell from $625,000 to $210,000, a 66% reduction. CSAT jumped to 91%. But the real win: customer retention improved 23%, adding an estimated $4.2M in annual recurring revenue.`,
    metrics: [
      { label: 'Response Time', before: '4.5 hours', after: '8 minutes', improvement: '89% faster', isPositive: true, icon: Clock },
      { label: 'Cost per Ticket', before: '$12.50', after: '$3.20', improvement: '74% reduction', isPositive: true, icon: DollarSign },
      { label: 'CSAT Score', before: '62%', after: '91%', improvement: '+29 points', isPositive: true, icon: Users },
      { label: 'Tickets Handled by AI', before: '0%', after: '78%', improvement: '+78%', isPositive: true, icon: Zap }
    ],
    keyQuote: 'We went from losing customers to competitors to winning them back. The ROI was positive within 60 days.',
    quoteAuthor: 'VP of Customer Experience',
    quoteRole: 'Global Logistics Provider',
    tags: ['NLP', 'Multi-language', 'TMS Integration', '24/7 Support']
  },
  {
    id: '2',
    slug: 'healthcare-automation-cost-savings',
    title: 'How AI Automation Saved a Clinic Network $200,000+ in First-Year Savings',
    subtitle: 'Intelligent Business Process Automation',
    serviceSlug: 'ai-business-automation-workflow-intelligence',
    serviceName: 'AI Business Automation & Workflow Intelligence',
    industry: 'Healthcare',
    companySize: '25-Clinic Network',
    duration: '4 months',
    color: 'secondary',
    gradient: 'from-secondary/20 to-secondary/5',
    icon: Workflow,
    situation: `A regional healthcare network with 25 clinics was hemorrhaging money on manual administrative processes. Staff spent 1,800 hours monthly on appointment reminders, insurance verification, prior authorizations, and billing follow-ups. The billing department alone had a 45-day average AR (accounts receivable) cycle. With staff turnover at 28% annually—driven largely by burnout from repetitive tasks—the situation was becoming a retention crisis. Every open position cost $45,000 to recruit and train.`,
    task: `Leadership needed to reduce administrative burden by 60%, cut AR days to under 30, and improve staff satisfaction scores. The solution had to be HIPAA-compliant and integrate with their existing Practice Management system without disrupting patient care workflows. Timeframe: implementation within 90 days, measurable ROI within 6 months.`,
    actions: [
      'Built an intelligent document processing pipeline that extracts and validates insurance data with 98.7% accuracy',
      'Deployed automated appointment reminder workflows with intelligent escalation for high-risk no-shows',
      'Created a smart prior authorization engine that auto-populates forms using EHR data',
      'Implemented AI-driven billing optimization that identifies and corrects claim errors before submission',
      'Established real-time dashboards for operational visibility and exception handling'
    ],
    result: `Administrative hours dropped from 1,800 to 520 monthly—a 71% reduction. The AR cycle shrank from 45 days to 23 days, improving cash flow by $1.2M. Staff turnover fell to 12%, saving an estimated $180,000 in recruitment costs annually. The total documented savings: $203,000 in year one, with ongoing annual savings of $50,000+ in reduced labor costs alone. But the intangibles mattered more: clinical staff now spend 40% more time with patients.`,
    metrics: [
      { label: 'Admin Hours/Month', before: '1,800 hrs', after: '520 hrs', improvement: '71% reduction', isPositive: true, icon: Clock },
      { label: 'AR Cycle', before: '45 days', after: '23 days', improvement: '49% reduction', isPositive: true, icon: TrendingUp },
      { label: 'Annual Savings', before: '$0', after: '$203,000', improvement: '+$203K', isPositive: true, icon: DollarSign },
      { label: 'Staff Turnover', before: '28%', after: '12%', improvement: '57% reduction', isPositive: true, icon: Users }
    ],
    keyQuote: 'Our clinicians finally have time to do what they became doctors to do—care for patients.',
    quoteAuthor: 'Chief Operations Officer',
    quoteRole: 'Regional Healthcare Network',
    tags: ['HIPAA', 'EHR Integration', 'Document Processing', 'Workflow Automation']
  },
  {
    id: '3',
    slug: 'legal-rag-knowledge-retrieval',
    title: 'Turning 15 Years of Legal Knowledge into Instant Answers',
    subtitle: 'RAG-Powered Knowledge Base for Law Firm',
    serviceSlug: 'rag-knowledge-base',
    serviceName: 'RAG Knowledge Base',
    industry: 'Legal Services',
    companySize: '200+ Attorneys',
    duration: '2 months',
    color: 'accent',
    gradient: 'from-accent/20 to-accent/5',
    icon: Database,
    situation: `A prestigious law firm with 200+ attorneys had a problem that sounds counterintuitive: they had too much knowledge. 15 years of case files, contracts, briefs, and research notes sat in disparate systems. When partners needed to reference precedent or check for conflicts, they relied on junior associates who spent hours searching. The average research task took 6.2 hours. Billable attorney time worth $400/hour was wasted on what should be instant lookups. New associates took 8+ months to become productive—each month costing the firm $25,000 in non-billable ramp time.`,
    task: `Create a system that lets any attorney find the right information in under 2 minutes. Requirements: semantic search across all document types, strict confidentiality controls (zero data leaves the firm), accuracy rate above 95%, and onboarding time reduction of 50%. The system must handle complex legal terminology and maintain proper citation chains.`,
    actions: [
      'Deployed a private, air-gapped RAG architecture with all embeddings staying within the firm\'s secure environment',
      'Developed legal-specific chunking strategies that preserve clause-level context and cross-reference relationships',
      'Built a citation engine that traces every answer back to source documents with page-level precision',
      'Implemented role-based access controls that respect attorney-client privilege and matter-level boundaries',
      'Created an adaptive learning system that improves retrieval accuracy based on attorney feedback'
    ],
    result: `Research time plummeted from 6.2 hours to 18 minutes on average—an 88% reduction. The $400/hour attorneys now spend that time on billable work. New associate ramp time dropped from 8 months to 3.5 months, saving $112,500 per associate in non-billable time. The system processes 1,200+ queries daily with a 97.3% accuracy rating. Senior partners report that the quality of junior work has improved because associates now have access to institutional knowledge that previously took years to accumulate.`,
    metrics: [
      { label: 'Research Time', before: '6.2 hours', after: '18 min', improvement: '95% faster', isPositive: true, icon: Clock },
      { label: 'Associate Ramp Time', before: '8 months', after: '3.5 months', improvement: '56% faster', isPositive: true, icon: TrendingUp },
      { label: 'Savings/Associate', before: '$0', after: '$112,500', improvement: '+$112.5K', isPositive: true, icon: DollarSign },
      { label: 'Daily Queries', before: '0', after: '1,200+', improvement: '+1,200+', isPositive: true, icon: Target }
    ],
    keyQuote: 'This is the institutional memory we always wanted. It\'s like having a senior partner available 24/7.',
    quoteAuthor: 'Managing Partner',
    quoteRole: 'AmLaw 200 Law Firm',
    tags: ['Private Cloud', 'Legal NLP', 'Citation Engine', 'Zero Data Leakage']
  },
  {
    id: '4',
    slug: 'retail-voice-agent-conversions',
    title: 'AI Voice Agents Increased Conversion Rate by 330%',
    subtitle: 'Voice-Powered Sales Automation',
    serviceSlug: 'ai-voice-assistants-voice-agents',
    serviceName: 'AI Voice Assistants / Voice Agents',
    industry: 'Retail & E-commerce',
    companySize: 'Enterprise Retailer',
    duration: '3 months',
    color: 'primary',
    gradient: 'from-primary/20 to-primary/5',
    icon: Mic,
    situation: `An enterprise retailer was losing 67% of online shoppers who abandoned their carts—but their bigger problem was phone calls. Their call center handled 15,000 calls monthly, mostly pre-purchase inquiries. Conversion rate from phone inquiries was only 12%. Why? Human agents could only work 8-hour shifts, leaving 16 hours daily with no phone support. Peak call times (lunch, evening) were chronically understaffed. Average call duration was 8 minutes, but 40% of that was hold time. The estimated monthly lost revenue: $1.8M.`,
    task: `Deploy an AI voice agent that handles 70% of incoming calls, operates 24/7, and achieves at least a 35% conversion rate. The agent must handle objections, provide personalized product recommendations, process orders, and seamlessly transfer complex queries to human agents. Must integrate with their CRM and inventory systems in real-time.`,
    actions: [
      'Built a natural voice agent using state-of-the-art TTS with brand-appropriate tone and pacing',
      'Implemented real-time CRM integration for customer history and preference access during calls',
      'Developed an objection-handling engine trained on 50,000+ successful sales conversations',
      'Created intelligent call routing that identifies high-value customers for immediate human handoff',
      'Established A/B testing framework for continuous voice script optimization'
    ],
    result: `The voice agent now handles 73% of all incoming calls—9,000+ monthly—operating 24/7 without breaks, vacations, or sick days. Conversion rate jumped from 12% to 52%, a 333% improvement. Monthly lost revenue dropped from $1.8M to $280,000. The voice agent processes orders averaging $127 per transaction, generating $1.1M in monthly attributed revenue. Human agents now focus exclusively on complex sales and relationship building, improving their conversion rate by 45%. Customer satisfaction with phone support increased to 4.6/5.`,
    metrics: [
      { label: 'Conversion Rate', before: '12%', after: '52%', improvement: '333% increase', isPositive: true, icon: TrendingUp },
      { label: 'Calls Handled by AI', before: '0%', after: '73%', improvement: '+73%', isPositive: true, icon: Mic },
      { label: 'Monthly Revenue', before: '—', after: '$1.1M', improvement: '+$1.1M', isPositive: true, icon: DollarSign },
      { label: 'CSAT Score', before: '3.2/5', after: '4.6/5', improvement: '+1.4 points', isPositive: true, icon: Users }
    ],
    keyQuote: 'Our AI sales agent outsells our human team 3-to-1. It\'s uncomfortable to admit, but the numbers don\'t lie.',
    quoteAuthor: 'Director of Sales Operations',
    quoteRole: 'Enterprise Retail Brand',
    tags: ['Voice AI', 'CRM Integration', 'Real-time Inventory', 'Sales Automation']
  },
  {
    id: '5',
    slug: 'fintech-multi-agent-portfolio-analysis',
    title: 'Multi-Agent System Analyzes 10,000+ Investment Opportunities Daily',
    subtitle: 'AI Multi-Agent Orchestration for Asset Management',
    serviceSlug: 'ai-integrations-multi-agent-systems',
    serviceName: 'AI Integrations & Multi-Agent Systems',
    industry: 'Financial Services',
    companySize: 'Asset Management Firm',
    duration: '5 months',
    color: 'secondary',
    gradient: 'from-secondary/20 to-secondary/5',
    icon: Puzzle,
    situation: `A boutique asset management firm was being outpaced by larger competitors using traditional research methods. Their analysts spent 70% of their time gathering and normalizing data from 50+ sources—Bloomberg, SEC filings, earnings calls, alternative data providers. The remaining 30% of time for actual analysis meant they could only cover 200 companies thoroughly. Meanwhile, competitors with larger teams covered 2,000+. They were missing opportunities, making delayed decisions, and watching better-resourced firms capture alpha before they could react.`,
    task: `Build an AI system that automatically monitors, processes, and synthesizes information from 50+ data sources, allowing analysts to focus purely on judgment and strategy. The system must generate daily briefing reports, flag anomalies, and surface high-conviction opportunities. Must achieve 95%+ data accuracy and process 10,000+ data points per company daily.`,
    actions: [
      'Architected a 5-agent system: Data Collection Agent, News Analysis Agent, Financial Modeling Agent, Risk Assessment Agent, and Synthesis Agent',
      'Built 50+ API integrations with data providers, each with custom parsing and normalization pipelines',
      'Developed a cross-source correlation engine that identifies non-obvious relationships between data points',
      'Created an anomaly detection system that alerts analysts to significant deviations from expectations',
      'Implemented a natural language report generator that produces analyst-quality briefings in minutes'
    ],
    result: `Coverage expanded from 200 to 2,500 companies without adding headcount. Data collection time collapsed from 70% to 15% of analyst workload—now they spend 85% of time on value-added analysis. The system processes 45,000+ data points per company daily across 50+ sources. Time-to-insight for breaking news dropped from 4 hours to 12 minutes. In backtesting, the system\'s opportunity flagging generated 340 basis points of alpha versus their previous approach. AUM grew from $800M to $1.4B as performance attracted new institutional investors.`,
    metrics: [
      { label: 'Company Coverage', before: '200', after: '2,500', improvement: '1,150% increase', isPositive: true, icon: Target },
      { label: 'Time on Analysis', before: '30%', after: '85%', improvement: '+55 points', isPositive: true, icon: Clock },
      { label: 'Alpha Generated', before: '0 bps', after: '340 bps', improvement: '+340 bps', isPositive: true, icon: TrendingUp },
      { label: 'AUM Growth', before: '$800M', after: '$1.4B', improvement: '+75%', isPositive: true, icon: DollarSign }
    ],
    keyQuote: 'We went from fighting fires to finding fires before they start. Our competitive moat just got much wider.',
    quoteAuthor: 'Chief Investment Officer',
    quoteRole: 'Boutique Asset Manager',
    tags: ['Multi-Agent', 'Real-time Data', 'Alpha Generation', 'Portfolio Intelligence']
  }
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find(cs => cs.slug === slug);
};

export const getCaseStudiesByService = (serviceSlug: string): CaseStudy[] => {
  return caseStudies.filter(cs => cs.serviceSlug === serviceSlug);
};
