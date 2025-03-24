import { HomePage, LoadingComponent } from '@/app/_components'
import { Suspense } from 'react'
import { ROUTES } from './_config'

export default function Home() {
  return (
    <Suspense fallback={<LoadingComponent />} name={ROUTES.PAGES.HOME.NAME}>
      <HomePage />
    </Suspense>
  )
}
