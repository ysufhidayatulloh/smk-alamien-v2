import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://smkalaimenkdr.sch.id"),
  title: {
    default: "SMK Al - Amien Kota Kediri",
    template: "%s | SMK Al - Amien Kota Kediri",
  },
  description:
    "This school website was built and deployed by smkalaimen.dev to find out information about SMK AL AMIEN school - Jl Ngasinan Raya No. 18 Rejomulyo Kota Kediri",
  icons: {
    icon: ["./favicon.ico?=4"],
  },
  openGraph: {
    title: "SMK Al - Amien Kota Kediri",
    description:
      "This school website was built and deployed by smkalaimen.dev to find out information about SMK AL AMIEN school - Jl Ngasinan Raya No. 18 Rejomulyo Kota Kediri",
    type: "website",
    locale: "id_ID",
    url: "https://smkalaimenkdr.sch.id",
    siteName: "SMK AL-AMIEN",
  },
  keywords: [
    "SMK AL-AMIEN",
    "SMK KOTA KEDIRI",
    "SMK PONDOK",
    "SMK NGASINAN",
    "TKR",
    "TKJ",
    "TSM",
    "KEDIRI",
    "KAMPUS IAIN",
    "KAMPUS UNISKA",
    "NEXT.JS",
    "TYPESCRIPE",
    "ACETERNITY.UI",
    "TAILWINDCSS"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
