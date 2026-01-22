
import {
  CheckCircle,
  FileText,
  UserCheck,
} from "lucide-react"
import { PrimaryButton } from "../PrimaryButton"
import { GlassCard } from "../GlassCard"

export function JobsPage() {


  const steps = [
    {
      icon: FileText,
      title: "Fill Out the Form",
      description:
        "Complete our simple application form below. Select your job type preference from the dropdown.",
    },
    {
      icon: UserCheck,
      title: "Initial Screening",
      description:
        "Our team reviews your application and contacts qualified candidates within 2-3 business days.",
    },
    {
      icon: CheckCircle,
      title: "Placement & Onboarding",
      description:
        "Once matched with a position, we'll guide you through the onboarding process.",
    },
  ]

  const scrollToForm = () => {
    document
      .getElementById("application-form")
      ?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="pt-20">
      {/* Hero/CTA Block */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#529989]/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[#204A3B] mb-6">
            Find Your Next Role in Agriculture or General Labor
          </h1>
          <p className="text-[#204A3B]/80 mb-8 max-w-2xl mx-auto">
            Join our network of skilled workers and connect with local employers
            in essential industries. Your next opportunity is just an
            application away.
          </p>
          <PrimaryButton
            onClick={scrollToForm}
            aria-label="Scroll to application form"
          >
            Start Application
          </PrimaryButton>
        </div>
      </section>

      {/* Process Steps */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8"
        aria-labelledby="process-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2 id="process-heading" className="text-[#204A3B] text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <GlassCard key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#529989] text-white mb-4">
                    {index + 1}
                  </div>
                  <Icon
                    className="text-[#529989] mx-auto mb-4"
                    size={32}
                    aria-hidden="true"
                  />
                  <h3 className="text-[#204A3B] mb-3">{step.title}</h3>
                  <p className="text-[#204A3B]/80 text-sm">
                    {step.description}
                  </p>
                </GlassCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}

      {/* Application Embed Section */}
      <section
        id="application-form"
        className="py-16 px-4 sm:px-6 lg:px-8"
        aria-labelledby="application-heading"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 id="application-heading" className="text-[#204A3B] mb-4">
              Submit Your Application
            </h2>
            <p className="text-[#204A3B]/80">
              Please fill out all fields completely. <strong>Important:</strong>{" "}
              Make sure to select your preferred job type from the dropdown menu
              within the form.
            </p>
          </div>

          <GlassCard>
            <div className="bg-white/50 rounded-lg p-8 min-h-[600px] flex flex-col items-center justify-center border-2 border-dashed border-[#529989]/30">
              <FileText
                className="text-[#529989] mb-4"
                size={48}
                aria-hidden="true"
              />
              <h3 className="text-[#204A3B] mb-4">Application Form</h3>
              <p className="text-[#204A3B]/80 text-center mb-6 max-w-md">
                This is where your Google Form would be embedded. To integrate
                your form, replace this section with an iframe containing your
                Google Form embed code.
              </p>
              <div className="bg-[#529989]/10 rounded p-4 max-w-md">
                <p className="text-sm text-[#204A3B]/90">
                  <strong>Integration Instructions:</strong>
                  <br />
                  Add your Google Form iframe here with the following
                  attributes:
                </p>
                <code className="block mt-2 text-xs bg-white/50 p-2 rounded">
                  <iframe
                    src="YOUR_FORM_URL"
                    width="100%"
                    height="800"
                  ></iframe>
                </code>
              </div>
              <a
                href="https://docs.google.com/forms"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-[#529989] hover:text-[#204A3B] underline"
              >
                Create a Google Form →
              </a>
            </div>
          </GlassCard>

          <div className="mt-6 text-center">
            <p className="text-sm text-[#204A3B]/60">
              Having trouble with the form? Contact us directly at{" "}
              <a
                href="tel:+15307126359"
                className="text-[#529989] hover:underline"
              >
                (530) 712-6359
              </a>{" "}
              or{" "}
              <a
                href="mailto:jobs@colaborasolutions.com"
                className="text-[#529989] hover:underline"
              >
                jobs@colaborasolutions.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
