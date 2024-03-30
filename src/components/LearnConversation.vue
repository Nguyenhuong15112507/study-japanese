<template>
    <div class="practice-content-container">
        <div class="conversation-container" style="display: flex;">
            <div class="question-type-menu">
                <h3 class="question-theme">Unit 1: Greating</h3>
                <ul class="question-theme-list">
                    <li class="question-theme-item"><a href="#">どうぞ　よろしく</a></li>
                    <li class="question-theme-item"><a href="#">がっこう</a></li>
                    <li class="question-theme-item"><a href="#">かいもの（１）</a></li>
                </ul>
                <h3 class="question-theme">Unit 2: Shopping</h3>
                <ul class="question-theme-list">
                    <li class="question-theme-item"><a href="#">どうぞ　よろしく</a></li>
                    <li class="question-theme-item"><a href="#">がっこう</a></li>
                    <li class="question-theme-item"><a href="#">かいもの（１）</a></li>
                </ul>
                <h3 class="question-theme">Unit 3: School</h3>
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
                        <button @click="updateSteps('prev')" :disabled="currentStep === 1">Prev</button>
                        <button @click="updateSteps('next')" :disabled="currentStep === circles.length">Next</button>
                    </div>
                </div>
                <div class="question-group-list">
                    <div class="question-group-item">
                        <h3 class="listening-title">1課: ここは どこですか。</h3>
                        <div class="img-container" >
                        <img src="../assets/img/conversation-img.gif" alt="" class="listening-theme-img">
                        </div>
                        <div class="listening-exercises-content">
                            <!-- <div class="listen-content">
                                <h4 class="listen-quesanswer">Question</h4>
                                <button @click.prevent="playSound('../src/audio/20240217-02090091.mp3')" class="fas fa-volume-up"></button>
                                <span class="listen-content-ques">いくらですか。例のように書きましょう。</span>
                            </div> -->
                            <div class="listen-content">
                                <h4 class="listen-quesanswer">Conversation</h4>
                                <i class="fas fa-volume-up"></i>
                                <button class="result-btn" style="background-color: rgb(231, 135, 135);" @click="handleDisplayAnwser()">Hide script</button>

                                <div v-if="!display" class="answer-conversation-list">
                                <p class="listen-content-ques"><i  @click.prevent="playSound('../src/audio/conversation/FM-V1.wav')" class="fas fa-volume-up"></i> 女: おはよう　ございます。</p>
                                <p class="listen-content-ques"><i @click.prevent="playSound('../src/audio/conversation/M-V1.wav')" class="fas fa-volume-up"></i> 男: おはよう　ございます。</p>
                                <p class="listen-content-ques"><i @click.prevent="playSound('../src/audio/conversation/FM-V2.wav')" class="fas fa-volume-up"></i> 女: せんせい、ここは　きょうしつですか。</p>
                                <p class="listen-content-ques"><i @click.prevent="playSound('../src/audio/conversation/M-V2.wav')" class="fas fa-volume-up"></i> 男: はい、そこは　エークラスの　きょうしつです。</p>
                                <p class="listen-content-ques"><i @click.prevent="playSound('../src/audio/conversation/FM-V3.wav')" class="fas fa-volume-up"></i> 女: その　へやも　きょうしつですか。</p>
                                <p class="listen-content-ques"><i @click.prevent="playSound('../src/audio/conversation/M-V3.wav')" class="fas fa-volume-up"></i> 男: いいえ、ここは　きょうしつでは　ありません。せんせいの　へやです。</p>
                                <p class="listen-content-ques"><i @click.prevent="playSound('../src/audio/conversation/FM-V4.wav')" class="fas fa-volume-up"></i> 女: どなたの　へやですか。</p>
                                <p class="listen-content-ques"><i @click.prevent="playSound('../src/audio/conversation/M-V4.wav')" class="fas fa-volume-up"></i> 男: やまもとせんせいの　へやです。</p>
                                </div>
                            </div>
                        </div>
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
const display = ref(false)

const updateSteps = (direction) => {
    currentStep.value = direction === 'next' ? currentStep.value + 1 : currentStep.value - 1;
    progressBarWidth.value = `${((currentStep.value - 1) / (numberOfCircles.value - 1)) * 100}%`;
};
const handleDisplayAnwser = () => {
    display.value = !display.value
}
const playSound = (sound) => {
  // Tạo một đối tượng âm thanh từ đường dẫn được truyền vào
  var audio = new Audio(sound);

  // Kiểm tra xem đối tượng âm thanh đã được tạo thành công chưa
  if (audio) {
    // Phát âm thanh
    audio.play();
  } else {
    console.error('Failed to create audio object or file does not exist.');
  }
};
</script>
<style scoped>
@import '../style/practice.css';
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

.learning-site {
    padding: 0 10px;
}

/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
} */

.container {
    position: relative;
    top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    /* max-width: 98%; */
    width: 95%;
    margin: 10px;
}
.conversation-container {
    width: 100%;
    text-align: left;
    display: flex;
    position: relative;
    top: 160px;
}
.container .steps {
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: space-between;
    position: relative;
}

.steps .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: #999;
    font-size: 22px;
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
    background: rgb(110, 198, 235);
    cursor: not-allowed;
}
.img-container {
    width: 100%;
    display: flex;
    justify-content: center;
}
.listening-theme-img {
    width: 50%;
}
.result-btn {
    background-color: rgb(233, 104, 104);
    border: none;
    border-radius: 3px;
    margin-left: 10px;
}
.result-btn:hover {
    opacity: 0.5;
    cursor: pointer;
}

.fa-volume-up:hover {
    color: rgb(101, 101, 244);
    cursor: pointer;
}
.answer-conversation-list {
    margin-left: 20px;
}
.listen-content-ques {
    margin-left: 10px;
}

.listen-quesanswer{
    color: rgb(49, 171, 224);
}
.listening-title {
    font-weight: 800;
    text-align: center;
}
.question-container[data-v-c5f3fc1b] {
    width: 100%;
    text-align: left;
    display: flex;
    position: relative;
    top: 216px;
}
</style>