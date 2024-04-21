import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <>
    <div className='footer'>
        <div className="footerColumn">
            <h3>ACT CENTER</h3>
            <p>Thapar Institute of Engineering and Technology</p>

            <p>Trans disciplinary collaboration is not just encouraged but embedded in our educational and research culture</p>
        </div>
        <div className="footerColumn">
            <h3>Quick Links</h3>
            <div>
                <p>Home</p>
                <p>About</p>
                <p>Resources</p>
                <p>Submissions</p>
                <p>Support</p>
                <p>Evaluations</p>
                <p>People</p>
                <p>Contact</p>
            </div>
        </div>
        <div className="footerColumn">
            <h3>Visit Us</h3>
            <p>
            Thapar Institute of Engineering <br />
            and Technology, <br />
            Bhadson Rd, Adarsh Nagar, <br />
            Patiala, Punjab 147004
            </p>
        </div>
    </div>

    <div className="subfooter">
        Copyright Thapar Institute of Engineering and Technology, 2024
    </div>
    </>
  )
}
