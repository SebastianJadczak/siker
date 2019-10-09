import React from 'react';
import '../../styles/SecondContent.css';
import FirstInf from './SecondContent/FirstInf'
import SecondInf from './SecondContent/SecondInf'


const SecondContent = () => {
    return (

        <div className="Content">
            <div className="firstInf"><FirstInf /> </div>
            <div className="secondInf"><SecondInf /> </div>
            <div className="buttonSecondContent">  <button className="SecondContent">Zaloguj się!</button></div>
        </div>
    )
}
export default SecondContent;