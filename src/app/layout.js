import './globals.css'; 
import { Geist } from 'next/font/google'; // Import only Geist Serif font
import Header from './components/header'; // Import Header component
import Footer from './components/footer'; // Import Footer component

const geist = Geist({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'The Aesthetic Clinic',
  description: 'Professional aesthetic treatments for radiant beauty',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={geist.className}>
        <header>
          <Header />
        </header>

        <main>{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
