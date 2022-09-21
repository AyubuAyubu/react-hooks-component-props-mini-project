import React from "react";
import Article from "./components/Article";

function ArticleList(props) {
   const blogPosts = props.posts.map( article => {
      return <Article key={article.id} title={article.title} date={article.date} preview={article.preview} />
   })

   return (
         <main>
            {blogPosts}
         </main>
   )

}

export default ArticleList;