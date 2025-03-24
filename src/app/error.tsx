'use client';
import { GlobalErrorPage, Layout } from '@/app/_components';
import { geistMono, geistSans } from '@/app/_config/fouts';

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>
          <GlobalErrorPage error={error} />
        </Layout>
      </body>
    </html>
  );
}
