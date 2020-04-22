<template>
    <div class="app-main-layout">
        <Sidebar></Sidebar>

        <main class="app-content">
            <Header></Header>

            <div class="app-page">
                <router-view />
            </div>
        </main>

    </div>



</template>

<script>
    import Sidebar from '@/components/app/Sidebar'
    import Header from '@/components/app/Header'

    export default {
        name: 'main-layout',
        components: {
            Sidebar,
            Header
        }
    }
</script>

<style scoped lang="sass">
    .app-main-layout
        padding: 15px
        width: 100%
        display: flex
        flex-direction: row

    .app-content
        width: 80%
        display: flex
        flex-direction: column
        padding: 25px 25px
</style>
