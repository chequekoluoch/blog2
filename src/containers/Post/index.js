import React from 'react'
import BlogPost from '../../components/BlogPost/BlogPost'
import Sidebar from '../../components/Sidebar/Sidebar'
import './style.css'


const Post = (props) => {
  
    
    return (
        <section className="container">
            <BlogPost {...props}/>
            <Sidebar />
        </section>
    )
}

export default Post
