<template>
    <header class="app-main-header">
        <div class="app-main-header__inner">
            <div class="app-main-header__inner-wrap">
                <input type="search" placeholder="Поиск по системе">
            </div>
            <div class="app-main-header__inner-wrap">
                <div class="user">
                    <figure class="user-icon"></figure>
                    <div class="user-description">
                        <span class="user-description__name">Alexander C.</span>
                        <span class="user-description__pos">Администратор</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="app-main-header__nav">
            Home -> Опросы -> Добавить опрос
        </div>
    </header>
</template>

<script>

</script>

<style scoped lang="sass">
    .app-main-header__inner
        display: flex
        justify-content: space-between
        align-items: center

        &-wrap
            width: 50%

    input
        width: 100%
        padding: 5px 10px
        border: 1px solid rgba(0, 0, 0, .2)
        outline: none
        -webkit-border-radius: 3px
        -moz-border-radius: 3px
        border-radius: 3px

    .user
        display: flex
        flex-direction: row
        justify-content: flex-end
        align-items: center

        &-icon
            width: 30px
            height: 30px
            -webkit-border-radius: 50%
            -moz-border-radius: 50%
            border-radius: 50%
            background-color: #797979
            margin: 0 10px 0 0
            padding: 0

        &-description
            display: flex
            flex-direction: column
            justify-content: center
            align-items: flex-start
</style>
