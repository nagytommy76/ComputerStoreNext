'use client'
import styled from '@emotion/styled'
import NotFoundImage from '@images/404Page.jpg'

type Props = {
   backgroundImage: string
}

export const Container = styled('section')<Props>`
   background-image: url(${(props) => props.backgroundImage});
   background-repeat: no-repeat;
   background-size: cover;
   height: 100vh;
`

export const Cover = styled('section')`
   width: 100%;
   height: 100%;
   background-color: rgba(11, 11, 11, 0.4);
`

export const NotFoundText = styled('h1')`
   color: white;
   position: absolute;
   font-size: 4rem;
   top: 30%;
   left: 10%;
`

export default function NotFound() {
   return (
      <Container backgroundImage={NotFoundImage.src}>
         <Cover>
            <NotFoundText>A keresett oldal sajnos nem található :(</NotFoundText>
         </Cover>
      </Container>
   )
}
