import { useState, FormEvent } from "react"
import { CheckCircle } from "lucide-react"
import { PrimaryButton } from "../PrimaryButton"
import { GlassCard } from "../GlassCard"
import { ContactCard } from "../ContactCard"

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  )
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
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
        name: "",
        email: "",
        phone: "",
        subject: "",
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

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#529989]/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[#204A3B] mb-6">Contact Us</h1>
          <p className="text-[#204A3B]/80 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to
            us using the form below or contact us directly using the information
            provided.
          </p>
        </div>
      </section>

      {/* Contact Form and Details */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-form-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Details Card */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <ContactCard />
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <h2 id="contact-form-heading" className="text-[#204A3B] mb-6">
                Send Us a Message
              </h2>

              {formStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                  <CheckCircle
                    className="text-green-600 flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <div>
                    <p className="text-green-800">
                      <strong>Message sent successfully!</strong>
                    </p>
                    <p className="text-green-700 text-sm mt-1">
                      We'll get back to you as soon as possible.
                    </p>
                  </div>
                </div>
              )}

              <GlassCard>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-[#204A3B] mb-2">
                      Your Name{" "}
                      <span className="text-red-500" aria-label="required">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? "border-red-500" : "border-[#204A3B]/20"
                      } bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent`}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-500 text-sm mt-1">
                        {errors.name}
                      </p>
                    )}
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
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="w-full px-4 py-3 rounded-lg border border-[#204A3B]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-[#204A3B] mb-2"
                    >
                      Subject{" "}
                      <span className="text-red-500" aria-label="required">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.subject
                          ? "border-red-500"
                          : "border-[#204A3B]/20"
                      } bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent`}
                      aria-required="true"
                      aria-invalid={!!errors.subject}
                      aria-describedby={
                        errors.subject ? "subject-error" : undefined
                      }
                    />
                    {errors.subject && (
                      <p
                        id="subject-error"
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-[#204A3B] mb-2"
                    >
                      Message{" "}
                      <span className="text-red-500" aria-label="required">
                        *
                      </span>
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message
                          ? "border-red-500"
                          : "border-[#204A3B]/20"
                      } bg-white focus:outline-none focus:ring-2 focus:ring-[#529989] focus:border-transparent resize-none`}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <PrimaryButton type="submit" fullWidth>
                    Send Message
                  </PrimaryButton>
                </form>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8 bg-[#529989]/5"
        aria-labelledby="map-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2 id="map-heading" className="text-[#204A3B] text-center mb-8">
            Visit Our Office
          </h2>

          <GlassCard>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.2356494235314!2d-121.87501012333571!3d39.77211017155045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8082d8eedb03839b%3A0xfdec6d7e26f115ab!2s75%20Declaration%20Dr%20%2314%2C%20Chico%2C%20CA%2095973!5e1!3m2!1sen!2sus!4v1762380215323!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  )
}
