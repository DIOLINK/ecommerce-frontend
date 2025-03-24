import { geistMono, geistSans } from '@/app/_config/fouts';
export default function LayoutTemplate({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <html lang="en" data-theme>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${className}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
