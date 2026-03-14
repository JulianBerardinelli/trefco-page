import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'La empresa',
      href: getPermalink('/about'),
    },
    {
      text: 'Productos',
      href: getPermalink('/productos'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Solicitar cotización', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Empresa',
      links: [
        { text: 'Quiénes somos', href: getPermalink('/about') },
        { text: 'Calidad y normas', href: getPermalink('/about#calidad') },
        { text: 'Misión y visión', href: getPermalink('/about#mision-vision') },
      ],
    },
    {
      title: 'Productos',
      links: [
        { text: 'Alambres de cobre', href: getPermalink('/productos#cobre') },
        { text: 'Alambres de aluminio', href: getPermalink('/productos#aluminio') },
        { text: 'Cuerdas', href: getPermalink('/productos#cuerdas') },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'trefco@trefco.com.ar', href: 'mailto:trefco@trefco.com.ar' },
        { text: '11 4201 4735', href: 'tel:+541142014735' },
        { text: '11 2649 0109', href: 'tel:+541126490109' },
      ],
    },
    {
      title: 'Ubicación',
      links: [
        { text: 'Dean Funes 450 / 52, Avellaneda', href: getPermalink('/contact') },
        { text: 'Provincia de Buenos Aires', href: getPermalink('/contact') },
        { text: 'Administración: 8 a 16 hs', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terms') },
    { text: 'Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `
    TREFCO · Industria metalúrgica · Avellaneda, Buenos Aires.
  `,
};
