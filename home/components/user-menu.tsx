'use client'

import { type Session } from '@/lib/types'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { handleDelete } from '@/lib/api'
import { IconUser } from './ui/icons'

interface ApiResponse {
  success: boolean
  message: string
}

export interface UserMenuProps {
  user: Session['user']
}

export function UserMenu({ user }: UserMenuProps) {
  const handleRemoveKey = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      await handleDelete<void>(`//auth.openaide.localhost/logout`)
      window.location.reload()
    } catch (error) {
      console.error('Error removing API key:', error)
    }
  }

  return (
    <div className="flex items-center justify-between">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="pl-0">
            <div className="flex size-7 shrink-0 select-none items-center justify-center rounded-full bg-muted/50 text-xs font-medium uppercase text-muted-foreground">
              <IconUser />
            </div>
            <span className="ml-2 hidden md:block"></span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={8} align="start" className="w-fit">
          <DropdownMenuItem className="flex-col items-start">
            <div className="text-xs text-zinc-500">
              {user.model}/{user.key}
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <form onSubmit={handleRemoveKey}>
            <button
              type="submit"
              className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-xs outline-none transition-colors hover:bg-red-500 hover:text-white focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            >
              Remove API Key
            </button>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
