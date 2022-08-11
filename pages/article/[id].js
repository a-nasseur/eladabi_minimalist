import React, { useEffect, useState, forwardRef } from 'react';
import Image from 'next/image';
import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Snackbar,  Alert, AlertProps } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import * as Yup from 'yup';




import Section from '../../components/Section';
import AppTextCaption from '../../components/AppTextCaption';
import AppHeading from '../../components/AppHeading';
import AppTextBody from '../../components/AppTextBody'
import Meta from '../../utils/Meta';
import AppTag from '../../components/AppTag';
import colors from '../../config/colors'
import AppSubHeading from '../../components/AppSubHeading';
import { AppForm, AppFormField, SubmitButton } from '../../components/forms';
import AppFormTextField from '../../components/forms/AppFormTextField';




// Yup Validation Schema
const validationSchema = Yup.object().shape({
  username: Yup.string().required().label('Username'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).max(20).label('Password'),
  message: Yup.string().required().min(10).max(260).label('Comment'),
});


const SnackbarAlert = forwardRef(
  function SnackbarAlert(props, ref){
    return <Alert elevation={6} ref={ref} {...props}/>
  }
)


// export const getStaticPaths = async () => {

//   const res = await fetch('https://eladabi.herokuapp.com/api/v1/articles');
//   const data = await res.json();

//   const paths = data.map(post => {
//     return {
//       params: { id: post.id.toString()}
//     }
//   })
 
//   return {
//     paths,
//     fallback: false
//   }
// }



// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const response = await fetch(`https://eladabi.herokuapp.com/api/v1/articles/${id}`);
//   const post = await response.json();

//   const responseComments = await fetch(`https://eladabi.herokuapp.com/api/v1/comments?article=${id}`)
//   const comments = await responseComments.json();


//   return {
//     props: {
//       post,
//       comments,
//     }
//   }

// }


export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(`https://eladabi.herokuapp.com/api/v1/articles/${id}`);
  const post = await response.json();

  const responseComments = await fetch(`https://eladabi.herokuapp.com/api/v1/comments?article=${id}`)
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
  const [loading, setLoading] = useState(false);
  const [error, setError ] = useState('');
  const [success, setSuccess] = useState('');
  const [open, setOpen ] = useState(false);

  const handleSubmit = async ({username, email, password, message}) => {
    const body = {username, email, password}
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/v1/register', {
        method: 'POST',
        body: JSON.stringify(body),
      });
      const data = await response.json();


        if(response.ok){
          setSuccess('data gathered successfully');
          setOpen(true);
          setLoading(false); 
        }
    }
    catch(error) {
      setError(error.message);
      setOpen(true);
      setLoading(false);
    }
    setLoading(false);
  }

  const handleClose = () => {
      setOpen(false);
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
         <Box  sx={{ display : 'flex', padding: '56px 0px'}}>
            { post.tags.map((tag, index) => 
              <React.Fragment key={index}>
                <AppTag title={tag} />
              </React.Fragment>
              )   
            }
          </Box>

        <Box sx={{ display : 'flex', padding: '40px 0px', alignItems: 'center', borderBottom: `1px solid ${colors.neutral.darkGrey}`}}>
          <AppTextCaption>Share</AppTextCaption>
          <FacebookIcon fontSize='large' sx={{ marginRight: '24px', marginLeft: '24px', '&:hover': {color: colors.secondary}}} /> 
          <InstagramIcon fontSize='large' sx={{ marginRight: '24px', '&:hover': {color: colors.secondary}}} />
          <TwitterIcon fontSize='large' sx={{ marginRight: '24px', '&:hover': {color: colors.secondary}}} /> 
          <GitHubIcon fontSize='large' sx={{ marginRight: '24px', '&:hover': {color: colors.secondary}}} />    
        </Box>  

        <AppForm
          initialValues={{username: '', email: '', password: '', message: '', save: false}}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}

        >
          <AppSubHeading style={{ marginTop: '46px', marginBottom: '56px'}}>Ajouter un commentaire</AppSubHeading>
          <Grid container>
            <Grid container justifyContent='space-between'>
              <Grid item xs={12} md={12} lg={3}>
                <AppFormField name='username' type='text' placeholder='Username' />             
              </Grid>
              <Grid item xs={12} md={12} lg={3}>
                <AppFormField name='email' type='email' placeholder='Email' />             
              </Grid>
              <Grid item xs={12} md={12} lg={3}>
                <AppFormField name='password' type='password' placeholder='Password' />             
              </Grid>
            </Grid>
            <Grid item>
              <FormGroup>
                <FormControlLabel 
                  control={<Checkbox defaultChecked sx={{'&.Mui-checked': {color: colors.secondary}}} />} 
                  label="Enregistrer mon nom et email dans ce navigateur pour les prochains commentaires"

                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <AppFormTextField placeholder='Commentez ici' name='message' />
            </Grid>
          </Grid>
          <SubmitButton title='Poster' loading={loading} />
        </AppForm>
        {/* <Snackbar 
          message={error} 
          autoHideDuration={4000} 
          open={open} onClose={handleClose} 
          anchorOrigin={{vertical: 'bottom', horizontal: 'right' }} 
        /> */}
        { success &&
          <Snackbar
          autoHideDuration={4000} 
          open={open} onClose={handleClose} 
          anchorOrigin={{vertical: 'bottom', horizontal: 'right' }} 
        >
          <SnackbarAlert onClose={handleClose} severity='success'>{success}</SnackbarAlert>

        </Snackbar>
        
        }

        { error &&
          <Snackbar
            autoHideDuration={4000} 
            open={open} onClose={handleClose} 
            anchorOrigin={{vertical: 'bottom', horizontal: 'right' }} 
          >
            <SnackbarAlert onClose={handleClose} severity='error'>{error}</SnackbarAlert>

          </Snackbar>
          
          }
      </Section>
    </>
  )
}

export default ArticleDetail
