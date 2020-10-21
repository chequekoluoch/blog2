import React, {useEffect, useState} from 'react'
import Card from '../UI/Card/Card'
import './style.css'
import blogPosts from '../../data/blog.json'
import Post from '../../containers/Post'
import { NavLink } from 'react-router-dom'

const Sidebar = (props) => {

    const [posts, setPosts]=useState([])

    useEffect(()=>{
        const posts = blogPosts.data
        setPosts(posts)
    },[posts])

    return (
           <div className="sidebarContainer" style={{
               width:props.width
           }}>
            <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
            <div className="cardHeader">
                <span>About Us</span>
            </div>
            <div className="profileImageContainer">
                    <img src={require('../../blogPostImages/kepha.jpg')} alt="Kepha"/>
                </div>
                <div className="cardBody">
                  <p className="personalBio">My name is Cheque Koluoch I am a software developer Specialized in fullstack development...:)</p>
                </div>
            </Card>
            <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
            <div className="cardHeader">
                <span>Social Network</span>
            </div>
            </Card>

            <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
            <div className="cardHeader">
                <span>Recent Posts</span>
            </div>

            {
                posts.map(post=>{
                    return(
                        <NavLink key={post.id} to={`/post/${post.id}`}>
                          
                        <div className="recentPost">
                            <h3 className="recentPostTitle">{post.blogTitle}</h3>
                            <span>{post.postedOn}</span>
                        </div>
                         
                        </NavLink>
                    )
                })
            }
            

            </Card>
            
           </div>
    )
}

export default Sidebar
