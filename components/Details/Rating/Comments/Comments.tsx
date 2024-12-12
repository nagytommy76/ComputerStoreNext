import { useContext } from 'react'
import { RatingContext } from '../Context/RatingContext'
import { CommentAnswerProvider } from './Context/AnswerContext'

import SingleComment from './SingleComment/SingleComment'

export default function Comments() {
   const { comments } = useContext(RatingContext)
   if (comments?.length === 0) return null
   return (
      <>
         {comments.map((comment) => (
            <CommentAnswerProvider
               key={comment._id}
               commentId={comment._id}
               commentAnswersProp={comment.commentAnswers}
            >
               <SingleComment comment={comment} />
            </CommentAnswerProvider>
         ))}
      </>
   )
}
