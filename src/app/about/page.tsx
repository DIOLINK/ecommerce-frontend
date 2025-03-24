import { AboutPage, LoadingComponent } from '@/app/_components'
import { ROUTES } from '@/app/_config/routes'
import { Suspense } from 'react'

export default function About() {
  return (
    <Suspense fallback={<LoadingComponent />} name={ROUTES.PAGES.ABOUT.NAME}>
      <AboutPage />
    </Suspense>
  )
}
