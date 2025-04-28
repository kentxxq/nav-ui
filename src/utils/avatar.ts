import { createAvatar } from '@dicebear/core'
import { lorelei } from '@dicebear/collection'

const getDicebearAvatar = (username: string) => {
  const avatar = createAvatar(lorelei, {
    seed: username,
  })
  return avatar.toDataUri()
}

export default getDicebearAvatar
