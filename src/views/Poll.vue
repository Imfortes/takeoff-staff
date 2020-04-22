<template>
  <div>

    <FormTabs></FormTabs>

    <form action="">

      <h3>Добавить опрос</h3>

      <FormAge></FormAge>

      <FormCardType></FormCardType>

      <FormCardStatus></FormCardStatus>

      <FormCardChoose></FormCardChoose>

      <FormConditionCreate></FormConditionCreate>

      <FormSubmit></FormSubmit>

    </form>

  </div>

</template>

<script>
  import FormTabs from '@/components/app/FormTabs'
  import FormAge from '@/components/app/FormAge'
  import FormCardType from '@/components/app/FormCardType'
  import FormCardStatus from '@/components/app/FormCardStatus'
  import FormCardChoose from '@/components/app/FormCardChoose'
  import FormConditionCreate from '@/components/app/FormConditionCreate'
  import FormSubmit from '@/components/app/FormSubmit'

  export default {
    data: () => ({

    }),
    components: {
      FormTabs,
      FormAge,
      FormCardType,
      FormCardStatus,
      FormCardChoose,
      FormConditionCreate,
      FormSubmit
    }
  }
</script>

<style lang="sass">
  h3
    margin-left: 65px

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

  form
    margin-top: 20px
    border: 1px solid rgba(0, 0, 0, .1)
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5)
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5)
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5)

  select
    width: 60%
    padding: 5px 15px

  .form-inner
    padding: 25px 75px

    &__item

      &-condition
        display: flex
        justify-content: space-between
        margin-bottom: 15px

      &-range
        display: flex
        justify-content: space-between

        &-inner
          display: flex
          justify-content: space-between

          b
            padding: 5px
            background-color: rgba(255, 254, 78, 0.75)

          input
            margin: 5px 5px

            &:last-child
              margin-right: 0

      &-btns
        margin-top: 20px
        display: flex
        justify-content: space-between
        padding-left: 40%

        &-add
          padding: 5px 5px 5px 25px
          position: relative
          color: rgba(77, 155, 55, 0.7)
          background-color: #fff
          outline: none
          border: 1px solid rgba(77, 155, 55, 0.7)

          &:after
            content: '+'
            position: absolute
            left: 10px

        &-remove
          padding: 5px 5px 5px 25px
          position: relative
          color: rgba(185, 0, 0, 0.71)
          background-color: #fff
          outline: none
          border: 1px solid rgba(185, 0, 0, 0.71)

          &:after
            content: '-'
            position: absolute
            left: 10px

  .terms
    background-color: rgba(239, 255, 22, 0.2)

  .card-type
    background-color: rgba(13, 22, 165, 0.2)
    position: relative

    &:after
      content: 'И'
      position: absolute
      top: -19px
      left: 65px
      padding: 10px
      -webkit-border-radius: 3px
      -moz-border-radius: 3px
      border-radius: 3px
      background-color: rgba(13, 22, 190, 0.4)

  .status
    background-color: rgba(27, 175, 26, 0.2)
    position: relative

    &:after
      content: 'И'
      position: absolute
      top: -19px
      left: 65px
      padding: 10px
      -webkit-border-radius: 3px
      -moz-border-radius: 3px
      border-radius: 3px
      background-color: rgba(27, 175, 26, 0.4)

  .choose
    background-color: rgba(145, 145, 145, 0.21)

    .form-inner__item-btns-add
      visibility: hidden

  .create-new-condition
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    color: #4ecd38
    border: 1px solid rgba(0, 0, 0, .2)
    -webkit-border-radius: 3px
    -moz-border-radius: 3px
    border-radius: 3px

    span
      font-size: 40px

    p
      margin: 0 0 10px 0
      text-align: center

  .submit
    background-color: rgba(145, 145, 145, 0.21)

    &__item

      &-btns
        padding: 0

        &-start
          color: #4ecd38
          background-color: #fff
          padding: 10px 15px
          border: none
          outline: none
          -webkit-border-radius: 3px
          -moz-border-radius: 3px
          border-radius: 3px

        &-next
          color: #fff
          background-color: #4ecd38
          padding: 10px 15px
          border: none
          outline: none
          -webkit-border-radius: 3px
          -moz-border-radius: 3px
          border-radius: 3px

          &:after
            content: '->'
            margin-left: 5px


</style>
