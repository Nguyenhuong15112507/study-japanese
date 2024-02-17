<template>
    <div class="flashcard-detail-body">
        <button @click="handleChangeToDetail()"
            class="new-btn"
            id="creat-new-result-btn"
            style="margin: 10px">Back</button>
        <div  @click="handleChangeFlashcard()"  class="card-wrapper">
            <div :class="['card-body', { 'hangeCardDisplay': isChange }]">
                <div v-if="isChange" class="card-front">
                    <p>花</p>
                </div>
                <div v-else class="card-back">
                    <p>音読み：か</p>
                    <p>訓読み：はな</p>
                    <p>意味：Flower</p>
                </div>
            </div>
        </div>
        <div v-for="(row, index) in rowData" :key="index" @click="handleChangeFlashcard()"  class="card-wrapper">
            <div :class="['card-body', { 'hangeCardDisplay': isChange }]">
                <div v-if="isChange" class="card-front">
                    <p>{{ row.column1 }}</p>
                </div>
                <div v-else class="card-back">
                    <p>音読み：{{ row.column2 }}</p>
                    <p>訓読み：{{ row.column3 }}</p>
                    <p>意味：{{ row.column4 }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import router from "../router";
const isChange = ref(true)
const rowData = router.currentRoute.value.params.rowData;
const handleChangeFlashcard = () => {
    isChange.value =!isChange.value
}
const handleChangeToDetail = () => {
    router.push('/practice/flashcardList')
}

</script>
<style scoped>
@import '../style/flashcrad.css';
@import '../style/teacher.css';

</style>