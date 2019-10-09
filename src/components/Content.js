import React, { Component } from "react"
import FirstContent from "./Content/FirstContent"
import SecondContent from './Content/SecondContent'
import ThirdContent from './Content/ThirdContent'
import FourthContent from './Content/FourthContent'



class Content extends Component {


    render() {

        return (

            <>
                <div className="FirstContent">  <FirstContent /></div>
                <div className="SecondContent">      <SecondContent /></div>
                <div className="ThirdContent">      <ThirdContent /></div>
                <div className="FourthContent">      <FourthContent /></div>
            </>
        )
    }
}
export default Content;