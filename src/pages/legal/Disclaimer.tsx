import { motion } from 'framer-motion';

export default function Disclaimer() {
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
              Disclaimer
            </h1>
            <p className="text-sm text-muted-foreground">
              Last Updated: 24 October 2025
            </p>
            <p className="text-muted-foreground mt-2">
              <strong>Company:</strong> AvailLogic, Ireland
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">1. General Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information on the AvailLogic website is provided for <strong>general informational purposes only</strong>. It does not constitute professional advice or create a client-consultant relationship.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">2. Case Studies and Examples</h2>
              <p className="text-muted-foreground leading-relaxed">
                All case studies, demonstrations, and solution descriptions are <strong>illustrative</strong> and may be based on anonymised or aggregated data. They do not represent specific client results or endorsements.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">3. No Guarantee of Results</h2>
              <p className="text-muted-foreground leading-relaxed">
                While AvailLogic applies professional expertise, we make no warranty regarding the accuracy, completeness, or suitability of information presented. Decisions based on the website's content are made at the user's own risk.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">4. External Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our site may include links to third-party websites. AvailLogic is not responsible for their content, accuracy, or practices.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">5. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                AvailLogic shall not be liable for any direct or indirect loss or damage arising from the use or reliance on website content, examples, or referenced materials.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-heading mb-4 text-primary">6. Contact</h2>
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
