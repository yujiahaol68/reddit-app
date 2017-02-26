<template>
  <div id="app">
      <transition :name="transitionName">
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
          transitionName: ''
        }
      },
      methods: {

      }
    }

</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Helvetica', sans-serif;
  }
  
  /* self host material iconfont avoid being blocked in some mobile browser */
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(//ojt3x01ru.bkt.clouddn.com/iconfont/MaterialIcons-Regular.eot); /* For IE6-8 */
    src: local('Material Icons'),
         local('MaterialIcons-Regular'),
         url(//ojt3x01ru.bkt.clouddn.com/iconfont/MaterialIcons-Regular.woff2) format('woff2'),
         url(//ojt3x01ru.bkt.clouddn.com/iconfont/MaterialIcons-Regular.woff) format('woff'),
         url(//ojt3x01ru.bkt.clouddn.com/iconfont/MaterialIcons-Regular.ttf) format('truetype');
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }

  a {
    text-decoration: none;
  }

  .app-bar {
    position: fixed;
  }

  .container {
    padding-top: 56px;
  }
</style>
