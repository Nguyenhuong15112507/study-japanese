<template>
    <div class="page-practice-container">

        <div class="practice-content-container">

            <div class="question-container">
                <div class="question-type-menu">
                    <h3 class="question-theme">JLPT N4: Grammar</h3>
                    <ul class="question-theme-list">
                        <li @click="handleChangeLearnContent()" class="question-theme-item"><a href="#">どうぞ　よろしく</a></li>
                        <li @click="handleChangeLearnContent()" class="question-theme-item"><a href="#">がっこう</a></li>
                        <li @click="handleChangeLearnContent()" class="question-theme-item"><a href="#">かいもの（１）</a></li>
                    </ul>

                </div>
                <div v-if="!isDisplayLearnContent" class="list-content-item lesson-homework-list">
                    <div v-for="(item, index) in listLessonInGrammar" :key="index"
                        class="lession-content-overview lession-homework-overview">
                        <h4 class="lesson-name">{{ item.name }}</h4>
                        <div class="created-date">
                            <span class="label">Date: </span>
                            <span class="date">{{ item.date }}</span>
                        </div>
                        <div class="status">
                            <span class="label">Status: </span>
                            <span class="homework-status">{{ item.homework }}</span>
                        </div>
                        <p class="overview-para">{{ item.Gramform }}</p>
                        <div class="show-detail-and-practice">
                            <button class="check-homework-btn" @click="handleChangeLearnContent(item.id)">Learn</button>
                        </div>
                    </div>
                </div>
                <div v-if="isDisplayLearnContent && grammarRef.id !== null" class="question-content-container">
                    <div class="question-group-list">
                        <div class="question-group-item">
                            <h5 class="question-content">1. {{grammarRef.Gramform}}</h5>
                            <ul class="answers-list">
                                <li class="answer-item"> 1. {{ grammarRef.formDefine }}</li>
                                <li class="answer-item"> 2. {{ grammarRef.example1 }}</li>
                                <li class="answer-item"> 3. {{ grammarRef.example2 }}</li>
                                <img src="../img/9-1.png" class="example-img" alt="">
                            </ul>
                            <button class="check-homework-btn back-btn" @click="handleBack()">Back</button>
                        </div>
                    </div>
                </div>
                <div class="another-infomation">
                    <div class="japanese-intro-title">
                        <h3 class="learning-site">Japanese learning website</h3>
                    </div>
                    <div class="japanese-learning-web">
                        <h3 class="website-name">OJAD</h3>
                        <div class="website-img-container">
                            <img src="../img/20221124-ojad.webp" alt="" class="website-img">
                        </div>
                        <p class="website-overview">
                            OJAD is an online Japanese accent database for learners and teachers of Japanese. The goal of
                            this tool is to enhance the awareness and understanding of the Japanese pitch accent with a
                            suite of four features.
                        </p>
                    </div>
                    <div class="japanese-learning-web">
                        <h3 class="website-name">JPLANG</h3>
                        <div class="website-img-container">
                            <img src="../img/large-55bb1d6d73e4f.png" alt="" class="website-img">
                        </div>
                        <p class="website-overview">
                            This Website, provides e-learning materials for learning Japanese,jointly developed by the
                            Japanese Language Center for International Students and the Information Collaboration Center of
                            Tokyo University of Foreign Studies.
                        </p>
                    </div>
                    <div class="japanese-learning-web">
                        <h3 class="website-name">OJAD</h3>
                        <div class="website-img-container">
                            <img src="../img/20221124-ojad.webp" alt="" class="website-img">
                        </div>
                        <p class="website-overview">
                            OJAD is an online Japanese accent database for learners and teachers of Japanese. The goal of
                            this tool is to enhance the awareness and understanding of the Japanese pitch accent with a
                            suite of four features.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="practice-question-menu">

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import router from "../router";
import { studentJapaneseStore } from "../store"
const userStudentJapaneseStore = studentJapaneseStore()
const isDisplayLearnContent = ref(false)
const grammarId = ref(null)

const pathId = router.currentRoute.value.query

const formGram = { 
    id: null,
    name: '',
    Gramform: '',
    formDefine: '',
    example1: '',
    example2: '',
    homework: '',
    date: null}
const grammarRef = ref(formGram)

const pageLessonInGrammar = userStudentJapaneseStore.lesson
const listLessonInGrammar = ref(pageLessonInGrammar)

const handleChangeLearnContent = (id) => {
    const grammar = listLessonInGrammar.value.find(item => item.id === id)
    if (!grammar) { return }
    grammarRef.value = grammar
    isDisplayLearnContent.value = !isDisplayLearnContent.value

}
if(pathId?.id) {
    const grammar = listLessonInGrammar.value.find(item => item.id === pathId.id)
    if (grammar) { 
        grammarRef.value = grammar
        isDisplayLearnContent.value = true
     }
    
}
const handleBack = () => {
    isDisplayLearnContent.value = !isDisplayLearnContent.value
    grammarRef.value = formGram
}
</script>

<style scoped>
@import '../style/grammar.css';
@import '../style/teacher.css';

.example-img {
    width: 70%;
    border: 1px solid gray;
    margin-top: 10px;

}

.lesson-homework-list {
    height: auto;
    width: 60%;
    margin-left: 10Px;
}

.question-type-menu[data-v-1fc56918] {
    width: 17%;

}

.another-infomation[data-v-1fc56918] {
    width: 25%;
    /* margin: 10px; */

}

.lession-homework-overview {
    width: 96%;
}

.isVisible {
    visibility: visible;
}

.ishide {
    display: none;
}

.back-btn {
    position: relative;
    /* right: 10px; */
    left: 45%;
    bottom: -230px;
    font-size: 20px;
}</style>