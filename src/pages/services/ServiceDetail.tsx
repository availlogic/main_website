import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Wrench, Lightbulb, ArrowRight } from 'lucide-react';
import { getServiceBySlug } from '../../data/servicesData';
import { Mermaid } from '../../components/Mermaid';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-deep pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="btn-primary inline-flex items-center gap-2">
            Back to Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-deep pt-24 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
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
            to="/services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mb-16"
        >
          {/* Icon */}
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
            <service.icon className={`w-8 h-8 text-${service.color}`} />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            {service.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Detailed Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-primary" />
                Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                {service.longDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Architecture Diagram */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold font-heading mb-6">
                System Architecture
              </h2>
              <div className="bg-surface/50 rounded-xl p-6 overflow-x-auto flex justify-center">
                <div className="w-full lg:max-w-xl">
                  <Mermaid chart={service.architectureDiagram} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Quick Info */}
          <div className="space-y-6">
            {/* Key Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold font-heading mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-primary" />
                Key Capabilities
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Use Cases */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold font-heading mb-4">
                Common Use Cases
              </h3>
              <ul className="space-y-3">
                {service.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{useCase}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold font-heading mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-surface-light/50 text-xs text-muted-foreground font-mono"
                  >
                    {tech}
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
                Interested in This Solution?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Let's discuss how we can help implement this for your specific needs.
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


      </div>
    </div>
  );
}
