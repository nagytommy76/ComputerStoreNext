import { useContext } from 'react'
import { RatingContext } from '../Context/RatingContext'
import { CommentAnswerProvider } from './Context/AnswerContext'

export default function Comments() {
   const { comments } = useContext(RatingContext)
   return (
      <>
         {comments.map((comment) => {
            ;<CommentAnswerProvider commentId={comment._id} commentAnswersProp={comment.commentAnswers}>
               <h1>Kommentek</h1>
               <h2>sdsda</h2>
            </CommentAnswerProvider>
         })}
      </>
   )
}
