import { GlassCard } from "../GlassCard"

export function TermsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#529989]/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[#204A3B] mb-4">Terms of Service</h1>
          <p className="text-[#204A3B]/80">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <GlassCard>
            <div className="prose prose-sm max-w-none">
              <div className="bg-[#879153]/10 border border-[#879153]/20 rounded-lg p-6 mb-8">
                <p className="text-[#204A3B] m-0">
                  <strong>Important Notice:</strong> This is a placeholder for
                  the official Terms of Service document. The actual Terms of
                  Service should be drafted by legal counsel and will be
                  provided soon.
                </p>
              </div>

              <article>
                <section className="mb-8">
                  <h2 className="text-[#204A3B] mb-4">Agreement to Terms</h2>
                  <p className="text-[#204A3B]/80 mb-4">
                    By accessing and using the Colaborasolutions website and
                    services, you agree to be bound by these Terms of Service
                    and all applicable laws and regulations. If you do not agree
                    with any of these terms, you are prohibited from using this
                    site.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[#204A3B] mb-4">Use of Services</h2>

                  <h3 className="text-[#204A3B] mb-3 mt-6">For Job Seekers</h3>
                  <p className="text-[#204A3B]/80 mb-4">
                    When applying for positions through our platform, you agree
                    to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#204A3B]/80 mb-4">
                    <li>
                      Provide accurate and truthful information in all
                      applications
                    </li>
                    <li>Update your information promptly if it changes</li>
                    <li>
                      Maintain professional conduct throughout the placement
                      process
                    </li>
                    <li>
                      Comply with all requirements of employers we connect you
                      with
                    </li>
                  </ul>

                  <h3 className="text-[#204A3B] mb-3 mt-6">For Employers</h3>
                  <p className="text-[#204A3B]/80 mb-4">
                    When using our staffing services, you agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#204A3B]/80">
                    <li>Provide accurate job descriptions and requirements</li>
                    <li>
                      Comply with all applicable employment laws and regulations
                    </li>
                    <li>
                      Treat all candidates fairly and without discrimination
                    </li>
                    <li>
                      Communicate placement decisions and feedback in a timely
                      manner
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-[#204A3B] mb-4">Service Scope</h2>
                  <p className="text-[#204A3B]/80 mb-4">
                    Colaborasolutions specializes in staffing for Agriculture
                    and General Labor industries. We do not provide staffing
                    services for Construction or similar heavy industrial
                    sectors at this time.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[#204A3B] mb-4">Intellectual Property</h2>
                  <p className="text-[#204A3B]/80 mb-4">
                    The content, features, and functionality of our website are
                    owned by Colaborasolutions and are protected by copyright,
                    trademark, and other intellectual property laws. You may not
                    reproduce, distribute, or create derivative works without
                    our express written permission.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[#204A3B] mb-4">
                    Privacy and Data Protection
                  </h2>
                  <p className="text-[#204A3B]/80 mb-4">
                    Your use of our services is also governed by our Privacy
                    Policy. Please review our Privacy Policy to understand how
                    we collect, use, and protect your information.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[#204A3B] mb-4">
                    Limitation of Liability
                  </h2>
                  <p className="text-[#204A3B]/80 mb-4">
                    While we strive to provide quality staffing services,
                    Colaborasolutions shall not be liable for any indirect,
                    incidental, special, consequential, or punitive damages
                    resulting from your use of our services.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[#204A3B] mb-4">
                    Employment Relationship
                  </h2>
                  <p className="text-[#204A3B]/80 mb-4">
                    Colaborasolutions acts as an intermediary connecting job
                    seekers with employers. The employment relationship exists
                    between the worker and the employer. We are not responsible
                    for the actions, decisions, or conduct of either party after
                    placement.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[#204A3B] mb-4">Termination</h2>
                  <p className="text-[#204A3B]/80 mb-4">
                    We reserve the right to terminate or suspend access to our
                    services immediately, without prior notice, for any
                    violation of these Terms of Service or for any other reason
                    we deem appropriate.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[#204A3B] mb-4">Changes to Terms</h2>
                  <p className="text-[#204A3B]/80 mb-4">
                    We reserve the right to modify these Terms of Service at any
                    time. Changes will be effective immediately upon posting to
                    the website. Your continued use of our services after
                    changes are posted constitutes acceptance of the modified
                    terms.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[#204A3B] mb-4">Governing Law</h2>
                  <p className="text-[#204A3B]/80 mb-4">
                    These Terms shall be governed by and construed in accordance
                    with the laws of [Your State/Jurisdiction], without regard
                    to its conflict of law provisions.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[#204A3B] mb-4">Contact Information</h2>
                  <p className="text-[#204A3B]/80 mb-2">
                    If you have any questions about these Terms of Service,
                    please contact us:
                  </p>
                  <p className="text-[#204A3B]/80">
                    Email:{" "}
                    <a
                      href="mailto:legal@colaborasolutions.com"
                      className="text-[#529989] hover:underline"
                    >
                      legal@colaborasolutions.com
                    </a>
                    <br />
                    Phone:{" "}
                    <a
                      href="tel:+15307126359"
                      className="text-[#529989] hover:underline"
                    >
                      (530)712-6359
                    </a>
                  </p>
                </section>

                <section>
                  <h2 className="text-[#204A3B] mb-4">Acknowledgment</h2>
                  <p className="text-[#204A3B]/80">
                    By using our services, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms of Service.
                  </p>
                </section>
              </article>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  )
}
