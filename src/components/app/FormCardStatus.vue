<template>
    <div class="status form-inner">
        <div class="status__item form-inner__item">

            <div class="status__item-select form-inner__item-condition">
                <label for="status">Условие 3</label>
                <select name="" id="status">
                    <option value="Возраст" selected>Статус карты лояльности</option>

                </select>
            </div>

            <div class="status__item-range form-inner__item">
                <div class="status__item-range-inner form-inner__item-condition">
                    <label for="isActive">Статус 1</label>
                    <select name="" id="isActive">
                        <option value="Возраст" selected>Активна</option>

                    </select>
                </div>
            </div>

            <div class="status__item-btns form-inner__item-btns">
                <button class="form-inner__item-btns-add">Добавить статус</button>
                <button class="form-inner__item-btns-remove">Удалить условие</button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {

    }
</script>
