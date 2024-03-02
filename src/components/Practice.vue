<template>
    <div class="page-practice-container">
        <div class="practice-type-menu">
                <button :class="['practice-type-btn flashcard', {'isOrigin': isDisPlay !==1}]" @click="handleChangeQuestion(1)">Flashcard</button>
                <button :class="['practice-type-btn question',{'isOrigin': isDisPlay !==2}]" @click="handleChangeQuestion(2)">Question</button>
                <button :class="['practice-type-btn listen', {'isOrigin': isDisPlay !==3}]" @click="handleChangeQuestion(3)">Listenning</button>
                <button :class="['practice-type-btn conversation', {'isOrigin': isDisPlay !==4}]" @click="handleChangeQuestion(4)">Conversation</button>
    
        </div>
        <flashcard v-if="isDisPlay === 1" />
        <question  v-if="isDisPlay === 2" />
        <listening v-if="isDisPlay === 3" />
        <conversation v-if="isDisPlay === 4" />
       


    </div>
</template>

<script setup>
import { ref } from "vue";

import Question from './Question.vue'
import Flashcard from './Flashcard.vue'
import Listening from "./Listening.vue";
import Conversation from "./Conversation.vue";

const isDisPlay = ref(1)

const handleChangeQuestion = (value) => {
    isDisPlay.value = value

}

</script>

<style scoped>
@import '../style/practice.css';


.isVisible {
    visibility: visible;
}
.ishide {
    display: none;
}
</style>