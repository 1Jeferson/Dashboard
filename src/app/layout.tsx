import Sidebar from "@/components/sidebar";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard utilizando a biblioteca de componentes shadcn ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          "min-h-screen bg-background  antialiased",
          montserrat.className
        )}
      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
