import { geistMono, geistSans } from '@/app/_config/fouts';
import { generateMetadata } from '@/app/_lib/strapi';
import type { Metadata } from 'next';
import './globals.css';

export async function metadata(): Promise<Metadata> {
  const metadata = await generateMetadata();

  return {
    title: metadata.title,
    description: metadata.description,
    icons: metadata.icons,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dracula">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
