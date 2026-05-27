import PageHero from '@/components/PageHero';
import { company, contactTiles } from '@/lib/data';

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Kontakt"
        title="Pošljite povpraševanje."
        text="Izpolnite obrazec ali uporabite kontaktne podatke. Obrazec je pripravljen za kasnejšo povezavo z e-pošto ali backendom."
      />

      <section className="section bg-white">
        <div className="container grid lg:grid-cols-2 gap-10">

          <form className="card p-8 space-y-5">
            <input
              className="w-full rounded-2xl border border-bran/15 p-4"
              placeholder="Ime in priimek"
            />

            <input
              className="w-full rounded-2xl border border-bran/15 p-4"
              placeholder="E-pošta"
              type="email"
            />

            <input
              className="w-full rounded-2xl border border-bran/15 p-4"
              placeholder="Zadeva"
            />

            <textarea
              className="w-full rounded-2xl border border-bran/15 p-4 min-h-40"
              placeholder="Sporočilo"
            ></textarea>

            <button
              className="btn btn-primary"
              type="button"
            >
              Pošlji sporočilo
            </button>

            <p className="text-sm text-ink/55">
              Za dejansko pošiljanje obrazca dodaj API route ali storitev,
              kot je Formspree.
            </p>
          </form>

          <div className="grid sm:grid-cols-2 gap-5">
            {contactTiles.map(({ title, text, icon: Icon }) => (
              <div
                className="card p-7"
                key={title}
              >
                <Icon className="text-wheat" />

                <h2 className="font-black text-xl mt-5">
                  {title}
                </h2>

                <p className="text-ink/70 mt-2">
                  {text}
                </p>
              </div>
            ))}

            <div className="sm:col-span-2 card p-7">
              <h2 className="text-2xl font-black">
                Podatki podjetja
              </h2>

              <p className="mt-3">
                {company.name}
              </p>

              <p>
                {company.legal}
              </p>

              <p>
                {company.address}
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}