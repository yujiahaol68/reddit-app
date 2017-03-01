<template>
  <div id="app">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
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
          
        }
      },
      methods: {

      }
    }

</script>

<style lang="scss">
@import './assets/sass/global.scss';
@import './assets/css/animation.css';


</style>
