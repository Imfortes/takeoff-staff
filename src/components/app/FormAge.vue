<template>
    <div class="terms form-inner">
        <div class="terms__item form-inner__item">

            <div class="terms__item-select form-inner__item-condition">
                <label for="age">Условие 1</label>
                <select name="" id="age" v-model="age" @input="updateAge">
                    <option value="Возраст респондента" selected>Возраст респондента</option>
                    <option v-for="n in 130" :key="n" :value="age">{{n}}</option>
                </select>
            </div>

            <div class="terms__item-range" v-for="(input, k) in inputs" :key="k">
                <div class="terms__item-range-inner form-inner__item-range-inner">
                    <span><b v-if="k > 0">Или</b> Диапазон {{ ++k }}</span>
                    <div>
                        <label for="from">От</label>
                        <input type="text" id="from" v-model="input.name">
                        <label for="to">до</label>
                        <input type="text" id="to">
                    </div>
                </div>

            </div>

            <div class="terms__item-btns form-inner__item-btns">
                <button class="form-inner__item-btns-add" @click="add(k)">Добавить диапазон</button>
                <button class="form-inner__item-btns-remove" @click="remove(k)">Удалить условие</button>
            </div>

        </div>
    </div>
</template>

<script>
    export default{
        computed: {
            inputs(){
                return this.$store.state.inputs
            },
            age(){
                return this.$store.state.age
            }
        },
        methods: {
            add(){
                this.$store.commit('add')
            },
            remove(){
                this.$store.commit('remove')
            },
            updateAge(){
                this.$store.commit('updateAge')
            }
        }
    }
</script>
