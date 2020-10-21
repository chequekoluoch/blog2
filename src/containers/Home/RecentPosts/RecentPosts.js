import React from 'react'
import Card from '../../../components/UI/Card/Card'
import './style.css'
import pic from '../../../blogPostImages/memories-from.jpg'

const RecentPosts = (props) => {
    return (
        <div className="" style={props.style}>
        <Card style={{marginBottom:'20px'}}>
        <div className="postImageWrapper">
          <img src={pic} alt="post"/>
          </div>
          <div className="" style={{textAlign:'center'}}>
            <span>Featured</span>
            <h2>Fitness Mantra To Live Fit Life</h2>
            <span>posted on July 21, 2020 by Cheque Koluoch</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Voluptatibus amet inventore, iure repellendus at similique 
               accusantium fugit ex possimus aut!</p>
               <button>Read More</button> 
            </div>
             
        </Card>

        
        </div>
    )
}

export default RecentPosts
