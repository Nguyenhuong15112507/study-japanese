<template>
    <div class="pop-container"
        style="top: 170px; position: relative; display: flex; flex-wrap: wrap; justify-content: center;">
        <form action="" class="create-question">
            <div class="new-form lesson-create" >
              <h5 class="add-category-title">Categories</h5>
              <div class="input-item categories-input" style="display: flex; align-items: center;">
                <select name="category-kbn" id="" class="category-kbn" style="margin-right: 10px;width: 50px;">
                  <option value="n5">N5</option>
                  <option value="n4">N4</option>
                  <option value="n3">N3</option>
                  <option value="n2">N2</option>
                  <option value="n1">N1</option>
                </select>
                <input type="text" name="lessonName" id="categoryName"
                  placeholder="Enter category" style="width: 400px;"  />
              </div>

            </div>
            <div class="question-wrap">
                <div class="daily-content-overview">
                    <h4 class="daily-name"><input type="text" placeholder="Question name"></h4>
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
        </form>
    </div>
</template>
<script setup>

</script>
<style scoped>
@import "../style/createQuestion.css";

.pop-container[data-v-b352a98d] {
    height: 80em;
    width: 100%;
    display: inline-block;
}

input[type=text],input[type=date], .textareacss {
    background-color: rgba(184, 227, 245, 0.3);
    border-radius: 5px;
    border: none;
    height: 30px;
    padding-left: 10px;
    outline: none;
    width: 98%;
}
</style>