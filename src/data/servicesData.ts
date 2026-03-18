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
    description: 'Build intelligent conversational systems that understand context, handle complex queries, and deliver human-like interactions across multiple channels.',
    longDescription: `AI-powered chatbots and conversational interfaces are transforming how businesses interact with their customers. I design and build sophisticated dialogue systems that go beyond simple Q&A patterns to deliver truly intelligent, context-aware conversations.

These systems can understand natural language nuances, maintain conversation context across multiple exchanges, detect sentiment and intent, and seamlessly hand off to human agents when needed. Whether you need a customer service bot, sales assistant, or internal helpdesk solution, I create conversational AI that feels natural and delivers real business value.`,
    features: [
      'Natural Language Understanding (NLU) with intent classification',
      'Context-aware conversation management and memory',
      'Multi-channel deployment (web, mobile, messaging platforms)',
      'Sentiment analysis and emotion detection',
      'Intent detection and entity extraction',
      'Integration with CRM, ERP, and backend systems',
      'Human handoff workflows and escalation logic',
      'Conversation analytics and performance monitoring'
    ],
    useCases: [
      '24/7 customer support automation',
      'Lead qualification and nurturing',
      'Internal IT helpdesk and HR inquiries',
      'E-commerce product recommendations and checkout',
      'Appointment scheduling and reminders',
      'FAQ and knowledge base navigation'
    ],
    technologies: ['Python', 'LangChain', 'OpenAI/GPT', 'Anthropic/Claude', 'OpenRouter', 'FastAPI', 'Redis', 'PostgreSQL'],
    architectureDiagram: `graph TB
    subgraph "User Interface Layer"
        A[Web Chat Widget]
        B[Mobile SDK]
        C[Messaging Platforms]
        D[Voice Interface]
    end

    subgraph "AI Processing Layer"
        E[NLU Engine]
        F[Intent Classifier]
        G[Entity Extractor]
        H[Dialogue Manager]
        I[Response Generator]
    end

    subgraph "Integration Layer"
        J[CRM Systems]
        K[Knowledge Base]
        L[Backend APIs]
        M[Conversation Store]
    end

    A --> E
    B --> E
    C --> E
    D --> E
    E --> F
    F --> G
    G --> H
    H --> K
    H --> J
    H --> L
    H --> M
    H --> I
    I --> A
    I --> B
    I --> C
    I --> D`,
    color: 'primary',
    gradient: 'from-primary/20 to-primary/5'
  },
  {
    icon: Workflow,
    title: 'AI Business Automation & Workflow Intelligence',
    slug: 'ai-business-automation-workflow-intelligence',
    description: 'Transform manual processes into intelligent automated workflows that learn, adapt, and optimize based on patterns and outcomes.',
    longDescription: `AI Business Automation combines the power of artificial intelligence with workflow orchestration to eliminate repetitive tasks, reduce errors, and free up your team for higher-value work. I build intelligent automation systems that don't just follow rigid rules but learn from data and improve over time.

From intelligent document processing that extracts data from invoices and contracts, to decision engines that handle complex approvals, to cross-system orchestration that coordinates multiple processes—these systems transform how your business operates.`,
    features: [
      'Process mining and workflow analysis',
      'Intelligent document processing (IDP) with OCR/ICR',
      'Decision automation and business rules engine',
      'Real-time workflow optimization and monitoring',
      'Cross-system orchestration and API integration',
      'Exception handling and human-in-the-loop workflows',
      'Performance analytics and bottleneck identification',
      'Continuous learning and model refinement'
    ],
    useCases: [
      'Accounts payable/receivable automation',
      'Invoice processing and validation',
      'Employee onboarding workflows',
      'Compliance monitoring and reporting',
      'Order processing and fulfillment',
      'Quality assurance and approval chains'
    ],
    technologies: ['Python', 'Apache Airflow', 'Temporal', 'n8n', 'Celery', 'GPT-4', 'LangChain', 'Redis Streams'],
    architectureDiagram: `graph TB
    subgraph "Input Sources"
        A[Documents & Emails]
        B[API Events]
        C[Scheduled Triggers]
    end

    subgraph "AI Processing Core"
        D[Document Intelligence]
        E[AI Decision Engine]
        F[Workflow Orchestrator]
        G[Exception Handler]
    end

    subgraph "Actions & Outputs"
        H[Database Updates]
        I[Notifications]
        J[API Integrations]
        K[Human Approvals]
    end

    subgraph "Monitoring"
        L[Analytics Dashboard]
    end

    A --> D
    D --> E
    B --> F
    C --> F
    E --> F
    F --> H
    F --> I
    F --> J
    F --> K
    F -.-> G
    G --> K
    F --> L`,
    color: 'secondary',
    gradient: 'from-secondary/20 to-secondary/5'
  },
  {
    icon: Database,
    title: 'RAG Knowledge Base',
    slug: 'rag-knowledge-base',
    description: 'Develop retrieval-augmented generation systems that combine your organizational knowledge with LLM capabilities for accurate, context-aware responses.',
    longDescription: `Retrieval-Augmented Generation (RAG) bridges the gap between large language models and your organization's specific knowledge. Rather than relying solely on general training data, RAG systems retrieve relevant information from your documents, databases, and knowledge bases to provide accurate, sourced answers.

I design and implement RAG architectures that can handle enterprise-scale knowledge bases, optimize retrieval for accuracy and relevance, and seamlessly integrate with your existing systems. The result is AI assistants that truly understand your business context and can cite their sources.`,
    features: [
      'Vector database design and implementation',
      'Intelligent document chunking strategies',
      'Semantic search and hybrid retrieval methods',
      'Source citation and answer traceability',
      'Knowledge base indexing and updates',
      'Multi-format document support (PDF, Word, HTML)',
      'Query expansion and re-ranking',
      'Guardrails for accurate and safe responses'
    ],
    useCases: [
      'Internal knowledge management and search',
      'Product documentation assistants',
      'Research and analysis support',
      'Compliance and policy question answering',
      'Technical documentation navigation',
      'Customer support knowledge base'
    ],
    technologies: ['Pinecone', 'Weaviate', 'ChromaDB', 'LangChain', 'LlamaIndex', 'OpenAI', 'Claude', 'Python', 'FastAPI'],
    architectureDiagram: `graph TB
    subgraph "Knowledge Sources"
        A[Documents]
        B[Web Content]
        C[Databases]
        D[APIs]
    end

    subgraph "Indexing Pipeline"
        E[Document Loader]
        F[Text Splitter]
        G[Embeddings Model]
        H[Vector Database]
    end

    subgraph "Query Processing"
        I[User Query]
        J[Query Embedding]
        K[Vector Search]
        L[Hybrid Search]
        M[Reranker]
    end

    subgraph "Generation"
        N[Context Assembly]
        O[LLM Processing]
        P[Response + Citations]
    end

    A --> E
    B --> E
    C --> E
    D --> E
    E --> F
    F --> G
    G --> H
    I --> J
    J --> K
    J --> L
    K --> M
    L --> M
    M --> N
    H --> N
    N --> O
    O --> P`,
    color: 'accent',
    gradient: 'from-accent/20 to-accent/5'
  },
  {
    icon: Mic,
    title: 'AI Voice Assistants / Voice Agents',
    slug: 'ai-voice-assistants-voice-agents',
    description: 'Create voice-powered AI agents that handle phone calls, conduct meetings, and provide spoken interactions with natural conversation flow.',
    longDescription: `Voice AI agents represent the next frontier in customer interaction—conversational AI that speaks and listens like a human. I build voice systems capable of handling phone calls, conducting meetings, transcribing conversations, and providing voice-controlled interfaces.

These systems go beyond simple voice commands to engage in natural, flowing conversations, understanding context across long exchanges, handling interruptions gracefully, and completing complex tasks autonomously.`,
    features: [
      'Speech-to-text with high accuracy transcription',
      'Natural text-to-speech with voice customization',
      'Voice activity detection and speaker separation',
      'Noise cancellation and audio enhancement',
      'Real-time streaming transcription',
      'Multi-language and accent support',
      'Call routing and escalation logic',
      'Conversation analytics and insights'
    ],
    useCases: [
      'Automated phone-based customer service',
      'Appointment scheduling via voice',
      'Meeting transcription and summarization',
      'Voice-controlled smart interfaces',
      'Accessibility solutions',
      'Survey and feedback collection'
    ],
    technologies: ['Deepgram', 'AssemblyAI', 'ElevenLabs', 'OpenAI TTS', 'Twilio', 'Vapi', 'Python', 'WebRTC'],
    architectureDiagram: `graph TB
    subgraph "Audio Input"
        A[Phone / SIP]
        B[WebRTC Stream]
        C[Audio File]
    end

    subgraph "Speech Processing"
        D[Audio Codec]
        E[Noise Reduction]
        F[VAD / Barge-in Detection]
        G[Speech-to-Text]
    end

    subgraph "AI Core"
        H[Intent Recognition]
        I[Dialogue Manager]
        J[Context Memory]
        K[LLM Processing]
    end

    subgraph "Speech Output"
        L[Response Generation]
        M[Text-to-Speech]
        N[Audio Output]
    end

    A --> D
    B --> D
    C --> D
    D --> E
    E --> F
    F --> G
    G --> H
    H --> I
    I --> J
    J --> K
    K --> L
    L --> M
    M --> N
    N --> A
    N --> B
    F -.->|Interrupt| L`,
    color: 'primary',
    gradient: 'from-primary/20 to-primary/5'
  },
  {
    icon: Puzzle,
    title: 'AI Integrations & Multi-Agent Systems',
    slug: 'ai-integrations-multi-agent-systems',
    description: 'Architect complex AI ecosystems where multiple specialized agents collaborate to solve sophisticated problems and handle enterprise-scale operations.',
    longDescription: `Multi-agent AI systems represent the next evolution in artificial intelligence—where specialized AI agents work together, each handling their domain while collaborating to solve complex problems that no single AI could handle alone.

I architect and implement multi-agent systems where agents can have distinct roles, share information, delegate tasks, and collectively handle enterprise-scale operations. This approach enables sophisticated automation scenarios that mirror how human teams actually work.`,
    features: [
      'Agent orchestration and choreography frameworks',
      'Role-based agent design and specialization',
      'Multi-agent communication protocols',
      'Task decomposition and intelligent routing',
      'Shared knowledge and memory management',
      'Enterprise system connectivity and APIs',
      'Agent monitoring and observability',
      'Dynamic agent scaling and load balancing'
    ],
    useCases: [
      'Complex cross-departmental automation',
      'Research and analysis pipelines',
      'Autonomous customer service escalation',
      'Financial analysis and reporting',
      'Supply chain optimization',
      'Autonomous DevOps and code review'
    ],
    technologies: ['LangGraph', 'AutoGen', 'CrewAI', 'Python', 'FastAPI', 'Redis', 'gRPC'],
    architectureDiagram: `graph TB
    subgraph "User Interface"
        A[User Request]
        B[Admin Dashboard]
    end

    subgraph "Orchestration Layer"
        C[Orchestrator Agent]
        D[Task Planner]
        E[Result Aggregator]
    end

    subgraph "Specialized Agents"
        F[Research Agent]
        G[Analysis Agent]
        H[Action Agent]
        I[Review Agent]
    end

    subgraph "Shared Resources"
        J[Agent Memory]
        K[Knowledge Base]
        L[External Tools & APIs]
    end

    A --> C
    B --> C
    C --> D
    D --> F
    D --> G
    D --> H
    D --> I
    F --> E
    G --> E
    H --> E
    I --> E
    E --> C
    C --> A
    F --> J
    G --> J
    H --> J
    I --> J
    J --> K
    F --> L
    H --> L`,
    color: 'secondary',
    gradient: 'from-secondary/20 to-secondary/5'
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};
