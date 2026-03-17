import { motion } from 'framer-motion';
import { TrendingUp, Users, Cog, ArrowRight, Sparkles } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Predictive Analytics & Forecasting',
    description: 'Build data pipelines and ML environments to accurately forecast demand, anticipate failures, and drive proactive decision-making.',
    features: [
      'Demand forecasting models',
      'Anomaly detection systems',
      'Predictive maintenance pipelines',
      'Real-time analytics'
    ],
    color: 'primary',
    gradient: 'from-primary/20 to-primary/5'
  },
  {
    icon: Users,
    title: 'Customer Intelligence & Personalisation',
    description: 'Engineer unified customer data platforms to predict behavior, segment audiences, and deliver real-time personalisation.',
    features: [
      'Customer data platforms',
      'Behavioral prediction models',
      'Segmentation engines',
      'Recommendation systems'
    ],
    color: 'secondary',
    gradient: 'from-secondary/20 to-secondary/5'
  },
  {
    icon: Cog,
    title: 'Intelligent Process Automation',
    description: 'Design and implement automated workflows combining AI-based decisioning with RPA to enhance productivity and accuracy.',
    features: [
      'Workflow automation',
      'AI decision engines',
      'Document processing',
      'Process optimization'
    ],
    color: 'accent',
    gradient: 'from-accent/20 to-accent/5'
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
            Engineering the Foundation for Your{' '}
            <span className="gradient-text">Data & AI Strategy</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            I provide the engineering expertise to build robust data workflows and prepare your organisation for advanced analytics and AI.
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
              <div className="glass-card h-full p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 text-${service.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold font-heading mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
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
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
