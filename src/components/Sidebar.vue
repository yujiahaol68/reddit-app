<template>
    <div class="sidebar">
        <mu-drawer :open="open" :docked="docked" @close="close()">
            <mu-list @itemClick="docked ? '' : toggle()" class="menu-list">
                <mu-list-item title="Home">
                    <mu-icon slot="left" value="home"/>
                </mu-list-item>
                <mu-divider />
                <mu-list-item title="GIFs">
                    <mu-icon slot="left" value="videocam"/>
                </mu-list-item>
            </mu-list>
        </mu-drawer>
    </div>
</template>

<script>

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
            close () {
                this.$store.state.sideBarOpened = false
            }
        },
        computed: {
            open () {
                return this.$store.state.sideBarOpened
            }
        }
    }
    
</script>

<style scoped>

.menu-list {
    padding-top: 100px;
}

</style>