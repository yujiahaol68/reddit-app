import Home from './pages/Home.vue'
import Gifs from './pages/Gifs.vue'
import Subdetail from './pages/Subdetail.vue'
import NotFound from './pages/NotFound.vue'
import ImageViewer from './components/ImageViewer.vue'

export const routes = [
    { path: '', component: Home },
    { path: '/gifs', component: Gifs },
    { path: '/subdetail', component: Subdetail },
    { path: '/viewer', component: ImageViewer},
    { path: '*', component: NotFound }
]