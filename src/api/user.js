import { client } from '@/utils/https'
import { getUser, setUser } from '@/utils/localStorage'

export const getCurrentUser = async () => {
  const localUser = getUser()
  console.log('ss', localUser)
  if (localUser) {
    console.log('333')
    return localUser
  }
  const resp = await client.get(`/users/${getUser().id || ''}`)
  console.log('44', resp.data)
  setUser(resp.data)

  return resp.data
}

export const logInUser = async (email) => {
  const resp = await client.get(`
/users?email=${email}`)

  return resp
}
