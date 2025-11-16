import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Caribbean Ventures. Complete the form and our team will contact you.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navigation />
      <section className="pt-28 sm:pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <header className="mb-8 space-y-2">
            <h1 className="text-3xl font-bold">Contáctanos</h1>
            <p className="text-gray-300">
              Complete el formulario y nuestro equipo de Caribbean Ventures se pondrá en contacto con usted.
            </p>
          </header>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Nombre completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-md border border-gray-700 bg-black/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-md border border-gray-700 bg-black/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-1">
                Empresa
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full rounded-md border border-gray-700 bg-black/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full rounded-md border border-gray-700 bg-black/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Enviar mensaje
            </button>

            <p className="text-xs text-gray-400 mt-4">
              También puede escribirnos directamente a <span className="font-medium">contact@caribbean.ventures</span>
              <br />
              Dirección: Santo Domingo, República Dominicana
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
