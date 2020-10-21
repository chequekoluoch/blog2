import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'

const Navbar = () => {
    const [search, setSearch]=useState(false);
    const [value,setValue]=useState("")

    const submitSearch=(e)=>{
      e.preventDefault()
      alert('Searched')
      setValue("")
    }
    const openSearch=()=>{
     setSearch(true)
    }
    const onChange=(e)=>{
        setValue(e.target.value)
    }
    const searchClass=search ? 'searchInput active':'searchInput';

    return (
        <div className='navbar'>
           <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us">About Us</NavLink></li>
            <li><NavLink to="/post">Posts</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
            </ul> 
            <div className="search">
                <form onSubmit={submitSearch}>
                <input type="text" className={searchClass}
                onChange={onChange}
                value={value}
                placeholder="Search"/>
                <img className="searchIcon" 
                onClick={openSearch}
                src={require('../../assets/icons/search.png')} alt="Search"/>
                </form>
            </div>
        </div>

    )
}

export default Navbar
