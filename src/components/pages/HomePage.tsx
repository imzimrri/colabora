import { Sprout, Package, Users } from "lucide-react"
import { PrimaryButton } from "../PrimaryButton"
import { GlassCard } from "../GlassCard"

interface HomePageProps {
  onNavigate: (page: string) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#529989]/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-[#204A3B] mb-6">
              Connecting reliable local talent with essential industries
            </h1>
            <p className="text-[#204A3B]/80 mb-8 max-w-2xl mx-auto">
              Colaborasolution specializes in staffing solutions for Agriculture
              and General Labor sectors, providing simple, modern connections
              between skilled workers and businesses across Northern California.
            </p>
          </div>
        </div>
      </section>

      {/* Dual CTA Block */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2 id="cta-heading" className="sr-only">
            Choose your path
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Job Seeker CTA */}
            <GlassCard className="text-center hover:shadow-xl transition-shadow">
              <Users
                className="text-[#529989] mx-auto mb-4"
                size={48}
                aria-hidden="true"
              />
              <h2 className="text-[#204A3B] mb-4">Looking for Work?</h2>
              <p className="text-[#204A3B]/80 mb-6">
                Find opportunities in agriculture, processing plants, and
                general labor. Start your application today and connect with
                local employers.
              </p>
              <PrimaryButton
                onClick={() => onNavigate("jobs")}
                fullWidth
                aria-label="Go to job applications page"
              >
                Apply Now
              </PrimaryButton>
            </GlassCard>

            {/* Employer CTA */}
            <GlassCard className="text-center hover:shadow-xl transition-shadow">
              <Package
                className="text-[#879153] mx-auto mb-4"
                size={48}
                aria-hidden="true"
              />
              <h2 className="text-[#204A3B] mb-4">Need Reliable Staff?</h2>
              <p className="text-[#204A3B]/80 mb-6">
                Access our pool of vetted, skilled workers ready for agriculture
                and general labor roles. Get the staffing support your business
                needs.
              </p>
              <PrimaryButton
                onClick={() => onNavigate("hire-talent")}
                variant="secondary"
                fullWidth
                aria-label="Go to talent hiring page"
              >
                Hire Talent
              </PrimaryButton>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Industry Niche Section */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#529989]/5"
        aria-labelledby="industries-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="industries-heading" className="text-[#204A3B] mb-4">
              Our Industry Focus
            </h2>
            <p className="text-[#204A3B]/80 max-w-2xl mx-auto">
              We specialize in connecting talent with opportunities in these
              essential industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Agriculture */}
            <GlassCard className="text-center">
              <Sprout
                className="text-[#529989] mx-auto mb-4"
                size={40}
                aria-hidden="true"
              />
              <h3 className="text-[#204A3B] mb-3">Agriculture</h3>
              <p className="text-[#204A3B]/80 text-sm">
                Farm workers, harvesters, equipment operators, and agricultural
                processing for seasonal and year-round positions.
              </p>
            </GlassCard>

            {/* Processing */}
            <GlassCard className="text-center">
              <Package
                className="text-[#529989] mx-auto mb-4"
                size={40}
                aria-hidden="true"
              />
              <h3 className="text-[#204A3B] mb-3">Processing Plants</h3>
              <p className="text-[#204A3B]/80 text-sm">
                Food processing, packaging, quality control, and warehouse roles
                in processing facilities and distribution centers.
              </p>
            </GlassCard>

            {/* General Labor */}
            <GlassCard className="text-center">
              <Users
                className="text-[#529989] mx-auto mb-4"
                size={40}
                aria-hidden="true"
              />
              <h3 className="text-[#204A3B] mb-3">General Labor</h3>
              <p className="text-[#204A3B]/80 text-sm">
                Assembly, warehouse operations, maintenance, and general
                workforce needs across various industries.
              </p>
            </GlassCard>
          </div>

          <div className="mt-8 p-4 bg-[#879153]/10 rounded-lg border border-[#879153]/20">
            <p className="text-center text-[#204A3B]/90 text-sm">
              <strong>Please note:</strong> At this time, we do not provide
              staffing for Construction or similar heavy industrial sectors. Our
              focus remains on Agriculture and General Labor opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        aria-labelledby="about-snippet-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="about-snippet-heading" className="text-[#204A3B] mb-6">
                Why Choose Colaborasolutions?
              </h2>
              <p className="text-[#204A3B]/80 mb-4">
                Founded by Daniela and Juan, professionals with deep roots in
                staffing and workforce management, Colaborasolutions brings
                years of experience connecting local talent with essential
                industries.
              </p>
              <p className="text-[#204A3B]/80 mb-6">
                We understand the unique needs of both job seekers and employers
                in agriculture and general labor sectors. Our streamlined
                approach ensures fast, reliable placements that benefit
                everyone.
              </p>
              <PrimaryButton
                onClick={() => onNavigate("about")}
                aria-label="Learn more about us"
              >
                Learn More About Us
              </PrimaryButton>
            </div>

            <GlassCard>
              <div className="aspect-video bg-gradient-to-br from-[#529989]/20 to-[#879153]/20 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <Users
                    className="text-[#529989] mx-auto mb-4"
                    size={64}
                    aria-hidden="true"
                  />
                  <p className="text-[#204A3B]">
                    Connecting People, Building Communities
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </main>
  )
}