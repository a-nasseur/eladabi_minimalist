import { Checkbox, FormControlLabel, FormGroup, Grid } from '@mui/material'
import { useState } from 'react'
import * as Yup from 'yup';




import AppHeading from '../../components/AppHeading'
import AppTextBody from '../../components/AppTextBody'
import { AppForm, AppFormField, SubmitButton } from '../../components/forms'
import AppFormTextField from '../../components/forms/AppFormTextField';
import Section from '../../components/Section'
import colors from '../../config/colors';
import Meta from '../../utils/Meta';



// Yup Validation Schema
const validationSchema = Yup.object().shape({
  fullName: Yup.string().required().label('Full Name'),
  email: Yup.string().required().email().label('Email'),
  phoneNumber: Yup.string().required().min(4).max(20).label('Phone Number'),
  message: Yup.string().required().min(10).max(260).label('Message'),
});


const index = () => {
  const [loading, setLoading] = useState(false)

  
  const handleSubmit = async ({username, email, phoneNumber, message}) => {
    const body = {username, email, phoneNumber, message}
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/v1/register', {
        method: 'POST',
        body: JSON.stringify(body),
      });
      const data = await response.json();

        if(response.ok){
          console.log(data)
          setLoading(false); 
        }
    }
    catch(error) {
      setError(error.message);
      setLoading(false);
    }
    setLoading(false);
  }


  return (
    <>
    <Meta title='El Adabi | Contact' keywords='contact, numero, telephone, addresse' description='page de contact pour el adabi.com, nous serions ravis de connaitre votre avis sur nous' />
    <Section>
      <AppHeading>Contactez Nous</AppHeading>
      <AppTextBody style={{ margin: '50px 0px'}}>Ce projet est un composant de mon portoflio, il demontre ma capacite a 
        pouvoir realise des applications fullstack usan de Next JS et Django Rest Framework.
      </AppTextBody>
      <AppTextBody>Theme par Vita theme, sur figma, integration faite avec Material Ui </AppTextBody>
      <AppHeading style={{ margin: '50px 0px'}}>Formulaire de contact</AppHeading>
      <AppForm
        initialValues={{fullName: '', email: '', message: '', phoneNumber: ''}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Grid container>
            <Grid container justifyContent='space-between'>
              <Grid item xs={12} md={12} lg={3}>
                <AppFormField name='fullName' type='text' placeholder='Full Name' />             
              </Grid>
              <Grid item xs={12} md={12} lg={3}>
                <AppFormField name='email' type='email' placeholder='Email' />             
              </Grid>
              <Grid item xs={12} md={12} lg={3}>
                <AppFormField name='PhoneNumber' type='text' placeholder='Phone Number' />             
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
              <AppFormTextField placeholder='Entrez votre Message ici' name='message' />
            </Grid>
          </Grid>
          <SubmitButton title='Envoyer' loading={loading}/>

      </AppForm>
    </Section>
    </>
  )
}

export default index