import Sidebar from "@/components/sidebar";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          montserrat.className
        )}
      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
