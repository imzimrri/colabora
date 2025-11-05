import { GlassCard } from "../GlassCard"

export function PrivacyPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#529989]/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[#204A3B] mb-4">Privacy Policy</h1>
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

      {/* Privacy Policy Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <GlassCard>
            <div className="prose prose-sm max-w-none">
              <div className="bg-[#529989]/10 border border-[#529989]/20 rounded-lg p-6 mb-8">
                <p className="text-[#204A3B] m-0">
                  <strong>Important Notice:</strong> This is a placeholder for
                  the official Privacy Policy document. The actual Privacy
                  Policy should be drafted by legal counsel and will be provided
                  soon.
                </p>
              </div>

              <article>
                <section className="mb-8">
                  <h2 className="text-[#204A3B] mb-4">Introduction</h2>
                  <p className="text-[#204A3B]/80 mb-4">
                    Colaborasolutions ("we," "our," or "us") is committed to
                    protecting your privacy. This Privacy Policy explains how we
                    collect, use, disclose, and safeguard your information when
                    you visit our website and use our services.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[#204A3B] mb-4">
                    Information We Collect
                  </h2>
                  <p className="text-[#204A3B]/80 mb-4">
                    We may collect information about you in a variety of ways.
                    The information we may collect includes:
                  </p>

                  <h3 className="text-[#204A3B] mb-3 mt-6">Personal Data</h3>
                  <p className="text-[#204A3B]/80 mb-4">
                    Information such as your name, email address, phone number,
                    and other contact details that you voluntarily provide when
                    filling out forms on our website.
                  </p>

                  <h3 className="text-[#204A3B] mb-3 mt-6">
                    Employment Information
                  </h3>
                  <p className="text-[#204A3B]/80 mb-4">
                    For job seekers, we collect information relevant to
                    employment placement, including work history, skills,
                    qualifications, and references.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[#204A3B] mb-4">
                    Use of Your Information
                  </h2>
                  <p className="text-[#204A3B]/80 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#204A3B]/80">
                    <li>
                      Process employment applications and facilitate job
                      placements
                    </li>
                    <li>Respond to inquiries and provide customer service</li>
                    <li>
                      Send administrative information and updates about our
                      services
                    </li>
                    <li>
                      Match job seekers with appropriate employment
                      opportunities
                    </li>
                    <li>Connect employers with qualified candidates</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-[#204A3B] mb-4">
                    Disclosure of Your Information
                  </h2>
                  <p className="text-[#204A3B]/80 mb-4">
                    We may share your information in the following
                    circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#204A3B]/80">
                    <li>
                      With potential employers when you apply for positions
                      through our service
                    </li>
                    <li>
                      With service providers who assist in our business
                      operations
                    </li>
                    <li>When required by law or to protect our legal rights</li>
                    <li>With your explicit consent</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-[#204A3B] mb-4">Data Security</h2>
                  <p className="text-[#204A3B]/80 mb-4">
                    We implement appropriate technical and organizational
                    security measures to protect your personal information.
                    However, no electronic transmission or storage method is
                    100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[#204A3B] mb-4">Your Rights</h2>
                  <p className="text-[#204A3B]/80 mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#204A3B]/80">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>
                      Request deletion of your information in certain
                      circumstances
                    </li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-[#204A3B] mb-4">Contact Us</h2>
                  <p className="text-[#204A3B]/80 mb-2">
                    If you have questions about this Privacy Policy, please
                    contact us:
                  </p>
                  <p className="text-[#204A3B]/80">
                    Email:{" "}
                    <a
                      href="mailto:privacy@colaborasolutions.com"
                      className="text-[#529989] hover:underline"
                    >
                      privacy@colaborasolutions.com
                    </a>
                    <br />
                    Phone:{" "}
                    <a
                      href="tel:+15307126359"
                      className="text-[#529989] hover:underline"
                    >
                      1(530)712-6359
                    </a>
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[#204A3B] mb-4">
                    Changes to This Policy
                  </h2>
                  <p className="text-[#204A3B]/80">
                    We may update this Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy
                    on this page and updating the "Last Updated" date.
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
