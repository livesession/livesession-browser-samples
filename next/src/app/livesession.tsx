'use client'

import { useEffect } from 'react'

import ls from '@livesession/browser'

export function LiveSession({ children }: { children: React.ReactNode }) {
    useEffect(() => {
      ls.init(process.env.NEXT_PUBLIC_LIVESESSION_TRACK_ID)
      ls.newPageView()
  }, [])

  return children
}