import { createAvatar } from '@dicebear/core'
import { initials } from '@dicebear/collection'

const getDicebearAvatar = (username: string) => {
  const avatar = createAvatar(initials, {
    seed: username,
  })
  return avatar.toDataUri()
}

export default getDicebearAvatar
