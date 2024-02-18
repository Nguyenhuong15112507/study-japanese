<template>
    <div class="pop-container">
    <div class="menu-bar">
        <div class="learn-type-menu">
            <i class="far fa-file-alt"></i>
            <span class="current-selection">Practice</span>
            <i class="fas fa-chevron-down"></i>
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

<style scoped>
@import '../style/student.css';


.menu-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(197 237 255);
    position: absolute;
    width: 100%;
    top: -121px;
    padding: 10px;
}
.current-selection {
    margin: 10px;
}
.current-question-title {
    display: block;
    text-align: center;
}
.pop-container[data-v-b352a98d] {
    height: 80em;
    width: 100%;
    top: 263px;
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