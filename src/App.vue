<template>
  <div id="app">
    <v-touch @doubletap="refresh">
      <mu-appbar title="Reddit App" class="app-bar">
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
      channel: 'All',
      categories: ['All', 'Food', 'Space', 'Movies', 'Funny', 'News'],
      refreshWhatever: true
    }
  },
  methods: {
    channelChange(val) {
      this.channel = val
    },
    refresh() {
      console.log('refresh')
      this.refreshWhatever = !this.refreshWhatever
    }
  }
}
</script>

<style>
  body {
    color: #666666;
    background: #f4f4f4;
    margin: 0;
    padding: 0;
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
