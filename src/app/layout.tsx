import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import '@/styles/components/main-header.css'
import '@/styles/components/simple-header.css'
import '@/styles/components/footer.css'
import '@/styles/components/faq-accordion.css'
import '@/styles/components/switch-custom.css'
import '@/styles/components/icons.css'
import '@/styles/components/divider.css'
import '@/styles/components/selects.css'
import '@/styles/components/modals.css'
import '@/styles/components/switches.css'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nemas",
  description: "Nemas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
