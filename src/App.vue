<template>
  <div id="app">
      <transition name="transitionName" :enter-active-class="animatedIn" :leave-active-class="animatedOut" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
      <sidebar></sidebar>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Home from './pages/Home'

    export default {
      name: 'app',
      components: {
        Sidebar, Home 
      },
      data () {
        return {
          transitionName: 'transitionName',
          animatedIn: '',
          animatedOut: 'fade'
        }
      },
      watch: {
        '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        if(to.path === '/viewer') {
          this.animatedIn = 'animated zoomIn'
        }
       }
      },
      methods: {

      }
    }

</script>

<style lang="scss">
@import './assets/sass/global.scss';

</style>
