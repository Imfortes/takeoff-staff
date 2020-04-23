<template>
    <div class="card-type form-inner">
        <div class="card-type__item form-inner__item">

            <div class="card-type__item-select form-inner__item-condition">
                <label for="card-type">Условие 2</label>
                <select name="" id="card-type">
                    <option value="Тип" selected>Тип карты лояльности</option>

                </select>
            </div>

            <div class="card-type__item-range form-inner__item" v-for="(input, k) in inputs" :key="k">
                <div class="card-type__item-range-inner form-inner__item-condition">
                    <label for="type"><b v-if="k > 0">Или</b> Тип {{ ++k }}</label>
                    <select name="" id="type">
                        <option value="Возраст" selected>Gold</option>
                    </select>
                </div>
            </div>

            <div class="terms__item-btns form-inner__item-btns">
                <button class="form-inner__item-btns-add" @click="add(k)">Добавить тип</button>
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
        background-color: rgba(13, 22, 165, 0.75)
</style>
