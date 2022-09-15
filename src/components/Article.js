import React from "react";


function Article(props) {
  let title = props.title
  let date
  if (props.date === undefined) {
      date = "January 1, 1970"
    } else {
    date = props.date
    }
    let preview = props.preview

  //console.log(title)
    return ( <>
        <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        </article>
    </>
    )
  }

  export default Article;