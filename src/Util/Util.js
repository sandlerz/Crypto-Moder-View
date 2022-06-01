export const cutDecimals = num => {
  if (num >= 1) {
    return num.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  } else if (num >= 0.009) {
    return num.toLocaleString(undefined, { minimumFractionDigits: 4 })
  } else {
    return num.toLocaleString(undefined, { minimumFractionDigits: 8 })
  }
}
