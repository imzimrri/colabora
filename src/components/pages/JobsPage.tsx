
import {
  ArrowRight,
  CheckCircle,
  Download,
  FileText,
  Mail,
  MapPin,
  UserCheck,
} from "lucide-react"
import fw4Pdf from "../../assets/fw4.pdf"
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
    <main>
      {/* Hero/CTA Block */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#529989]/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#204A3B] mb-6 md:text-5xl">
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
            <div className="bg-white/50 rounded-lg overflow-hidden">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeVnixvjsMlVQrF3gCFZIHlsvXE-iSxn6bM9nk4X0229hNBRQ/viewform?embedded=true"
                width="100%"
                height="1345"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Job Application Form"
              >
                Loading…
              </iframe>
            </div>
          </GlassCard>

          <div className="flex items-center justify-center py-16">
            <span className="bg-[#529989]/20 h-px w-24"></span>
            <span className="mx-4 text-[#204A3B] font-bold text-3xl">W4 Form</span>
            <span className="bg-[#529989]/20 h-px w-24"></span>
          </div>

          <GlassCard>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-[#204A3B] mb-6 text-center">
                Submit Manually
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#529989]/10 rounded-lg shrink-0">
                      <Download className="text-[#529989]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#204A3B] mb-1">
                        1. Download Form
                      </h4>
                      <p className="text-[#204A3B]/80 text-sm mb-3">
                        Download and complete our employment form.
                      </p>
                      <a
                        href={fw4Pdf}
                        download="Colabora-Empoloyment-Form.pdf"
                        className="inline-flex items-center gap-2 text-[#529989] font-medium hover:text-[#204A3B] transition-colors"
                      >
                        Download PDF <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#529989]/10 rounded-lg shrink-0">
                      <Mail className="text-[#529989]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#204A3B] mb-1">
                        2. Email Us
                      </h4>
                      <p className="text-[#204A3B]/80 text-sm mb-2">
                        Send your completed form to:
                      </p>
                      <a
                        href="mailto:info@colaborasolutions.com"
                        className="text-[#529989] font-medium hover:underline block break-all"
                      >
                        info@colaborasolutions.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#529989]/5 p-6 rounded-xl border border-[#529989]/10 h-full">
                  <div className="p-2 bg-[#529989]/10 rounded-lg shrink-0">
                    <MapPin className="text-[#529989]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#204A3B] mb-2">
                      Drop Off In Person
                    </h4>
                    <p className="text-[#204A3B]/80 text-sm mb-4">
                      You can also print your completed form and bring it to our
                      office:
                    </p>
                    <address className="not-italic text-[#204A3B] font-medium bg-white/50 p-4 rounded-lg border border-[#529989]/10">
                      75 Declaration Drive
                      <br />
                      Suite 14
                      <br />
                      Chico, CA 95973
                    </address>
                  </div>
                </div>
              </div>
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
                href="mailto:info@colaborasolutions.com"
                className="text-[#529989] hover:underline"
              >
                info@colaborasolutions.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
