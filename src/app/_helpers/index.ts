export const isFrontend = () => typeof window !== 'undefined'

export const getItemLocalStorage = <T>(key: string, initialValue: T): T => {
  try {
    if (isFrontend()) {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    }
  } catch (error) {
    console.error('Error getItemLocalStorage:', error)
  }
  return initialValue
}
