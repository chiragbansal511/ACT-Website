import React from 'react'
import "./NavBar.css"
import { Outlet, Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

export default function NavBar() {

    return (
        <div className='navbar'>
            <div className="logo">
                <div><img src={logo} className='imglogo'/></div>
                <div className='textlogo'>ACT CENTER</div>
            </div>
            <div className="navMenu">
                <a className='navMenuItem' href='/'>Home</a>
                <a className='navMenuItem' href='/about'>About</a>
                <a className='navMenuItem' href='resources'>Resources</a>
                <a className='navMenuItem' href='/submission'>Submission</a>
                {/* <a className='navMenuItem' href='/support'>Support</a> */}
                <a className='navMenuItem' href='/evaluation'>Evaluation</a>
                <a className='navMenuItem' href='/contact'>Contact</a>
            </div>
        </div>
    )
}
