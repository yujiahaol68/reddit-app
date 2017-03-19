<template>
    <div class="subdetail">
        <mu-appbar>
            <mu-icon-button icon="arrow_back" slot="left" @click.native="backToHome"/>
        </mu-appbar>
        <div class="container">
        
        </div>
    </div>
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

<style lang="scss" scoped>

.container {
    padding-top: 56px;
}
</style>