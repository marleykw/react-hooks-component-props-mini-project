import React from "react";
import Article from "./Article"

function ReturnArticles(props) {
    return <Article title={props.title} date={props.date} preview = {props.preview}/>;
}

function ArticleList(props) {
  let list = props.posts
  //console.log(list)
    const articleListing = list.map((article)=> {
        return <ReturnArticles key={article.id} title={article.title} date = {article.date} preview = {article.preview}/>;
    });
    console.log(articleListing)
    return ( <>
        <main>
            {articleListing}
        </main>
    </>
    )
  }

  export default ArticleList;