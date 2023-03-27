export function getLocalStorage(key: string) {
  const localStr = localStorage.getItem(key)
  if (!localStr) return ''
  try {
    return JSON.parse(localStr)
  } catch {
    return localStr
  }
}

export function setLocalStorage(key: string, value: any) {
  if (typeof value === 'object') {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    localStorage.setItem(key, value)
  }
}
