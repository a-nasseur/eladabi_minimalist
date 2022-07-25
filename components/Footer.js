import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

import colors from '../config/colors';

const FooterContainer = styled(Container)(({ theme }) => ({
    padding: 20,
    display: 'flex',
    justifyContent: 'space-between',
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
}));

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: colors.neutral.grey }}>
      <FooterContainer maxWidth='lg'>
        <Typography
          variant='subtitle2'
          color={colors.neutral.darkGrey}
          fontFamily='Roboto-mono, monospace'
        >
          Tous les droits revservee el adabi inc
        </Typography>
        <SocialIcons>
          <FacebookIcon sx={{ marginRight: '24px'}} /> 
          <InstagramIcon sx={{ marginRight: '24px'}} />
          <TwitterIcon sx={{ marginRight: '24px'}} /> 
          <GitHubIcon sx={{ marginRight: '24px'}} />      
        </SocialIcons>
      </FooterContainer>
    </Box>
  )
}

export default Footer;