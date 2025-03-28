import { HomePage, LoadingComponent } from '@/app/_components'
import { ROUTES } from '@/app/_config'
import { Suspense } from 'react'

export default function Home() {
  return (
    <Suspense fallback={<LoadingComponent />} name={ROUTES.PAGES.HOME.NAME}>
      <HomePage />
    </Suspense>
  )
}
