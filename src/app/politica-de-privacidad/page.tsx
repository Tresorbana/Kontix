import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Caribbean Ventures. Conozca cómo protegemos su información personal.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function PoliticaDePrivacidadPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navigation />
      <section className="pt-28 sm:pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <header className="space-y-2">
            <h1 className="text-3xl font-bold">Caribbean Ventures</h1>
            <h2 className="text-2xl font-semibold">Política de Privacidad</h2>
          </header>

          <p>
            En Caribbean Ventures, nos comprometemos a respetar y proteger la privacidad de nuestros usuarios.
            Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos la información personal
            que usted nos proporciona a través de nuestro sitio web.
          </p>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold">Recopilación de Información</h3>
            <p>
              Recopilamos información personal únicamente cuando es necesaria para ofrecerle nuestros servicios y
              mejorar su experiencia. La información recopilada puede incluir, entre otros, datos de contacto y de
              navegación. Nos comprometemos a no vender, compartir ni divulgar su información personal sin su
              consentimiento, salvo en los casos en que lo exija la ley.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold">Seguridad de la Información</h3>
            <p>
              Implementamos medidas de seguridad para proteger sus datos contra el acceso no autorizado, pérdida o
              alteración.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold">Aceptación de la Política</h3>
            <p>
              Al utilizar nuestro sitio web, usted acepta los términos de esta política de privacidad.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold">Contacto</h3>
            <p>
              Si tiene alguna duda o consulta sobre cómo manejamos su información personal, no dude en contactarnos
              a través de nuestros canales de comunicación.
            </p>
            <p className="text-sm text-gray-300">
              Dirección: Santo Domingo, República Dominicana
              <br />
              Correo: contact@caribbean.ventures
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
