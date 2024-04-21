import React from 'react'
import "./NavBar.css"

export default function NavBar() {
    return (
        <div className='navbar'>
            <div className="logo">
                ACT CENTER
            </div>
            <div className="navMenu">
                <div className='navMenuItem'>Home</div>
                <div className='navMenuItem'>About</div>
                <div className='navMenuItem'>Resources</div>
                <div className='navMenuItem'>Submissions</div>
                <div className='navMenuItem'>Support</div>
                <div className='navMenuItem'>Evaluations</div>
                <div className='navMenuItem'>People</div>
                <div className='navMenuItem'>Contact</div>
            </div>
        </div>
    )
}
