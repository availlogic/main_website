import { MessageSquare, Workflow, Database, Mic, Puzzle } from 'lucide-react';

export interface Service {
  icon: any;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  features: string[];
  useCases: string[];
  technologies: string[];
  architectureDiagram: string; // Mermaid diagram code
  color: string;
  gradient: string;
}

export const services: Service[] = [
  {
    icon: MessageSquare,
    title: 'AI Chatbots & Conversational Interfaces',
    slug: 'ai-chatbots-conversational-interfaces',
    description: 'Provide instant, 24/7 customer support with smart chatbots that understand your business and answer customer queries naturally.',
    longDescription: `AI-powered chatbots are no longer just for big tech companies—they are an essential tool for local businesses looking to improve customer service without expanding their headcount. I build smart conversational assistants that understand the context of your business, answer repetitive questions accurately, and know exactly when to hand a complex issue over to your human team.

Whether it's a website widget to help online shoppers or a WhatsApp bot for appointment scheduling, these systems feel natural to your customers while freeing up your staff to focus on the work that really matters.`,
    features: [
      'Natural, human-like conversation flow',
      'Integration with your website, WhatsApp, or Facebook Messenger',
      'Instant answers to common questions (FAQs, opening hours, pricing)',
      'Seamless handoff to human staff for complex issues',
      'Secure handling of customer information',
      'Customized tone of voice to match your brand',
      'Simple dashboard to review past conversations',
      'Multilingual support (including understanding local phrases)'
    ],
    useCases: [
      '24/7 out-of-hours customer support',
      'Website visitor lead capture and qualification',
      'Automated appointment booking and reminders',
      'Order tracking and delivery updates',
      'Answering common product or service questions',
      'Internal staff helper for basic company info'
    ],
    technologies: ['LLMs (Llama 3, GPT-4, Claude 3)', 'RAG', 'LangChain/LangGraph', 'Vector Databases', 'Python', 'FastAPI'],
    architectureDiagram: `graph TD
    A[Customer on Website/WhatsApp] -->|Asks Question| B(Smart AI Chatbot)
    B -->|Checks Knowledge| C[("Your Business Info & FAQs")]
    C -->|Provides Answer| B
    B -->|If Simple| A
    B -.->|If Complex or Requested| D[Human Support Staff]

    style A fill:#e1f5fe,stroke:#03a9f4,stroke-width:2px
    style B fill:#fff3e0,stroke:#ff9800,stroke-width:2px
    style C fill:#e8f5e9,stroke:#4caf50,stroke-width:2px
    style D fill:#fce4ec,stroke:#e91e63,stroke-width:2px`,
    color: 'primary',
    gradient: 'from-primary/20 to-primary/5'
  },
  {
    icon: Workflow,
    title: 'Smart Business Automation',
    slug: 'ai-business-automation-workflow-intelligence',
    description: 'Eliminate repetitive manual tasks like data entry and document processing, freeing your team to focus on growing the business.',
    longDescription: `Every business has those repetitive, frustrating tasks—copying data from emails into spreadsheets, manually creating invoices, or sorting through PDF attachments. Smart Business Automation uses AI to take over these chores, working faster and with fewer errors than a human ever could.

I help small and medium businesses identify their biggest time-wasters and build secure, automated workflows to handle them. This isn't about replacing staff; it's about giving them back the hours they need to focus on your customers and grow your revenue.`,
    features: [
      'Automated data extraction from PDFs, receipts, and invoices',
      'Email sorting and automated draft replies',
      'Connecting different software tools (e.g., matching emails to your CRM)',
      'Automated report generation and formatting',
      'Smart decision rules (e.g., flag invoices over €500 for review)',
      'Secure handling of sensitive financial or personal data',
      'Clear visibility into what the system is doing',
      'Easy-to-use human approval steps where necessary'
    ],
    useCases: [
      'Processing supplier invoices directly into accounting software',
      'Extracting customer details from web forms to a CRM',
      'Automating employee onboarding paperwork',
      'Sorting and tagging incoming support tickets',
      'Generating weekly sales or inventory reports',
      'Updating stock levels across different platforms'
    ],
    technologies: ['Agentic Workflows', 'Vision LLMs', 'OCR Data Extraction', 'Make/n8n/Zapier', 'Python', 'Document AI'],
    architectureDiagram: `graph TD
    A[Incoming Email with PDF Invoice] --> B(AI Document Reader)
    B -->|Extracts Data| C{Needs Human Approval?}
    C -->|No| E[(Accounting Software e.g. Xero)]
    C -->|Yes| D[Review Dashboard for Staff]
    D -->|Approved| E
    E --> F[Automated Confirmation Reply]

    style A fill:#e1f5fe,stroke:#03a9f4,stroke-width:2px
    style B fill:#fff3e0,stroke:#ff9800,stroke-width:2px
    style C fill:#fff9c4,stroke:#fbc02d,stroke-width:2px
    style D fill:#fce4ec,stroke:#e91e63,stroke-width:2px
    style E fill:#e8f5e9,stroke:#4caf50,stroke-width:2px
    style F fill:#ede7f6,stroke:#673ab7,stroke-width:2px`,
    color: 'secondary',
    gradient: 'from-secondary/20 to-secondary/5'
  },
  {
    icon: Database,
    title: 'Custom AI Search & Knowledge Bases',
    slug: 'rag-knowledge-base',
    description: 'Turn your company\'s scattered documents into an instant, searchable AI assistant that always gives accurate answers based on your own data.',
    longDescription: `You have years of valuable knowledge locked away in PDFs, Word documents, past emails, and company policies. When staff or clients need answers, they waste time searching. A Custom AI Knowledge Base (technically known as RAG) acts like a super-smart librarian for your business.

It reads all your internal documents securely and lets your team ask questions in plain English. Instead of giving a generic internet answer, the AI provides an exact answer based *only* on your company's documents, and even points to the exact page it found the information on.`,
    features: [
      'Instant answers based strictly on your company data',
      'No data leakage—your private documents stay private',
      'Reads PDFs, Word files, Excel, and text documents',
      'Provides exact citations and source links for every answer',
      'Easy to update simply by uploading new documents',
      'Can be used internally by staff or externally by clients',
      'Reduces onboarding time for new employees',
      'Prevents the AI from "hallucinating" or making things up'
    ],
    useCases: [
      'Internal search tool for HR policies and company handbooks',
      'Instant lookup for complex product manuals or technical specs',
      'Quick reference guide for legal or compliance documents',
      'Assisting customer support agents to find answers faster',
      'Training and onboarding tool for new hires',
      'Searching through years of past project proposals or reports'
    ],
    technologies: ['Semantic Search', 'Pinecone/Milvus', 'Embeddings Models', 'LlamaIndex', 'RAG pipelines', 'Python'],
    architectureDiagram: `graph TD
    A["Your Company Documents (PDFs, Word, etc.)"] --> B(Secure AI Index)
    C[Staff Member Asks a Question] --> D(AI Search Engine)
    D -->|Finds Relevant Info| B
    B -->|Returns Exact Paragraphs| E[AI Formats the Answer]
    E -->|Provides Answer + Document Link| C

    style A fill:#e8f5e9,stroke:#4caf50,stroke-width:2px
    style B fill:#e1f5fe,stroke:#03a9f4,stroke-width:2px
    style C fill:#fce4ec,stroke:#e91e63,stroke-width:2px
    style D fill:#fff3e0,stroke:#ff9800,stroke-width:2px
    style E fill:#fff9c4,stroke:#fbc02d,stroke-width:2px`,
    color: 'accent',
    gradient: 'from-accent/20 to-accent/5'
  },
  {
    icon: Mic,
    title: 'AI Phone Receptionists',
    slug: 'ai-voice-assistants-voice-agents',
    description: 'Ensure you never miss a customer call with a natural-sounding AI voice assistant that can answer questions, take messages, and book appointments 24/7.',
    longDescription: `Missed calls mean missed business. For local clinics, tradespeople, or retail stores, hiring a full-time receptionist for out-of-hours or busy periods isn't always viable. AI Voice Assistants solve this by acting as your reliable, always-on front desk.

These aren't the frustrating "Press 1 for Sales" robot menus of the past. These are conversational AI voices that sound incredibly human, can handle interruptions, answer specific questions about your business, and take detailed messages or appointment requests, instantly sending the summary to your phone or email.`,
    features: [
      'Natural, human-sounding voice conversations',
      'Answers calls immediately, 24/7/365',
      'Can answer common questions (opening hours, location, services)',
      'Takes detailed messages and contact information',
      'Instantly emails or texts you a summary of the call',
      'Ability to handle multiple calls at the exact same time',
      'Customized greeting and professional tone',
      'Reduces the need for customers to leave voicemails'
    ],
    useCases: [
      'Out-of-hours reception for dental or medical clinics',
      'Overflow call handling during busy retail periods',
      'Initial call screening and lead capture for trades and services',
      'Automated restaurant reservation handling',
      'Providing quick updates on order or repair status',
      'Taking detailed messages when staff are in meetings'
    ],
    technologies: ['Real-time WebRTC', 'ElevenLabs TTS', 'Deepgram STT', 'Vapi/Bland AI', 'Conversational AI', 'Python'],
    architectureDiagram: `graph TD
    A[Customer Calls Your Number] --> B(AI Voice Receptionist)
    B -->|Listens & Speaks Naturally| A
    B -.->|Checks Info| C[("Your Business Details/Calendar")]
    B -->|Takes Message/Details| D(System creates Call Summary)
    D -->|Sends SMS/Email Alert| E[Business Owner / Staff]

    style A fill:#e1f5fe,stroke:#03a9f4,stroke-width:2px
    style B fill:#fff3e0,stroke:#ff9800,stroke-width:2px
    style C fill:#e8f5e9,stroke:#4caf50,stroke-width:2px
    style D fill:#fff9c4,stroke:#fbc02d,stroke-width:2px
    style E fill:#fce4ec,stroke:#e91e63,stroke-width:2px`,
    color: 'primary',
    gradient: 'from-primary/20 to-primary/5'
  },
  {
    icon: Puzzle,
    title: 'Custom Software Integrations',
    slug: 'ai-integrations-multi-agent-systems',
    description: 'Make your different software systems talk to each other to stop double-entry and keep your business data perfectly synchronized.',
    longDescription: `Most businesses use several different tools to run their operations—a website, a CRM, an accounting package, and a booking system. When these systems don't talk to each other, you end up doing the tedious work of copying data from one to the other.

I build custom bridges between your existing software. Whether it's making sure a sale on your Shopify store automatically updates your inventory and creates an invoice in Xero, or automatically adding new email leads to your CRM, these integrations save time, reduce errors, and let your software work for you, not the other way around.`,
    features: [
      'Connecting platforms that don\'t normally integrate',
      'Real-time data synchronization across your business',
      'Elimination of manual copy-pasting',
      'Automated alerts when specific events happen',
      'Secure data transfer between systems',
      'Custom rules for how data should be handled',
      'Works quietly in the background 24/7',
      'Scales easily as your business grows'
    ],
    useCases: [
      'Syncing E-commerce sales with Accounting software',
      'Automatically adding website form submissions to a CRM',
      'Updating inventory levels across multiple sales channels',
      'Sending automated SMS reminders from a calendar booking',
      'Connecting supplier emails directly to stock management',
      'Creating centralized dashboards from different data sources'
    ],
    technologies: ['Event-Driven Architecture', 'Serverless Functions', 'Webhooks', 'REST/GraphQL APIs', 'Python', 'Node.js'],
    architectureDiagram: `graph LR
    A[Your Website / Storefront] -->|New Order| B(Custom Integration Bridge)
    B -->|Updates Stock| C[Inventory System]
    B -->|Creates Invoice| D[Accounting Software]
    B -->|Adds Customer| E[CRM System]

    style A fill:#e1f5fe,stroke:#03a9f4,stroke-width:2px
    style B fill:#fff3e0,stroke:#ff9800,stroke-width:2px
    style C fill:#e8f5e9,stroke:#4caf50,stroke-width:2px
    style D fill:#e8f5e9,stroke:#4caf50,stroke-width:2px
    style E fill:#e8f5e9,stroke:#4caf50,stroke-width:2px`,
    color: 'secondary',
    gradient: 'from-secondary/20 to-secondary/5'
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};
