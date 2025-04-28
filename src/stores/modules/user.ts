import { defineStore } from 'pinia'
import { userLoginApi, userRefreshTokenApi } from '@/api/user'
import type { JwtStruct } from '@/types/nav/common'
import { jwtDecode } from 'jwt-decode'
import type { LoginRO } from '@/types/nav/user'
import getDicebearAvatar from '@/utils/avatar'

export interface UserInfo {
  id: number
  name: string
  token: string
  roles: Array<string>
}

const state: UserInfo = { id: 0, name: '', token: '', roles: [] }

export const useUserStore = defineStore('user', {
  state: () => state,
  getters: {
    isTokenValid(state): boolean {
      try {
        const jwt = jwtDecode<JwtStruct>(state.token)
        const now = Date.now() / 1000
        console.debug('当前时间', now)
        if (now > jwt.exp) {
          console.debug('已过期')
        }
        if (
          state.token !== null &&
          state.token !== '' &&
          state.token !== undefined &&
          now < jwt.exp
        ) {
          return true
        }
        return false
      } catch {
        return false
      }
    },
    avatar(state): string {
      return getDicebearAvatar(state.name)
    },
  },
  actions: {
    async userLogin(loginRO: LoginRO): Promise<boolean> {
      const result = await userLoginApi(loginRO)
      // 存储必要状态
      this.token = result.token
      const jwt = jwtDecode<JwtStruct>(result.token)
      this.loadUserInfo()
      console.debug('userLogin返回的token', jwt)
      return true
    },
    async refreshToken() {
      const result = await userRefreshTokenApi()
      // 存储必要状态
      this.token = result.token
      const jwt = jwtDecode<JwtStruct>(result.token)
      this.loadUserInfo()
      console.debug('userRefreshToken返回的token', jwt)
      return true
    },
    needRefreshToken() {
      const jwt = jwtDecode<JwtStruct>(this.token)
      const now = Date.now()
      // 1小时
      const exp = 1000 * 60 * 60
      // console.debug(jwt.exp * 1000, now, exp)
      return jwt.exp * 1000 - now < exp
    },
    loadUserInfo() {
      const jwt = jwtDecode<JwtStruct>(this.token)
      this.id = jwt.id
      this.name = jwt.name
      this.roles = jwt.role
    },
    resetUser() {
      this.id = 0
      this.token = ''
      this.roles = []
      this.name = ''
    },
    logout() {
      this.resetUser()
    },
  },
})
