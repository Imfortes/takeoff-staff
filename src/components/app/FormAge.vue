<template>
    <div class="terms form-inner">
        <div class="terms__item form-inner__item">

            <div class="terms__item-select form-inner__item-condition">
                <label for="age">Условие 1</label>
                <select name="" id="age">
                    <option value="Возраст" selected>Возраст респондента</option>
                    <option value="" v-for="n in 130" :key="n">{{n}}</option>
                </select>
            </div>

            <div class="terms__item-range">
                <div class="terms__item-range-inner form-inner__item-range-inner">
                    <span>Диапазон 1</span>
                    <div>
                        <label for="from">От</label>
                        <input type="text" id="from">
                        <label for="to">до</label>
                        <input type="text" id="to">
                    </div>
                </div>
                <div class="terms__item-range-inner form-inner__item-range-inner">
                    <span><b>Или</b> Диапазон 2</span>
                    <div>
                        <label for="from2">От</label>
                        <input type="text" id="from2">
                        <label for="to2">до</label>
                        <input type="text" id="to2">
                    </div>
                </div>
            </div>

            <div class="terms__item-btns form-inner__item-btns">
                <button class="form-inner__item-btns-add">Добавить диапазон</button>
                <button class="form-inner__item-btns-remove">Удалить условие</button>
            </div>

        </div>
    </div>
</template>

<script>

</script>
