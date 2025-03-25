'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function GlobalErrorPage({
  error,
}: {
  error: Error & { digest?: string }
}) {
  const routes = useRouter()
  useEffect(() => {
    console.error(error)
  }, [error])

  function handleClick() {
    routes.refresh()
  }
  return (
    <>
      <h2>⚠️ Something went wrong!</h2>
      {error.message && <p>{error.message}</p>}
      <button onClick={handleClick}>Try again</button>
    </>
  )
}
