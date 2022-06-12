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

export const randomImg = arrImg => {
  const randomNum = Math.floor(Math.random() * 4)
  return arrImg[randomNum]
}

export const scrollInterval = myRef => {
  const clearId = setInterval(() => {
    const scroll = myRef.current[0].scrollLeft
    if (scroll < 1020) {
      myRef.current[0].scrollLeft = 1020
    } else if (scroll < 2040) {
      myRef.current[0].scrollLeft = 2040
    } else if (scroll < 3060) {
      myRef.current[0].scrollLeft = 3060
    } else if (scroll < 4080) {
      myRef.current[0].scrollLeft = 4080
    } else if (scroll < 5100) {
      myRef.current[0].scrollLeft = 5100
    } else {
      myRef.current[0].scrollLeft = 0
    }
  }, 5000)
  return clearId
}
