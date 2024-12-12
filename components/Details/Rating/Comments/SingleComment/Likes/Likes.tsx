import { useEffect, useState } from 'react'

import { ThumbsContainer, CustomThumbDown, CustomThumbUp, ThumbIconsContainer } from '../Styles'
import type { ResponsesType } from '@/types/baseModelTypes'

export default function Likes({ likes }: { likes: ResponsesType[] }) {
   const [countedLikes, setCountedLikes] = useState({
      like: 0,
      dislike: 0,
   })

   useEffect(() => {
      const countLikesAndDislikes = () => {
         let likeCount = 0,
            dislikeCount = 0
         likes.map((like) => {
            if (like.isLike) {
               return (likeCount += 1)
            } else {
               return (dislikeCount += 1)
            }
         })
         setCountedLikes({ like: likeCount, dislike: dislikeCount })
      }
      countLikesAndDislikes()
   }, [likes])

   return (
      <ThumbsContainer>
         <ThumbIconsContainer>
            <CustomThumbUp /*color={countedLikes.usersLike ? 'primary' : 'secondary'}*/ onClick={() => {}} />
            {countedLikes.like}
         </ThumbIconsContainer>
         <ThumbIconsContainer>
            <CustomThumbDown
               /*color={countedLikes.usersDislike ? 'error' : 'secondary'}*/ onClick={() => {}}
            />
            {countedLikes.dislike}
         </ThumbIconsContainer>
      </ThumbsContainer>
   )
}
