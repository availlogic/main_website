import { MessageSquare, Workflow, Database, Mic, Puzzle, TrendingUp, Clock, Euro, Users, Zap, Target } from 'lucide-react';

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
    slug: 'local-logistics-customer-service',
    title: 'How We Helped an Irish Courier Service Handle Peak Season Inquiries',
    subtitle: 'AI Customer Service Automation',
    serviceSlug: 'ai-chatbots-conversational-interfaces',
    serviceName: 'AI Chatbots & Conversational Interfaces',
    industry: 'Logistics & Delivery',
    companySize: 'Mid-sized Courier (45 Employees)',
    duration: '4 weeks',
    color: 'primary',
    gradient: 'from-primary/20 to-primary/5',
    icon: MessageSquare,
    situation: `A mid-sized logistics company operating across Leinster was struggling to keep up with customer queries during the busy holiday season. With only a 3-person support desk, they were overwhelmed by repetitive "Where is my parcel?" emails and calls. Customers were waiting over 6 hours for email replies, and phone lines were constantly engaged. This led to frustrated customers, exhausted staff, and poor online reviews, directly impacting their reputation with local businesses who relied on them for deliveries.`,
    task: `The business owner needed a solution to quickly reduce the pressure on the support team without hiring temporary staff, as training them during peak season was impossible. The goal was to provide immediate answers to common tracking queries 24/7, allowing the human team to focus on resolving actual delivery exceptions and complex issues.`,
    actions: [
      'Developed a friendly, helpful AI chatbot that integrated directly with their existing dispatch and tracking system.',
      'Trained the AI to understand common Irish addresses and eircodes, as well as typical local delivery queries.',
      'Set up the system to automatically handle "Where is my parcel?" and "How do I reschedule?" requests.',
      'Implemented a smooth handoff process to the human team for lost parcels or damaged goods, ensuring the team had full context of the chat.'
    ],
    result: `The AI assistant went live just before Black Friday and immediately absorbed 65% of all incoming tracking queries. Average customer wait time for basic information dropped from 6 hours to 30 seconds. The support team, instead of feeling overwhelmed, could focus on higher-value customer service, dealing with complex issues faster. The company avoided hiring 2 seasonal staff members, saving approximately €8,000, and saw their Trustpilot score improve during their busiest month.`,
    metrics: [
      { label: 'Basic Query Wait Time', before: '6 hours', after: '< 1 min', improvement: 'Instant Answers', isPositive: true, icon: Clock },
      { label: 'Staff Overtime Cost', before: 'High', after: 'Minimal', improvement: '€8,000 Saved', isPositive: true, icon: Euro },
      { label: 'Queries Handled by AI', before: '0%', after: '65%', improvement: '+65%', isPositive: true, icon: Zap },
      { label: 'Staff Stress Levels', before: 'Critical', after: 'Manageable', improvement: 'Huge Relief', isPositive: true, icon: Users }
    ],
    keyQuote: 'We were dreading the Christmas rush, but the AI assistant took the brunt of the repetitive questions. It felt like we had a tireless new team member.',
    quoteAuthor: 'Operations Manager',
    quoteRole: 'Leinster Courier Network',
    tags: ['Customer Support', 'Tracking Automation', 'SME Logistics', '24/7 Availability']
  },
  {
    id: '2',
    slug: 'accountancy-workflow-automation',
    title: 'Saving a Dublin Accountancy Firm 20 Hours a Week on Admin',
    subtitle: 'Intelligent Document & Workflow Automation',
    serviceSlug: 'ai-business-automation-workflow-intelligence',
    serviceName: 'AI Business Automation & Workflow Intelligence',
    industry: 'Financial & Professional Services',
    companySize: 'Boutique Accountancy (12 Staff)',
    duration: '6 weeks',
    color: 'secondary',
    gradient: 'from-secondary/20 to-secondary/5',
    icon: Workflow,
    situation: `A successful boutique accountancy firm in Dublin was growing quickly, taking on more SME clients. However, their senior accountants were spending nearly 30% of their week on manual data entry—extracting numbers from client invoices, receipts, and bank statements, and keying them into their accounting software. This manual work was not only error-prone but also prevented the team from offering higher-value advisory services to their clients.`,
    task: `The partners wanted to eliminate the bottleneck of manual document processing. They needed a secure, reliable way to automate the extraction of data from various formats of invoices (PDFs, scans, photos) and push that data directly into Xero/QuickBooks, ready for quick review rather than manual entry.`,
    actions: [
      'Implemented an Intelligent Document Processing (IDP) workflow that automatically fetches email attachments from a dedicated client inbox.',
      'Used AI to accurately read and extract vendor names, dates, amounts, and VAT details from messy, unstructured receipts and invoices.',
      'Created an automated approval dashboard where accountants simply review and click "Approve" instead of typing everything from scratch.',
      'Ensured the system flagged unclear or missing information for human review to maintain 100% accuracy.'
    ],
    result: `The automated workflow saved the team over 20 hours per week in manual data entry. Invoice processing time was cut by 80%, meaning client accounts were reconciled faster. The firm was able to take on 15 new clients without needing to hire an additional junior bookkeeper (saving roughly €35,000 annually). Most importantly, the senior staff regained time to provide proactive financial advice, increasing their client retention and satisfaction.`,
    metrics: [
      { label: 'Data Entry Time', before: '25 hrs/week', after: '5 hrs/week', improvement: '80% Reduction', isPositive: true, icon: Clock },
      { label: 'Processing Speed', before: 'Days', after: 'Minutes', improvement: 'Much Faster', isPositive: true, icon: TrendingUp },
      { label: 'Annual Savings', before: '—', after: '€35,000', improvement: 'Staffing Efficiency', isPositive: true, icon: Euro },
      { label: 'Accuracy Rate', before: '92%', after: '99%', improvement: 'Fewer Errors', isPositive: true, icon: Target }
    ],
    keyQuote: 'We are finally using our accountants for their brains, not their typing speed. The ROI was clear within the first month.',
    quoteAuthor: 'Managing Partner',
    quoteRole: 'Dublin Accountancy Practice',
    tags: ['Invoice Processing', 'Xero Integration', 'Time Saving', 'Process Automation']
  },
  {
    id: '3',
    slug: 'hr-consultancy-knowledge-base',
    title: 'Turning a 10-Year Archive into an Instant HR Advisory Tool',
    subtitle: 'RAG Knowledge Base for a Consultancy',
    serviceSlug: 'rag-knowledge-base',
    serviceName: 'RAG Knowledge Base',
    industry: 'HR & Legal Consulting',
    companySize: 'Specialist Consultancy (8 Consultants)',
    duration: '3 weeks',
    color: 'accent',
    gradient: 'from-accent/20 to-accent/5',
    icon: Database,
    situation: `An Irish HR consultancy had built a fantastic reputation over 10 years, accumulating hundreds of complex employment contracts, WRC (Workplace Relations Commission) case summaries, company policy templates, and legal advice notes. When a client called with a tricky question (e.g., about maternity leave entitlements mixed with remote work policies), consultants would spend 30-45 minutes digging through shared folders to find the relevant precedent or template.`,
    task: `The founder wanted to unlock this "tribal knowledge" so that newer consultants could answer client queries as confidently and quickly as the senior partners. They needed a secure, internal search tool that understood the context of Irish employment law and could instantly pull the exact paragraphs from their own historical documents.`,
    actions: [
      'Built a secure, private AI search engine (RAG system) that ingested all their past PDF reports, Word document templates, and advice emails.',
      'Ensured strict data privacy—no client data was used to train public AI models; everything was kept within their secure cloud environment.',
      'Designed the tool to provide natural language answers to questions, always citing the exact internal document it pulled the information from.',
      'Created a simple, chat-like interface for the consultants to use during client calls.'
    ],
    result: `The time taken to find historical advice or templates dropped from 40 minutes to under 2 minutes. Consultants can now confidently answer complex queries while still on the phone with the client, significantly boosting the perceived value and responsiveness of the firm. The onboarding time for a new consultant was halved, as they now have an "AI Senior Partner" to ask questions to at any time.`,
    metrics: [
      { label: 'Information Retrieval', before: '40 mins', after: '2 mins', improvement: '95% Faster', isPositive: true, icon: Clock },
      { label: 'Client Response Time', before: 'Next Day', after: 'On Call', improvement: 'Instant', isPositive: true, icon: Zap },
      { label: 'New Hire Ramp-up', before: '6 months', after: '3 months', improvement: '50% Faster', isPositive: true, icon: TrendingUp },
      { label: 'Internal Search Usage', before: 'Low', after: '20+ daily', improvement: 'High Adoption', isPositive: true, icon: Users }
    ],
    keyQuote: 'It’s like having our entire company history and expertise available at our fingertips. Our clients are amazed at how fast we can provide tailored advice now.',
    quoteAuthor: 'Founder & Lead Consultant',
    quoteRole: 'Irish HR Advisory Firm',
    tags: ['Internal Search', 'Knowledge Management', 'Secure Data', 'Staff Enablement']
  },
  {
    id: '4',
    slug: 'dental-clinic-voice-agent',
    title: 'Never Miss a Patient: AI Voice Agent for an Out-of-Hours Dental Clinic',
    subtitle: 'Voice AI for Appointment Management',
    serviceSlug: 'ai-voice-assistants-voice-agents',
    serviceName: 'AI Voice Assistants / Voice Agents',
    industry: 'Healthcare & Clinics',
    companySize: 'Local Dental Practice (2 Dentists)',
    duration: '4 weeks',
    color: 'primary',
    gradient: 'from-primary/20 to-primary/5',
    icon: Mic,
    situation: `A busy local dental practice in Cork found they were missing up to 15 calls a day, especially during lunchtime, after hours, and on weekends. Many of these were patients seeking emergency appointments or new patients wanting to register. Because they couldn't answer the phone, these potential patients often called the next dentist on Google. The practice was losing an estimated €4,000 a month in missed bookings.`,
    task: `The practice manager needed a reliable way to answer every single call, 24/7, without hiring a full-time receptionist just for the quieter hours. The solution needed to sound professional, be able to answer basic questions (opening hours, parking, pricing), and take details for appointment callbacks.`,
    actions: [
      'Deployed an AI Voice Assistant trained with a friendly, professional voice that greets patients outside of normal hours or when the line is busy.',
      'Programmed the agent to answer FAQs about treatments, PRSI entitlements, and clinic location.',
      'Set up the system to politely ask for the patient\'s name, phone number, and reason for calling (e.g., check-up or emergency).',
      'Created an instant SMS and email alert to the practice manager with a transcript of the call, so they could prioritize call-backs the next morning.'
    ],
    result: `The clinic now has a 100% call answer rate. The AI Voice Agent handled over 120 calls in its first month that would have otherwise gone to voicemail (which patients rarely leave). By capturing patient details and the nature of the emergency, the clinic successfully converted 35 of those missed calls into bookings, recovering over €3,500 in revenue that would have gone to competitors. The front desk staff also start their day with an organized list of prioritized call-backs instead of a blinking voicemail light.`,
    metrics: [
      { label: 'Missed Calls', before: '15/day', after: '0/day', improvement: '100% Answered', isPositive: true, icon: Target },
      { label: 'Recovered Revenue', before: '€0', after: '€3,500/mo', improvement: 'Direct ROI', isPositive: true, icon: Euro },
      { label: 'Out-of-Hours Support', before: 'Voicemail', after: 'Interactive AI', improvement: 'Better Experience', isPositive: true, icon: Mic },
      { label: 'Staff Organization', before: 'Reactive', after: 'Proactive', improvement: 'Less Morning Stress', isPositive: true, icon: Users }
    ],
    keyQuote: 'Patients actually compliment the "new after-hours receptionist". We are capturing business we didn’t even realize we were losing.',
    quoteAuthor: 'Practice Manager',
    quoteRole: 'Cork Dental Clinic',
    tags: ['24/7 Availability', 'Lead Capture', 'Missed Call Recovery', 'Voice AI']
  },
  {
    id: '5',
    slug: 'ecommerce-inventory-multi-agent',
    title: 'Automating Supplier Updates for an Irish Retailer',
    subtitle: 'Smart Automation for E-commerce',
    serviceSlug: 'ai-integrations-multi-agent-systems',
    serviceName: 'AI Integrations & Multi-Agent Systems',
    industry: 'Retail & E-commerce',
    companySize: 'Independent Retailer (E-commerce + 1 Store)',
    duration: '5 weeks',
    color: 'secondary',
    gradient: 'from-secondary/20 to-secondary/5',
    icon: Puzzle,
    situation: `An independent Irish home goods retailer was struggling to keep their Shopify website updated. They sourced products from 8 different European suppliers, each sending inventory updates in different formats—some via weekly Excel attachments, some via PDF catalogues, and others via messy email text. The owner spent every Monday manually checking these emails and updating stock levels on Shopify to avoid selling items they no longer had.`,
    task: `The owner wanted to completely eliminate the Monday manual stock update. They needed a smart system that could understand different file formats from different suppliers, extract the correct SKU (product code) and stock numbers, and automatically update their Shopify store without human intervention.`,
    actions: [
      'Built a streamlined AI workflow that monitors a dedicated "supplier updates" email inbox.',
      'Used AI to "read" the diverse incoming formats (PDFs, Excel, plain text) and intelligently identify the product codes, prices, and stock levels, regardless of how the supplier formatted them.',
      'Created a reconciliation step that matches the supplier data to the store\'s Shopify inventory.',
      'Automated the update process via the Shopify API, with an automatic email summary sent to the owner detailing what was updated and flagging any discontinued items.'
    ],
    result: `The automated system completely replaced the 6-hour manual Monday task. The store\'s inventory is now updated daily as supplier emails arrive, dramatically reducing the chance of selling out-of-stock items and having to issue refunds. The owner reclaimed almost a full working day every week, which they redirected into marketing and sourcing new products, resulting in a 15% increase in online sales that quarter.`,
    metrics: [
      { label: 'Manual Admin Time', before: '6 hours/week', after: '0 hours', improvement: '100% Automated', isPositive: true, icon: Clock },
      { label: 'Out-of-Stock Errors', before: 'Frequent', after: 'Rare', improvement: 'Better Reliability', isPositive: true, icon: Target },
      { label: 'Inventory Updates', before: 'Weekly', after: 'Daily/Real-time', improvement: 'Faster Sync', isPositive: true, icon: Zap },
      { label: 'Time Reclaimed', before: 'Admin', after: 'Marketing', improvement: 'Sales Growth Focus', isPositive: true, icon: TrendingUp }
    ],
    keyQuote: 'Mondays used to be a nightmare of spreadsheets. Now, the system just emails me a summary of what it updated while I focus on growing the business.',
    quoteAuthor: 'Owner & Founder',
    quoteRole: 'Irish Home Goods Retailer',
    tags: ['Shopify Integration', 'Data Extraction', 'E-commerce Automation', 'Time Saving']
  }
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find(cs => cs.slug === slug);
};

export const getCaseStudiesByService = (serviceSlug: string): CaseStudy[] => {
  return caseStudies.filter(cs => cs.serviceSlug === serviceSlug);
};
