<template>
    <div class="pop-container">
    <div class="menu-bar">
        <div @click="handleChangeFlashcard()" class="learn-type-menu">
            <i class="far fa-file-alt"></i>
            <span  class="current-selection">Practice</span>
            <i class="fas fa-chevron-down"></i>
            <div v-if="!isChange" class="dropdown">
                <!-- <div class=dropdown-arow></div> -->
                <ul class="dropdown-list">
                    <li @click="handleChangeToDetail()" class="dropdown-item"><i class="fas fa-book-reader"></i><span>Remember</span></li>
                    <li  @click="handleChangeTolist()" class="dropdown-item"><i class="fas fa-user-edit"></i><span>Vocabulary check</span></li>
                </ul>
            </div>
        </div>
        <!-- <div class="current-question-title">
            <p class="current-page">1 / 20</p>
            <p class="current-page">Vocab Honors English Set 2</p>

        </div> -->
        <div class="learn-type-menu">
            <i class="fas fa-bars"></i>
            <span class="current-selection">Question list</span>
        </div>
        <div class="learn-type-menu">
            <i class="fas fa-cog"></i>
            <span class="current-selection">Question setting</span>
        </div>
    </div>
    <div class="question-wrap">
    <div class="daily-content-overview">
        <h4 class="daily-name">Q1: 「こども」は何の意味ですか。</h4>
        <div class="img-container">
        <img class="student-daily-img" src="../img/Hinh-Anh-Anime-Chibi-Girl (3).jpg" alt="">
        </div>
        <div class="created-date">
            <span class="select-option">1. Children </span>
            <span class="select-option">2. Mother </span>
        </div>
        <div class="created-date">
            <span class="select-option">3. Father </span>
            <span class="select-option">4. Adult </span>
        </div>
    </div>
    </div>
    <div class="question-wrap">
    <div class="daily-content-overview">
        <h4 class="daily-name">Q1: 「こども」は何の意味ですか。</h4>
        <div class="img-container">
        <img class="student-daily-img" src="../img/Hinh-Anh-Anime-Chibi-Girl (3).jpg" alt="">
        </div>
        <div class="created-date">
            <span class="select-option">1. Children </span>
            <span class="select-option">2. Mother </span>
        </div>
        <div class="created-date">
            <span class="select-option">3. Father </span>
            <span class="select-option">4. Adult </span>
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
const handleChangeTolist = () => {
    router.push('/practice/flashcardList')
}
const handleChangeToDetail = () => {
    router.push('/practice/flashcardDetail')
}

</script>



<style scoped>
@import '../style/student.css';


.menu-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(197 237 255);
    position: fixed;
    width: 100%;
    top: 150px;
    left: 0;
    right: 0;
    padding: 10px;
}
.current-selection {
    margin: 10px;
}
.current-question-title {
    display: block;
    text-align: center;
}
/* For the dropdown content */
.dropdown {
  position: absolute;
  background-color: rgb(197 237 255);
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  top: 100%;
  left: 107px;
  z-index: 1;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);

}
.dropdown::after {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 8px solid #943c3c; /* Adjust arrow color here */
    position: absolute;
    top: -4px; /* Position arrow at top of dropdown */
    left: 50%;
    transform: translateX(-50%);
}
/* For the dropdown list */
.dropdown-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.dropdown-active {
    display: block;
}

/* For the dropdown items */
.dropdown-item {
  padding: 10px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

/* Hover effect for dropdown items */
.dropdown-item:hover {
  background-color: #f7f9fa;
}

/* For the icons in the dropdown items */
.fas {
  font-size: 12px;
  margin-right: 5px;
  color: #9daec2;
}

/* To show the dropdown content */
.practice:hover .dropdown {
  display: block;
}

.pop-container[data-v-b352a98d] {
    height: 80em;
    width: 100%;
    top: 198px;
    position: relative;
    display: inline-block;
}
.question-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 15px;
}
.lession-content-overview[data-v-b352a98d], .daily-content-overview[data-v-b352a98d] {
    
    border: 1px solid rgb(49, 171, 224, 0.6);
    padding: 10px;
    border-radius: 5px;
    width: 500px;
    margin-bottom: 10px;
    margin-right: 15px;
    height: 480px;
}
.student-daily-img {
    width: 50%;
}
.img-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.created-date {
    display: flex;
    justify-content: space-between;
   
}
.select-option {
    font-weight: 400;
    font-size: 1rem;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.5;
    border-radius: 0.5rem;
    border: 1px solid rgb(49, 171, 224, 0.6);
    color: #000;
    cursor: pointer;
    display: flex;
    padding: 10px;
    margin: 10px 5px;
    position: relative;
    width: 100%;
    word-break: break-word;
    display: grid;
    grid-template-columns: auto 1fr;
}


</style>