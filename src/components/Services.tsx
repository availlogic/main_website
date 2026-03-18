import { motion } from 'framer-motion';
import { MessageSquare, Workflow, Database, Mic, Puzzle, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: MessageSquare,
    title: 'AI Chatbots & Conversational Interfaces',
    slug: 'ai-chatbots-conversational-interfaces',
    description: 'Build intelligent conversational systems that understand context, handle complex queries, and deliver human-like interactions across multiple channels.',
    features: [
      'Natural Language Understanding (NLU)',
      'Multi-platform deployment',
      'Context-aware conversation management',
      'Sentiment analysis & intent detection',
      'Integration with backend systems'
    ],
    color: 'primary',
    gradient: 'from-primary/20 to-primary/5',
    useCase: 'Customer support automation, lead qualification, internal helpdesk, e-commerce assistants'
  },
  {
    icon: Workflow,
    title: 'AI Business Automation & Workflow Intelligence',
    slug: 'ai-business-automation-workflow-intelligence',
    description: 'Transform manual processes into intelligent automated workflows that learn, adapt, and optimize based on patterns and outcomes.',
    features: [
      'Process mining & analysis',
      'Intelligent document processing',
      'Decision automation engines',
      'Real-time workflow optimization',
      'Cross-system orchestration'
    ],
    color: 'secondary',
    gradient: 'from-secondary/20 to-secondary/5',
    useCase: 'Invoice processing, approval workflows, data entry automation, compliance monitoring'
  },
  {
    icon: Database,
    title: 'RAG Knowledge Base',
    slug: 'rag-knowledge-base',
    description: 'Develop retrieval-augmented generation systems that combine your organizational knowledge with LLM capabilities for accurate, context-aware responses.',
    features: [
      'Vector database implementation',
      'Semantic search optimization',
      'Chunking strategies',
      'Hybrid retrieval methods',
      'Source citation & traceability'
    ],
    color: 'accent',
    gradient: 'from-accent/20 to-accent/5',
    useCase: 'Internal knowledge management, product documentation, research assistants, compliance databases'
  },
  {
    icon: Mic,
    title: 'AI Voice Assistants / Voice Agents',
    slug: 'ai-voice-assistants-voice-agents',
    description: 'Create voice-powered AI agents that handle phone calls, conduct meetings, and provide spoken interactions with natural conversation flow.',
    features: [
      'Speech-to-text & text-to-speech',
      'Voice activity detection',
      'Noise cancellation',
      'Real-time voice synthesis',
      'Multi-language support'
    ],
    color: 'primary',
    gradient: 'from-primary/20 to-primary/5',
    useCase: 'Phone-based customer service, meeting transcription, voice-controlled interfaces, accessibility solutions'
  },
  {
    icon: Puzzle,
    title: 'AI Integrations & Multi-Agent Systems',
    slug: 'ai-integrations-multi-agent-systems',
    description: 'Architect complex AI ecosystems where multiple specialized agents collaborate to solve sophisticated problems and handle enterprise-scale operations.',
    features: [
      'Agent orchestration frameworks',
      'API integration architecture',
      'Multi-agent communication protocols',
      'Task decomposition & routing',
      'Enterprise system connectivity'
    ],
    color: 'secondary',
    gradient: 'from-secondary/20 to-secondary/5',
    useCase: 'Complex automation scenarios, cross-departmental workflows, research & analysis pipelines, autonomous operations'
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">What I Do</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
            AI-Powered Solutions for{' '}
            <span className="gradient-text">Modern Business</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            I specialize in building production-ready AI systems that automate processes, enhance customer experiences, and drive operational efficiency.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card h-full p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 text-${service.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold font-heading mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features Preview */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-sm text-primary">
                      +{service.features.length - 3} more
                    </li>
                  )}
                </ul>

                {/* Learn More Link */}
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mt-auto"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-secondary inline-flex items-center gap-2">
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
