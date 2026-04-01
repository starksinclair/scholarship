import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Access to Build",
  description:
    "A cinematic scholarship proposal by Sinclair Nzenwata about access, builders, and future product-makers in Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full overflow-x-clip bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
