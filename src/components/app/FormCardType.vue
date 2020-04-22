<template>
    <div class="card-type form-inner">
        <div class="card-type__item form-inner__item">

            <div class="card-type__item-select form-inner__item-condition">
                <label for="card-type">Условие 2</label>
                <select name="" id="card-type">
                    <option value="Возраст" selected>Тип карты лояльности</option>

                </select>
            </div>

            <div class="card-type__item-range form-inner__item">
                <div class="card-type__item-range-inner form-inner__item-condition">
                    <label for="type">Тип 1</label>
                    <select name="" id="type">
                        <option value="Возраст" selected>Gold</option>

                    </select>
                </div>
            </div>

            <div class="terms__item-btns form-inner__item-btns">
                <button class="form-inner__item-btns-add">Добавить тип</button>
                <button class="form-inner__item-btns-remove">Удалить условие</button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {

    }
</script>
