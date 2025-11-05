import { Phone, Mail, MapPin } from "lucide-react"
import { GlassCard } from "./GlassCard"

export function ContactCard() {
  return (
    <GlassCard>
      <h3 className="text-[#204A3B] mb-6">Get in Touch</h3>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Phone
            className="text-[#529989] mt-1 flex-shrink-0"
            size={20}
            aria-hidden="true"
          />
          <div>
            <p className="text-sm text-[#204A3B]/60 mb-1">Phone</p>
            <a
              href="tel:+15307126359"
              className="text-[#204A3B] hover:text-[#529989] transition-colors"
              aria-label="Call us at +1 (530) 712-6359"
            >
              +1 (530) 712-6359
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail
            className="text-[#529989] mt-1 flex-shrink-0"
            size={20}
            aria-hidden="true"
          />
          <div>
            <p className="text-sm text-[#204A3B]/60 mb-1">Email</p>
            <a
              href="mailto:info@colaborasolutions.com"
              className="text-[#204A3B] hover:text-[#529989] transition-colors break-all"
              aria-label="Email us at info@colaborasolutions.com"
            >
              info@colaborasolutions.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin
            className="text-[#529989] mt-1 flex-shrink-0"
            size={20}
            aria-hidden="true"
          />
          <div>
            <p className="text-sm text-[#204A3B]/60 mb-1">Address</p>
            <a
              href="geo:37.7749,-122.4194"
              className="text-[#204A3B] hover:text-[#529989] transition-colors"
              aria-label="View our location on map"
            >
              75 Declaration Drive
              <br />
              Suite 14
              <br />
              Chico, CA 95973
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-[#204A3B]/10">
        <p className="text-sm text-[#204A3B]/80">
          <strong>Business Hours:</strong>
          <br />
          Monday - Friday: 8:00 AM - 5:00 PM
          <br />
          Saturday - Sunday: Closed
        </p>
      </div>
    </GlassCard>
  )
}
