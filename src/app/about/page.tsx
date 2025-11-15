'use client';

import React from 'react';
import { FadeIn } from '@/components/animations/ScrollAnimations';
import { useLanguage } from '@/contexts/LanguageContext';

function AboutPage() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#f8a725] via-[#f8b84c] to-[#f8c973] bg-clip-text text-transparent">
                {t('aboutPage.heroTitle')}
              </h1>
              <p className="text-xl text-yellow-100/90 max-w-3xl mx-auto">
                {t('aboutPage.heroSubtitle')}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('aboutPage.ourStory')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#f8a725] to-[#f8c973] mx-auto mb-8"></div>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                {t('aboutPage.ourStoryContent')}
              </p>
            </div>
          </FadeIn>
          
          {/* Mission Section */}
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('aboutPage.ourMission')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#f8a725] to-[#f8c973] mx-auto mb-8"></div>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                {t('aboutPage.missionContent')}
              </p>
            </div>
          </FadeIn>
          
          {/* Values Section */}
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('aboutPage.ourValues')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#f8a725] to-[#f8c973] mx-auto mb-12"></div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {t('aboutPage.values', []).map((value: any, index: number) => (
                  <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#f8a725]/30 transition-colors">
                    <h3 className="text-2xl font-bold text-[#f8a725] mb-3">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f8a725]/10 to-[#f8b84c]/10">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('aboutPage.readyToPartner')}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              {t('aboutPage.ctaText')}
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-gradient-to-r from-[#f8a725] to-[#f8b84c] text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
            >
              {t('aboutPage.contactUs')}
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
                      { title: 'Innovation', description: 'Embracing creativity and forward-thinking solutions' },
                      { title: 'Community', description: 'Uplifting the people of the Caribbean' },
                      { title: 'Collaboration', description: 'Believing in collective progress through partnerships' },
                    ].map((value, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-[#f8a725]/10 p-2 rounded-lg mr-4">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#f8a725] to-[#f8c973] flex items-center justify-center text-black font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-yellow-50">{value.title}</h4>
                          <p className="text-gray-400 text-sm">{value.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#f8a725] to-[#f8c973] mx-auto mb-8"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed to unlock the Caribbean's full potential
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Investment Facilitation',
                  description: 'Connecting global investors with high-potential Caribbean opportunities in real estate, renewable energy, and technology.'
                },
                {
                  title: 'Business Advisory',
                  description: 'Expert guidance on market entry, business strategy, and regulatory compliance across the region.'
                },
                {
                  title: 'Strategic Partnerships',
                  description: 'Building ecosystems that connect local businesses with global investors and thought leaders.'
                },
                {
                  title: 'Capacity Building',
                  description: 'Empowering regional talent through training, mentorship, and skills development programs.'
                }
              ].map((service, index) => (
                <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-[#f8a725]/30 transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="w-12 h-12 bg-[#f8a725]/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#f8a725] to-[#f8c973] flex items-center justify-center text-black font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-50">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#f8a725] to-[#f8c973] mx-auto mb-8"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Measuring success through sustainable growth and community empowerment
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: 'People',
                  description: 'Creating jobs, building skills, and empowering local communities across the Caribbean.'
                },
                {
                  title: 'Planet',
                  description: 'Promoting renewable energy, sustainable tourism, and eco-conscious development.'
                },
                {
                  title: 'Prosperity',
                  description: 'Ensuring economic growth benefits both investors and local communities.'
                }
              ].map((impact, index) => (
                <div key={index} className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                  <div className="w-16 h-16 bg-[#f8a725]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#f8a725] to-[#f8c973] flex items-center justify-center text-black font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-50">{impact.title}</h3>
                  <p className="text-gray-400">{impact.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f8a725]/5 to-[#f8c973]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to be part of the Caribbean's transformation?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join us in building a more prosperous, sustainable future for the Caribbean region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#" 
                  className="px-8 py-4 bg-gradient-to-r from-[#f8a725] to-[#f8c973] text-black font-medium rounded-lg hover:shadow-lg hover:shadow-[#f8a725]/30 transition-all duration-300 hover:scale-105"
                >
                  Get in Touch
                </a>
                <a 
                  href="#" 
                  className="px-8 py-4 border border-gray-600 text-white font-medium rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                >
                  Explore Our Services
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
