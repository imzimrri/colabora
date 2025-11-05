import { Heart, Target, Users, Award } from 'lucide-react';
import { GlassCard } from '../GlassCard';

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Trust & Integrity",
      description: "We build lasting relationships based on honesty, transparency, and ethical practices in every placement."
    },
    {
      icon: Target,
      title: "Industry Focus",
      description: "Our specialized expertise in agriculture and general labor ensures we understand your unique needs."
    },
    {
      icon: Users,
      title: "Community First",
      description: "We're committed to strengthening local communities by connecting neighbors with opportunities."
    },
    {
      icon: Award,
      title: "Quality & Reliability",
      description: "Every candidate is carefully vetted to ensure they meet our high standards and your expectations."
    }
  ];

  return (
    <main className="pt-20">
      {/* Mission Statement Block */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#529989]/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[#204A3B] text-center mb-8">About Colaborasolutions</h1>
          
          <GlassCard className="mb-8">
            <blockquote className="text-center">
              <p className="text-[#204A3B] italic mb-4">
                "Our mission is to connect reliable local talent with essential industries through 
                simple, modern staffing solutions that benefit both workers and employers. We believe 
                in the power of meaningful work to transform lives and strengthen communities."
              </p>
              <footer className="text-[#204A3B]/70">
                — Daniela & Juan, Founders
              </footer>
            </blockquote>
          </GlassCard>
        </div>
      </section>

      {/* Leadership/Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="leadership-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="leadership-heading" className="text-[#204A3B] text-center mb-12">
            Meet Our Founders
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Team Photo Placeholder */}
            <GlassCard>
              <div className="aspect-square bg-gradient-to-br from-[#529989]/20 to-[#879153]/20 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <Users className="text-[#529989] mx-auto mb-4" size={80} aria-hidden="true" />
                  <p className="text-[#204A3B]">Daniela & Juan</p>
                  <p className="text-[#204A3B]/60 text-sm">Co-Founders</p>
                </div>
              </div>
            </GlassCard>

            {/* Story */}
            <div>
              <h3 className="text-[#204A3B] mb-4">Our Story</h3>
              
              <div className="space-y-4 text-[#204A3B]/80">
                <p>
                  Colaborasolutions was founded by Daniela and Juan, two professionals with deep roots 
                  in workforce management and staffing solutions. With over 15 combined years of experience 
                  in the industry, they recognized a critical gap in how agriculture and general labor 
                  businesses connect with qualified local talent.
                </p>
                
                <p>
                  Daniela brings extensive experience in human resources and talent acquisition, having 
                  worked with both small businesses and larger organizations to build effective teams. 
                  Her expertise in understanding employer needs and matching them with the right candidates 
                  forms the backbone of our placement process.
                </p>
                
                <p>
                  Juan's background in operations and workforce coordination in agricultural and processing 
                  environments gives him unique insight into the daily challenges businesses face. He 
                  understands what it takes to build reliable, productive teams in fast-paced, demanding 
                  work environments.
                </p>
                
                <p>
                  Together, they've created Colaborasolutions to streamline the staffing process, eliminate 
                  unnecessary complexity, and deliver results that benefit everyone involved. Their hands-on 
                  approach ensures that every placement is handled with care, attention to detail, and a 
                  commitment to long-term success.
                </p>
                
                <p>
                  Based in the local community they serve, Daniela and Juan are personally invested in 
                  the success of both the workers they place and the businesses they partner with. This 
                  isn't just a business to them—it's about building stronger communities through meaningful 
                  employment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment & Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#529989]/5" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="values-heading" className="text-[#204A3B] text-center mb-4">
            Our Core Values
          </h2>
          <p className="text-[#204A3B]/80 text-center max-w-2xl mx-auto mb-12">
            These principles guide every decision we make and every relationship we build
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <GlassCard key={index} className="text-center">
                  <Icon className="text-[#529989] mx-auto mb-4" size={40} aria-hidden="true" />
                  <h3 className="text-[#204A3B] mb-3">{value.title}</h3>
                  <p className="text-[#204A3B]/80 text-sm">{value.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Commitment Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="commitment-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="commitment-heading" className="text-[#204A3B] text-center mb-8">
            Our Commitment to You
          </h2>
          
          <GlassCard>
            <div className="space-y-6 text-[#204A3B]/80">
              <div>
                <h3 className="text-[#204A3B] mb-2">For Job Seekers</h3>
                <p className="text-sm">
                  We're committed to treating every candidate with respect and dignity. We take the time 
                  to understand your skills, goals, and preferences to find positions where you can thrive. 
                  Your success is our success, and we're here to support you throughout your employment journey.
                </p>
              </div>
              
              <div>
                <h3 className="text-[#204A3B] mb-2">For Employers</h3>
                <p className="text-sm">
                  We understand that your business depends on reliable, skilled workers. That's why we go 
                  beyond basic resume screening to ensure every candidate we recommend is truly qualified 
                  and ready to contribute. We're not satisfied until you have the team you need to succeed.
                </p>
              </div>
              
              <div>
                <h3 className="text-[#204A3B] mb-2">For Our Community</h3>
                <p className="text-sm">
                  We believe that strong communities are built on meaningful employment opportunities. 
                  By connecting local workers with local businesses, we're contributing to economic stability 
                  and growth right here in our community. We're proud to be part of the solution.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
