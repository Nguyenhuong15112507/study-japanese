<template>
  <div class="page-kanji-container">
      <div class="kanji-container">
        <div class="kanji-type-menu">
          <div v-for="(item, index) in categoryList" :key="index">
            <p>
              <a class="btn btn-outline-success categories-level" data-bs-toggle="collapse" :href="'#collapseExample-'+index" role="button" aria-expanded="false" :aria-controls="'collapseExample-'+index">
                {{ item.japanese_level.toLocaleUpperCase() }}
              </a>
            </p>
            <div class="collapse" :id="'collapseExample-'+index" style="margin-bottom: 10px">
              <div @click="handleChangeLearnContent()" class="card card-body">
                {{ item.category_name }}
              </div>
            </div>
          </div>
        </div>
        <div v-if="!isDisplayLearnContent" class="row kanji-content">
          <div v-for="(item, index) in pageKanjiList" :key="index" class="col-sm-3 content-kanji">
            <img src="../img/15801f0d.jpg" alt="" class="kanji-imag" />
            <h4 class="lesson-name">{{ item.title }}</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">{{ item.create_at
                ? moment(item.create_at).format("DD-MM-YYYY")
                : "" }}</span>
            </div>
            <div class="show-detail-and-practice" style="margin-top: 50px;">
              <button class="btn btn-info" @click="handleChangeLearnContent(item.id)">
                Learn
              </button>
            </div>
          </div>
        </div>
        <div v-if="isDisplayLearnContent && kanjinewForm.id !== null" class="row kanji-detail">
          <div class="question-group-list">
            <div class="question-group-item">

              <div class="input-item" style="display: flex; align-items: center; width: 500px;">
                <span class="span-label"><label for="lessonName">Title</label></span>
                <input :disabled="isDisabled" class="form-control" type="text" name="lessonName" v-model="kanjinewForm.title" id="announceName"
                  style="margin-left: 90px;" />
              </div>
              <div class="input-item" style="display: flex; align-items: center; width: 500px; margin-top: 10px">
                <span class="span-label"><label for="lessonName">Description</label></span>
                <input :disabled="isDisabled" class="form-control" v-model="kanjinewForm.description" type="text" name="lessonName" id="announceName" style="margin-left: 37px" />
              </div>
              <div class="vocabulary-list">
                <div class="button-container">
                  <button @click="handleBack()"  class="btn btn-secondary">
                    Back
                  </button>
                  <button @click="handleChangeKanjiFlashcard(kanjinewForm.id)" class="btn btn-info" id="creat-new-result-btn" style="margin: 10px">
                    Learn
                  </button>
                  <button  class="btn btn-warning">
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

<style scoped lang="scss">
@import "../style/flashcrad.css";

.page-kanji-container {
  .kanji-container {
    display: flex;
    width: 100%;
    .kanji-type-menu {
      margin-top: 161px;
      padding-top: 10px;
      padding-right: 20px;
      padding-left: 20px;
      background-color: rgba(147, 220, 248, 0.6);
      width: 20%;
      .categories-level {
        width: 100%;
      }
    }
    .kanji-content {
      margin-top: 180px;
      width: 80%;
      justify-content: center;
      .content-kanji {
        border: 1px solid #0dcaf0;
        border-radius: 10px;
        margin-left: 10px;
        margin-bottom: 10px;
        padding: 10px;
        .kanji-imag {
          width: 100%;
        }
      }
    }
    .kanji-detail {
      margin-top: 180px;
      width: 80%;
      padding-left: 20px;
    }
  }
}
</style>