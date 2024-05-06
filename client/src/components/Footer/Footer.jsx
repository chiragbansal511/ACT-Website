import React from 'react'
import "./Footer.css"

export default function Footer() {
    let copyright = String.fromCodePoint(0x00A9);
  return (
    <>
    <div className='footer'>
        
        {/* <div className="sideElement"></div> */}

        <div className="footerColumn">
            <h3>ACT CENTER</h3>
            <p>Thapar Institute of Engineering and Technology</p>

            <p>Transdisciplinary collaboration is not just encouraged but embedded in our educational and research culture</p>
        </div>
        <div className="footerColumn">
            <h3>Quick Links</h3>
            <div>
                <p><a href="/">Home</a></p>
                <p><a href="/about">About</a></p>
                <p><a href="/resources">Resources</a></p>
                <p><a href="/submission">Submissions</a></p>
                {/* <p><a href="">Support</a></p> */}
                <p><a href="/evaluation">Evaluations</a></p>
                <p><a href="/people">People</a></p>
                <p><a href="/contact">Contact</a></p>
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
        <p>{copyright} Thapar Institute of Engineering and Technology</p>
    </div>
    </>
  )
}
