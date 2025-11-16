import Image from "next/image";

// Data for the foundation cards. This approach makes the component cleaner and easier to update.
const foundationData = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&h=667&fit=crop&auto=format&q=80",
    subtitle: "ATENCIÓN INTEGRAL",
    title: "Atención integral",
    listItems: [
      "Ofrecemos un servicio completo que cubre todas las áreas necesarias",
      "Para que su empresa pueda crecer y prosperar sin preocuparse por los detalles operativos",
      "Coordinamos cada aspecto para que usted se enfoque en la estrategia de su negocio",
      "Acompañamiento cercano y continuo en cada etapa",
    ],
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1000&h=667&fit=crop&auto=format&q=80",
    subtitle: "NUESTRA VENTAJA COMPETITIVA",
    title: "¿Por qué elegirnos?",
    listItems: [
      "Atención integral",
      "Equipo legal y contable altamente capacitado",
      "Soluciones personalizadas",
      "Experiencia local e internacional",
    ],
  },
];

// The arrow icon is used in both cards.
const arrowIconSrc =
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/085e3073-cfac-4c74-97c3-0370505bf369-kontix-webflow-io/assets/svgs/68749ece601a251f2eb40b39_Group%201597883626-17.svg?";

const StrongFoundations = () => {
  return (
    <section className="bg-background text-foreground py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <p className="font-semibold tracking-[0.2em] uppercase text-primary text-sm mb-4">
            NUESTRA VENTAJA
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Ofrecemos soluciones estratégicas y personalizadas para ayudar a su negocio a alcanzar el éxito
          </h2>
        </div>

        <div className="divide-y divide-border">
          {foundationData.map((item, index) => (
            <div key={index} className="py-12 group">
              <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start md:items-center">
                <div className="w-full md:w-5/12">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    width={498}
                    height={332}
                    className="object-cover rounded-lg w-full aspect-[3/2]"
                  />
                </div>
                <div className="w-full md:w-7/12">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-muted uppercase tracking-widest text-xs font-bold">
                        {item.subtitle}
                      </p>
                      <h3 className="text-2xl lg:text-3xl font-bold mt-2 text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <a
                      href="/contact"
                      aria-label={`Contáctanos sobre ${item.title}`}
                      className="bg-primary flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110"
                    >
                      <Image
                        src={arrowIconSrc}
                        alt="arrow icon"
                        width={16}
                        height={16}
                      />
                    </a>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {item.listItems.map((listItem, i) => (
                      <li key={i} className="flex items-start text-muted">
                        <span className="text-primary mr-3 text-2xl leading-tight font-bold">
                          &bull;
                        </span>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrongFoundations;