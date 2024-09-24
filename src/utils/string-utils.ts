import DOMPurify from 'isomorphic-dompurify'

export function validateStringInput(value: string): string | boolean {
  const nulCharacterRegex = /\\x00/g
  // Check for the presence of NUL characters using a regular expression
  if (nulCharacterRegex.test(value)) {
    return 'Invalid entry'
  }
  return true
}

export enum CardType {
  LongCard = 'long',
  SmallCard = 'small',
  HorizontalCard = 'horizontal',
  VerticalCard = 'vertical',
}

export const formatHtml = (html: string): string => {
  const tmp = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } })
  return tmp
    .replaceAll('&nbsp;', ' ')
    .replaceAll('</p>', '</p><br>')
    .replace(/font-family:(.+)\;/g, '')
}
export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
