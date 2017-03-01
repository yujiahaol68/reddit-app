<template>
    <transition enter-active-class="animated slideInRight" mode="out-in">
    <div class="subdetail">
        <mu-appbar>
            <mu-icon-button icon="arrow_back" slot="left" @click.native="backToHome"/>
        </mu-appbar>
    </div>
    </transition>
</template>

<script>
    export default {
        name: 'subdetail',
        components: {
            
        },
        data () {
            return {
                
            }
        },
        methods: {
            backToHome () {
                this.$router.push({ name: 'home' })
            }
        }
    }
</script>

<style scoped>

</style>