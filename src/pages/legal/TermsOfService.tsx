import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Service Terms
            </h1>
            <p className="text-sm text-muted-foreground">
              Last Updated: 24 October 2025
            </p>
            <p className="text-muted-foreground mt-2">
              <strong>Company:</strong> AvailLogic Ltd., Ireland
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">1. Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms set out the general conditions under which AvailLogic Ltd. ("we", "our", "us") provides Data & AI professional services to clients ("you"). By engaging AvailLogic Ltd., you agree to these Terms governing our consulting, integration, and delivery work.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">2. Nature of Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                AvailLogic Ltd. provides <strong>professional Data & AI consultancy and implementation services</strong>, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                <li>Data pipeline and workflow engineering</li>
                <li>AI model integration and deployment support</li>
                <li>Cloud migration and system integration</li>
                <li>Data architecture and infrastructure design</li>
                <li>Technical advisory and training</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Services are delivered <strong>as professional engagements</strong>, not as off-the-shelf software or licensed products.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">3. Scope of Work</h2>
              <p className="text-muted-foreground leading-relaxed">
                Each project is governed by a <strong>Statement of Work (SOW)</strong> or proposal specifying objectives, deliverables, fees, and timelines. No service is deemed accepted until both parties confirm the SOW in writing.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">4. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unless otherwise agreed:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                <li>Pre-existing tools, methods, or frameworks remain the property of AvailLogic Ltd.</li>
                <li>Deliverables created specifically for the client become the client's property once payment is complete.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">5. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                Both parties must keep all proprietary or sensitive information confidential and use it only for the purpose of the engagement.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">6. Fees & Payments</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fees are invoiced per the SOW. Payment is due within the agreed term. Late payments may result in service suspension or additional charges.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                AvailLogic Ltd. performs all services with reasonable skill and care, but shall not be liable for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                <li>Indirect, consequential, or economic loss;</li>
                <li>Decisions or actions taken based on analytic or AI outputs.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Total liability shall not exceed the total fees paid for the relevant engagement.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">8. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate the engagement with written notice if the other materially breaches these Terms and fails to remedy within a reasonable period.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by and construed in accordance with the <strong>laws of Ireland</strong> and the applicable regulations of the <strong>European Union</strong>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">10. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Email:</strong> <a href="mailto:info@availlogic.com" className="text-primary hover:underline">info@availlogic.com</a>
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                <strong>Company:</strong> AvailLogic Ltd., Ireland
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
