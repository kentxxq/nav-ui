import type { BookmarkSO, CreateBookmarkRO } from '@/types/nav/bookmark'
import { HttpMethod } from '@/utils/enums'
import { http } from '@/utils/request'

export function bookmarkCreateBookmark(createBookmarkRO: CreateBookmarkRO) {
  return http<BookmarkSO>({
    url: '/nav/Bookmark/CreateBookmark',
    method: HttpMethod.POST,
    data: createBookmarkRO,
  })
}

export function bookmarkGetUserBookmarks() {
  return http<BookmarkSO[]>({
    url: '/nav/Bookmark/GetUserBookmarks',
    method: HttpMethod.GET,
  })
}
