<template>
    <div class="home">
        <v-touch @doubletap="refresh">
            <mu-appbar title="Reddit App" class="app-bar">
                <mu-icon-button @click="toggleSidebar" icon="menu" slot="left"/>
                <mu-icon-menu icon="more_vert" slot="right" @change="channelChange" :value="channel.toLowerCase()">
                <mu-menu-item v-for="category in categories" :value="category" :title="category"/>
                </mu-icon-menu>
            </mu-appbar>
        </v-touch>
      <subreddits :category="channel" :refresh-state="refreshWhatever" class="container"></subreddits>        
    </div>
</template>

<script>
import Subreddits from '../components/Subreddits'

    export default {
        name: 'home',
        components: {
            Subreddits
        },
        data () {
            return {
                channel: 'All',   //default channel
                categories: ['All', 'Food', 'Space', 'Movies', 'Funny', 'News'],    //popular channel
                refreshWhatever: true,   //doubleTap refresh whatever the value
            }
        },
        methods: {
            channelChange (val) {
                this.channel = val
            },
            refresh () {
                console.log('refresh')
                this.refreshWhatever = !this.refreshWhatever    //change the value, DOM render again
            },
            toggleSidebar () {
                console.log('sideBarToggle!')
                this.$store.state.sideBarOpened = true
            }
        }
            
    }
</script>

<style scoped>

</style>