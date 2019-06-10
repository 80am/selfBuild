import { Switch, Route } from 'react-router-dom'
import React from 'react'
import builder from './Components/builder'


export default(
    <Switch>
        <Route exact path= '/' component={builder} />
    </Switch>

)