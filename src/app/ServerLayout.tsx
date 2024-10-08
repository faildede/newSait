import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Rubik } from 'next/font/google';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/parallax';


config.autoAddCss = false;

const rubik = Rubik({
  weight: ['400'],
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
  variable: '--font-rubik',
});

export const metadata = {
  title: "gamma-ltd",
  description: "Generated by create next app",
};

export default function ServerLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${rubik.className} ${rubik.variable}`}>
      <body>
        {children}

      </body>
    </html>
  );
}
