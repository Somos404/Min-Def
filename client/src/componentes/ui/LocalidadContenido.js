import React, { Component } from 'react'
import Castelli from '../Localidades/Castelli'
import Charata from '../Localidades/Charata'
import Resistencia from '../Localidades/Resistencia'
import SaenzPeña from '../Localidades/SaenzPeña'
import SanMartin from '../Localidades/SanMartin'
import VillaAngela from '../Localidades/VillaAngela'
import Home from 'pages/Home'

//import DefaultLegend from './DefaultLegend'
import DefaultLegend from './DefaultLegend'

import {Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Miembros from './Miembros'

export default class LocalidadContenido extends Component {
    render() {
        return (
            <Switch>
                {/* <Route  exact path="/miembros" component={DefaultLegend}/> */}
                <Route  exact path="/miembros/castelli" component={Castelli}/>
                <Route  exact path="/miembros/charata" component={Charata}/>
                <Route  exact path="/miembros/resistencia" component={Resistencia}/>
                <Route  exact path="/miembros/saenzPeña" component={SaenzPeña}/>
                <Route  exact path="/miembros/sanMartin" component={SanMartin}/>
                <Route  exact path="/miembros/villaAngela" component={VillaAngela}/>
            </Switch>
        )
    }
}