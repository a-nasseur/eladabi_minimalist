import React, { useState } from 'react'
import Image from 'next/image';
import { Box, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Oval } from 'react-loader-spinner';




import Section from '../../components/Section';
import AppTextCaption from '../../components/AppTextCaption';
import AppHeading from '../../components/AppHeading';
import AppTextBody from '../../components/AppTextBody'
import Meta from '../../utils/Meta';
import AppTag from '../../components/AppTag';
import colors from '../../config/colors'
import AppInputField from '../../components/AppInputField';




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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
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
    setUsername('');
    setEmail('');
    setPassword('');
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

        {
          token && 
          <AppHeading>Comments ready to be seen</AppHeading>

        }

        {
          !token &&
          <form style={{ display: 'flex', justifyContent: 'space-between'}}>
            <AppInputField type='text' required placeholder='username' onChange={(e) => setUsername(e.target.value)} />

            <AppInputField type='email' required placeholder='email' onChange={(e) => setEmail(e.target.value)} />

            <AppInputField type='password' required placeholder='password' onChange={(e) => setPassword(e.target.value)} />

            {
              !loading &&
              <Button 
                variant='contained'
                sx={{ backgroundColor: colors.black, '&:hover': {backgroundColor: colors.secondary}}}
                type='submit' 
                onClick={handleSubmit}
                >
                  Click me
              </Button>
            }
            {
              loading && 
              <Oval
                height = "80"
                width = "80"
                color = {colors.secondary}
                ariaLabel = 'three-dots-loading'     
              />
            }
          </form>
        }


      </Section>
    </>
  )
}

export default ArticleDetail
