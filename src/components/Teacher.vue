<template>
  <div class="page-body">
    <div class="side-bar">
      <div class="anouncement">
        <h3 class="announce-title">Anounce</h3>
        <div class="announce-list">
          <button type="submit" class="new-btn" id="creat-new-announce-btn" style="margin: 10px"
            @click="handleOnClickbtn()">
            Create
          </button>
          <button class="new-btn cancel-btn delete-btn" id="delete-announce-btn" style="margin-left: 0"
            @click="removeAnnounce()">
            Delete
          </button>
          <div v-for="(item, index) in announceContenlist" :key="index" class="announce-item">
            <div class="themeAndCheck">
              <input type="checkbox" name="theme-check" class="theme-check" @change="handleChangeCheckbox(item)" />
              <h4 class="anounce-theme" @click="handleShowAnnounceDetail(item.id)">{{ item.announce_name }}</h4>
            </div>
            <p class="anounce-para">{{ item.description }}</p>
            <p class="update-time">{{ item.create_at ? moment(item.create_at).format('DD-MM-YYYY') : '' }}</p>
          </div>
        </div>
      </div>
      <div class="anouncement">
        <h3 class="announce-title">Study result</h3>
        <div class="announce-list">
          <button class="new-btn" id="creat-new-result-btn" style="margin: 10px">
            Create
          </button>
          <button class="new-btn cancel-btn delete-btn" id="delete-result-btn" style="margin-left: 0">
            Delete
          </button>
          <div class="announce-item">
            <h4 class="anounce-theme">New lesson was uploaded.</h4>
            <p class="anounce-para">
              I've just uploaded new lesson. Please learn and do your homework.
              Deadline is this weekend.
            </p>
            <p class="update-time">12/30/2023</p>
          </div>
        </div>
      </div>
    </div>
    <div class="page-container">
      <div class="content-input">
        <h3 class="title-content">Create New Grammar Lesson</h3>
        <div class="content-input-header">
          <button class="new-btn" id="creat-new-lesson-btn" @click="handleOpenPopup()">
            Create
          </button>
        </div>

        <div class="list-content-item lesson-content-list">
          <div v-for="(item, index) in lessonContenlist" :key="index" class="lession-content-overview">
            <img :src="baseUrlUpload + item.upload_id" alt="" class="lesson-content-img" />
            <h4 class="lesson-name">{{ item.grammar_name }}</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">{{
                item.create_at
                ? moment(item.create_at).format("DD-MM-YYYY")
                : ""
              }}</span>
            </div>
            <p class="overview-para">{{ item.grammar_form }}</p>
            <ul class="show-detail-and-practice">
              <li class="show-detail">
                <button class="check-homework-btn" @click="handleShowDetail(item.id)">
                  Show detail
                </button>
              </li>
              <li class="practice-example">
                <button class="check-homework-btn" @click="handleShowEditGrammar(item.id)">
                  Edit
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- create new kanji -->
      <h3 class="title-content">Create New Kanji Lesson</h3>
      <button class="new-btn" id="creat-new-daily-btn" @click="handleOpenKanjiPopup()">Create</button>
      <div class="student-daily">
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

      <!-- create new question -->
      <h3 class="title-content">Create New Question Lesson</h3>
      <button class="new-btn" id="creat-new-daily-btn" @click="handleOpenQuestionpage()">Create</button>
      <div class="student-daily">
        <div class="list-content-item daily-content-list">
          <div v-for="(item, index) in kanjiContentList" :key="index" class="daily-content-overview">
            <img class="student-daily-img" src="../img/Hinh-Anh-Anime-Chibi-Girl (3).jpg" alt="" />
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



  <!-- Announce create -->
  <div v-if="isDisplayAnnounceCreate" :class="['anouncement-create', { isVisible: isDisplayAnnounceCreate }]">
    <div class="new-input announce">
      <h4 class="form-title">New announce</h4>
      <div class="new-form announce-create">
        <div class="input-item">
          <span class="span-label"><label for="lessonName">Title</label></span>
          <input type="text" name="lessonName" id="announceName" v-model="formAnnounce.announce_name" />
        </div>
        <div class="input-item">
          <span class="span-label"><label for="lessonContent">Content</label></span>
          <textarea name="lessonContent" id="announceContent" v-model="formAnnounce.description"></textarea>
        </div>
      </div>
      <div class="btn-container">
        <button class="new-btn submit-btn" id="submit-createdanounce-btn" @click="appendAnnounceContent()">
          {{ formAnnounce.id ? 'Save' : 'Submit' }}
        </button>
        <button class="new-btn cancel-btn" id="cancel-createdanounce-btn" @click="handleOnClickbtn()">
          Cancel
        </button>
      </div>
    </div>
  </div>



  <kanji-popup :is-visible="isDisplayKanjiCreate" :type="2" @close="handleCloseKanjiPopup" @submit="handleSubmitKanji" />
  <create-lesson-popup :is-visible="isDisplayLessonCreate" :type="1" @close="handleCloseLessonPopup"
    @submit="handleSubmitGrammar"></create-lesson-popup>
  <!-- <footer>Powered by W3.css</footer> -->
