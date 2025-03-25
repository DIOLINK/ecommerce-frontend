import { LayoutTemplate } from '@/app/_components'
import { generateMetadata } from '@/app/_lib/strapi'
import type { Metadata } from 'next'
import './globals.css'

export async function metadata(): Promise<Metadata> {
  const metadata = await generateMetadata()

  return {
    title: metadata.title,
    description: metadata.description,
    icons: metadata.icons,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <LayoutTemplate>{children}</LayoutTemplate>
}
