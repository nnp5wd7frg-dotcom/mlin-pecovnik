import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const display=Playfair_Display({subsets:['latin'],variable:'--font-display'});
const body=Inter({subsets:['latin'],variable:'--font-body'});
export const metadata:Metadata={title:'Mlin Pečovnik | Dejan Pečovnik s.p.',description:'Profesionalna spletna stran za Mlin Pečovnik, Dejan Pečovnik s.p., Mlinska ulica 28, 2313 Fram.',metadataBase:new URL('https://mlin-pecovnik.si')};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="sl"><body className={`${display.variable} ${body.variable} font-body`}><Header/>{children}<Footer/></body></html>}
