import styled from '@emotion/styled'

export const ProductContainerStyle = styled('div')({
   width: '80%',
   minHeight: '100%',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',
})

export const CardGridContainerStyle = styled('div')({
   minHeight: '100vh',
   display: 'grid',
   width: '85%',
   rowGap: '3rem',
   columnGap: '2rem',
   justifyContent: 'center',
   gridAutoRows: '380px',
   gridTemplateColumns: 'repeat(auto-fill, minmax(225px, 1fr))',
})
