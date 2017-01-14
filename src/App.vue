<template>
  <div id="app">
      <mu-appbar title="Reddit App">
        <mu-icon-menu icon="more_vert" slot="right" @change="channelChange" :value="channel">
          <mu-menu-item v-for="category in categories" :value="category" :title="category"/>
        </mu-icon-menu>
      </mu-appbar>

      <subreddits :category="channel"></subreddits>

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
      channel: 'food',
      categories: ['food', 'space', 'movies', 'funny', 'news']
    }
  },
  methods: {
    channelChange(val) {
      this.channel = val
    }
  }
}
</script>

<style>
  body {
    font-family: arial;
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
</style>
