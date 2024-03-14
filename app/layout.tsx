// Global styles
import './global.scss'

// Components
import Footer from './components/layout/Footer';

// Metadata
import type { Metadata } from "next";

// Font
import { Kanit } from "next/font/google";

const kanit = Kanit({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-kanit",
});



// Metadata
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${kanit.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
