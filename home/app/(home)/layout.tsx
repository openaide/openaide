import React from 'react'

interface HomeLayoutProps {
  children: React.ReactNode
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  return <>{children}</>
}
