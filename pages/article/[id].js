import React from 'react'
import Image from 'next/image';



import Section from '../../components/Section';
import AppTextCaption from '../../components/AppTextCaption';
import AppHeading from '../../components/AppHeading';
import AppTextBody from '../../components/AppTextBody'



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
  return (
    <Section>
      <AppTextCaption>Article detail</AppTextCaption>
      <AppHeading style={{padding: '24px 0px'}}>{post.title}</AppHeading>
      <AppTextCaption>{post.created_date} | {post.author}</AppTextCaption>
      <img src={`https://res.cloudinary.com/dso6wubcp/` + post.image} style={{ width: '100%' , height: '90vh', padding: '48px 0px'}}/>


      <AppTextBody>{post.body}</AppTextBody>

    </Section>
  )
}

export default ArticleDetail
