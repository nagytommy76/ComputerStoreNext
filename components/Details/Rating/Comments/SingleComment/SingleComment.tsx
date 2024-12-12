import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'

import { CommentCard, RightComment } from './Styles'
import type { RatingValues } from '@/types/baseModelTypes'

import Likes from './Likes/Likes'

export default function SingleComment({ comment }: { comment: RatingValues }) {
   return (
      <Card sx={{ marginBottom: '1.2rem', marginTop: '1.2rem' }}>
         <CommentCard>
            <div style={{ flex: 1 }}>
               <Typography variant='h5'>{comment.userName}</Typography>
               <Rating name='read-only' precision={0.5} value={comment.rating} size='large' readOnly />
               <Typography variant='subtitle2'>{comment.ratedAt.toString()}</Typography>
            </div>
            <RightComment>
               <Typography variant='body1'>{comment.comment}</Typography>
               <Likes likes={comment.responses} />
            </RightComment>
         </CommentCard>
      </Card>
   )
}
