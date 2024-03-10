<template>
    <div class="student-daily">
        <h3 class="title-content">Your daily</h3>
        <button class="new-btn" id="creat-new-daily-btn">Create</button>
        <div class="new-input daily">
            <h4 class="form-title">Writing new daily</h4>
            <div class="new-form daily-create">
                <div class="input-item">
                    <span class="span-label"><label for="dailyName">Title</label></span>
                    <input type="text" name="dailyName" id="dailyName">
                </div>
                <div class="input-item">
                    <span class="span-label"><label for="dailyContent">Content</label></span>
                    <textarea name="dailyContent" id="dailyContent"></textarea>
                </div>
                <div class="input-item">
                    <span class="span-label"><label for="dailydate">Date</label></span>
                    <input type="date" name="date" id="dailydate">
                </div>
                <div class="input-item">
                    <span class="span-label"><label for="daily-pic">Upload</label></span>
                    <input type="file" name="daily-pic" id="daily-pic">
                </div>


            </div>
            <div class="btn-container">
                <button class="new-btn submit-btn" id="submit-daily-btn">Submit</button>
                <button class="new-btn cancel-btn" id="cancel-daily-btn">Cancel</button>
            </div>
        </div>
        <div class="list-content-item daily-content-list">
            <div class="daily-content-overview">
                <img class="student-daily-img" src="../img/Hinh-Anh-Anime-Chibi-Girl (3).jpg" alt="">
                <h4 class="daily-name">N5: Vocabulary1</h4>
                <div class="created-date">
                    <span class="label">Date: </span>
                    <span class="date">12/12/2023</span>
                </div>
                <p class="overview-para">Today, i'm very happy.</p>
                <div class="show-detail">
                    <a href="" class="show-detail">Show detail</a>
                </div>
            </div>
            <div class="daily-content-overview">
                <img class="student-daily-img" src="../img/Hinh-Anh-Anime-Chibi-Girl (3).jpg" alt="">
                <h4 class="daily-name">N5: Vocabulary1</h4>
                <div class="created-date">
                    <span class="label">Date: </span>
                    <span class="date">12/12/2023</span>
                </div>
                <p class="overview-para">Today, i'm very happy.</p>
                <div class="show-detail">
                    <a href="" class="show-detail">Show detail</a>
                </div>
            </div>
            <div class="daily-content-overview">
                <img class="student-daily-img" src="../img/Hinh-Anh-Anime-Chibi-Girl (3).jpg" alt="">
                <h4 class="daily-name">N5: Vocabulary1</h4>
                <div class="created-date">
                    <span class="label">Date: </span>
                    <span class="date">12/12/2023</span>
                </div>
                <p class="overview-para">Today, i'm very happy.</p>
                <div class="show-detail">
                    <a href="" class="show-detail">Show detail</a>
                </div>
            </div>
            <div class="daily-content-overview">
                <img class="student-daily-img" src="../img/Hinh-Anh-Anime-Chibi-Girl (3).jpg" alt="">
                <h4 class="daily-name">N5: Vocabulary1</h4>
                <div class="created-date">
                    <span class="label">Date: </span>
                    <span class="date">12/12/2023</span>
                </div>
                <p class="overview-para">Today, i'm very happy.</p>
                <div class="show-detail">
                    <a href="" class="show-detail">Show detail</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '../style/student.css';
.new-input[data-v-b3e3fe8c] {
    margin: 10px 0;
    border: 1px solid rgb(49, 171, 224, 0.6);
    -webkit-box-shadow: 0 0 5px 0 rgba(171, 213, 231, 0.6);
    border-radius: 5px;
    padding-left: 10px;
    position: relative;
    top: 100px;
}
.daily-content-list[data-v-b3e3fe8c] {
    margin-top: 20px;
    position: relative;
    top: 110px;
}
</style>