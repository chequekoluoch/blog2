import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Card from '../../components/UI/Card/Card'
import pic from '../../blogPostImages/memories-from.jpg'
import './style.css'
import RecentPosts from './RecentPosts/RecentPosts'

const SideImage=props=>{
  return(
    <div className="" style={{height:`${props.height}px`}}>
    <img src={props.src} alt="LOGO"/>
  </div>
  )
}

const Home = () => {

    const gallaryHeight= 450;
    const gallaryStyle={
        height:gallaryHeight + 'px',
        overflow:'hidden'
    }
    const sideImageHeigth=gallaryHeight / 3;
    return (
        <div >
        <Card>
            <div className="gallaryPost" style={gallaryStyle}>
            <section style={{width:'70%'}}>
                <div className="">
                   <img src={pic} alt="LOGO"/>
                 </div>
            </section>
            <section className="sideImageWrapper" style={{width:'30%'}}>
                <SideImage height={sideImageHeigth}
                src={pic}/>
                <SideImage height={sideImageHeigth}
                src={pic}/>
                <SideImage height={sideImageHeigth}
                src={pic}/>
                 
            </section>
            </div>
        </Card>
        <section className="HomeContainer">
        <RecentPosts style={{width:'70%'}}/>
        <Sidebar />
        </section>
        
        
        </div>
    )
}

export default Home
