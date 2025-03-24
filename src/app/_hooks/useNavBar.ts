import { ROUTES } from '@/app/_config/routes'
import { fetchStrapiQuery } from '@/app/_lib/strapi'
import { IGlobal } from '@/app/_models'
import { useEffect, useState, useTransition } from 'react'

export default function useNavBar() {
  const [isPending, startTransition] = useTransition()
  const [title, setTitle] = useState('Title Page')

  function getTitle() {
    fetchStrapiQuery<IGlobal>(ROUTES.STRAPRI.GLOBAL()).then(({ data }) => {
      return data.siteName
    })
    return title
  }

  useEffect(() => {
    if (!isPending) return
    const siteName = getTitle()
    if (!siteName) return
    startTransition(() => {
      setTitle(siteName)
    })
  }, [isPending])

  return { title }
}
