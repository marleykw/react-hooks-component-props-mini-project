import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";

//console.log(blogData);
//console.log(blogData.name);

//console.log(props);

function App() {
  //console.log(blogData)
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

//App(blogData)
export default App;
