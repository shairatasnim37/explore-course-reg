import { useEffect } from "react";
import { useState } from "react";
import Blog from '../Blog/Blog';
import './blogs.css'


const Blogs = () => {
    const [blogs,setBlogs]= useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="blog-container">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
            
        </div>
    );
};

export default Blogs;