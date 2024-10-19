import * as React from 'react'
import Link from 'next/link'

import { auth } from '@/lib/auth'
import { IconNextChat } from '@/components/ui/icons'
import { UserMenu } from '@/components/user-menu'
import { Session } from '@/lib/types'
import dynamic from 'next/dynamic'

const ToggleComponent = dynamic(() => import('@/components/theme-toggle'), {
  ssr: false
})

async function UserComponent() {
  const session = (await auth()) as Session

  return (
    <>
      {session?.user ? (
        <>
          <UserMenu user={session.user} />
        </>
      ) : (
        <Link href="/" rel="nofollow">
          <IconNextChat className="size-6 mr-2 dark:hidden" inverted />
          <IconNextChat className="hidden size-6 mr-2 dark:block" />
        </Link>
      )}
    </>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <UserComponent />
        </React.Suspense>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <ToggleComponent />
      </div>
    </header>
  )
}
