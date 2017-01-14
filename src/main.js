// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-default.css'

/*
import appBar from 'muse-components/appBar'
import iconButton from 'muse-components/iconButton'
import iconMenu from 'muse-components/iconMenu'
import dropDownMenu from 'muse-components/dropDownMenu'
*/

import App from './App'

Vue.use(vueResource)
Vue.use(MuseUI)
/*
Vue.component(appBar.name, appBar)
Vue.component(iconButton.name, iconButton)
Vue.component(iconMenu.name, iconMenu)
Vue.component(dropDownMenu.name, dropDownMenu)
*/


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
