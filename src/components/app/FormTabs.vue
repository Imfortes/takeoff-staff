<template>
    <ul class="poll app-poll">
        <router-link
                v-for="link in links"
                :key="link.url"
                tag="li"
                class="poll-link"
                active-class="active"
                :to="link.url"
                :exact="link.exact"
        >

            <a href="#" class="">
                {{ link.title }}
            </a>

        </router-link>
    </ul>
</template>

<script>
    export default {
        data: () => ({
            links: [
                {title: 'Параметры', url: '/params'},
                {title: 'Вопросы', url: '/questions',},
                {title: 'Логика', url: '/logic'},
                {title: 'Условия', url: '/condition'},
                {title: 'Респонденты', url: '/respondents', exact: true},
            ]
        })
    }
</script>

<style scoped lang="sass">
    .poll
        width: 100%
        display: flex
        flex-direction: row
        justify-content: space-between
        align-items: center
        margin: 0
        padding: 0
        margin-top: 25px

        &-link
            width: 20%

        a
            color: #4ecd38
            text-decoration: none
            display: flex
            justify-content: center
            align-items: center

            &:hover
                color: #000

        .active
            color: #000
            border-bottom: 1px solid #4ecd38
</style>


