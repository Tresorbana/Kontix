"use client";
import React from "react";
import { Building2, Briefcase, Shield, Globe, Landmark } from "lucide-react";

const logos = [
  { icon: Building2, name: "Creativa" },
  { icon: Briefcase, name: "LunLap" },
  { icon: Shield, name: "Leagone" },
  { icon: Globe, name: "Urban" },
  { icon: Landmark, name: "MARQI" },
];

const ClientLogos = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
      <section className="bg-black border-y border-border">
        <div className="py-20">
          <div className="relative flex overflow-hidden">
            <div className="flex min-w-max flex-shrink-0 animate-marquee items-center">
              {logos.map((logo, index) => (
                <div
                  key={`logo-${index}`}
                  className="flex-shrink-0 px-[65px] flex items-center justify-center gap-3 opacity-50 hover:opacity-100 transition-opacity grayscale"
                >
                  <logo.icon className="w-8 h-8 text-white" />
                  <span className="text-xl font-bold text-white tracking-widest">{logo.name}</span>
                </div>
              ))}
            </div>
            <div
              className="flex min-w-max flex-shrink-0 animate-marquee items-center"
              aria-hidden="true"
            >
              {logos.map((logo, index) => (
                <div
                  key={`logo-duplicate-${index}`}
                  className="flex-shrink-0 px-[65px] flex items-center justify-center gap-3 opacity-50 hover:opacity-100 transition-opacity grayscale"
                >
                  <logo.icon className="w-8 h-8 text-white" />
                  <span className="text-xl font-bold text-white tracking-widest">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientLogos;