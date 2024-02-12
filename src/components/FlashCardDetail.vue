<template>
    <div class="flashcard-detail-body">
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
    </div>
</template>
<script setup>
import { ref } from 'vue';
import router from "../router";
const isChange = ref(true)
const handleChangeFlashcard = () => {
    isChange.value =!isChange.value
}

</script>
<style scoped>
@import '../style/flashcrad.css';

</style>