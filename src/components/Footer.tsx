interface FooterProps {
  onNavigate: (page: string) => void
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#655225] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white mb-4">Colaborasolutions</h3>
            <p className="text-white/90 text-sm">
              Connecting reliable local talent with essential industries through
              simple, modern staffing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => onNavigate("home")}
                    className="text-white/90 hover:text-white text-sm transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate("jobs")}
                    className="text-white/90 hover:text-white text-sm transition-colors"
                  >
                    Find Jobs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate("hire-talent")}
                    className="text-white/90 hover:text-white text-sm transition-colors"
                  >
                    Hire Talent
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate("about")}
                    className="text-white/90 hover:text-white text-sm transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate("contact")}
                    className="text-white/90 hover:text-white text-sm transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <address className="not-italic space-y-2 text-sm">
              <p className="text-white/90">
                <a
                  href="tel:+15307126359"
                  className="hover:text-white transition-colors"
                  aria-label="Call us at 530-712-6359"
                >
                  Phone: (530) 712-6359
                </a>
              </p>
              <p className="text-white/90">
                <a
                  href="mailto:info@colaborasolutions.com"
                  className="hover:text-white transition-colors"
                  aria-label="Email us at info@colaborasolutions.com"
                >
                  Email: info@colaborasolutions.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm">
              &copy; {new Date().getFullYear()} Colaborasolutions. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => onNavigate("privacy")}
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => onNavigate("terms")}
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
