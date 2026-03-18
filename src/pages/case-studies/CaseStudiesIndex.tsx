import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, TrendingUp, Clock, DollarSign, Users, Target, ArrowUp, ArrowDown, Zap } from 'lucide-react';
import { caseStudies } from '../../data/caseStudiesData';

export default function CaseStudiesIndex() {
  return (
    <div className="min-h-screen bg-slate-deep pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-white/10 mb-6">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Case Studies Ammunition</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Real Results. <span className="gradient-text">Hard Numbers.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every case study tells a story of transformation. These aren't hypothetical projections—they're documented outcomes from real engagements. Each one follows the STAR framework: Situation, Task, Action, Result. Because hard data speaks louder than promises.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {[
              { icon: DollarSign, value: '$2.6M+', label: 'Total Client Savings', color: 'text-primary' },
              { icon: TrendingUp, value: '89%', label: 'Average Efficiency Gain', color: 'text-secondary' },
              { icon: Clock, value: '95%', label: 'Faster Time-to-Value', color: 'text-accent' },
              { icon: Users, value: '4.8/5', label: 'Average CSAT Score', color: 'text-primary' }
            ].map((stat, idx) => (
              <div key={idx} className="glass-card p-6 text-center">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className={`text-3xl font-bold font-heading ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12">
        <div className="container-custom">
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/case-studies/${study.slug}`}>
                  <div className="glass-card overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group">
                    <div className="grid lg:grid-cols-5 gap-0">
                      {/* Left - Content */}
                      <div className="lg:col-span-3 p-6 lg:p-8">
                        {/* Meta */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.gradient} flex items-center justify-center`}>
                            <study.icon className={`w-6 h-6 text-${study.color}`} />
                          </div>
                          <div>
                            <span className="text-xs text-muted-foreground">{study.industry}</span>
                            <div className="text-sm font-medium text-primary">{study.serviceName}</div>
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl lg:text-3xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">
                          {study.title}
                        </h2>

                        {/* Subtitle */}
                        <p className="text-lg text-muted-foreground mb-6">{study.subtitle}</p>

                        {/* STAR Preview */}
                        <div className="grid md:grid-cols-4 gap-4 mb-6">
                          <div className="p-4 bg-surface/50 rounded-lg">
                            <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Situation</div>
                            <p className="text-sm text-muted-foreground line-clamp-2">{study.situation.substring(0, 100)}...</p>
                          </div>
                          <div className="p-4 bg-surface/50 rounded-lg">
                            <div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2">Task</div>
                            <p className="text-sm text-muted-foreground line-clamp-2">{study.task.substring(0, 100)}...</p>
                          </div>
                          <div className="p-4 bg-surface/50 rounded-lg">
                            <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Action</div>
                            <p className="text-sm text-muted-foreground line-clamp-2">{study.actions[0].substring(0, 100)}...</p>
                          </div>
                          <div className="p-4 bg-surface/50 rounded-lg border border-primary/30">
                            <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Result</div>
                            <p className="text-sm text-muted-foreground line-clamp-2">{study.result.substring(0, 100)}...</p>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {study.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1.5 rounded-full bg-surface-light/50 text-xs text-muted-foreground font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right - Key Metrics */}
                      <div className="lg:col-span-2 bg-surface/50 border-t lg:border-t-0 lg:border-l border-white/10 p-6 lg:p-8">
                        <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
                          Key Impact Metrics
                        </div>

                        <div className="space-y-6">
                          {study.metrics.slice(0, 3).map((metric, idx) => (
                            <div key={idx}>
                              <div className="text-xs text-muted-foreground mb-2">{metric.label}</div>
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-lg text-red-400 line-through">{metric.before}</span>
                                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                                <span className="text-xl font-bold font-heading text-primary">{metric.after}</span>
                              </div>
                              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                {metric.isPositive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                                {metric.improvement}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10">
                          <div className="flex items-center gap-2 mb-4">
                            <Users className="w-4 h-4 text-primary" />
                            <span className="text-sm text-muted-foreground">Client Testimonial</span>
                          </div>
                          <blockquote className="text-sm text-muted-foreground italic">
                            "{study.keyQuote.substring(0, 120)}..."
                          </blockquote>
                          <div className="text-xs text-primary mt-2">— {study.quoteRole}</div>
                        </div>

                        <div className="mt-6">
                          <div className="btn-primary w-full inline-flex items-center justify-center gap-2 group/btn">
                            Read Full Case Study
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <div className="glass-card p-8 lg:p-12 text-center bg-gradient-to-r from-surface to-surface/50">
              <Zap className="w-12 h-12 mx-auto mb-6 text-primary" />
              <h2 className="text-2xl lg:text-3xl font-bold font-heading mb-4">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                These case studies represent just a fraction of what's possible. Every business has unique challenges—and unique opportunities for AI-driven transformation. Let's discuss yours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/availlogic/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  Schedule a Discovery Call
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/services" className="btn-secondary inline-flex items-center justify-center gap-2">
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
