import ArticlesList from '../components/ArticlesList'
import Meta from '../utils/Meta'

import Section from '../components/Section'


export const getStaticProps =  async (context) =>  {

  const res = await fetch('https://eladabi.herokuapp.com/api/v1/articles/');
  const posts = await res.json();

  return {
    props: { posts }
  }
}



export default function Home({ posts }) {
  return (
    <>
      <Meta />
        <Section>
          <ArticlesList posts={posts} /> 
        </Section>    
    </>
  )
}
