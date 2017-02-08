<template>
    <div class="sidebar">
        <mu-drawer :open="openState" :docked="docked" @close="sideBarClose()">
            <mu-list class="menu-list">
                <router-link to="/">
                    <mu-list-item title="Home" @click="sideBarClose()">
                        <mu-icon slot="left" value="home"/>
                    </mu-list-item>
                </router-link>
                <mu-divider />
                <router-link to="/gifs">
                    <mu-list-item title="GIFs" @click="sideBarClose()">
                        <mu-icon slot="left" value="videocam"/>
                    </mu-list-item>
                </router-link>
            </mu-list>
        </mu-drawer>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'

    export default {
        name: 'sidebar',
        components: {

        },
        data () {
            return {
                docked: false
            }
        },
        methods: {
            ...mapMutations([
                'sideBarClose'
            ])
        },
        computed: {
            ...mapGetters([
                'openState'
            ])
        }
    }
    
</script>

<style scoped>

.menu-list {
    padding-top: 100px;
}

</style>