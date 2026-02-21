import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  slug: string;
  image: string;
  title: string;
  description: string;
}

const PortfolioSection = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      slug: 'consultoria-empresarial',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=900&fit=crop&auto=format&q=80',
      title: t('portfolio.items.item1.title'),
      description: t('portfolio.items.item1.description'),
    },
    {
      slug: 'gestion-administrativa',
      image: 'https://images.unsplash.com/photo-1634117622592-114e3024ff27?w=800&h=900&fit=crop&auto=format&q=80',
      title: t('portfolio.items.item2.title'),
      description: t('portfolio.items.item2.description'),
    },
  ];

  return (
    <section className="bg-white py-[100px]">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="text-[#666666] text-sm font-medium tracking-[0.2em] uppercase mb-2">
            {t('portfolio.sectionTitle')}
          </div>
          <h2 className="text-[40px] font-semibold leading-[1.3] text-[#121212] max-w-[580px]">
            {t('portfolio.title')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link href="/contact" key={project.slug} className="group block">
              <div className="relative rounded-[20px] overflow-hidden aspect-[588/665]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-white/90 backdrop-blur-[5px] p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-end">
                  <div className="absolute top-6 right-6 w-11 h-11 bg-primary rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#121212] mb-1">{project.title}</h3>
                    <p className="text-base text-[#666666]">{project.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;