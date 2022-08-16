import { AppBar, Box, Container, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

import colors from '../config/colors';
import AppInputField from './AppInputField';


const CustomToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'center'
}));


const ListContainer = styled('ul')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }

}));

const ListItem = styled('li')(({ theme }) => ({
    display: 'inline-block',
    marginRight: '48px',
    color: colors.neutral.darkGrey,
    cursor: 'pointer',
    // paddingBottom: '8px',
    '&:active': {
        borderBottom: '2px solid black',
        borderColor: colors.neutral.darkGrey,
    },
    '&:hover': {
        borderBottom: '2px solid black',
        borderColor: colors.neutral.darkGrey,
    }
}));



const SearchIconContainer = styled(Box)(({ theme }) => ({
    width: '40px',
    height: '40px',
    borderRadius: '3px',
    backgroundColor: colors.secondary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]:{
        display: 'none'
    }
}));


const MenuIconContainer = styled(Box)(({ theme }) => ({
    width: '40px',
    height: '40px',
    borderRadius: '3px',
    backgroundColor: colors.secondary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]:{
        display: 'none'
    }   
}));


const Navbar = () => {
  return (
    <AppBar color='transparent' elevation={0} position='static'>
        <Container maxWidth='lg' sx={{ paddingTop: '50px'}}>
            <CustomToolbar>
                    <Typography
                    flex={1}
                    variant='h5'
                    component='div'
                    fontFamily='Roboto Mono, monospace'
                    color={colors.black}
                    sx={{ cursor: 'pointer'}}

                    >
                    <Link href="/"> El Adabi</Link>
                    </Typography>
                <ListContainer>
                    <Link href="/">
                        <ListItem>Home</ListItem>
                    </Link>
                    <Link href='/blog'>
                        <ListItem>Blog</ListItem>
                    </Link>
                    <Link href="/contact">
                        <ListItem>Contact us</ListItem>
                    </Link>
                    <ListItem sx={{ display: 'flex', alignItems: 'center'}}>More <KeyboardArrowDownIcon/></ListItem>
                </ListContainer>
                <Box sx={{ display: 'flex',}}> 
                    <AppInputField placeholder='Search' />
                    <SearchIconContainer><SearchIcon style={{ color: colors.white}} /></SearchIconContainer>
                    <MenuIconContainer><MenuIcon style={{ color: colors.white}}/></MenuIconContainer>
                </Box>

            </CustomToolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar