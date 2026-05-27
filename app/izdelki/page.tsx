import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

const products = [
  {
    name: 'Pšenična moka',
    image: '/psenicnamoka.jpg',
  },
  {
    name: 'Polnozrnata moka',
    image: '/polnozrnatamoka.jpg',
  },
  {
    name: 'Koruzna moka',
    image: '/koruznamoka.jpg',
  },
  {
    name: 'Ajdova moka',
    image: '/ajdovamoka.webp',
  },
  {
    name: 'Mlevske mešanice',
    image: '/mlevskamoka.jpg',
  },
  {
    name: 'Krmne surovine',
    image: '/krma.jpeg',
  },
];

export default function Products() {
  return (
    <main>
      <PageHero
        eyebrow="Izdelki"
        title="Moka in mlevski izdelki za vsakdanjo uporabo."
        text="Ponudba je predstavljena kot profesionalen katalog. Dejanske izdelke, pakiranja in cene lahko kasneje enostavno prilagodite."
      />

      <section className="section bg-white">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product.name}
              className="card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-8">
                <h2 className="text-3xl font-black">
                  {product.name}
                </h2>

                <p className="text-ink/70 mt-3">
                  Kakovosten mlevski izdelek za domačo in profesionalno uporabo.
                  Za več informacij in ponudbo nas kontaktirajte.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}