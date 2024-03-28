<template>
    <div class="practice-content-container">
        <div class="question-container">
            <div class="question-type-menu">
                <h3 class="question-theme">JLPT N4: Grammar</h3>
                <ul class="question-theme-list">
                    <li class="question-theme-item"><a href="#">どうぞ　よろしく</a></li>
                    <li class="question-theme-item"><a href="#">がっこう</a></li>
                    <li class="question-theme-item"><a href="#">かいもの（１）</a></li>
                </ul>
                <h3 class="question-theme">JLPT N4: Kanji</h3>
                <ul class="question-theme-list">
                    <li class="question-theme-item"><a href="#">どうぞ　よろしく</a></li>
                    <li class="question-theme-item"><a href="#">がっこう</a></li>
                    <li class="question-theme-item"><a href="#">かいもの（１）</a></li>
                </ul>
                <h3 class="question-theme">JLPT N4: Vocabulary</h3>
                <ul class="question-theme-list">
                    <li class="question-theme-item"><a href="#">どうぞ　よろしく</a></li>
                    <li class="question-theme-item"><a href="#">がっこう</a></li>
                    <li class="question-theme-item"><a href="#">かいもの（１）</a></li>
                </ul>
            </div>
            <div class="question-content-container ">
                <div class="container">
                    <div class="steps">
                        <span v-for="(circle, index) in circles" :key="index"
                            :class="{ 'circle': true, 'active': index < currentStep }">{{ index + 1 }}</span>
                        <div class="progress-bar">
                            <span class="indicator" :style="{ width: progressBarWidth }"></span>
                        </div>
                    </div>
                    <div class="buttons">
                        <button style="background-color: rgb(231, 135, 135);" @click="">Result</button>
                        <button @click="updateSteps('prev')" :disabled="currentStep === 1">Prev</button>
                        <button @click="updateSteps('next')" :disabled="currentStep === circles.length">Next</button>
                        <button style="background-color: rgb(123, 120, 120);" @click="">Back</button>


                    </div>
                </div>
                <div class="question-group-list">
                    <div class="question-group-item">
                        <h5 class="question-content">1. 「どんな（　　）がしますか？」「あまくておいしいですよ。」</h5>
                        <ul class="answers-list">
                            <li class="answer-item"><input type="radio" class="radio-btn"> a) たべもの</li>
                            <li class="answer-item"><input type="radio" class="radio-btn"> b) おいしい</li>
                            <li class="answer-item"><input type="radio" class="radio-btn"> c) くさい</li>
                            <li class="answer-item"><input type="radio" class="radio-btn"> d) あじ</li>
                        </ul>

                        <h5 class="question-content">2. 「どんな（　　）がしますか？」「あまくておいしいですよ。」</h5>
                        <ul class="answers-list">
                            <li class="answer-item"><input type="radio" class="radio-btn"> a) たべもの</li>
                            <li class="answer-item"><input type="radio" class="radio-btn"> b) おいしい</li>
                            <li class="answer-item"><input type="radio" class="radio-btn"> c) くさい</li>
                            <li class="answer-item"><input type="radio" class="radio-btn"> d) あじ</li>
                        </ul>

                        <h5 class="question-content">3. 「どんな（　　）がしますか？」「あまくておいしいですよ。」</h5>
                        <ul class="answers-list">
                            <li class="answer-item"><input type="radio" class="radio-btn"> a) たべもの</li>
                            <li class="answer-item"><input type="radio" class="radio-btn"> b) おいしい</li>
                            <li class="answer-item"><input type="radio" class="radio-btn"> c) くさい</li>
                            <li class="answer-item"><input type="radio" class="radio-btn"> d) あじ</li>
                        </ul>

                        <h5 class="question-content">4. 「どんな（　　）がしますか？」「あまくておいしいですよ。」</h5>
                        <ul class="answers-list">
                            <li class="answer-item"><input type="radio" class="radio-btn"> a) たべもの</li>
                            <li class="answer-item"><input type="radio" class="radio-btn"> b) おいしい</li>
                            <li class="answer-item"><input type="radio" class="radio-btn"> c) くさい</li>
                            <li class="answer-item"><input type="radio" class="radio-btn"> d) あじ</li>
                        </ul>
                        <h5 class="question-content">5. 「どんな（　　）がしますか？」「あまくておいしいですよ。」</h5>
                        <ul class="answers-list">
                            <li class="answer-item"><input type="radio" class="radio-btn"> a) たべもの</li>
                            <li class="answer-item"><input type="radio" class="radio-btn"> b) おいしい</li>
                            <li class="answer-item"><input type="radio" class="radio-btn"> c) くさい</li>
                            <li class="answer-item"><input type="radio" class="radio-btn"> d) あじ</li>
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
                        OJAD is an online Japanese accent database for learners and teachers of Japanese. The goal of this
                        tool is to enhance the awareness and understanding of the Japanese pitch accent with a suite of four
                        features.
                    </p>
                </div>
                <div class="japanese-learning-web">
                    <h3 class="website-name">JPLANG</h3>
                    <div class="website-img-container">
                        <img src="../img/large-55bb1d6d73e4f.png" alt="" class="website-img">
                    </div>
                    <p class="website-overview">
                        This Website, provides e-learning materials for learning Japanese,jointly developed by the Japanese
                        Language Center for International Students and the Information Collaboration Center of Tokyo
                        University of Foreign Studies.
                    </p>
                </div>
                <div class="japanese-learning-web">
                    <h3 class="website-name">OJAD</h3>
                    <div class="website-img-container">
                        <img src="../img/20221124-ojad.webp" alt="" class="website-img">
                    </div>
                    <p class="website-overview">
                        OJAD is an online Japanese accent database for learners and teachers of Japanese. The goal of this
                        tool is to enhance the awareness and understanding of the Japanese pitch accent with a suite of four
                        features.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from "vue";

const numberOfCircles = ref(5);
const circles = computed(() => Array.from({ length: numberOfCircles.value }, (_, index) => index + 1));
const currentStep = ref(1);
const progressBarWidth = ref("0%");

const updateSteps = (direction) => {
    currentStep.value = direction === 'next' ? currentStep.value + 1 : currentStep.value - 1;
    progressBarWidth.value = `${((currentStep.value - 1) / (numberOfCircles.value - 1)) * 100}%`;
};

</script>
<style scoped>
@import '../style/practice.css';
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
} */

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    width: 100%;

}

.container .steps[data-v-5ab2d74e] {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-right: 20px;
    margin-left: 10px;
    margin-top: 10px;
}

.steps .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40PX;
    width: 40PX;
    color: #999;
    font-size: 20px;
    font-weight: 500;
    border-radius: 50%;
    background: #fff;
    border: 4px solid #e0e0e0;
    transition: all 200ms ease;
    transition-delay: 0s;
}

.steps .circle.active {
    transition-delay: 100ms;
    border-color: rgb(49, 171, 224);
    color: rgb(49, 171, 224);
}

.steps .progress-bar {
    position: absolute;
    height: 4px;
    width: 100%;
    background: #e0e0e0;
    z-index: -1;
}

.progress-bar .indicator {
    position: absolute;
    height: 100%;
    width: 0%;
    background: rgb(49, 171, 224);
    transition: all 300ms ease;
}

.container .buttons {
    display: flex;
    gap: 20px;
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

.learning-site {
    padding: 0 10px;
}
.question-container[data-v-5ab2d74e] {
    width: 100%;
    text-align: left;
    display: flex;
    position: absolute;
    top: 220px;
}
</style>