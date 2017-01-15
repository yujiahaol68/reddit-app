// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import vueResource from 'vue-resource'
import VueTouch from 'vue-touch'

//UI framework
//import MuseUI from 'muse-ui'
//import 'muse-ui/dist/muse-ui.css'
//import 'muse-ui/dist/theme-default.css'
import 'muse-components/styles/base.less'
import 'muse-components/grid/grid.less'

//import external components
import VueLazyload from 'vue-lazyload'

//import UI components
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


import App from './App'

VueTouch.config.swipe = {
  direction: 'horizontal'
}

//vue-touch configuration
VueTouch.registerCustomEvent('doubletap', {
  type: 'tap',
  taps: 2
})

Vue.use(VueTouch, {name: 'v-touch'})

Vue.use(VueLazyload, {
  preLoad: 1.1,
  loading: 'http://ojt3x01ru.bkt.clouddn.com/image/loading/ring.gif',
  error: 'http://ojt3x01ru.bkt.clouddn.com/image/loading/ring.gif',
  attempt: 2,
  listenEvents: [ 'scroll' ]
})

//Vue.use(vueResource)
//Vue.use(MuseUI)

//apply components
Vue.component(appBar.name, appBar)
Vue.component(iconButton.name, iconButton)
Vue.component(iconMenu.name, iconMenu)
Vue.component(dropDownMenu.name, dropDownMenu)
Vue.component(divider.name, divider)
Vue.component(infiniteScroll.name, infiniteScroll)
Vue.component(col.name, col)
Vue.component(row.name, row)
Vue.component(selectField.name, selectField)
Vue.component(menuItem.name, menuItem)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
