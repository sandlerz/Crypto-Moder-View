const API_URL = 'https://api.coinstats.app/public/v1'

export const getCoins = async (limit = 500, currency = 'USD') => {
  try {
    const response = await fetch(
      `${API_URL}/coins?skip=0&limit=${limit}&currency=${currency}`
    )
    if (response.ok) {
      const data = await response.json()
      return data
    }
    throw new Error('Get coins fail!')
  } catch (error) {
    console.log(error)
  }
}

export const getNews = async (limit = 20) => {
  try {
    const response = await fetch(`${API_URL}/news?skip=0&limit=${limit}`)
    if (response.ok) {
      const data = await response.json()
      return data
    }
    throw new Error('Get news fail!')
  } catch (error) {
    console.log(error)
  }
}
