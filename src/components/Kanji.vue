<template>
  <div class="page-practice-container">
    <div class="practice-content-container">
      <div class="question-container">
        <div class="question-type-menu">
          <ul v-for="(item, index) in categoryList" :key="index" class="question-theme-list">
            <h3 class="question-theme" style="margin: 5px auto;">{{ item.japanese_level }}</h3>
            <li @click="handleChangeLearnContent()" class="question-theme-item">{{ item.category_name }}</li>
          </ul>
        </div>
        <div v-if="!isDisplayLearnContent" class="list-content-item lesson-homework-list">
          <div v-for="(item, index) in pageKanjiList" :key="index"
            class="lession-content-overview lession-homework-overview">
            <img src="../img/15801f0d.jpg" alt="" class="lesson-content-img" />
            <h4 class="lesson-name">{{ item.title }}</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">{{ item.create_at
                ? moment(item.create_at).format("DD-MM-YYYY")
                : "" }}</span>
            </div>
            <!-- <div class="status">
              <span class="label">Kanji: </span>
              <span class="homework-status">{{ item.kanji_name }}</span>
            </div> -->
            <!-- <p class="overview-para">{{ item.content2 }}</p> -->
            <div class="show-detail-and-practice" style="margin-top: 50px;">
              <button class="check-homework-btn" @click="handleChangeLearnContent(item.id)">
                Learn
              </button>
            </div>
          </div>
        </div>
        <div v-if="isDisplayLearnContent && kanjinewForm.id !== null" class="question-content-container">
          <div class="question-group-list">
            <div class="question-group-item">

              <div class="input-item" style="display: flex; align-items: center; width: 500px;">
                <span class="span-label"><label for="lessonName">Title</label></span>
                <input :disabled="isDisabled" type="text" name="lessonName" v-model="kanjinewForm.title" id="announceName"
                  style="margin-left: 56px;" />
              </div>
              <div class="input-item" style="display: flex; align-items: center; width: 500px;">
                <span class="span-label"><label for="lessonName">Description</label></span>
                <input :disabled="isDisabled" v-model="kanjinewForm.description" type="text" name="lessonName" id="announceName" />
              </div>
              <div class="vocabulary-list">
                <div class="button-container">
                  <button @click="handleBack()"  class="new-btn" id="back-result-btn"
                    style="margin: 10px; background-color: rgb(210, 209, 209); width: 50px;margin-left: 0;">
                    Back
                  </button>
                  <button @click="handleChangeKanjiFlashcard(kanjinewForm.id)" class="new-btn" id="creat-new-result-btn" style="margin: 10px">
                    Learn
                  </button>
                  <button  class="new-btn" id="creat-new-result-btn" style="margin: 10px">
                    Practice
                  </button>
                </div>
                <table class="vocabu-list-table" width="800" border="1" cellpadding="2px">
                  <tr class="vocabu-table-head">
                    <th class="vocabu-table-title" style="width: 50px ;">STT</th>
                    <th class="vocabu-table-title">Kanji</th>
                    <th class="vocabu-table-title">Onyomi</th>
                    <th class="vocabu-table-title">Kunyomi</th>
                    <th class="vocabu-table-title">Kanji's name</th>
                    <th class="vocabu-table-title">Defination</th>
                  </tr>
                  <tbody>
                    <tr v-for="(item, index) in rows" :key="index" class="vocabu-table-tr">
                      <td><input type="checkbox" class="vocabu-table-content" /></td>
                      <td class="vocabu-table-content">{{ item.kanji }}</td>
                      <td class="vocabu-table-content">{{ item.spell_onyomi }}</td>
                      <td class="vocabu-table-content">{{ item.spell_kuyomi }}</td>
                      <td class="vocabu-table-content">{{ item.kanji_name }}</td>
                      <td class="vocabu-table-content">{{ item.define }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="practice-question-menu"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "../router";
import { showDetailkanji, listKanji } from "../api/kanji";
import { listCategoriesByType } from "../api/categories";
import moment from "moment";

const baseUrlUpload = import.meta.env.VITE_API_BASE_URL + "/api/upload/";

const isDisplayLearnContent = ref(false);
const categoryList = ref([])
const isDisabled = ref(true);

const pathkanjiId = router.currentRoute.value.query;
const kanjiForm = {
  id: null,
  kanji: '',
  kanji_name: '',
  define: '',
  example: '',
  spell_onyomi: '',
  spell_kuyomi: '',
  path_base: "",
  file_name: "",
  file_ext: "",
};
const kanjiFormRef = ref(kanjiForm);
const kanjinewFormDefault = ref({
  category_id: 0,
  title: '',
  description: '',
  file_content: '',
  file_name: '',
  file_ext: '',
  content_type: '',
  file_size: 0,
  list_kanji: []
})
const kanjinewForm = ref(kanjinewFormDefault)
const pageKanjiList = ref([]);

const rows = ref([])
const fetchCategory = async (type) => {
  try {
    const data = await listCategoriesByType(type);
    categoryList.value = data.data.data;
  } catch (error) {

  }
}
fetchCategory(2)
const fetchKanji = async () => {
  try {
    const data = await listKanji();
    if (data?.data?.data) {
      pageKanjiList.value = data.data.data;
      if (pathkanjiId?.id) {
                const kanji = pageKanjiList.value.find(item => item.id.toString() === pathkanjiId.id)
                if (kanji) {
                  kanjinewForm.value = kanji
                  isDisplayLearnContent.value = true
                  fetcKanjidDetail(pathkanjiId.id)
                }
                console.log(pageKanjiList.value)
            }
    }
  } catch (error) { }
};
fetchKanji();
const fetcKanjidDetail = async (id) => {
  try {
    const data = await showDetailkanji(id)
    const result = data?.data?.data
    if (result) {
      kanjinewForm.value = result
      console.log(kanjinewForm.value)
      rows.value = result.list_kanji
      isDisplayLearnContent.value = true;
    }
  } catch (error) {

  }
}

// fetcKanjidDetail();

const handleChangeLearnContent = (id) => {
  fetcKanjidDetail(id)
};

const handleBack = () => {
    isDisplayLearnContent.value = false
    kanjiFormRef.value = kanjiForm
}

const handleChangeKanjiFlashcard = (kanjiItemid) => {
  router.push({path: "/kanji/kanjiFlashcard", query: { id: kanjiItemid } })
}
</script>

<style scoped>
@import "../style/grammar.css";
@import "../style/teacher.css";
@import "../style/flashcrad.css";

.example-img {
  width: 70%;
  border: 1px solid gray;
  margin-top: 10px;
}

.lesson-homework-list {
  width: 85%;
  margin-left: 10px;
  margin-right: 10px;
  height: 450px;
  display: flex;

}

.question-type-menu[data-v-1fc56918] {
  width: 17%;
}



.question-theme-item:hover {
  color: blue;
  cursor: pointer;
}

input:disabled {
  background-color: rgb(237, 247, 251);
  cursor: pointer;
}

.lession-homework-overview {
  width: 96%;
}

.isVisible {
  visibility: visible;
}

.ishide {
  display: none;
}

.question-content {
  margin: 10px auto;
  font-size: 18px;
  text-align: center;
}

.content-name {
  margin: auto 10px;
  width: 100px;
  color: blue;
}

.content-value {
  margin-left: 30px;
  margin-bottom: 10px;
}

.vocabu-list-table {
  position: relative;
  width: 100%;
  margin-right: 10px;
}

.vocabulary-list {
  width: 98%;
}

.vocabu-table-title[data-v-05defb10] {
  font-weight: bold;
  align-items: center;
  text-align: center;
  background-color: rgb(161 218 243);

}

.lession-content-overview[data-v-05defb10],
.daily-content-overview[data-v-05defb10] {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  width: 250px;
  margin-bottom: 10px;
  /* margin-right: 15px; */
}

.page-practice-container[data-v-05defb10] {
  color: black;
  position: absolute;
  width: 100%;
  top: 7px;
  left: 0;
  right: 0;
}

.question-type-menu[data-v-05defb10],
.question-content-container[data-v-05defb10],
.another-infomation[data-v-05defb10] {
  margin-top: 10px;
}

.question-type-menu[data-v-05defb10] {
  width: 15%;
  background-color: rgba(147, 220, 248, 0.6);
  border: 1px solid rgb(49, 171, 224, 0.6);
  border-radius: 2px;
  padding-left: 10px;
}
.question-content-container[data-v-05defb10] {
    margin: 10px 5px 10px 10px;
    border: 1px solid rgb(49, 171, 224, 0.6);
    border-radius: 2px;
    padding-left: 10px;
    width: 85%;
}


</style>