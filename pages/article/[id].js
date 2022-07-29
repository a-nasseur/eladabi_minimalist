import React, { useState } from 'react'
import Image from 'next/image';
import { Box, Grid, TextField } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Oval } from 'react-loader-spinner';
import * as Yup from 'yup';




import Section from '../../components/Section';
import AppTextCaption from '../../components/AppTextCaption';
import AppHeading from '../../components/AppHeading';
import AppTextBody from '../../components/AppTextBody'
import Meta from '../../utils/Meta';
import AppTag from '../../components/AppTag';
import colors from '../../config/colors'
import AppSubHeading from '../../components/AppSubHeading';
import { AppForm, AppFormField, SubmitButton } from '../../components/forms'
import AppFormTextField from '../../components/forms/AppFormTextField';




// Yup Validation Schema
const validationSchema = Yup.object().shape({
  username: Yup.string().required().label('Username'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).max(10).label('Password')

})



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

  const responseComments = await fetch(`https://eladabi.herokuapp.com/comments?article=${id}`)
  const comments = await responseComments.json();


  return {
    props: {
      post,
      comments,
    }
  }

}






const ArticleDetail = ({ post, comments }) => {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const body = {username: username, password: password}
    const response = await fetch('https://eladabi.herokuapp.com/api/v1/token/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
});
    const data = await response.json();
    setToken(data.access)
    setLoading(false)
  }

  const newDate = new Date(post.created_date).toLocaleString('fr-FR')

  return (
    <>
      <Meta title={'Article' + ' | ' + post.title} description={post.excerpt} />
      <Section>
        <AppTextCaption>{post.category}</AppTextCaption>
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

        <AppForm
          initialValues={{username: '', email: '', password: '', message: ''}}
          onSubmit={() => console.log('khraa')}
          validationSchema={validationSchema}

        >
          <AppSubHeading style={{ marginTop: '46px', marginBottom: '56px  '}}>Ajouter un commentaire</AppSubHeading>
          <Grid container>
            <Grid item xs={12} md={12} lg={4}>
              <AppFormField name='username' type='text' placeholder='Username' />             
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
              <AppFormField name='email' type='email' placeholder='Email' />             
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
              <AppFormField name='password' type='password' placeholder='Password' />             
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <AppFormTextField placeholder='Commentez ici' />
            </Grid>
          </Grid>
          <SubmitButton title='Post' />
        </AppForm>
      </Section>
    </>
  )
}

export default ArticleDetail
