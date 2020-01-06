export function hexToRgba(hex, opacity = 100) {
  const trimmedHex = hex.replace("#", "")
  const r = parseInt(trimmedHex.substring(0, 2), 16)
  const g = parseInt(trimmedHex.substring(2, 4), 16)
  const b = parseInt(trimmedHex.substring(4, 6), 16)

  return "rgba(" + r + "," + g + "," + b + "," + opacity / 100 + ")"
}

const OFFSET = 127397
export function getCountryFlagEmoji(countryCode) {
  // ensure country code is all caps
  const cc = countryCode.toUpperCase()
  // return the emoji flag corresponding to countryCode or null
  return /^[A-Z]{2}$/.test(cc)
    ? String.fromCodePoint(...[...cc].map(c => c.charCodeAt(0) + OFFSET))
    : undefined
}
