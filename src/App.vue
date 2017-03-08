<template>
  <div id="app">
        <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
        </transition>
      <sidebar></sidebar>
  </div>
</template>

<script>
require('./assets/sass/global.scss')
require('./assets/css/animation.css')

import Sidebar from './components/Sidebar'
import Home from './pages/Home'

    export default {
      name: 'app',
      components: {
        Sidebar, Home 
      },
      data () {
        return {
          
        }
      },
      methods: {

      }
    }

</script>
