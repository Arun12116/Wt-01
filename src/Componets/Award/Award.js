import React from 'react'
import { BsTrophy } from "react-icons/bs"
import { FaBriefcase } from "react-icons/fa"
import { AiTwotoneCar } from "react-icons/ai"
import { BsTwitter } from "react-icons/bs"


import "./Award.css"
const Award = () => {
    return (
        <>
            <div className="award-conatiner">
                <div className="award-Container-Body">
                    <div className='social-icon'>
                        <li >{<BsTrophy style={{ width: "20vw", height: "10vh", color: "white", textAlign: "center" }} />}</li>
                        <div className="about">
                            <h1>22</h1>
                            <p>Award wening</p>
                        </div>

                    </div>
                    <div className='social-icon'>
                        <li>{<FaBriefcase style={{ width: "20vw", height: "10vh", color: "white", textAlign: "center" }} />}</li>
                        <div className="about">
                            <h1>145</h1>
                            <p>Finishid Projects</p>
                        </div>

                    </div>
                    <div className='social-icon'>
                        <li>{<AiTwotoneCar style={{ width: "20vw", height: "10vh", color: "white", textAlign: "center" }} />}</li>
                        <div className="about">
                            <h1>345</h1>
                            <p>Product Solds</p>
                        </div>

                    </div>
                    <div className='social-icon'>
                        <li>{<BsTwitter style={{ width: "20vw", height: "10vh", color: "white", textAlign: "center" }} />}</li>
                        <div className="about">
                            <h1>2456</h1>
                            <p>Tweeter Fans</p>
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}

export default Award