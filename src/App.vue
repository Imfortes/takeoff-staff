<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
  import MainLayout from '@/layouts/MainLayout'

  export default {
    computed: {
      layout(){
        return (this.$route.meta.layout) + '-layout'
      }
    },
    components: {
      MainLayout
    }
  }
</script>

<style lang="sass">
  html
    box-sizing: border-box

  body
    padding: 0
    margin: 0

  ul
    list-style: none

  button,
  a
    cursor: pointer
</style>
