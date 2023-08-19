<template>
    <div class="container-fluid">
        <div class="row">
            <h2 class="display-2">Users</h2>
        </div>
        <div class="row">

        </div>
    </div>
</template>

<script>
    export default {
    computed: {
            users() {
                return this.$store.users
            }
    },
    mounted() {
        this.$store.dispatch('fetchUsers')
    },
    }
</script>

<style scoped>

</style>