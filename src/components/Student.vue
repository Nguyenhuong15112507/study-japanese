<template>
    <div class="page-body">
        <div class="side-bar">
            <div class="anouncement">
                <h3 class="announce-title">Anounce</h3>
                <div v-for="(item, index) in listAnnounce" :key="index" class="announce-list">
                    <div class="announce-item">
                        <h4 class="anounce-theme">{{ item.title }}</h4>
                        <p class="anounce-para">{{ item.content }}</p>
                        <p class="update-time">{{ item.date }}</p>
                    </div>

                </div>
            </div>
            <div class="anouncement">
                <h3 class="announce-title">Study result</h3>
                <div class="announce-list">
                    <div class="announce-item">

                    </div>
                </div>
            </div>
        </div>
        <div class="page-container">
            <div class="content-input">
                
                <h4 class="lesson-name">JLPT N4: Vocabulary</h4>
                <div class="list-content-item lesson-content-list">
                    <div  v-for="(item, index) in listLesson" :key="index" class="lession-content-overview">
                        <img src="../img/15801f0d.jpg" alt="" class="lesson-content-img">
                        <h4 class="lesson-name">{{ item.name }}</h4>
                        <div class="created-date">
                            <span class="label">Date: </span>
                            <span class="date">{{ item.date }}</span>
                        </div>
                        <p class="overview-para">{{ item.Gramform }}</p>
                        <ul class="show-detail-and-practice">
                            <li class="show-detail"><button @click="handleShowDetail(item.id)">Show detail</button></li>
                            <li class="practice-example"><a href="">Practice</a></li>
                        </ul>
                    </div>
                </div>


            </div>

        </div>
    </div>
    <div class="popup-containner">
        <div class="new-input lesson">
            <h4 class="form-title" style="font-size: 20px;">Lesson</h4>
            <div class="new-form lesson-create">
                <div class="input-item">
                    <span class="span-label"><label for="lessonName">Title</label></span>
                    <input type="text" name="lessonName" id="lessonName">
                </div>
                <div class="input-item">
                    <span class="span-label"><label for="lessonContent">Content</label></span>
                    <textarea name="lessonContent" id="lessonContent"></textarea>
                </div>
                <div class="input-item">
                    <span class="span-label"><label for="date">Date</label></span>
                    <input type="date" name="date" id="date">
                </div>
                <div class="input-item">
                    <span class="span-label"><label for="homework-url">Upload</label></span>
                    <input type="text" name="homework-url" id="homework-url">
                    <input type="file" name="homework" id="homework">
                </div>

            </div>
            <div class="btn-container">
                <button class="new-btn submit-btn" id="submit-lesson-btn">Submit</button>
                <button class="new-btn cancel-btn" id="cancel-lesson-btn"
                    onclick="isnotvisible(popupContainner)">Cancel</button>
            </div>
        </div>
    </div>

    <!-- <footer>Powered by W3.css</footer> -->
</template>

<script setup>
import { ref } from 'vue';
import router from "../router";
import { studentJapaneseStore } from "../store"
const userStudentJapaneseStore = studentJapaneseStore()

const pageAnnounce = userStudentJapaneseStore.announce
const pageLesson = userStudentJapaneseStore.lesson

const listAnnounce = ref(pageAnnounce)
const listLesson = ref(pageLesson)

const listLessonInGrammar = ref(userStudentJapaneseStore.lesson);
const handleShowDetail = (id) => {
  const grammar = listLessonInGrammar.value.find((item) => item.id === id);
  if (!grammar) {
    return;
  }
  router.push({ path: "/grammar", query: { id: grammar.id } });
};
</script>

<style scoped>@import '../style/student.css';

.isVisible {
    visibility: visible;
}

.ishide {
    display: none;
}</style>