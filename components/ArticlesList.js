import React from 'react'


import AppHeading from './AppHeading'
import ArticleCard from './ArticleCard'



const ArticlesList = ({ posts }) => {



  return (
    <>
      <AppHeading>
        Recent Posts
      </AppHeading>
      {
        posts.map(post => 
          <React.Fragment key={post.id}>
            <ArticleCard date={post.created_date} title={post.title} id={post.id} />
          </React.Fragment>
        )
      
      }
      
    </>
  )
}


export default ArticlesList;
