export const CardStyle = {
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',

   position: 'relative',
   height: 390,
   maxWidth: 345,
   width: '250px',
   transition: 'transform 0.1s',
   '&:hover': {
      transform: 'scale(1.025) translateY(-5px)',
   },
   [`@media(max-width: 920px`]: {
      height: '390px',
   },
}
