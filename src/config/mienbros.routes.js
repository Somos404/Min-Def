import LayoutMain from 'layouts/LayoutMain'
import Error404 from 'pages/Error404'
//acciones
import Intranet from 'pages/miembros/intranet'
import Mapa from 'pages/miembros/mapa'
import Turnos from 'pages/miembros/turnos'


export default {
    path: "/miembros",
    component: LayoutMain,
    exact: false,
    routes: [
        {
            path: "/miembros/intranet",
            component: Intranet,
            exact: true
        },
        {
            path: "/miembros/mapa",
            component: Mapa,
            exact: true
        },
        {
            path: "/miembros/turnos",
            component: Turnos,
            exact: true
        },
        {
            component: Error404
        }
    ]
}