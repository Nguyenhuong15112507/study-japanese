<template>
    <div class="flashcard-detail-body">
        <button @click="handleChangeToDetail()" class="new-btn" id="creat-new-result-btn" style="margin: 10px">Back</button>
        <div class="flashcard-detail-container">
            <div v-for="(item, index) in flashcardVocabuDetail" :key="index" @click="item.isChange = !item.isChange"
                class="card-wrapper">
                <div :class="['card-body', { 'hangeCardDisplay': item.isChange }]">
                    <div v-if="item.isChange" class="card-front">
                        <p>{{ item.new_word }}</p>
                    </div>
                    <div v-else class="card-back">
                        <p>音読み：{{ item.spelling }}</p>
                        <p>意味：{{ item.defination }}</p>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import router from "../router";
import { showDetailFlashcardVocabu } from "../api/flashcard";
const queryRouter = router.currentRoute.value.query
const flashcardVocabuDetail = ref([])
const fetchDetailFlashcard = async (id) => {
    try {
        const data = await showDetailFlashcardVocabu(id)
        if (data?.data?.data) {
            flashcardVocabuDetail.value = data?.data?.data.map((item) => { return { ...item, isChange: true } })
        }
    } catch (error) {

    }
}
if (queryRouter?.id) {
    fetchDetailFlashcard(queryRouter.id)
}
const handleChangeFlashcard = () => {
    isChange.value = !isChange.value
}
const handleChangeToDetail = () => {
    window.history.back()
}

</script>
<style scoped>
@import '../style/flashcrad.css';
@import '../style/teacher.css';
</style>