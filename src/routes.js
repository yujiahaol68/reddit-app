import Home from './pages/Home.vue'
import Gifs from './pages/Gifs.vue'
import Subdetail from './pages/Subdetail.vue'
import NotFound from './pages/NotFound.vue'
import ImageViewer from './components/ImageViewer.vue'

export const routes = [
    { path: '', component: Home, name: 'home' },
    { path: '/gifs', component: Gifs, name: 'gifs' },
    { path: '/subdetail', component: Subdetail, name: 'subdetail' },
    { path: '/viewer', component: ImageViewer, name: 'imageViewer' },
    { path: '*', component: NotFound, name: 'notFound' }
]