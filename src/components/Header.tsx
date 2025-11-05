import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "./Logo"

interface HeaderProps {
  currentPage?: string
  onNavigate: (page: string) => void
}

export function Header({ currentPage = "home", onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "Home", page: "home" },
    { label: "Find Jobs", page: "jobs" },
    { label: "Hire Talent", page: "hire-talent" },
    { label: "About Us", page: "about" },
    { label: "Contact", page: "contact" },
  ]

  const handleNavClick = (page: string) => {
    onNavigate(page)
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className="backdrop-blur-md bg-white/70 border-b border-[#204A3B]/10 shadow-sm"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              aria-label="Go to homepage"
            >
              <Logo className="w-10 h-10" />
              <span className="text-[#204A3B] hidden sm:inline">
                Colaborasolutions
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-8"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`transition-colors ${
                    currentPage === item.page
                      ? "text-[#529989]"
                      : "text-[#204A3B] hover:text-[#529989]"
                  }`}
                  aria-current={currentPage === item.page ? "page" : undefined}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:+15307126359"
                className="text-[#529989] hover:text-[#204A3B] transition-colors"
                aria-label="Call us at 530-712-6359"
              >
                (530) 712-6359
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#204A3B] hover:text-[#529989] transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav
              className="md:hidden py-4 border-t border-[#204A3B]/10"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.page}
                    onClick={() => handleNavClick(item.page)}
                    className={`text-left px-4 py-2 transition-colors ${
                      currentPage === item.page
                        ? "text-[#529989] bg-[#529989]/10"
                        : "text-[#204A3B] hover:text-[#529989] hover:bg-[#529989]/5"
                    }`}
                    aria-current={
                      currentPage === item.page ? "page" : undefined
                    }
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="tel:+15555551234"
                  className="text-[#529989] px-4 py-2 hover:bg-[#529989]/5 transition-colors"
                  aria-label="Call us at 555-555-1234"
                >
                  📞 (555) 555-1234
                </a>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
