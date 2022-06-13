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

export const scrollInterval = (myRef, time) => {
  const clearId = setInterval(() => {
    if (myRef.scrollLeft < 1020) {
      myRef.scrollLeft = 1020
    } else if (myRef.scrollLeft < 2040) {
      myRef.scrollLeft = 2040
    } else if (myRef.scrollLeft < 3060) {
      myRef.scrollLeft = 3060
    } else if (myRef.scrollLeft < 4080) {
      myRef.scrollLeft = 4080
    } else if (myRef.scrollLeft < 5100) {
      myRef.scrollLeft = 5100
    } else {
      myRef.scrollLeft = 0
    }
  }, time)
  return clearId
}

export const timeDifference = date => {
  var seconds = Math.floor((new Date() - date) / 1000)

  var interval = seconds / 31536000

  if (interval > 1) {
    return Math.floor(interval) + ' years'
  }
  interval = seconds / 2592000
  if (interval > 1) {
    return Math.floor(interval) + ' months'
  }
  interval = seconds / 86400
  if (interval > 1) {
    return Math.floor(interval) + ' days'
  }
  interval = seconds / 3600
  if (interval > 1) {
    return Math.floor(interval) + ' hours'
  }
  interval = seconds / 60
  if (interval > 1) {
    return Math.floor(interval) + ' minutes'
  }
  return Math.floor(seconds) + ' seconds'
}
