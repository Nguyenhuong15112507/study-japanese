<template>
  <div class="page-body">
    <div class="side-bar">
      <div class="anouncement">
        <h3 class="announce-title">Anounce</h3>
        <div v-for="(item, index) in announceContenlist" :key="index" class="announce-list">
          <div class="announce-item">
            <h4 class="anounce-theme">{{ item.announce_name }}</h4>
            <p class="anounce-para">{{ item.description }}</p>
            <p class="update-time">{{ item.create_at ? moment(item.create_at).format('DD-MM-YYYY') : '' }}</p>
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
          <div v-for="(item, index) in lessonContenlist" :key="index" class="lession-content-overview">
            <img :src="baseUrlUpload + item.upload_id" alt="" class="lesson-content-img" />
            <h4 class="lesson-name">{{ item.grammar_name }}</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">{{
                item.create_at
                ? moment(item.create_at).format("DD-MM-YYYY")
                : "" }}</span>
            </div>
            <p class="overview-para">{{ item.grammar_form }}</p>
            <div class="show-detail-and-practice">

              <button class="check-homework-btn" @click="handleShowDetail(item.id)">
                Show detail
              </button>
            </div>
          </div>
        </div>
        <h4 class="lesson-name">Kanji N4: People</h4>
        <div class="list-content-item daily-content-list">
          <div v-for="(item, index) in kanjiContentList" :key="index" class="daily-content-overview">
            <img class="student-daily-img" :src="baseUrlUpload + item.upload_id" alt="" />
            <h4 class="daily-name">{{ item.title }}</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">{{
                item.create_at
                ? moment(item.create_at).format("DD-MM-YYYY")
                : ""
              }}</span>
            </div>
            <p class="overview-para">{{ item.kanji_name }}</p>
            <div class="show-detail">
              <button class="check-homework-btn" @click="handleShowKanjiDetail(item.id)">
                Show detail
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>


  <!-- <footer>Powered by W3.css</footer> -->
</template>

<script setup>
import { ref } from 'vue';
import router from "../router";
import { studentJapaneseStore } from "../store"
import moment from "moment";
import {
  listGrammar,
  showDetailGrammar,
} from "../api/grammar";
import { listKanji, showDetailkanji } from "../api/kanji";
import { listCategoriesByType } from "../api/categories";
import { listAnnounce, showDetailAnnounce } from "../api/announce";
const userStudentJapaneseStore = studentJapaneseStore()
const baseUrlUpload = import.meta.env.VITE_API_BASE_URL + "/api/upload/";

const announceContenlist = ref([]);
const lessonContenlist = ref([]);
const kanjiContentList = ref([]);
const formAnnounceDefault = {
  id: null,
  announce_name: "",
  description: "",
};
const formAnnounce = ref(formAnnounceDefault);
const fetchAnnounce = async () => {
  try {
    const data = await listAnnounce();
    if (data?.data?.data) {
      announceContenlist.value = data.data.data;
    }
  } catch (error) {

  }
}
fetchAnnounce()
const fetchGrammar = async () => {
  try {
    const data = await listGrammar();
    if (data?.data?.data) {
      lessonContenlist.value = data.data.data;
    }
  } catch (error) {
  }
};
fetchGrammar();
const fetchKanji = async () => {
  try {
    const data = await listKanji();
    if (data?.data?.data) {
      kanjiContentList.value = data.data.data;
    }
  } catch (error) {
  }
};

fetchKanji();
const handleShowDetail = (id) => {
  router.push({ path: "/grammar", query: { id: id } });
};
const handleShowKanjiDetail = (id) => {
  router.push({ path: "/kanji", query: { id: id } });
};
// const pageAnnounce = userStudentJapaneseStore.announce
// const pageLesson = userStudentJapaneseStore.lesson

// const listAnnounce = ref(pageAnnounce)
// const listLesson = ref(pageLesson)

// const listLessonInGrammar = ref(userStudentJapaneseStore.lesson);
// const handleShowDetail = (id) => {
//   const grammar = listLessonInGrammar.value.find((item) => item.id === id);
//   if (!grammar) {
//     return;
//   }
//   router.push({ path: "/grammar", query: { id: grammar.id } });
// };
</script>

<style scoped>
@import '../style/student.css';

.isVisible {
  visibility: visible;
}

.announce-list:hover {
  border: 1px solid rgb(61, 183, 236);
  ;
  cursor: pointer;
}

.ishide {
  display: none;
}</style>