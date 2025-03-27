'use client'
import { ROUTES } from '@/app/_config/routes'
import { fetchStrapiQuery } from '@/app/_lib/strapi'
import { IGlobal } from '@/app/_models'
import { useCallback, useEffect, useState } from 'react'

export default function useNavBar() {
  const [title, setTitle] = useState('Title Page')

  const getTitle = useCallback(() => {
    return fetchStrapiQuery<IGlobal>(ROUTES.STRAPRI.GLOBAL()).then(
      ({ data }) => {
        return data.siteName
      },
    )
  }, [])

  useEffect(() => {
    getTitle().then((siteName) => {
      if (siteName) setTitle(siteName)
    })
  }, [getTitle])

  return { title }
}
