export interface IStrapi {
  data: DataStrapi
  meta: Meta
}

export interface DataStrapi {
  id: number
  documentId: string
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  image: Image[]
}

export interface Image {
  id: number
  documentId: string
  name: string
  alternativeText: null
  caption: null
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: null
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}

export interface Formats {
  thumbnail: Medium
  medium: Medium
  small: Medium
}

export interface Medium {
  name: string
  hash: string
  ext: string
  mime: string
  path: null
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface Meta {}
