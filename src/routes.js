import Home from './pages/Home.vue'
import Gifs from './pages/Gifs.vue'
import Subdetail from './pages/Subdetail.vue'
import NotFound from './pages/NotFound.vue'

export const routes = [
    { path: '', component: Home },
    { path: '/gifs', component: Gifs },
    { path: '/subdetail', component: Subdetail },
    { path: '*', component: NotFound }
]