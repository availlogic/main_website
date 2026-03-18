import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote, Clock, DollarSign, Users, TrendingUp, ArrowUp, ArrowDown, Zap, Target, CheckCircle2 } from 'lucide-react';
import { getCaseStudyBySlug, caseStudies } from '../../data/caseStudiesData';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!study) {
    return (
      <div className="min-h-screen bg-slate-deep pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/case-studies" className="btn-primary inline-flex items-center gap-2">
            Back to Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  const relatedStudies = caseStudies.filter(cs => cs.id !== study.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-slate-deep pt-24 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />

      <div className="container-custom relative z-10">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mb-12"
        >
          {/* Meta */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${study.gradient} flex items-center justify-center`}>
              <study.icon className={`w-8 h-8 text-${study.color}`} />
            </div>
            <div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>{study.industry}</span>
                <span>•</span>
                <span>{study.companySize}</span>
                <span>•</span>
                <span>{study.duration}</span>
              </div>
              <Link to={`/services/${study.serviceSlug}`} className="text-sm text-primary hover:underline">
                {study.serviceName}
              </Link>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
            {study.title}
          </h1>
          <p className="text-xl text-muted-foreground">{study.subtitle}</p>
        </motion.div>

        {/* Key Metrics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {study.metrics.map((metric, idx) => (
            <div key={idx} className="glass-card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <metric.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold font-heading text-primary mb-1">{metric.after}</div>
              <div className="text-xs text-muted-foreground mb-2">{metric.label}</div>
              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {metric.isPositive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                {metric.improvement}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - STAR Narrative */}
          <div className="lg:col-span-2 space-y-8">
            {/* Situation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">S</span>
                </div>
                <h2 className="text-2xl font-bold font-heading">Situation</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {study.situation}
              </p>
            </motion.div>

            {/* Task */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-secondary">T</span>
                </div>
                <h2 className="text-2xl font-bold font-heading">Task</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {study.task}
              </p>
            </motion.div>

            {/* Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-accent">A</span>
                </div>
                <h2 className="text-2xl font-bold font-heading">Action</h2>
              </div>
              <ul className="space-y-4">
                {study.actions.map((action, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{action}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Result */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-card p-8 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">R</span>
                </div>
                <h2 className="text-2xl font-bold font-heading">Result</h2>
              </div>
              <p className="text-foreground leading-relaxed whitespace-pre-line font-medium">
                {study.result}
              </p>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="glass-card p-8 bg-gradient-to-r from-surface to-surface/50"
            >
              <Quote className="w-10 h-10 text-primary mb-4" />
              <blockquote className="text-xl text-foreground italic mb-6 leading-relaxed">
                "{study.keyQuote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">{study.quoteAuthor}</div>
                  <div className="text-sm text-muted-foreground">{study.quoteRole}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Before/After Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold font-heading mb-6">Before vs. After</h3>
              <div className="space-y-6">
                {study.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex-1">
                        <div className="h-8 rounded-l-lg bg-red-500/20 flex items-center justify-center">
                          <span className="text-sm text-red-400 line-through">{metric.before}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="h-8 rounded-r-lg bg-primary/20 flex items-center justify-center">
                          <span className="text-sm text-primary font-semibold">{metric.after}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {metric.isPositive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                        {metric.improvement}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold font-heading mb-4">Key Highlights</h3>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-surface-light/50 text-xs text-muted-foreground font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card p-6 border-primary/30"
            >
              <h3 className="text-lg font-semibold font-heading mb-4">
                Want Similar Results?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Let's discuss how I can achieve this for your business.
              </p>
              <a
                href="https://calendly.com/availlogic/book"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                Schedule a Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Related Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold font-heading mb-8 text-center">More Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedStudies.map((relatedStudy) => (
              <Link
                key={relatedStudy.id}
                to={`/case-studies/${relatedStudy.slug}`}
                className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${relatedStudy.gradient} flex items-center justify-center flex-shrink-0`}>
                    <relatedStudy.icon className={`w-6 h-6 text-${relatedStudy.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground mb-1">{relatedStudy.industry}</div>
                    <h3 className="font-semibold font-heading mb-2 group-hover:text-primary transition-colors">
                      {relatedStudy.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      Read Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
