import styled from '@emotion/styled'
import Link from 'next/link'

const reactColor = '#61dbfb'
const mobileWindowSize = `950px`

export const FooterContainer = styled.footer`
   width: 100%;
   height: 140px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #111;
   color: #fff;
   font-size: 1.1rem;

   @media (max-width: ${mobileWindowSize}) {
   }
`

export const IconContainer = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 1rem;
`

export const AnchorStyle = styled(Link)`
   transition: color 0.1s linear;
   &:hover {
      color: ${reactColor};
   }
`
