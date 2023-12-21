import React from "react";
import { Articles } from "../../components";
import "./blog.css";
import {blog01,blog02,blog03,blog04,blog05} from '../../containers/blog/import';

const Blog = () => {
  return (
    <div className="gpt__blog section__padding" id="blog">
      <div className="gpt__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt__blog-container">
        <div className="gpt__blog-container-groupA">
         <Articles imgURL={blog01} date={'Dec 20, 2023'} text='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
        <div className="gpt__blog-container-groupB">
        <Articles imgURL={blog02} date={'Dec 20, 2023'} text='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        <Articles imgURL={blog03} date={'Dec 20, 2023'} text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Articles imgURL={blog04} date={'Dec 20, 2023'} text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Articles imgURL={blog05} date={'Dec 20, 2023'} text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
