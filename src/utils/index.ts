import { v4 } from 'uuid'

/**
 * abc => Abc
 * @param str
 * @returns
 */
export function toPascal(str: string) {
  return str.replace(/^(\w)/, (_, p1) => p1.toUpperCase())
}

export function pickParams(obj: { [x: string]: any }) {
  const res: { [key: string]: string } = {}
  for (const key in obj) {
    if (obj[key] || obj[key] === 0) {
      res[key] = obj[key]
    }
  }
  return res
}

export function getAllUrlParams(url?: string) {
  const curUrl = url || location.hash.split('?')[1]
  if (!curUrl) return
  const vars = curUrl.split('&')
  const obj: any = {}
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=')
    obj[pair[0]] = pair[1]
  }
  return obj
}

export function loadScript(url: string, async = false) {
  return new Promise((resolve, reject) => {
    const head = document.getElementsByTagName('head')[0]
    const scriptEle = document.createElement('script')
    scriptEle.type = 'text/javascript'
    scriptEle.src = url
    scriptEle.setAttribute('src', url)
    scriptEle.setAttribute('type', 'text/javascript')
    scriptEle.setAttribute('async', async.toString())
    scriptEle.onerror = reject
    scriptEle.addEventListener('load', () => {
      scriptEle.onload = null
      if (head && scriptEle.parentNode) {
        head.removeChild(scriptEle)
      }
      resolve(true)
    })
    scriptEle.addEventListener('error', reject)
    head.insertBefore(scriptEle, head.firstChild)
  })
}

/**
 * abc_def => Abc Def
 * abc_def => abcDef
 * @param str
 * @returns
 */
export function toCamelCase(str: string) {
  return str.replace(/_/g, ' ').replace(/\b\w/g, (match) => match.toUpperCase())
}

export function isEmpty(obj: any) {
  return [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length
}

export function uuid() {
  return v4()
}
