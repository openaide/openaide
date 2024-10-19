import { cookies } from 'next/headers'
import { User, Session } from './types'

export async function auth(): Promise<Session | null> {
  const cookieStore = cookies()
  const id = cookieStore.get('auth_session_id')?.value
  const key = cookieStore.get('key')?.value
  const model = cookieStore.get('model')?.value

  if (id && key) {
    const user = {
      id: id,
      key: key,
      model: model
    } as User
    const session = {
      user: user
    }
    return session
  }

  return null
}
