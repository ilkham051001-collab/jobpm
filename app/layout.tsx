import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";

const sans = Manrope({ variable: "--font-sans", subsets: ["cyrillic", "latin"] });
const display = Unbounded({ variable: "--font-display", subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "Product Manager — от проблемы к продукту",
  description: "Персональный сайт Product Manager о подходе к созданию продуктов: от понимания проблемы до измеримого результата.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className={`${sans.variable} ${display.variable}`}>{children}</body></html>;
}
