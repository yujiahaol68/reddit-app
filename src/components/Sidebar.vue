<template>
    <div class="sidebar">
        <mu-drawer :open="open" :docked="docked" @close="toggle()">
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
        props: [ 'toggleBar' ],
        components: {

        },
        data () {
            return {
                open: false,
                docked: false
            }
        },
        methods: {
            toggle () {
                this.open = !this.open
            }
        },
        watch: {
            toggleBar: function (newVal) {
                this.open = true
            }
        }
    }
</script>

<style scoped>

.menu-list {
    padding-top: 100px;
}

</style>