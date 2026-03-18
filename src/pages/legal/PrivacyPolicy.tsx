import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground">
              Last Updated: 24 October 2025
            </p>
            <p className="text-muted-foreground mt-2">
              <strong>Company:</strong> AvailLogic ("we", "our", or "us")
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              <strong>Registered in:</strong> Ireland
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                AvailLogic respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website, contact us, or engage our AI professional services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">2. Data We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect and process:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                <li><strong>Contact information:</strong> name, email address, company name, telephone number.</li>
                <li><strong>Business correspondence:</strong> project enquiries, service requests, and communications.</li>
                <li><strong>Technical data:</strong> IP address, browser type, operating system, usage analytics (via cookies or analytics tools).</li>
                <li><strong>Service data:</strong> information voluntarily supplied to enable us to deliver our services.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">3. How We Use Your Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use personal data to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                <li>Respond to enquiries and manage service requests.</li>
                <li>Deliver and support professional engagements.</li>
                <li>Improve our website and operations.</li>
                <li>Maintain legal, accounting, and compliance records.</li>
                <li>Fulfil contractual and regulatory obligations under GDPR.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We <strong>do not</strong> sell, rent, or trade personal data to third parties.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">4. Legal Basis for Processing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Processing is based on:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                <li><strong>Contractual necessity</strong> – to perform our obligations.</li>
                <li><strong>Legitimate interest</strong> – to manage our business effectively.</li>
                <li><strong>Legal obligation</strong> – to comply with Irish and EU regulations.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">5. Data Storage & Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                All data are stored securely on EU-based or GDPR-compliant cloud infrastructure. We employ administrative, technical, and physical measures to protect data from unauthorised access, loss, or alteration.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">6. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                Personal data are retained only as long as necessary for the purposes stated or as required by law.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">7. Your Rights under GDPR</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                <li>Access and obtain a copy of your data.</li>
                <li>Request correction or erasure.</li>
                <li>Restrict or object to processing.</li>
                <li>Request data portability.</li>
                <li>Withdraw consent at any time.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Requests may be sent to <a href="mailto:info@availlogic.com" className="text-primary hover:underline">info@availlogic.com</a>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">8. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our site may link to external websites. AvailLogic is not responsible for their content or privacy practices.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">9. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Email:</strong> <a href="mailto:info@availlogic.com" className="text-primary hover:underline">info@availlogic.com</a>
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                <strong>Company:</strong> AvailLogic, Ireland
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
