import {
    Wheat,
    Factory,
    MapPin,
    Phone,
    Mail,
    ShieldCheck,
  } from 'lucide-react';
  
  export const company = {
    name: 'Mlin Pečovnik',
    legal: 'Dejan Pečovnik s.p.',
    address: 'Mlinska ulica 28, 2313 Fram, Slovenija',
    phone: '+386 41 380 201',
    email: 'pecovnik.dejan@gmail.com',
  };
  
  export const nav = [
    {
      href: '/',
      label: 'Domov',
    },
    {
      href: '/o-nas',
      label: 'O nas',
    },
    {
      href: '/mlin',
      label: 'Mlin',
    },
    {
      href: '/izdelki',
      label: 'Izdelki',
    },
    {
      href: '/lokacija',
      label: 'Lokacija',
    },
    {
      href: '/kontakt',
      label: 'Kontakt',
    },
  ];
  
  export const highlights = [
    {
      title: 'Mlinska tradicija',
      text: 'Domač odnos do žita, moke in strank iz lokalnega okolja.',
      icon: Wheat,
    },
    {
      title: 'Natančna predelava',
      text: 'Skrb za kakovostno mletje, čisto proizvodnjo in zanesljivo dobavo.',
      icon: Factory,
    },
    {
      title: 'Fram in okolica',
      text: 'Mlin stoji na Mlinska ulica 28, 2313 Fram.',
      icon: MapPin,
    },
  ];
  
  export const products = [
    'Pšenična moka',
    'Polnozrnata moka',
    'Koruzna moka',
    'Ajdova moka',
    'Mlevske mešanice',
    'Krmne surovine',
  ];
  
  export const values = [
    {
      title: 'Kakovost',
      text: 'Vsaka vreča moke mora biti zanesljiva osnova za dober kruh, pecivo ali domačo kuhinjo.',
    },
    {
      title: 'Dostopnost',
      text: 'Jasen kontakt, lokalna prisotnost in prijazen dogovor za prevzem ali povpraševanje.',
    },
    {
      title: 'Odgovornost',
      text: 'Spoštovanje surovine, urejene proizvodnje in poštenega odnosa do kupcev.',
    },
  ];
  
  export const contactTiles = [
    {
      title: 'Telefon',
      text: company.phone,
      icon: Phone,
    },
    {
      title: 'E-pošta',
      text: company.email,
      icon: Mail,
    },
    {
      title: 'Naslov',
      text: company.address,
      icon: MapPin,
    },
    {
      title: 'Zaupanje',
      text: 'Domače podjetje z osebnim pristopom.',
      icon: ShieldCheck,
    },
  ];