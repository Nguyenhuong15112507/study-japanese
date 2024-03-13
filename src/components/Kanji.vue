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
            <h4 class="lesson-name">{{ item.title }}</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">{{ item.create_at
                ? moment(item.create_at).format("DD-MM-YYYY")
                : "" }}</span>
            </div>
            <div class="status">
              <span class="label">Kanji: </span>
              <span class="homework-status">{{ item.kanji_name }}</span>
            </div>
            <!-- <p class="overview-para">{{ item.content2 }}</p> -->
            <div class="show-detail-and-practice">
              <button class="check-homework-btn" @click="handleChangeLearnContent(item.id)">
                Learn
              </button>
            </div>
          </div>
        </div>
        <div v-if="isDisplayLearnContent && kanjiFormRef.id !== null" class="question-content-container">
          <div class="question-group-list">
            <div class="question-group-item">
              <!-- <ul class="answers-list">
                <li class="answer-item"><div class="content-name">音読み：</div><div class="content-value">{{ kanjiFormRef.spell_onyomi }}</div></li>
                <li class="answer-item"><div class="content-name">訓読み：</div><div class="content-value">{{ kanjiFormRef.spell_kuyomi }}</div></li>
                <li class="answer-item"><div class="content-name">例：</div><div class="content-value">{{ kanjiFormRef.example }}</div></li>
                <li class="answer-item"><div class="content-name">参考：</div><div class="content-value">{{ kanjiFormRef.kanji_url }}</div></li>
                <img src="../img/9-1.png" class="example-img" alt="" />
              </ul> -->
              <div class="input-item" style="display: flex; align-items: center; width: 500px;">
                <span class="span-label"><label for="lessonName">Title</label></span>
                <input type="text" name="lessonName" id="announceName"
                  style="margin-left: 56px;" />
              </div>
              <div class="input-item" style="display: flex; align-items: center; width: 500px;">
                <span class="span-label"><label for="lessonName">Description</label></span>
                <input type="text" name="lessonName" id="announceName"/>
              </div>
              <div class="vocabulary-list">
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
                    <tr v-for="(row, index) in rows" :key="index" class="vocabu-table-tr">
                      <td><input type="checkbox" class="vocabu-table-content" /></td>
                      <td class="vocabu-table-content">new_kanji</td>
                      <td class="vocabu-table-content">onyomi</td>
                      <td class="vocabu-table-content">kunyomi</td>
                      <td class="vocabu-table-content">kanji_name</td>
                      <td class="vocabu-table-content">defination</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="another-infomation">
          <div class="japanese-intro-title">
            <h3 class="learning-site">Japanese learning website</h3>
          </div>
          <div class="japanese-learning-web">
            <h3 class="website-name">OJAD</h3>
            <div class="website-img-container">
              <img src="../img/20221124-ojad.webp" alt="" class="website-img" />
            </div>
            <p class="website-overview">
              OJAD is an online Japanese accent database for learners and
              teachers of Japanese. The goal of this tool is to enhance the
              awareness and understanding of the Japanese pitch accent with a
              suite of four features.
            </p>
          </div>
          <div class="japanese-learning-web">
            <h3 class="website-name">JPLANG</h3>
            <div class="website-img-container">
              <img src="../img/large-55bb1d6d73e4f.png" alt="" class="website-img" />
            </div>
            <p class="website-overview">
              This Website, provides e-learning materials for learning
              Japanese,jointly developed by the Japanese Language Center for
              International Students and the Information Collaboration Center of
              Tokyo University of Foreign Studies.
            </p>
          </div>
          <div class="japanese-learning-web">
            <h3 class="website-name">OJAD</h3>
            <div class="website-img-container">
              <img src="../img/20221124-ojad.webp" alt="" class="website-img" />
            </div>
            <p class="website-overview">
              OJAD is an online Japanese accent database for learners and
              teachers of Japanese. The goal of this tool is to enhance the
              awareness and understanding of the Japanese pitch accent with a
              suite of four features.
            </p>
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
import { studentJapaneseStore } from "../store";
import { showDetailkanji, listKanji } from "../api/kanji";
import { showDetailKanjiNew, createKanjiNew } from "../api/kanjinew";
import { listCategoriesByType, createCategory, editCategory } from "../api/categories";
import moment from "moment";


const isDisplayLearnContent = ref(false);
const categoryList = ref([])
const kanjiId = ref(null);

const pathkanjiId = router.currentRoute.value.query;
const kanjiForm = {
  id: null,
  kanji_name: "",
  example: "",
  spell_onyomi: "",
  spell_kuyomi: "",
  kanji_url: "",
  path_base: "",
  file_name: "",
  file_ext: "",
  create_at: null,
};
const kanjiFormRef = ref(kanjiForm);
const pageKanjiList = ref([]);
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
    }
  } catch (error) { }
};
fetchKanji();


const fetchKanjiDetail = async () => {
  try {
    if (!pathkanjiId?.kanjiid) {
      return;
    }

    const data = await showDetailkanji(pathkanjiId?.kanjiid);
    if (data?.data?.data) {
      kanjiFormRef.value = data.data.data;
      isDisplayLearnContent.value = true;
    }
  } catch (error) { }
};
fetchKanjiDetail();

const handleChangeLearnContent = (id) => {
  const kanji = pageKanjiList.value.find((item) => item.id === id);
  if (!kanji) {
    return;
  }
  kanjiFormRef.value = kanji;
  isDisplayLearnContent.value = !isDisplayLearnContent.value;
};
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
  height: auto;
  width: 60%;
  margin-left: 10px;
}

.question-type-menu[data-v-1fc56918] {
  width: 17%;
}

.another-infomation[data-v-1fc56918] {
  width: 25%;
  /* margin: 10px; */
}

.question-theme-item:hover {
  color: blue;
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
</style>