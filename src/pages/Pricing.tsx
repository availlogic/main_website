import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Zap, Building2, Clock, MessageSquare, Workflow, Puzzle, Globe, ChevronDown } from 'lucide-react';

const packages = [
  {
    name: 'Starter',
    subtitle: 'Quick Wins',
    description: 'Perfect for businesses exploring AI for the first time. Get started with immediate, visible automation that builds trust and proves ROI.',
    price: {
      initial: '$1,500',
      initialMax: '$3,000',
      monthly: '$200',
      monthlyMax: '$500',
      period: '/month'
    },
    badge: 'Quick Start',
    icon: Sparkles,
    color: 'primary',
    gradient: 'from-primary/20 to-primary/5',
    borderColor: 'border-primary/30',
    targetAudience: 'Local small businesses and early-stage startups with limited budgets',
    services: [
      {
        name: 'AI Chatbots & Conversational Interfaces',
        features: [
          'Basic FAQ chatbot from your website URL',
          'Handles common questions (hours, location, pricing)',
          'Simple handoff to email for complex queries',
          'Deploy to 1 channel (website widget)'
        ]
      },
      {
        name: 'AI Business Automation',
        features: [
          '1 automated workflow (e.g., form → CRM)',
          'Lead data auto-extraction and routing',
          'Basic email notification triggers',
          'Weekly performance report'
        ]
      }
    ],
    cta: 'Get Started',
    highlights: [
      'Fast 1–2 week delivery',
      'Build trust with quick wins',
      'Gateway to larger projects',
      'Perfect for budget approval'
    ]
  },
  {
    name: 'Growth',
    subtitle: 'Scale Your Business',
    description: 'For businesses ready to automate complex operations. Multi-step AI workflows that handle real business logic and deliver measurable efficiency gains.',
    price: {
      initial: '$5,000',
      initialMax: '$12,000',
      monthly: '$1,000',
      monthlyMax: '$2,500',
      period: '/month'
    },
    badge: 'Best Value',
    icon: Zap,
    color: 'secondary',
    gradient: 'from-secondary/20 to-secondary/5',
    borderColor: 'border-secondary/30',
    featured: true,
    targetAudience: 'Growing businesses facing operational bottlenecks',
    services: [
      {
        name: 'AI Business Automation & Workflow Intelligence',
        features: [
          'Multi-step AI-powered workflows',
          'Document intelligence (invoices, contracts)',
          'AI decision engine with business rules',
          'Exception handling with human-in-the-loop',
          'Cross-system orchestration',
          'Real-time performance monitoring'
        ]
      },
      {
        name: 'AI Integrations & Multi-Agent Systems',
        features: [
          'Multi-channel AI deployment (web, WhatsApp, Instagram)',
          'Unified customer view across platforms',
          'CRM + support system integration',
          'Automated follow-up sequences',
          'Scalable agent architecture'
        ]
      },
      {
        name: 'RAG Knowledge Base (Basic)',
        features: [
          'Simple document Q&A from your existing data',
          'Single knowledge source integration',
          'Basic semantic search capabilities',
          'Standard deployment (1-2 data sources)'
        ]
      }
    ],
    cta: 'Scale Up',
    highlights: [
      '$5K–$12K setup + $1K–$2.5K/month',
      'Recurring revenue stream',
      'Significant cost reduction',
      'Competitive differentiation'
    ]
  },
  {
    name: 'Enterprise',
    subtitle: 'Custom Solutions',
    description: 'Tailored AI ecosystems for complex enterprise needs. Full-scale implementation with dedicated support and ongoing optimization.',
    price: {
      initial: 'Custom',
      monthly: 'Custom',
      period: ''
    },
    badge: 'Full Service',
    icon: Building2,
    color: 'accent',
    gradient: 'from-accent/20 to-accent/5',
    borderColor: 'border-accent/30',
    targetAudience: 'Enterprises with complex requirements',
    services: [
      {
        name: 'Full AI Integration Suite',
        features: [
          'Custom AI chatbot with advanced NLU',
          'Voice AI assistants for phone support',
          'RAG knowledge base with enterprise data',
          'Multi-agent orchestration systems',
          'Real-time analytics dashboard',
          'Dedicated account manager'
        ]
      },
      {
        name: 'Priority Enterprise Support',
        features: [
          '24/7 dedicated support',
          'Custom SLA guarantees',
          'Quarterly strategy reviews',
          'Ongoing model optimization',
          'White-label solutions available',
          'Training and documentation'
        ]
      }
    ],
    cta: 'Schedule a Call',
    highlights: [
      'Bespoke implementation',
      'Enterprise-grade security',
      'Dedicated resources',
      'Flexible terms'
    ]
  }
];

