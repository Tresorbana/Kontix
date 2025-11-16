import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso del sitio web de Caribbean Ventures.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function TerminosYCondicionesPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navigation />
      <section className="pt-28 sm:pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <header className="space-y-2">
            <h1 className="text-3xl font-bold">Caribbean Ventures</h1>
            <h2 className="text-2xl font-semibold">Términos y Condiciones</h2>
          </header>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold">Aceptación de los Términos</h3>
            <p>
              Al acceder o utilizar el sitio web de Caribbean Ventures (en adelante, "el Sitio"), ubicado en
              https://caribbean.ventures usted acepta cumplir con estos Términos y Condiciones de Uso (en adelante,
              "Términos"). Si no está de acuerdo con alguna de las disposiciones de estos Términos, le solicitamos
              que se abstenga de utilizar el Sitio.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold">Modificaciones de los Términos</h3>
            <p>
              Caribbean Ventures se reserva el derecho de modificar o actualizar estos Términos en cualquier momento,
              sin previo aviso. Cualquier cambio será efectivo de inmediato al ser publicado en el Sitio. Le
              recomendamos que consulte regularmente esta sección para mantenerse informado sobre los posibles cambios.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold">Uso del Sitio</h3>
            <p>
              El Sitio está destinado únicamente para fines legales y de acuerdo con las leyes de la República
              Dominicana. Usted se compromete a utilizar el Sitio de manera responsable y a no infringir los derechos
              de propiedad intelectual, ni realizar actividades que puedan dañar, deshabilitar, sobrecargar o
              deteriorar el Sitio o interferir con el uso y disfrute del mismo por parte de otros usuarios.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold">Propiedad Intelectual</h3>
            <p>
              Todo el contenido disponible en el Sitio, incluidos pero no limitados a textos, gráficos, imágenes,
              logotipos, videos, software, códigos y otros materiales, son propiedad de Caribbean Ventures o de sus
              respectivos propietarios y están protegidos por leyes de propiedad intelectual. No se permite la
              reproducción, distribución, modificación o uso de cualquier contenido del Sitio sin el permiso previo por
              escrito de Caribbean Ventures.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold">Responsabilidad Limitada</h3>
            <p>
              Caribbean Ventures no garantiza la disponibilidad continua o libre de errores del Sitio. No se hace
              responsable por daños directos, indirectos, incidentales, especiales o consecuentes que puedan surgir del
              uso del Sitio, incluyendo la pérdida de datos, ingresos o cualquier otro daño económico o no económico,
              incluso si se ha advertido a la empresa de la posibilidad de tales daños.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold">Enlaces a Sitios de Terceros</h3>
            <p>
              El Sitio puede contener enlaces a otros sitios web de terceros. Estos enlaces se proporcionan solo para
              su conveniencia y no implican que Caribbean Ventures apruebe o respalde el contenido de dichos sitios.
              Caribbean Ventures no se hace responsable de los contenidos, políticas de privacidad o prácticas de los
              sitios de terceros.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold">Terminación del Acceso</h3>
            <p>
              Caribbean Ventures se reserva el derecho de suspender o terminar su acceso al Sitio en cualquier momento
              y por cualquier motivo, sin previo aviso, si se considera que ha violado estos Términos.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold">Ley Aplicable y Jurisdicción</h3>
            <p>
              Estos Términos se regirán e interpretarán de acuerdo con las leyes de la República Dominicana. Cualquier
              disputa que surja en relación con el uso del Sitio será resuelta en los tribunales competentes de la
              República Dominicana.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold">Contacto</h3>
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
