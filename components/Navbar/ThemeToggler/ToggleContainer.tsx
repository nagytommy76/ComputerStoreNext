import styled from '@emotion/styled'

type Props = {
   lightTheme: boolean
   backgroundImage: string
   borderColor: string
}

// A theme változó az App.js, ThemeProveider-be átadott object-ből jön!
// lightTheme egy boolean amit a StyledToggle styled componentnek adok át

export const StyledToggle = styled.button<Props>`
   background-image: ${(props) => props.backgroundImage};
   border: 2px solid ${(props) => props.borderColor};
   border-radius: 30px;
   cursor: pointer;
   display: flex;
   align-items: center;
   font-size: 0.5rem;
   justify-content: space-between;
   margin: 0;
   overflow: hidden;
   padding: 0.5rem;
   position: relative;
   width: 7rem;
   height: 3rem;
   outline: none;

   img {
      height: auto;
      width: 2.5rem;
      transition: all 0.25s linear;

      // sun icon
      &:first-child {
         transform: ${({ lightTheme }) => (lightTheme ? 'translateY(0)' : 'translateY(100px)')};
      }

      // moon icon
      &:nth-child(2) {
         transform: ${({ lightTheme }) => (lightTheme ? 'translateY(-100px)' : 'translateY(0)')};
      }
   }
`
