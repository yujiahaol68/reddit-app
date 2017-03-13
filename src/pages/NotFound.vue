<template>
    <div class="not-found" v-once>
        <h1>Ops..</h1>
        <h2>Not the page you are looing for</h2>
        <h2>404</h2>
        <h3>Redirecting...</h3>
    </div>
</template>

<script>
    export default {
        name: 'notfound',
        components: {
            
        },
        data () {
            return {
                
            }
        },
        activated () {
            this.delayAndRedirect()
        },
        methods: {
            delayAndRedirect () {
                setTimeout( () => {
                    this.$router.push({ name: 'home' })
                }, 2000)
            }
        }
    }
</script>

<style lang="scss" scoped>

.not-found {
    text-align: center;
    background-color: #f4f4f4;
    height: 600px;

    h3 {
        color: lightgreen;
    }

    h1 {
        color: coral;
    }
}

</style>