</template>

<script setup>
import { ref } from "vue"; // dung de import
import router from "../router";
import moment from "moment";
import { listGrammar, showDetailGrammar } from "../api/grammar";
import { listKanji } from "../api/kanji";
import { listCategoriesByType } from "../api/categories";
import { listAnnounce, showDetailAnnounce, createAnnounce, editAnnounce } from "../api/announce";
import KanjiPopup from "./popup/KanjiPopup.vue";
import CreateLessonPopup from "./popup/CreateLessonPopup.vue"

const formAnnounceDefault = {
  id: null,
  announce_name: "",
  description: "",
};

const baseUrlUpload = import.meta.env.VITE_API_BASE_URL + "/api/upload/";


const formGrammaDefault = {
  id: null,
  grammar_name: "",
  grammar_form: null,
  form_define: "",
  example_1: "",
  example_2: "",
  home_work: "",
};

const lessonContenlist = ref([]);
const announceContenlist = ref([]);

const kanjiContentList = ref([]);
const categoryList = ref([])

const isDisplayAnnounceCreate = ref(false);
const isDisplayLessonCreate = ref(false);
const isDisplayKanjiCreate = ref(false);


const multiSelection = ref([]);
const formGramma = ref(formGrammaDefault);
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
const fetchCategory = async (type) => {
  try {
    const data = await listCategoriesByType(type);
    categoryList.value = data.data.data;
  } catch (error) {

  }
}

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

// kanji

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


const handleShowEditGrammar = async (id) => {
  try {
    const data = await showDetailGrammar(id);
    const result = data?.data?.data;
    if (result) {
      formGramma.value = result;
      isDisplayLessonCreate.value = true;
    }
  } catch (error) {
    console.log(error);
  }
};


const appendAnnounceContent = async () => {

  try {
    const data = await (formAnnounce.value.id ? editAnnounce(formAnnounce.value) : createAnnounce(formAnnounce.value))
    const result = data?.data?.data
    if (result) {
      handleOnClickbtn()
      fetchAnnounce()
    }
  } catch (error) {

  }
  ///'...' dung de giu nguyen gia tri va field cac phan tu khac trong object
  // map dung de them key moi cho object
};

const handleShowAnnounceDetail = async (id) => {
  try {
    const data = await showDetailAnnounce(id)
    const result = data?.data?.data
    if (result) {
      isDisplayAnnounceCreate.value = true
      formAnnounce.value = result
    }
  } catch (error) {

  }
}

const handleOpenPopup = () => {
  fetchCategory(1)
  isDisplayLessonCreate.value = !isDisplayLessonCreate.value;
};

const handleOpenKanjiPopup = () => {
  isDisplayKanjiCreate.value = true;
}

const handleCloseKanjiPopup = () => {
  isDisplayKanjiCreate.value = false;
};
const handleCloseLessonPopup = () => {
  isDisplayLessonCreate.value = false;
};


const handleOnClickbtn = () => {
  formAnnounce.value = formAnnounceDefault
  isDisplayAnnounceCreate.value = !isDisplayAnnounceCreate.value;
};

const handleChangeCheckbox = (row) => {
  if (multiSelection.value.includes(row.index)) {
    multiSelection.value = multiSelection.value.filter(
      (item) => item !== row.index
    );
  } else {
    multiSelection.value.push(row.index);
  }
};

const removeAnnounce = () => {
  if (multiSelection.value.length === 0) {
    return;
  }
  multiSelection.value.forEach((itemSelect, index) => {
    announceContenlist.value = announceContenlist.value.filter(
      (item) => itemSelect !== item.index
    );
  });
  //
};

const handleShowDetail = (id) => {
  router.push({ path: "/grammar", query: { id: id } });
};

const handleShowKanjiDetail = (id) => {
  router.push({ path: "/kanji", query: { id: id } });
};

const handleSubmitKanji = () => {
  fetchKanji();
}

const handleSubmitGrammar = () => {
  fetchGrammar();
}
const handleOpenQuestionpage = () => {
  router.push('/createQuestion')
}
</script>


<style scoped>
@import "../style/teacher.css";
@import "../style/flashcrad.css";

.isVisible {
  visibility: visible;
}

.ishide {
  display: none;
}

.categories-list {
  border-collapse: collapse;
}

.categories-list-content {
  text-align: center;

}

.vocabu-list-table[data-v-9b550bf2] {
  border-collapse: collapse;
  width: 100%;
}

.categories-list-head {
  background-color: rgb(61, 183, 236);
}

.validateInput {
  color: red;
  border: 1px solid red;
}
</style>

