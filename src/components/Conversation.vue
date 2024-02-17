<template>
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
</template>
  
<script setup>
import { ref, computed } from "vue";

const numberOfCircles = ref(4);
const circles = computed(() => Array.from({ length: numberOfCircles.value }, (_, index) => index + 1));
const currentStep = ref(1);
const progressBarWidth = ref("0%");

const updateSteps = (direction) => {
    currentStep.value = direction === 'next' ? currentStep.value + 1 : currentStep.value - 1;
    progressBarWidth.value = `${((currentStep.value - 1) / (numberOfCircles.value - 1)) * 100}%`;
};

</script>

  
<style scoped>
/* Import Google font - Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f6f7fb;
}

.container {
    position: absolute;
    top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    /* max-width: 98%; */
    width: 100%;
    margin: 10px;
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
    height: 50px;
    width: 50px;
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
    font-size: 16px;
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
</style>
  