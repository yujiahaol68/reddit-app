<template>
    <div class="home">
        <v-touch @doubletap="refresh">
            <mu-appbar title="Reddit App" class="app-bar">
                <mu-icon-button @click="toggleSideBar" icon="menu" slot="left"/>
            </mu-appbar>
        </v-touch>
      <subreddits class="container"></subreddits>        
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Subreddits from '../components/Subreddits'

    export default {
        name: 'home',
        components: {
            Subreddits
        },
        data () {
            return {
                
            }
        },
        methods: {
            ...mapMutations([
                'toggleSideBar'
            ]),
            refresh () {
                console.log('refresh')
                this.$store.dispatch('refreshList')
            }
        }
            
    }
</script>

<style scoped>

.home {
    color: #666666;
    background: #f4f4f4;    
}

.container {
    padding-top: 56px;
}

</style>