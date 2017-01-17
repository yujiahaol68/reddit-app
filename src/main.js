// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueTouch from 'vue-touch'
import VueRouter from 'vue-router'

//UI framework
//For dev
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-default.css'

/*For production
import 'muse-components/styles/base.less'
import 'muse-components/grid/grid.less'*/

//import external components
import VueLazyload from 'vue-lazyload'    //image lazy load

import App from './App'

/*import UI components(PRODUCT)
import appBar from 'muse-components/appBar'
import iconButton from 'muse-components/iconButton'
import iconMenu from 'muse-components/iconMenu'
import dropDownMenu from 'muse-components/dropDownMenu'
import divider from 'muse-components/divider'
import infiniteScroll from 'muse-components/infiniteScroll'
import col from 'muse-components/grid/col'
import row from 'muse-components/grid/row'
import selectField from 'muse-components/selectField'
import menuItem from 'muse-components/menu/menuItem'
*********************** */
/*DEV
imoprt toast from 'muse-components/toast'*/

/*Apply components(PRODUCT)
Vue.component(appBar.name, appBar)
Vue.component(iconButton.name, iconButton)
Vue.component(iconMenu.name, iconMenu)
Vue.component(dropDownMenu.name, dropDownMenu)
Vue.component(divider.name, divider)
Vue.component(infiniteScroll.name, infiniteScroll)
Vue.component(col.name, col)
Vue.component(row.name, row)
Vue.component(selectField.name, selectField)
Vue.component(menuItem.name, menuItem)*/
//**********************
/*DEV
Vue.component(toast.name, toast)
 */


//vue-touch gesture configuration
VueTouch.config.swipe = {
  direction: 'horizontal'
}

//vue-touch configuration
VueTouch.registerCustomEvent('doubletap', {
  type: 'tap',
  taps: 2
})

//Apply plugin for vue
Vue.use(VueTouch, {name: 'v-touch'})

Vue.use(VueLazyload, {
  preLoad: 1.2,
  loading: 'http://ojt3x01ru.bkt.clouddn.com/image/loading/ring.gif',
  error: 'http://ojt3x01ru.bkt.clouddn.com/image/post/Article.png',
  attempt: 2,
  listenEvents: [ 'scroll' ]
})

Vue.use(VueRouter)

//For dev
Vue.use(MuseUI)

//Routes Configuration
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    
  ]
})


//Router Setup into root component
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
