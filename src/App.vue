<template>
  <div id="app">
    <v-touch @doubletap="refresh">
      <mu-appbar title="Reddit App" class="app-bar">
        <mu-icon-button icon='menu' slot="left"/>
        <mu-icon-menu icon="more_vert" slot="right" @change="channelChange" :value="channel.toLowerCase()">
          <mu-menu-item v-for="category in categories" :value="category" :title="category"/>
        </mu-icon-menu>
      </mu-appbar>
    </v-touch>
      <subreddits :category="channel" :refresh-state="refreshWhatever" class="container"></subreddits>

  </div>
</template>

<script>
import Subreddits from './components/Subreddits'

export default {
  name: 'app',
  components: {
    Subreddits
  },
  data() {
    return {
      channel: 'All',   //default channel
      categories: ['All', 'Food', 'Space', 'Movies', 'Funny', 'News'],    //popular channel
      refreshWhatever: true   //doubleTap refresh whatever the value
    }
  },
  methods: {
    channelChange(val) {
      this.channel = val
    },
    refresh() {
      console.log('refresh')
      this.refreshWhatever = !this.refreshWhatever    //change the value, DOM render again
    }
  }
}
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Helvetica', sans-serif;
  }

  body {
    color: #666666;
    background: #f4f4f4;
  }
  
  /* self host material iconfont avoid being blocked in some mobile browser */
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(http://ojt3x01ru.bkt.clouddn.com/iconfont/MaterialIcons-Regular.eot); /* For IE6-8 */
    src: local('Material Icons'),
         local('MaterialIcons-Regular'),
         url(http://ojt3x01ru.bkt.clouddn.com/iconfont/MaterialIcons-Regular.woff2) format('woff2'),
         url(http://ojt3x01ru.bkt.clouddn.com/iconfont/MaterialIcons-Regular.woff) format('woff'),
         url(http://ojt3x01ru.bkt.clouddn.com/iconfont/MaterialIcons-Regular.ttf) format('truetype');
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
    color: black;
  }

  header {
    background: coral;
    color: #ffffff;
    padding: 10px;
    text-align: center;
  }

  .app-bar {
    position: fixed;
  }

  .container {
    padding-top: 56px;
  }
</style>
