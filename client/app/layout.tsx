import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paramythia - Educational Book & Play Store",
  description: "An educational book and play store for children",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#FEFCF5] text-[#583101]">
        {children}
      </body>
    </html>
  );
}
