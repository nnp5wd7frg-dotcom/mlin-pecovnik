import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { highlights, products, values } from '@/lib/data';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <section className="grain min-h-screen flex items-center pt-24">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow">Mlinska kakovost iz Frama</p>

            <h1 className="mt-5 font-display text-6xl md:text-8xl font-black leading-[.9]">
              Tradicija mletja že generacije
            </h1>

            <p className="mt-7 text-xl text-ink/70 max-w-xl">
              Mlin Pečovnik povezuje lokalno tradicijo, urejeno predelavo in
              oseben pristop do kupcev, pekov ter gospodinjstev.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link className="btn btn-primary" href="/izdelki">
                Naši izdelki <ArrowRight size={18} />
              </Link>

              <Link className="btn btn-ghost" href="/kontakt">
                Pošlji povpraševanje
              </Link>
            </div>
          </div>

          <div className="card p-2 overflow-hidden">
          <img
            src="/dejan2.png"
            alt="Mlin Pečovnik"
            className="aspect-[4/5] rounded-[2.2rem] object-cover w-full h-full"
          />
        </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid md:grid-cols-3 gap-6">
          {highlights.map(({ title, text, icon: Icon }) => (
            <div className="card p-8" key={title}>
              <Icon className="text-wheat" size={34} />
              <h3 className="text-2xl font-black mt-6">{title}</h3>
              <p className="text-ink/65 mt-3">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow">O mlinu</p>
            <h2 className="text-5xl md:text-6xl font-black leading-tight mt-4">
              Profesionalen videz za domačo mlevsko zgodbo.
            </h2>
          </div>

          <div>
            <p className="text-lg text-ink/70">
              Stran je zasnovana v premium korporativnem slogu: velik hero,
              jasne kartice, mehke animacije, poudarjena tipografija in mobilna
              navigacija. Vsebina je izvirna in prilagojena Mlinu Pečovnik.
            </p>

            <Link href="/o-nas" className="btn btn-primary mt-8">
              Več o nas
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-ink text-flour">
        <div className="container">
          <p className="eyebrow text-wheat">Izdelki</p>

          <h2 className="text-5xl font-black mt-4">
            Moka in mlevski izdelki
          </h2>

          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {products.map((p) => (
              <div
                className="rounded-3xl border border-white/10 p-7 bg-white/5"
                key={p}
              >
                <h3 className="text-2xl font-black">{p}</h3>

                <p className="text-flour/65 mt-3">
                  Za domačo kuhinjo, pekovsko uporabo ali dogovorjeno dobavo.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <p className="eyebrow">Načela dela</p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {values.map((v) => (
              <div
                className="p-8 border-l-4 border-wheat bg-flour"
                key={v.title}
              >
                <h3 className="text-2xl font-black">{v.title}</h3>
                <p className="mt-3 text-ink/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}