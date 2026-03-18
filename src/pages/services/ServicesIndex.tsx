import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { services } from '../../data/servicesData';

export default function ServicesIndex() {
  return (
    <div className="min-h-screen bg-slate-deep pt-24 pb-20">
      <div className="container-custom">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Services Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            AI-Powered Solutions for{' '}
            <span className="gradient-text">Modern Business</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore my comprehensive range of AI and data services. Each solution is designed to solve real business problems and deliver measurable results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/services/${service.slug}`}>
                <div className="glass-card h-full p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
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
                  <div className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mt-auto">
                    View Details
                    <ArrowRight className="w-4 h-4" />
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
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold font-heading mb-4">
              Not Sure Which Solution Fits Your Needs?
            </h2>
            <p className="text-muted-foreground mb-6">
              Let's discuss your specific challenges. I can help identify the best approach to solve your business problems.
            </p>
            <a
              href="https://calendly.com/availlogic/book"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
