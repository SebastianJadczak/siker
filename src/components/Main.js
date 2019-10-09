import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from "./Main/Welcome";
import ErrorPage from "./Main/ErrorPage"

const Main = () => {
    return (
        <div className="main">
            <Switch>
                <Route path="/" exact component={Welcome} />
                <Route component={ErrorPage} />
            </Switch>

        </div>

    )
}
export default Main;