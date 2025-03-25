import { AuthPage, LoadingComponent } from '@/app/_components'
import { ROUTES } from '@/app/_config'
import { Suspense } from 'react'

export default function Auth() {
  return (
    <Suspense fallback={<LoadingComponent />} name={ROUTES.PAGES.HOME.NAME}>
      <AuthPage />
    </Suspense>
  )
}
