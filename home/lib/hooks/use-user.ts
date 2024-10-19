'use client'

import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { User } from '@/lib/types'

const useUser = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    let uid = localStorage.getItem('uid')

    if (!uid) {
      uid = crypto.randomUUID()
      localStorage.setItem('uid', uid)
    }

    const id = Cookies.get('auth_session_id')
    const key = Cookies.get('key')

    if (id && key) {
      setUser({ uid, id, key })
    } else {
      setUser(null)
    }
  }, [])

  return user
}

export default useUser
