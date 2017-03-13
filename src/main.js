// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueTouch from 'vue-touch'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store'
//import FastClick from 'fastclick'

/*FastClick
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}*/

//UI framework
//For dev
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-default.css'

//Custom StyleSheet
import './assets/css/animation.css'

//For production
import 'muse-components/styles/base.less'
import 'muse-components/grid/grid.less'

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
import menuItem from 'muse-components/menu/menuItem'
import drawer from 'muse-components/drawer'
import icon from 'muse-components/icon'
import list from 'muse-components/list/list'
import listItem from 'muse-components/list/listItem'
import textField from 'muse-components/textField'
*/

/*Apply components(PRODUCT)
Vue.component(appBar.name, appBar)
Vue.component(iconButton.name, iconButton)
Vue.component(iconMenu.name, iconMenu)
Vue.component(dropDownMenu.name, dropDownMenu)
Vue.component(divider.name, divider)
Vue.component(infiniteScroll.name, infiniteScroll)
Vue.component(col.name, col)
Vue.component(row.name, row)
Vue.component(menuItem.name, menuItem)
Vue.component(drawer.name, drawer)
Vue.component(icon.name, icon)
Vue.component(list.name, list)
Vue.component(listItem.name, listItem)
Vue.component(textField.name, textField)
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
  loading: '//ojt3x01ru.bkt.clouddn.com/image/loading/ring.gif',
  error: '//ojt3x01ru.bkt.clouddn.com/image/post/Article.png',
  attempt: 2,
  listenEvents: [ 'scroll' ]
})

Vue.use(VueRouter)
//Routes Configuration

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
  scrollBehavior
})

//For dev
Vue.use(MuseUI)

//Router Setup into root component
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
