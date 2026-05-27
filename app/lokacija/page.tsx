import PageHero from '@/components/PageHero';
import { company } from '@/lib/data';
export default function Location() {return <main>
    
     <PageHero eyebrow="Lokacija" title="Najdete nas v Framu." text={company.address}/>
    <section className="section bg-white">
        <div className="container grid lg:grid-cols-2 gap-10 items-center"><div>
            <h2 className="text-4xl font-black">Mlin Pečovnik</h2>
            <div className="text-ink/70 mt-4">
            <p className="font-semibold mb-3">Delovni čas:</p>

<div className="space-y-1 max-w-sm">
  <div className="flex justify-between">
    <span>Ponedeljek</span>
    <span>Zaprto</span>
  </div>

  <div className="flex justify-between">
    <span>Torek</span>
    <span>14:00–17:00</span>
  </div>

  <div className="flex justify-between">
    <span>Sreda</span>
    <span>14:00–17:00</span>
  </div>

  <div className="flex justify-between">
    <span>Četrtek</span>
    <span>14:00–17:00</span>
  </div>

  <div className="flex justify-between">
    <span>Petek</span>
    <span>14:00–17:00</span>
  </div>

  <div className="flex justify-between">
    <span>Sobota</span>
    <span>09:00–12:00</span>
  </div>

  <div className="flex justify-between">
    <span>Nedelja</span>
    <span>Zaprto</span>
  </div>
</div>
                </div>
                            <p className="font-bold mt-6">{company.legal}</p>
                                <p>{company.address}</p></div><div className="card overflow-hidden">
                                    <iframe title="Mlin Pečovnik lokacija" src="https://www.google.com/maps?q=Mlinska%20ulica%2028%2C%202313%20Fram%2C%20Slovenija&output=embed" className="w-full h-[420px] border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                                     </iframe>
                                        </div></div>
                                            </section>
                                                </main>}
