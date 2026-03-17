import { motion } from 'framer-motion';
import { CheckCircle2, Users, Zap, Shield, ArrowRight } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Direct Access',
    description: 'No middlemen. You work directly with a senior data engineer with 15+ years of experience.',
    highlight: 'Direct'
  },
  {
    icon: Zap,
    title: 'Agile & Pragmatic',
    description: 'Clear roadmaps and agile implementation. See value quickly without getting lost in jargon.',
    highlight: 'Fast'
  },
  {
    icon: Shield,
    title: 'Business-Focused',
    description: 'I architect data infrastructure that reduces costs, drives revenue, and improves efficiency.',
    highlight: 'ROI'
  }
];

const comparison = [
  {
    title: 'Traditional Agency',
    issues: [
      'Expensive overhead costs',
      'Junior developers handling your project',
      'Slow communication through account managers',
      'Fixed contracts with limited flexibility',
      'Generic solutions'
    ],
    className: 'border-red-500/30'
  },
  {
    title: 'AvailLogic',
    advantages: [
      'Senior-level expertise at competitive rates',
      'Direct collaboration with the expert',
      'Fast, responsive communication',
      'Flexible engagement models',
      'Tailored solutions for your specific needs'
    ],
    className: 'border-primary'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-deep via-surface/30 to-slate-deep" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
            Your Engineering Partner for{' '}
            <span className="gradient-text">Data & AI</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            I translate complex technical requirements into tangible business value. My expertise is building the foundational systems that make your data team successful.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 text-center hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {benefit.highlight}
              </div>
              <h3 className="text-xl font-semibold font-heading mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold font-heading text-center mb-8">
            The <span className="text-red-500">Traditional</span> vs <span className="text-primary">AvailLogic</span> Approach
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Traditional Agency */}
            <div className={`glass-card p-6 border-2 ${comparison[0].className}`}>
              <h4 className="text-lg font-semibold font-heading mb-4 text-red-400">
                {comparison[0].title}
              </h4>
              <ul className="space-y-3">
                {comparison[0].issues.map((issue) => (
                  <li key={issue} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <span className="text-muted-foreground text-sm">{issue}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AvailLogic */}
            <div className={`glass-card p-6 border-2 ${comparison[1].className} glow-primary`}>
              <h4 className="text-lg font-semibold font-heading mb-4 text-primary">
                {comparison[1].title}
              </h4>
              <ul className="space-y-3">
                {comparison[1].advantages.map((advantage) => (
                  <li key={advantage} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://calendly.com/availlogic/book"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Schedule a Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
