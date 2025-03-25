import { HTTP_METHODS } from 'next/dist/server/web/http'

export const HTTP_METHOD = HTTP_METHODS.reduce(
  (acc: Record<string, string>, method) => {
    acc[method] = method
    return acc
  },
  {} as Record<string, string>,
)
