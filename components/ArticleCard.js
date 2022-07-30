import React from 'react'
import { Box, Card, styled, Grid } from '@mui/material'


import AppTag from './AppTag';
import AppTextCaption from './AppTextCaption';
import AppHeading from './AppHeading';
import colors from '../config/colors';
import Link from 'next/link';


const CardContainer = styled(Card)(({ theme }) => ({
    marginTop: '48px',
    padding: '48px 0px',
    borderBottom : `1px solid ${colors.neutral.grey}`,
    '&:hover': {
        boxShadow: `0px 4px 0px 0px ${colors.neutral.lightGrey}`,
        border: 'none'
    }
}));


const CardContent = styled(Box)(({ theme }) => ({
    paddingTop: '24px',
    // display: 'flex',
    // justifyContent: 'space-between'
  
}));

const TagsContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'end',
}));



const ArticleCard = ({ date, title, tags, id }) => {

  const newDate = new Date(date).toLocaleString('fr-FR')



  return (


    <CardContainer elevation={0}>
        {
            date && title &&

            <>
            <AppTextCaption style={{ color: colors.neutral.darkGrey }}>
                    {newDate}
                </AppTextCaption>
                <CardContent>
                    <Grid container justifyContent='space-between'>
                        <Grid item xs={6} md={8} lg={8}>
                                <AppHeading>
                                    <Link href={'/article/' + id}>
                                        {title}
                                    </Link>
                                </AppHeading>
                        </Grid>
                        <Grid item xs={6} md={6} lg={3} >
                        {
                            tags?.length &&
                            <TagsContent>
                            { tags.map((tag, index) => 
                                <React.Fragment key={index}>
                                    <AppTag title={tag} />
                                </React.Fragment>
                                )   
                            }
                            </TagsContent>
                        }
                        </Grid>
                    </Grid>
                </CardContent>
            </>
        }
        {
            !date && !title && 

            <AppHeading>
                Posts are not available
            </AppHeading>
        }

    </CardContainer>
    
  )
}

export default ArticleCard;