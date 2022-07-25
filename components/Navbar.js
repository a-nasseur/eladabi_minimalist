import { AppBar, Box, Container, Input, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

import colors from '../config/colors';


const CustomToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'center'
}));

const ListContainer = styled('ul')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center'

}));

const ListItem = styled('li')(({ theme }) => ({
    display: 'inline-block',
    marginRight: '48px',
    color: colors.neutral.darkGrey,
    cursor: 'pointer',
    '&:active': {
        borderBottom: '2px solid black',
        borderColor: colors.neutral.darkGrey,
        paddingBottom: '8px',
    }
}));


const SearchBox = styled('input')(({ theme }) => ({
    position: 'relative',
    width: '216px',
    height: '40px',
    backgroundColor: colors.neutral.grey,
    border: 'none',
    padding: '0px 20px',
    fontFamily: 'Roboto Mono, monospace',
    '&:active': {
        border: 'none'
    }
}));

const SearchIconContainer = styled(Box)(({ theme }) => ({
    width: '40px',
    height: '40px',
    borderRadius: '3px',
    backgroundColor: colors.secondary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}));


const Navbar = () => {
  return (
    <AppBar color='transparent' elevation={0} position='static'>
        <Container maxWidth='lg' sx={{ paddingTop: '50px'}}>
            <CustomToolbar>
                <Link href="/">
                    <Typography
                    flex={1}
                    variant='h5'
                    component='div'
                    fontFamily='Roboto Mono, monospace'
                    color={colors.black}
                    sx={{ cursor: 'pointer'}}

                    >
                        Meliora
                    </Typography>
                </Link>
                <ListContainer>
                    <Link href="/">
                        <ListItem>Home</ListItem>
                    </Link>
                    <ListItem>Blog</ListItem>
                    <Link href="/contact">
                        <ListItem>Contact us</ListItem>
                    </Link>
                    <ListItem sx={{ display: 'flex', alignItems: 'center'}}>More <KeyboardArrowDownIcon/></ListItem>
                </ListContainer>
                <Box sx={{ display: 'flex'}}> 
                    <SearchBox placeholder='Search'/>
                    <SearchIconContainer><SearchIcon style={{ color: colors.white}} /></SearchIconContainer>
                </Box>

            </CustomToolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar