import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AosInit } from "./_components/aos-init";


export const metadata: Metadata = {
  title: "SK Nails",
  description: "Oferecemos os melhores serviços para garantir o bem-estar",
  openGraph: {
    title: 'SK Nails Montjo',
    description: 'Você merece cuidado, carinho e atenção especial',
    images: [`https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fsknailsmontijo%2F%3Flocale%3Dpt_PT&psig=AOvVaw18x6nFXoV4aVNGLic5bW1J&ust=1740870224415000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjn4I6954sDFQAAAAAdAAAAABAE`]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
        <AosInit />
      </body>
    </html>
  );
}
