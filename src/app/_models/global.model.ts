import { DataStrapi, Image, Meta } from './strapi.model'

export interface IGlobal {
  data: DataGlobal
  meta: Meta
}

export interface DataGlobal
  extends Pick<
    DataStrapi,
    'id' | 'documentId' | 'createdAt' | 'updatedAt' | 'publishedAt'
  > {
  siteName: string
  siteDescription: string
  favicon: Favicon
  defaultSeo: DefaultSEO
}

export interface DefaultSEO {
  id: number
  metaTitle: string
  metaDescription: string
}

export interface Favicon extends Image {}
