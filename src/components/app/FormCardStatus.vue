<template>
    <div class="status form-inner">
        <div class="status__item form-inner__item">

            <div class="status__item-select form-inner__item-condition">
                <label for="status">Условие 3</label>
                <select name="" id="status">
                    <option value="Возраст" selected>Статус карты лояльности</option>

                </select>
            </div>

            <div class="status__item-range form-inner__item" v-for="(input, k) in inputs" :key="k">
                <div class="status__item-range-inner form-inner__item-condition">
                    <label for="isActive"><b v-if="k > 0">Или</b> Статус {{ ++k }}</label>
                    <select name="" id="isActive">
                        <option value="Возраст" selected>Активна</option>
                    </select>
                </div>
            </div>

            <div class="status__item-btns form-inner__item-btns">
                <button class="form-inner__item-btns-add" @click="add(k)">Добавить статус</button>
                <button class="form-inner__item-btns-remove" @click="remove(k)">Удалить условие</button>
            </div>

        </div>
    </div>
</template>

<script>
    export default{
        data: () => ({
            inputs: [
                {
                    name: ''
                }
            ],
            type: []
        }),
        methods: {
            add(){
                this.inputs.push({ name: ''})
            },
            remove(index){
                this.inputs.splice(index, 1)
            }
        }
    }
</script>

<style scoped lang="sass">
    b
        padding: 5px
        background-color: rgba(27, 175, 26, 0.75)
</style>
