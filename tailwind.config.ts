import type { Config } from 'tailwindcss';
const config: Config = {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{colors:{flour:'#F7F1E3',wheat:'#D7A84A',bran:'#7B4E2A',ink:'#1D1D1B',leaf:'#596C39'},fontFamily:{display:['var(--font-display)'],body:['var(--font-body)']},boxShadow:{soft:'0 24px 70px rgba(29,29,27,.12)'}}},plugins:[]};
export default config;
