export interface User extends Record<string, any> {
  id: string
  key: string
  model?: string
}

export interface Session {
  user: User
}
