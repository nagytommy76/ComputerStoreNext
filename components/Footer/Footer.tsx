'use client'
import Link from 'next/link'
import { FooterContainer, AnchorStyle, IconContainer } from './FooterStyle'

import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {
   return (
      <FooterContainer>
         <Typography variant='h5'>
            Készítette: &copy;{' '}
            <AnchorStyle target='_blank' href='https://nagytamas93.hu/'>
               Nagy Tamás.
            </AnchorStyle>{' '}
            2024. Budapest.
         </Typography>
         <IconContainer>
            <Link href='https://github.com/nagytommy76/ComputerStoreMERN' target='_blank'>
               <IconButton aria-label='github' size='medium'>
                  <GitHubIcon fontSize='large' />
               </IconButton>
            </Link>
            <Link href='https://www.linkedin.com/in/tamasnagy93/' target='_blank'>
               <IconButton aria-label='github' size='medium'>
                  <LinkedInIcon fontSize='large' />
               </IconButton>
            </Link>
         </IconContainer>
      </FooterContainer>
   )
}

export default Footer
