import { motion } from 'framer-motion';
import { ArrowRight, Building2, LineChart, Database, Clock, Percent } from 'lucide-react';

const caseStudies = [
  {
    icon: Building2,
    title: 'Powering a Retail Giant',
    category: 'Retail & E-commerce',
    challenge: 'A major European retail conglomerate needed a 360-degree customer view and unified data assets across 200+ stores.',
    solution: 'Built a real-time data lakehouse architecture integrating POS, CRM, and web analytics data with automated ETL pipelines.',
    results: [
      { icon: Database, value: '500TB+', label: 'Data Unified' },
      { icon: Clock, value: '80%', label: 'Faster Reporting' },
      { icon: Percent, value: '35%', label: 'Conversion Increase' }
    ],
    tags: ['Data Engineering', 'Snowflake', 'Python', 'dbt'],
    color: 'primary'
  },
  {
    icon: LineChart,
    title: 'Real-Time AI for Financial Services',
    category: 'Financial Services',
    challenge: 'A leading financial institution needed to augment their legacy marketing platform with intelligent, event-driven customer engagement.',
    solution: 'Designed and implemented an AI "brain" using machine learning models for customer behavior prediction and real-time decisioning.',
    results: [
      { icon: Percent, value: '94%', label: 'Prediction Accuracy' },
      { icon: Clock, value: '<100ms', label: 'Response Time' },
      { icon: Building2, value: '2.5M+', label: 'Customers Covered' }
    ],
    tags: ['Machine Learning', 'Kafka', 'Python', 'AWS'],
    color: 'secondary'
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

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
            Proven <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how I've helped businesses like yours succeed with data. Each project is a testament to practical, business-focused engineering.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Left - Content */}
                <div className="lg:col-span-3 p-6 lg:p-8">
                  {/* Category & Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-${study.color}/20 flex items-center justify-center`}>
                      <study.icon className={`w-5 h-5 text-${study.color}`} />
                    </div>
                    <span className="text-sm text-muted-foreground">{study.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold font-heading mb-4">
                    {study.title}
                  </h3>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">Challenge</h4>
                      <p className="text-muted-foreground text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">Solution</h4>
                      <p className="text-muted-foreground text-sm">{study.solution}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-surface-light/50 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right - Results */}
                <div className="lg:col-span-2 bg-surface/50 border-t lg:border-t-0 lg:border-l border-white/10 p-6 lg:p-8">
                  <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                    Key Results
                  </h4>
                  <div className="space-y-4">
                    {study.results.map((result) => (
                      <div key={result.label} className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-${result.icon === Database ? 'primary' : result.icon === Clock ? 'secondary' : 'accent'}/20 flex items-center justify-center flex-shrink-0`}>
                          <result.icon className={`w-5 h-5 text-${result.icon === Database ? 'primary' : result.icon === Clock ? 'secondary' : 'accent'}`} />
                        </div>
                        <div>
                          <div className="text-2xl font-bold font-heading">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-center text-sm text-muted-foreground mb-8">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex gap-8 items-center justify-center flex-wrap">
              {['Python', 'TensorFlow', 'PyTorch', 'AWS', 'Azure', 'Snowflake', 'PostgreSQL', 'Kafka', 'Docker', 'Kubernetes', 'React', 'Node.js'].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-surface border border-white/10 text-muted-foreground font-mono text-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
