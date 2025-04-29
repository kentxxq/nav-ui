export interface BookmarkSO {
  id: number
  url: string
  title: string
  iconUrl: string
  description: string | null
  updateTime: Date
}

export interface CreateBookmarkRO {
  iconUrl: string
  title: string
  url: string
  description: string | null
}

export interface BookmarkRO {
  id: number
  iconUrl: string
  title: string
  url: string
  description: string | null
}
