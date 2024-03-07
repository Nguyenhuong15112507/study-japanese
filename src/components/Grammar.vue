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
                        <h4 class="lesson-name">{{ item.grammar_name }}</h4>
                        <div class="created-date">
                            <span class="label">Date: </span>
                            <span class="date">{{ item.create_at ? moment(item.create_at).format("DD-MM-YYYY") : ""
                            }}</span>
                        </div>
                        <div class="status">
                            <span class="label">Status: </span>
                            <span class="homework-status">{{ item.home_work }}</span>
                        </div>
                        <p class="overview-para">{{ item.grammar_form }}</p>
                        <div class="show-detail-and-practice">
                            <button class="check-homework-btn" @click="handleChangeLearnContent(item.id)">Learn</button>
                        </div>
                    </div>
                </div>
                <div v-if="isDisplayLearnContent && grammarRef.id !== null" class="question-content-container">
                    <div class="buttons">
                        <button id="prev" disabled>Prev</button>
                        <button id="next">Next</button>
                        <button @click="handleBack()">Back</button>

                    </div>
                    <div class="question-group-list">
                        <div class="question-group-item">
                            <h5 class="question-content" style="color: rgba(43, 43, 239, 0.868); font-size: 16px;">1. {{ grammarRef.grammar_form }}</h5>
                            <ul class="answers-list">
                                <li class="answer-item"> <div class="form-define">Define:</div><div>{{ grammarRef.form_define }}</div></li>
                                <li class="answer-item"> <div class="form-define">Example 1:</div> {{ grammarRef.example_1 }}</li>
                                <li class="answer-item"> <div class="form-define">Example 2:</div> {{ grammarRef.example_2 }}</li>
                                <img src="../img/9-1.png" class="example-img" alt="">
                            </ul>

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
import { listGrammar, createGrammar } from "../api/grammar"
import moment from 'moment'
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
    date: null
}
const grammarRef = ref(formGram)

const listLessonInGrammar = ref([])
const fetchGrammar = async () => {
    try {
        const data = await listGrammar()
        if (data?.data?.data) {
            listLessonInGrammar.value = data.data.data
            if (pathId?.id) {
                const grammar = listLessonInGrammar.value.find(item => item.id.toString() === pathId.id)
                if (grammar) {
                    grammarRef.value = grammar
                    isDisplayLearnContent.value = true

                }
                console.log(listLessonInGrammar.value)
            }
        }
    } catch (error) {

    }
}
fetchGrammar()

const handleChangeLearnContent = (id) => {
    const grammar = listLessonInGrammar.value.find(item => item.id === id)
    if (!grammar) { return }
    grammarRef.value = grammar
    isDisplayLearnContent.value = !isDisplayLearnContent.value

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

.buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 10px;
}

.buttons button {
    padding: 8px 25px;
    background: rgb(49, 171, 224);
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
    transition: all 200ms linear;
}

.buttons button:active {
    transform: scale(0.97);
}

.buttons button:disabled {
    background: rgb(108, 185, 217);
    cursor: not-allowed;
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
}

.form-define {
    color: blue;

}
</style>