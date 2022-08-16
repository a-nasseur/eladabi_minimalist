import React from 'react'
import Slider from "react-slick";



import AppHeading from './AppHeading'
import ArticleCard from './ArticleCard'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from 'next/link';
import { styled } from '@mui/material';



const ArticlesList = ({ posts }) => {


    const ListItem = styled('li')(({ theme }) => ({
      display: 'inline-block',
      cursor: 'pointer',
      fontSize: '1.1rem',
      // paddingBottom: '8px',
      // '&:active': {
      //     borderBottom: '2px solid black',
      //     borderColor: colors.neutral.darkGrey,
      // },
      // '&:hover': {
      //     borderBottom: '2px solid black',
      //     borderColor: colors.neutral.darkGrey,
      // }
    }));



    const handleClick = (event) => {
      console.log(event.target.innerHTML)
    }

    const settings = {
        accessiblity: true,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <ChevronRightIcon />,
        prevArrow: <ChevronLeftIcon />
      };




  return (
    <>
      <AppHeading>
        Recent Posts
      </AppHeading>
      <Slider {...settings} className='slider'>
            <ListItem onClick={handleClick}>Tous</ListItem>
            <ListItem onClick={handleClick}>Romans</ListItem>
            <ListItem onClick={handleClick}>Essaies</ListItem>
            <ListItem onClick={handleClick}>Litterature</ListItem>
            <ListItem onClick={handleClick}>Mangas</ListItem>
        </Slider>
       
      {
        posts.map(post => 
          <React.Fragment key={post.id}>
            <ArticleCard date={post.created_date} title={post.title} id={post.id} tags={post.tags} />
          </React.Fragment>
        )
      
      }
      
    </>
  )
}


export default ArticlesList;