const faqs = [
  {
    question: "What's included in the initial setup fee?",
    answer: "The setup fee covers all development, configuration, integration work, and initial deployment. You only pay the monthly maintenance fee once the solution is live and working to your satisfaction."
  },
  {
    question: "Can I upgrade from Starter to Growth?",
    answer: "Absolutely! Many clients start with a Starter package to build trust, then upgrade to Growth. The initial setup from Starter counts toward your Growth implementation, making upgrades seamless and cost-effective."
  },
  {
    question: "What happens after the initial setup?",
    answer: "After deployment, you'll receive comprehensive documentation, training videos, and a handoff session. Monthly retainer includes ongoing monitoring, updates, and optimization."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, for Growth and Enterprise packages, we offer flexible payment terms. Setup fees can be split over 2-3 months for qualified clients."
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery Call',
    description: '30-minute call to understand your business challenges and goals',
    icon: MessageSquare
  },
  {
    step: '02',
    title: 'Solution Design',
    description: 'Custom proposal with scope, timeline, and pricing',
    icon: Workflow
  },
  {
    step: '03',
    title: 'Development',
    description: 'Agile development with weekly progress updates',
    icon: Puzzle
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'Go-live deployment with ongoing optimization',
    icon: Globe
  }
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="container-custom relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-white/10 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Transparent Pricing</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Choose Your{' '}
            <span className="gradient-text">AI Journey</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            From quick wins to enterprise-scale solutions. Every package is designed to deliver measurable ROI and build toward long-term partnership.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${pkg.featured ? 'lg:-mt-4 lg:-mb-4' : ''}`}
            >
              <div className={`glass-card h-full p-8 border-2 ${pkg.borderColor} flex flex-col ${pkg.featured ? 'lg:py-12' : ''}`}>
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`px-4 py-1 rounded-full text-xs font-medium ${
                    pkg.color === 'primary' ? 'bg-primary/20 text-primary' :
                    pkg.color === 'secondary' ? 'bg-secondary/20 text-secondary' :
                    'bg-accent/20 text-accent'
                  }`}>
                    {pkg.badge}
                  </span>
                </div>

                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`w-14 h-14 rounded-xl ${pkg.gradient} flex items-center justify-center mx-auto mb-4`}>
                    <pkg.icon className={`w-7 h-7 text-${pkg.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-1">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground">{pkg.subtitle}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl font-bold font-heading">
                      {pkg.price.initial}
                    </span>
                    {pkg.price.initialMax && (
                      <span className="text-muted-foreground">–{pkg.price.initialMax}</span>
                    )}
                  </div>
                  {pkg.price.monthly !== 'Custom' && (
                    <>
                      <div className="text-sm text-muted-foreground mb-1">initial setup</div>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-2xl font-bold font-heading text-primary">
                          {pkg.price.monthly}
                        </span>
                        {pkg.price.monthlyMax && (
                          <span className="text-muted-foreground">–{pkg.price.monthlyMax}</span>
                        )}
                        <span className="text-sm text-muted-foreground">{pkg.price.period}</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">maintenance</div>
                    </>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground text-center mb-6">
                  {pkg.description}
                </p>

                {/* Target Audience */}
                <div className="mb-6 p-4 rounded-lg bg-surface/50">
                  <p className="text-xs text-muted-foreground">
                    <span className="text-foreground font-medium">Best for:</span> {pkg.targetAudience}
                  </p>
                </div>

                {/* Services */}
                <div className="space-y-4 mb-6 flex-grow">
                  {pkg.services.map((service) => (
                    <div key={service.name}>
                      <h4 className="text-sm font-semibold mb-2">{service.name}</h4>
                      <ul className="space-y-1.5">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className={`w-4 h-4 text-${pkg.color} flex-shrink-0 mt-0.5`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mb-6 p-4 rounded-lg bg-surface/50">
                  <ul className="space-y-1">
                    {pkg.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm">
                        <Check className={`w-4 h-4 text-${pkg.color} flex-shrink-0`} />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="https://calendly.com/availlogic/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-lg font-medium text-center transition-all flex items-center justify-center gap-2 ${
                    pkg.name === 'Growth'
                      ? 'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 shadow-lg shadow-primary/25'
                      : pkg.name === 'Starter'
                      ? 'bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30'
                      : 'bg-accent/10 text-accent hover:bg-accent/20 border border-accent/30'
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold font-heading text-center mb-12">
            How It <span className="gradient-text">Works</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 relative">
                  <item.icon className="w-8 h-8 text-primary" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold font-heading text-center mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-6 text-muted-foreground">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass-card p-12 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Book a free 30-minute discovery call to discuss your specific needs and find the perfect AI solution for your business.
            </p>
            <a
              href="https://calendly.com/availlogic/book"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Schedule Your Call
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
