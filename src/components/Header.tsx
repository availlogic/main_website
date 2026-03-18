import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { services } from '../data/servicesData';
import { caseStudies } from '../data/caseStudiesData';

const serviceItems = services.map(service => ({
  name: service.title,
  href: `/services/${service.slug}`,
  icon: service.icon,
  color: service.color
}));

const caseStudyItems = caseStudies.slice(0, 4).map(study => ({
  title: study.title,
  href: `/case-studies/${study.slug}`,
  icon: study.icon,
  industry: study.industry,
  metric: study.metrics[0]
}));

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.services-dropdown')) {
        setIsServicesOpen(false);
      }
      if (!target.closest('.case-studies-dropdown')) {
        setIsCaseStudiesOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-deep/90 backdrop-blur-xl border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-xl font-bold text-white font-heading">A</span>
            </div>
            <span className="text-xl font-bold font-heading text-foreground">
              Avail<span className="text-primary">Logic</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Home Link */}
            <Link
              to="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative services-dropdown">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsServicesOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 z-50"
                    >
                      <div className="glass-card p-2 border border-white/10">
                        {serviceItems.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface transition-colors group"
                          >
                            <div className={`w-8 h-8 rounded-lg bg-${item.color}/20 flex items-center justify-center`}>
                              <item.icon className={`w-4 h-4 text-${item.color}`} />
                            </div>
                            <span className="text-sm font-medium group-hover:text-primary transition-colors flex-1">
                              {item.name}
                            </span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Case Studies Dropdown */}
            <div className="relative case-studies-dropdown">
              <button
                onClick={() => setIsCaseStudiesOpen(!isCaseStudiesOpen)}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Case Studies
                <ChevronDown className={`w-4 h-4 transition-transform ${isCaseStudiesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isCaseStudiesOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsCaseStudiesOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-96 z-50"
                    >
                      <div className="glass-card p-2 border border-white/10">
                        {caseStudyItems.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => setIsCaseStudiesOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                              <item.icon className="w-4 h-4 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs text-muted-foreground">{item.industry}</div>
                              <div className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-1">
                                {item.title}
                              </div>
                            </div>
                            <div className="text-xs text-primary font-medium flex-shrink-0">
                              {item.metric.improvement}
                            </div>
                          </Link>
                        ))}
                        <div className="border-t border-white/10 mt-2 pt-2 px-4 py-2">
                          <Link
                            to="/case-studies"
                            onClick={() => setIsCaseStudiesOpen(false)}
                            className="flex items-center justify-between text-sm text-primary font-medium hover:underline"
                          >
                            View All Case Studies
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <a
              href="/#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="/#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://calendly.com/availlogic/book"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/5"
            >
              <div className="py-6 space-y-4">
                {/* Home Link */}
                <div className="px-4">
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                </div>

                {/* Services Section */}
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 mb-2">
                    Services
                  </div>
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <item.icon className={`w-4 h-4 text-${item.color}`} />
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  ))}
                </div>

                {/* Case Studies Section */}
                <div className="border-t border-white/5 pt-4">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 mb-2">
                    Case Studies
                  </div>
                  {caseStudyItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <item.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm">{item.industry}</span>
                    </Link>
                  ))}
                  <Link
                    to="/case-studies"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 text-primary font-medium"
                  >
                    View All Case Studies
                  </Link>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <a
                    href="/#about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="/#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <a
                    href="https://calendly.com/availlogic/book"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mx-4 inline-flex items-center gap-2"
                  >
                    Let's Talk
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
