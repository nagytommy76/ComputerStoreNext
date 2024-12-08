'use client'
import React, { createContext, useState, useEffect } from 'react'
import type { RatingValues } from '@/types/baseModelTypes'

export const RatingContext = createContext<{
   comments: RatingValues[]
   setComments: React.Dispatch<React.SetStateAction<RatingValues[]>>
}>({
   comments: [],
   setComments: () => {},
})

export default function RatingContextProvider({
   serverComments,
   children,
}: {
   serverComments: RatingValues[]
   children: React.ReactNode
}) {
   const [comments, setComments] = useState<RatingValues[]>([])

   useEffect(() => {
      setComments(serverComments)
   }, [serverComments])

   return (
      <RatingContext.Provider
         value={{
            comments,
            setComments,
         }}
      >
         {children}
      </RatingContext.Provider>
   )
}
