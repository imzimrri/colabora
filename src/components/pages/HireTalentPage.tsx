import { useState, FormEvent } from "react"
import { CheckCircle, Clock, Users, Shield } from "lucide-react"
import { PrimaryButton } from "../PrimaryButton"
import { GlassCard } from "../GlassCard"
import { ContactCard } from "../ContactCard"

export function HireTalentPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    staffingNeed: "",
    timeline: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  )
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required"
    }
    if (!formData.contactName.trim()) {
      newErrors.contactName = "Contact name is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }
    if (!formData.staffingNeed) {
      newErrors.staffingNeed = "Please select a staffing need"
    }
    if (!formData.timeline) {
      newErrors.timeline = "Please select a timeline"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        staffingNeed: "",
        timeline: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    }, 500)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const benefits = [
    {
      icon: Users,
      title: "Vetted Local Talent",
      description:
        "Access to pre-screened, qualified workers from your local community",
    },
    {
      icon: Clock,
      title: "Quick Placement",
      description:
        "Fast turnaround times to fill your staffing needs efficiently",
    },
    {
      icon: Shield,
      title: "Fewer Administrative Burden",
      description:
        "Colabora is the employer or record, we will manage HR, payroll, taxes, and compliance",
    },
    {
      icon: CheckCircle,
      title: "Flexibility",
      description:
        "You can hire for specific projects or seasons, and you have the option for a temp-to-hire conversion if requested",
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#529989]/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[#204A3B] mb-6">
            Find Reliable Talent for Your Business
          </h1>
          <p className="text-[#204A3B]/80 max-w-2xl mx-auto">
            Colaborasolutions connects you with skilled, vetted workers ready to
            meet your agriculture and general labor staffing needs. Experience
            fast, professional placements backed by local expertise.
          </p>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8"
        aria-labelledby="benefits-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="benefits-heading"
            className="text-[#204A3B] text-center mb-12"
          >
            Why Partner With Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <GlassCard key={index} className="text-center">
                  <Icon
                    className="text-[#529989] mx-auto mb-4"
                    size={40}
                    aria-hidden="true"
                  />
                  <h3 className="text-[#204A3B] mb-3">{benefit.title}</h3>
                  <p className="text-[#204A3B]/80 text-sm">
                    {benefit.description}
                  </p>
                </GlassCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* Inquiry Form and Contact Section */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#529989]/5"
        aria-labelledby="inquiry-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <h2 id="inquiry-heading" className="text-[#204A3B] mb-6">
                Request Staffing Information
              </h2>

              {formStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                  <CheckCircle
                    className="text-green-600 flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <div>
                    <p className="text-green-800">
                      <strong>Thank you for your inquiry!</strong>
                    </p>
                    <p className="text-green-700 text-sm mt-1">
                      We've received your request and will contact you within 1
                      business day.
                    </p>
                  </div>
                </div>
              )}

              <GlassCard>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-[#204A3B] mb-2"
                      >
                        Company Name{" "}
                        <span className="text-red-500" aria-label="required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) =>
                          handleInputChange("companyName", e.target.value)
                        }
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.companyName
                            ? "border-red-500"
                            : "border-[#204A3B]/20"
                        } bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent`}
                        aria-required="true"
                        aria-invalid={!!errors.companyName}
                        aria-describedby={
                          errors.companyName ? "companyName-error" : undefined
                        }
                      />
                      {errors.companyName && (
                        <p
                          id="companyName-error"
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.companyName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contactName"
                        className="block text-[#204A3B] mb-2"
                      >
                        Contact Name{" "}
                        <span className="text-red-500" aria-label="required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        value={formData.contactName}
                        onChange={(e) =>
                          handleInputChange("contactName", e.target.value)
                        }
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.contactName
                            ? "border-red-500"
                            : "border-[#204A3B]/20"
                        } bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent`}
                        aria-required="true"
                        aria-invalid={!!errors.contactName}
                        aria-describedby={
                          errors.contactName ? "contactName-error" : undefined
                        }
                      />
                      {errors.contactName && (
                        <p
                          id="contactName-error"
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.contactName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[#204A3B] mb-2"
                      >
                        Email Address{" "}
                        <span className="text-red-500" aria-label="required">
                          *
                        </span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email
                            ? "border-red-500"
                            : "border-[#204A3B]/20"
                        } bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent`}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[#204A3B] mb-2"
                      >
                        Phone Number{" "}
                        <span className="text-red-500" aria-label="required">
                          *
                        </span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.phone
                            ? "border-red-500"
                            : "border-[#204A3B]/20"
                        } bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent`}
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                      />
                      {errors.phone && (
                        <p
                          id="phone-error"
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="staffingNeed"
                        className="block text-[#204A3B] mb-2"
                      >
                        Staffing Need{" "}
                        <span className="text-red-500" aria-label="required">
                          *
                        </span>
                      </label>
                      <select
                        id="staffingNeed"
                        value={formData.staffingNeed}
                        onChange={(e) =>
                          handleInputChange("staffingNeed", e.target.value)
                        }
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.staffingNeed
                            ? "border-red-500"
                            : "border-[#204A3B]/20"
                        } bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent`}
                        aria-required="true"
                        aria-invalid={!!errors.staffingNeed}
                        aria-describedby={
                          errors.staffingNeed ? "staffingNeed-error" : undefined
                        }
                      >
                        <option value="">Select a category</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="processing">Processing Plant</option>
                        <option value="general-labor">General Labor</option>
                        <option value="multiple">Multiple Categories</option>
                      </select>
                      {errors.staffingNeed && (
                        <p
                          id="staffingNeed-error"
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.staffingNeed}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-[#204A3B] mb-2"
                      >
                        When Do You Need Staff?{" "}
                        <span className="text-red-500" aria-label="required">
                          *
                        </span>
                      </label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) =>
                          handleInputChange("timeline", e.target.value)
                        }
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.timeline
                            ? "border-red-500"
                            : "border-[#204A3B]/20"
                        } bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent`}
                        aria-required="true"
                        aria-invalid={!!errors.timeline}
                        aria-describedby={
                          errors.timeline ? "timeline-error" : undefined
                        }
                      >
                        <option value="">Select timeline</option>
                        <option value="immediately">Immediately</option>
                        <option value="1-2-weeks">1-2 Weeks</option>
                        <option value="1-month">1 Month</option>
                        <option value="flexible">Flexible</option>
                      </select>
                      {errors.timeline && (
                        <p
                          id="timeline-error"
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors.timeline}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-[#204A3B] mb-2"
                    >
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-[#204A3B]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent resize-none"
                      placeholder="Tell us more about your staffing needs..."
                    />
                  </div>

                  <PrimaryButton type="submit" fullWidth>
                    Submit Inquiry
                  </PrimaryButton>
                </form>
              </GlassCard>
            </div>

            {/* Direct Contact Details */}
            <div className="lg:col-span-1">
              <h3 className="text-[#204A3B] mb-6">Prefer to Talk?</h3>
              <ContactCard />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
