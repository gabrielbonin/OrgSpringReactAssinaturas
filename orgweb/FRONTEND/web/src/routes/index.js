import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../views/Home';
import NovoAbx from '../views/NovoAbaixoAssinado';
import NovoUser from '../views/NovoUser';
import AbaixoAssinado from '../views/AbaixoAssinado';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {Home}/>
                <Route path="/abaixo-assinados/new-abx"   component = {NovoAbx}/>
                <Route path="/users/new-user" exact component = {NovoUser}/>
                <Route path="/abaixo-assinados/:id" exact component = {AbaixoAssinado}/>
                {/* <Route path="/users/new-user" exact component = {User}/> */}
            </Switch>
        </BrowserRouter>
    )
}   