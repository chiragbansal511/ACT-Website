import React from 'react'
import "./Home.css"

import Health from "./Assets/Health.png"
import Environment from "./Assets/Environment.png"
import Learning from "./Assets/Learning.png"

export default function Home() {
    return (
        <div className="home">
            <div className='hero'>
                <div className="homeLeft">
                    <h1>
                        ACT
                    </h1>
                    <h3>
                        ART | COGNITION | TECHNOLOGY
                    </h3>
                    <p>
                    The ACT Center envisions a future where trans-disciplinary collaboration is not just encouraged but embedded in our educational and research culture.
                    </p>

                    <div className='homeButtonCont'>
                        <button className='homeButton button'>Research Topics</button>
                        <button className='homeButton button'>Trello</button>
                    </div>


                </div>
            </div>

            <div className="homeInterestAreas">

                <h3>Stride towards perfection</h3>
                <h1>Areas Of Interest</h1>

                <div className="homeInterestAreaCont">
                    <div className="homeInterestArea">
                        <img src={Health} alt="" />
                        <h3>Health and <br /> Well-being</h3>
                        <p>Unraveling health disparities, innovative healthcare delivery, and the development of interventions to enhance overall well-being.</p>
                    </div>

                    <div className="homeInterestArea">
                        <img src={Environment} alt="" />
                        <h3>Environment, Energy and Sustainability</h3>
                        <p>Exploration of sustainable solutions to environmental challenges, including energy      conservation, biodiversity preservation, and mitigation of climate change impacts.</p>
                    </div>

                    <div className="homeInterestArea">
                        <img src={Learning} alt="" />
                        <h3>Learning and Pedagogy</h3>
                        <p>Investigating novel methods and strategies to advance education and pedagogical practices, with a focus on improving learning outcomes and fostering lifelong learning.</p>
                    </div>
                </div>

                <div className="homeButtonCont">
                    <button className='homeButton button'> Read More </button>
                    <button className='homeButton button'> Research Topics </button>
                </div>

            </div>

            <div className="homePoster">

            </div>

            <div className="homeVideos">

                <div className="homeVideoSection">
                    <div className="homeVideoSectionText" style={{marginLeft: "50px"}}>
                        <h3>Trans-disciplinary Cooperation</h3>
                        <p>The Center aims to facilitate collaboration among diverse faculties, breaking down traditional silos to encourage the convergence of ideas, methodologies, and expertise. By fostering a culture of collaboration, we foresee the emergence of innovative solutions to complex problems</p>

                        <button className='homeButton button red'>Read More</button>
                    </div>
                    <div className="homeVideoSectionVideo">
                        Comming Soon
                    </div>
                </div>

                <div className="homeVideoSection">
                    <div className="homeVideoSectionVideo">
                        Comming Soon
                    </div>
                    <div className="homeVideoSectionText" style={{marginRight: "50px"}}>
                        <h3>Cutting-Edge Research</h3>
                        <p>At the core of ACT Center’s mission is the pursuit of research categorized by novelty and the potential for significant impact, aligning with Thapar’s commitment to academic excellence. The expectation for approved projects is the co-authoring of research papers publishable in peer-reviewed academic journals. Other forms of outcomes (artistic, practical, educational, etc.) could be secondary outcomes of research in the context of the ACT Center.</p>

                        <button className='homeButton button yellow'>Read More</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
