import React from 'react'
import "./NavBar.css"


export default function NavBar() {

    return (
        <div className='navbar'>
            <div className="logo">
                ACT CENTER
            </div>
            <div className="navMenu">
                <a className='navMenuItem' href='/'>Home</a>
                <select className='navMenuItem' onChange={(e)=>window.location = e.target.value} >
                    <option value="/team">Team</option>
                    <option value="/about">About</option>
                </select>
                <a className='navMenuItem' href='resources'>Resources</a>
                <a className='navMenuItem' href='/submission'>Submission</a>
                <a className='navMenuItem' href='/support'>Support</a>
                <a className='navMenuItem' href='/evaluation'>Evaluations</a>
                <a className='navMenuItem' href='/contact'>Contact</a>
            </div>
        </div>
    )
}
