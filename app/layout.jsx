import Link from "next/link";
import "./globals.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export const metadata = {
  title: "Popular Movies",
  description: "Popular movies coming from The Movie Database",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} mx-32 my-12`}>{children}</body>
    </html>
  );
}
