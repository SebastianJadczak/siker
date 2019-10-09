import React from 'react';
import FirstWelcome from "./Welcome/FistWelcome"
import SecondWelcome from './Welcome/SecondWelcome'
import ThirdWelcome from './Welcome/ThirdWelcome'
import '../../styles/Welcome.css'

const Welcome = () => {

    return (
        <div className="Welcome">
            <div className="FistWelcome">  <FirstWelcome /></div>
            <div className="SecondWelcome">     <SecondWelcome /></div>
            <div className="ThirdWelcome">    <ThirdWelcome /></div>
        </div>
    )
}
export default Welcome;