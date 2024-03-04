<template>
  <div class="page-practice-container">
    <div class="practice-content-container">
      <div class="question-container">
        <div class="question-type-menu">
          <h3 class="question-theme">JLPT N4: Kanji</h3>
          <ul class="question-theme-list">
            <li class="question-theme-item"><a href="#">第一課：花・化</a></li>
            <li class="question-theme-item">
              <a href="#">第二課：東・西・北・南</a>
            </li>
            <li class="question-theme-item"><a href="#">第三課：食・飲</a></li>
          </ul>
        </div>
        <div
          v-if="!isDisplayLearnContent"
          class="list-content-item lesson-homework-list"
        >
          <div
            v-for="(item, index) in pageKanjiList"
            :key="index"
            class="lession-content-overview lession-homework-overview"
          >
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
              <button
                class="check-homework-btn"
                @click="handleChangeLearnContent(item.id)"
              >
                Learn
              </button>
            </div>
          </div>
        </div>
        <div
          v-if="isDisplayLearnContent && kanjiFormRef.id !== null"
          class="question-content-container"
        >
          <div class="question-group-list">
            <div class="question-group-item">
              <h5 class="question-content">{{ kanjiFormRef.kanji_name }}</h5>
              <ul class="answers-list">
                <li class="answer-item"><div class="content-name">１。音読み：</div><div class="content-value">{{ kanjiFormRef.spell_onyomi }}</div></li>
                <li class="answer-item"><div class="content-name">2。訓読み：</div><div class="content-value">{{ kanjiFormRef.spell_kuyomi }}</div></li>
                <li class="answer-item"><div class="content-name">３。例：</div><div class="content-value">{{ kanjiFormRef.example }}</div></li>
                <li class="answer-item"><div class="content-name">４。参考：</div><div class="content-value">{{ kanjiFormRef.kanji_url }}</div></li>

                <!-- <li class="answer-item">
                  {{
                    kanjiFormRef.create_at
                      ? moment(kanjiFormRef.create_at).format("DD-MM-YYYY")
                      : ""
                  }}
                </li> -->
                <img src="../img/9-1.png" class="example-img" alt="" />
              </ul>
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
              <img
                src="../img/large-55bb1d6d73e4f.png"
                alt=""
                class="website-img"
              />
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
import moment from "moment";

const userStudentJapaneseStore = studentJapaneseStore();

const isDisplayLearnContent = ref(false);
const kanjiId = ref(null);

const pathkanjiId = router.currentRoute.value.query;
const kanjiForm = {
  id: null,
  title: "",
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

const fetchKanji = async () => {
  try {
    const data = await listKanji();
    if (data?.data?.data) {
        pageKanjiList.value = data.data.data;
    }
  } catch (error) {}
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
  } catch (error) {}
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
  font-weight: 600;
}
.content-value {
  margin-left: 30px;
  margin-bottom: 10px;
}
</style>