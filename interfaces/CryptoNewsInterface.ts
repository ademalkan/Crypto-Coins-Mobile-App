export interface CryptoNewsFetchI {
  data: CryptoNewsI[]
  count: number
  page: number
}

export interface CryptoNewsI {
  title: string
  description: string
  author?: string
  url: string
  updated_at: number
  news_site: string
  thumb_2x: string
}
