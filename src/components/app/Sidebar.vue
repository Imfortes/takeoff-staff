<template>
    <div class="sidenav">
        <ul class=" app-sidenav">
            <router-link
                    v-for="link in links"
                    :key="link.url"
                    tag="li"
                    class="sidenav-link"
                    active-class="active"
                    :to="link.url"
                    :exact="link.exact"
            >

                <a href="#" class="">
                    {{ link.title }}
                </a>

            </router-link>
        </ul>

        <a href="#" class="help">?</a>
    </div>

</template>

<script>
    export default {
        data: () => ({
            links: [
                {title: '', url: '/', exact: true},
                {title: 'Опросы', url: '/poll',},
                {title: 'Пользователи', url: '/users'},
                {title: 'Черные списки', url: '/blacklist'},
                {title: 'Колл центр', url: '/call'},
            ]
        })
    }
</script>

<style scoped lang="sass">
    .sidenav
        width: 15%
        padding: 5px 5px
        display: flex
        flex-direction: column
        justify-content: space-between
        align-items: center

    .app-sidenav
        margin: 0
        padding: 0
        width: 100%
        height: 100%
        display: flex
        flex-direction: column
        border-right: 1px solid rgba(0, 0, 0, .1)


    .sidenav-link:first-child
        margin-bottom: 15px

    .sidenav-link
        width: 100%
        height: 50px
        margin: 10px 0

    .sidenav-link:first-child a:before
        content: ''
        width: 25px
        height: 25px
        -webkit-border-radius: 50%
        -moz-border-radius: 50%
        border-radius: 50%
        background-color: #ff0000

    .sidenav-link a
        width: 100%
        height: 100%
        display: flex
        justify-content: center
        align-items: center
        text-decoration: none
        color: #000

        &:hover
            background-color: #fff
            border: 1px solid rgb(188, 255, 100)

    .active
        background-color: rgba(0, 0, 0, .2)

    img
        width: 10px
        height: 10px

    .help
        margin-bottom: 200px
        border: 1px solid black
        padding: 15px
        display: flex
        justify-content: center
        align-items: center
        -webkit-border-radius: 50%
        -moz-border-radius: 50%
        border-radius: 50%
        text-decoration: none
        color: #4ecd38
</style>
