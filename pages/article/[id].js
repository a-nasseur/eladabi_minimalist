import React from 'react'
import Image from 'next/image';
import { Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';




import Section from '../../components/Section';
import AppTextCaption from '../../components/AppTextCaption';
import AppHeading from '../../components/AppHeading';
import AppTextBody from '../../components/AppTextBody'
import Meta from '../../utils/Meta';
import AppTag from '../../components/AppTag';
import colors from '../../config/colors'



export const getStaticPaths = async () => {

  const res = await fetch('https://eladabi.herokuapp.com/api/v1/articles/');
  const data = await res.json();

  const paths = data.map(post => {
    return {
      params: { id: post.id.toString()}
    }
  })
 
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(`https://eladabi.herokuapp.com/api/v1/articles/${id}`);
  const post = await response.json();

  return {
    props: {
      post,
    }
  }

}

const ArticleDetail = ({ post }) => {

  const newDate = new Date(post.created_date).toLocaleString('fr-FR')

  return (
    <>
      <Meta title={'Article' + ' | ' + post.title} description={post.excerpt} />
      <Section>
        <AppTextCaption>Article detail</AppTextCaption>
        <AppHeading style={{padding: '24px 0px'}}>{post.title}</AppHeading>
        <AppTextCaption>{newDate} | {post.author}</AppTextCaption>
        <img src={`https://res.cloudinary.com/dso6wubcp/` + post.image} style={{ width: '100%' , height: '80vh', padding: '48px 0px'}}/>


        <AppTextBody>{post.body}</AppTextBody>

        <Box sx={{ display : 'flex', padding: '50px 0px'}}>
          <AppTag title="Amour" />
          <AppTag title="Couple" />
          <AppTag title="Intime" />
        </Box>

        <Box sx={{ display : 'flex', padding: '40px 0px', alignItems: 'center', borderBottom: `1px solid ${colors.neutral.darkGrey}`}}>
          <AppTextCaption>Share</AppTextCaption>
          <FacebookIcon fontSize='large' sx={{ marginRight: '24px', marginLeft: '24px', '&:hover': {color: colors.secondary}}} /> 
          <InstagramIcon fontSize='large' sx={{ marginRight: '24px', '&:hover': {color: colors.secondary}}} />
          <TwitterIcon fontSize='large' sx={{ marginRight: '24px', '&:hover': {color: colors.secondary}}} /> 
          <GitHubIcon fontSize='large' sx={{ marginRight: '24px', '&:hover': {color: colors.secondary}}} />    
        </Box>


      </Section>
    </>
  )
}

export default ArticleDetail
