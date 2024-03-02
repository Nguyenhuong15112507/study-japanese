<template>
  <div class="page-body">
    <div class="side-bar">
      <div class="anouncement">
        <h3 class="announce-title">Anounce</h3>
        <div class="announce-list">
          <button
            type="submit"
            class="new-btn"
            id="creat-new-announce-btn"
            style="margin: 10px"
            @click="handleOnClickbtn()"
          >
            Create
          </button>
          <button
            class="new-btn cancel-btn delete-btn"
            id="delete-announce-btn"
            style="margin-left: 0"
            @click="removeAnnounce()"
          >
            Delete
          </button>
          <div class="announce-item">
            <div class="themeAndCheck">
              <input type="checkbox" name="theme-check" class="theme-check" />
              <h4 class="anounce-theme">New lesson was uploaded.</h4>
            </div>
            <p class="anounce-para">
              I've just uploaded new lesson. Please learn and do your homework.
              Deadline is this weekend.
            </p>
            <p class="update-time">12/30/2023</p>
          </div>
          <div class="announce-item">
            <div class="themeAndCheck">
              <input type="checkbox" name="theme-check" class="theme-check" />
              <h4 class="anounce-theme">New lesson was uploaded.</h4>
            </div>
            <p class="anounce-para">
              I've just uploaded new lesson. Please learn and do your homework.
              Deadline is this weekend.
            </p>
            <p class="update-time">12/30/2023</p>
          </div>
          <div class="announce-item">
            <div class="themeAndCheck">
              <input type="checkbox" name="theme-check" class="theme-check" />
              <h4 class="anounce-theme">New lesson was uploaded.</h4>
            </div>
            <p class="anounce-para">
              I've just uploaded new lesson. Please learn and do your homework.
              Deadline is this weekend.
            </p>
            <p class="update-time">12/30/2023</p>
          </div>
          <div
            v-for="(item, index) in announceContenlist"
            :key="index"
            class="announce-item"
          >
            <div class="themeAndCheck">
              <input
                type="checkbox"
                name="theme-check"
                class="theme-check"
                @change="handleChangeCheckbox(item)"
              />
              <h4 class="anounce-theme">{{ item.title }}</h4>
            </div>
            <p class="anounce-para">{{ item.content }}</p>
            <p class="update-time">{{ item.date }}</p>
          </div>
        </div>
      </div>
      <div class="anouncement">
        <h3 class="announce-title">Study result</h3>
        <div class="announce-list">
          <button
            class="new-btn"
            id="creat-new-result-btn"
            style="margin: 10px"
          >
            Create
          </button>
          <button
            class="new-btn cancel-btn delete-btn"
            id="delete-result-btn"
            style="margin-left: 0"
          >
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
          <button
            class="new-btn"
            id="creat-new-lesson-btn"
            @click="handleOpenPopup()"
          >
            Create
          </button>
        </div>

        <h4 class="lesson-name">JLPT N4: Grammar</h4>
        <div class="list-content-item lesson-content-list">
          <div
            v-for="(item, index) in lessonContenlist"
            :key="index"
            class="lession-content-overview"
          >
            <img src="../img/15801f0d.jpg" alt="" class="lesson-content-img" />
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
                <button
                  class="check-homework-btn"
                  @click="handleShowDetail(item.id)"
                >
                  Show detail
                </button>
              </li>
              <li class="practice-example">
                <button
                  class="check-homework-btn"
                  @click="handleShowEditGrammar(item.id)"
                >
                  Edit
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- create new kanji -->

      <div class="student-daily">
        <h3 class="title-content">Create New Kanji Lesson</h3>
        <button class="new-btn" id="creat-new-daily-btn">Create</button>
        <div class="new-input daily">
          <h4 class="form-title">New Kanji Lesson</h4>
          <div class="new-form daily-create">
            <div class="input-item">
              <span class="span-label"
                ><label for="dailyName">Title</label></span
              >
              <input
                type="text"
                name="dailyName"
                id="dailyName"
                v-model="formKanji.title"
              />
            </div>
            <div class="input-item">
              <span class="span-label"
                ><label for="dailyContent">Kanji</label></span
              >
              <textarea
                name="dailyContent1"
                id="dailyContent1"
                v-model="formKanji.kanji_name"
              ></textarea>
            </div>
            <div class="input-item">
              <span class="span-label"
                ><label for="dailyContent">Spell 1</label></span
              >
              <textarea
                name="dailyContent2"
                id="dailyContent2"
                v-model="formKanji.spell_onyomi"
              ></textarea>
            </div>
            <div class="input-item">
              <span class="span-label"
                ><label for="dailyContent">Spell 2</label></span
              >
              <textarea
                name="dailyContent2"
                id="dailyContent2"
                v-model="formKanji.spell_kuyomi"
              ></textarea>
            </div>
            <div class="input-item">
              <span class="span-label"
                ><label for="dailyContent">Example</label></span
              >
              <textarea
                name="dailyContent2"
                id="dailyContent2"
                v-model="formKanji.example"
              ></textarea>
            </div>

            <div class="input-item">
              <span class="span-label"><label for="daily-pic">URL</label></span>
              <input
                type="text"
                name="daily-pic"
                id="daily-pic"
                v-model="formKanji.kanji_url"
              />
            </div>

            <div class="btn-container">
              <button
                class="new-btn submit-btn"
                id="submit-daily-btn"
                @click="handleCreateKanji()"
              >
                Submit
              </button>
              <button class="new-btn cancel-btn" id="cancel-daily-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div class="list-content-item daily-content-list">
          <div
            v-for="(item, index) in kanjiContentList"
            :key="index"
            class="daily-content-overview"
          >
            <img
              class="student-daily-img"
              src="../img/Hinh-Anh-Anime-Chibi-Girl (3).jpg"
              alt=""
            />
            <h4 class="daily-name">{{ item.title }}</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">{{ item.create_at
                  ? moment(item.create_at).format("DD-MM-YYYY")
                  : "" }}</span>
            </div>
            <p class="overview-para">{{ item.kanji_name }}</p>
            <div class="show-detail">
              <button
                class="show-detail"
                @click="handleShowKanjiDetail(item.id)"
              >
                Show detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Create lession -->
  <div
    v-if="isDisplayLessonCreate"
    :class="['anouncement-create', { isVisible: isDisplayLessonCreate }]"
  >
    <div class="new-input lesson">
      <h4 class="form-title" style="font-size: 20px">Lesson</h4>
      <div class="new-form lesson-create">
        <div class="input-item">
          <span class="span-label"><label for="lessonName">Title</label></span>
          <input
            type="text"
            name="lessonName"
            id="lessonName"
            v-model="formGramma.grammar_name"
          />
        </div>
        <div class="input-item">
          <span class="span-label"
            ><label for="lessonContent">Form</label></span
          >
          <textarea
            class="textareacss"
            name="lessonContent"
            id="lessonContent1"
            v-model="formGramma.grammar_form"
          ></textarea>
        </div>
        <div class="input-item">
          <span class="span-label"
            ><label for="lessonContent">Define</label></span
          >
          <textarea
            class="textareacss"
            name="lessonContent"
            id="lessonContent2"
            v-model="formGramma.form_define"
          ></textarea>
        </div>
        <div class="input-item">
          <span class="span-label"
            ><label for="lessonContent">Example 1</label></span
          >
          <textarea
            class="textareacss"
            name="lessonContent"
            id="lessonContent3"
            v-model="formGramma.example_1"
          ></textarea>
        </div>
        <div class="input-item">
          <span class="span-label"
            ><label for="lessonContent">Example 2</label></span
          >
          <textarea
            class="textareacss"
            name="lessonContent"
            id="lessonContent4"
            v-model="formGramma.example_2"
          ></textarea>
        </div>
        <!-- <div class="input-item">
          <span class="span-label"><label for="date">Date</label></span>
          <input type="date" name="date" id="date" v-model="lessonDate" />
        </div> -->
        <div class="input-item">
          <span class="span-label"><label for="homework-url">URL</label></span>
          <input
            type="text"
            name="homework-url"
            id="homework-url"
            v-model="formGramma.home_work"
          />
        </div>
      </div>
      <div class="btn-container">
        <button
          v-if="!formGramma.id"
          class="new-btn submit-btn"
          id="submit-lesson-btn"
          @click="handleCreateGrammar()"
        >
          Submit
        </button>
        <button
          v-else
          class="new-btn submit-btn"
          id="submit-lesson-btn"
          @click="handleEditGrammar()"
        >
          Save
        </button>
        <button
          class="new-btn cancel-btn"
          id="cancel-lesson-btn"
          @click="handleClosePopup()"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
  <!-- Announce create -->
  <div
    v-if="isDisplayAnnounceCreate"
    :class="['anouncement-create', { isVisible: isDisplayAnnounceCreate }]"
  >
    <div class="new-input announce">
      <h4 class="form-title">New announce</h4>
      <div class="new-form announce-create">
        <div class="input-item">
          <span class="span-label"><label for="lessonName">Title</label></span>
          <input
            type="text"
            name="lessonName"
            id="announceName"
            v-model="announceName"
          />
        </div>
        <div class="input-item">
          <span class="span-label"
            ><label for="lessonContent">Content</label></span
          >
          <textarea
            name="lessonContent"
            id="announceContent"
            v-model="announceContent"
          ></textarea>
        </div>
        <div class="input-item">
          <span class="span-label"><label for="date">Date</label></span>
          <input
            type="date"
            name="date"
            id="announcedate"
            v-model="annouceDate"
          />
        </div>
      </div>
      <div class="btn-container">
        <button
          class="new-btn submit-btn"
          id="submit-createdanounce-btn"
          @click="appendAnnounceContent()"
        >
          Submit
        </button>
        <button
          class="new-btn cancel-btn"
          id="cancel-createdanounce-btn"
          @click="handleOnClickbtn()"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
  <!-- <footer>Powered by W3.css</footer> -->
</template>

<script setup>
import { ref } from "vue"; // dung de import
import router from "../router";
import moment from "moment";
import { studentJapaneseStore } from "../store";
import {
  listGrammar,
  createGrammar,
  editGrammar,
  showDetailGrammar,
} from "../api/grammar";
import { listKanji, createKanji } from "../api/kanji";
const userStudentJapaneseStore = studentJapaneseStore();

const lessonContenlist = ref([]);

const announceContenlist = ref(
  userStudentJapaneseStore.announce !== null
    ? userStudentJapaneseStore.announce
    : []
);
const announceName = ref("");
const announceContent = ref("");
const annouceDate = ref("");
const selected = ref(false);

const kanjiContentList = ref([]);
const kanjiTitle = ref("");
const kanjiContent1 = ref("");
const kanjiContent2 = ref("");
const kanjiExample = ref("");
const kanjiDate = ref("");
const formGrammaDefault = {
  id: null,
  grammar_name: "",
  grammar_form: null,
  form_define: "",
  example_1: "",
  example_2: "",
  home_work: "",
};
const formGramma = ref(formGrammaDefault);

const formKanjiDefault = {
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
};
const formKanji = ref(formKanjiDefault);

const isDisplayAnnounceCreate = ref(false);
const isDisplayLessonCreate = ref(false);

const pagekanjiList = ref(userStudentJapaneseStore.kanji);

const multiSelection = ref([]);

const fetchGrammar = async () => {
  try {
    const data = await listGrammar();
    if (data?.data?.data) {
      lessonContenlist.value = data.data.data;
    }
  } catch (error) {}
};
fetchGrammar();
const handleCreateGrammar = async () => {
  const lessonRequest = {
    ...formGramma.value,
    description: "",
    path_base: "",
    file_name: "",
    file_ext: "",
  };
  try {
    const data = await createGrammar(lessonRequest);
    if (data?.data?.data) {
      fetchGrammar();
      isDisplayLessonCreate.value = false;
      formGramma.value = formGrammaDefault;
    }
  } catch (error) {
    console.error(error);
  }
};

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
const handleEditGrammar = async () => {
  try {
    const lessonRequest = {
      ...formGramma.value,
      description: "",
      path_base: "",
      file_name: "",
      file_ext: "",
    };
    const data = await editGrammar(lessonRequest);
    if (data?.data?.data) {
      fetchGrammar();
      isDisplayLessonCreate.value = false;
      formGramma.value = formGrammaDefault;
    }
  } catch (error) {}
};

// kanji

const fetchKanji = async () => {
  try {
    const data = await listKanji();
    if (data?.data?.data) {
      kanjiContentList.value = data.data.data;
    }
  } catch (error) {}
};
fetchKanji();

const handleCreateKanji = async () => {
  try {
    const request = formKanji.value;
    const data = await createKanji(request)
    const result = data?.data?.data
    if(result){
      fetchKanji()
      formKanji.value = formKanjiDefault
    }
  } catch (error) {
    console.log(error)
  }
}

const appendAnnounceContent = () => {
  const announceData = {};
  if (
    announceName.value == "" &&
    announceContent.value == "" &&
    annouceDate.value == ""
  )
    return;
  announceData.title = announceName.value;
  announceData.content = announceContent.value;
  announceData.date = annouceDate.value;
  // announceContenlist.value.push(announceData);

  const announceObject = {
    title: announceName.value,
    content: announceContent.value,
    date: annouceDate.value,
  };

  userStudentJapaneseStore.appendContent(announceObject);
  console.log(announceObject);
  announceName.value = "";
  announceContent.value = "";
  annouceDate.value = "";
  isDisplayAnnounceCreate.value = !isDisplayAnnounceCreate.value;
  announceContenlist.value = announceContenlist.value.map((item, index) => {
    return { ...item, index };
  }); // them key 'index' vao object announceData
  ///'...' dung de giu nguyen gia tri va field cac phan tu khac trong object
  // map dung de them key moi cho object
};

const handleOpenPopup = () => {
  isDisplayLessonCreate.value = !isDisplayLessonCreate.value;
};
const handleClosePopup = () => {
  formGramma.value = formGrammaDefault;
  isDisplayLessonCreate.value = false;
};

const handleOnClickbtn = () => {
  announceName.value = "";
  announceContent.value = "";
  annouceDate.value = "";
  isDisplayAnnounceCreate.value = !isDisplayAnnounceCreate.value;
};

const handleChangeCheckbox = (row) => {
  if (multiSelection.value.includes(row.index)) {
    multiSelection.value = multiSelection.value.filter(
      (item) => item != row.index
    );
  } else {
    multiSelection.value.push(row.index);
  }
  console.log(multiSelection.value);
};

const removeAnnounce = () => {
  if (multiSelection.value.length === 0) {
    return;
  }
  multiSelection.value.forEach((itemSelect, index) => {
    announceContenlist.value = announceContenlist.value.filter(
      (item) => itemSelect != item.index
    );
  });
  //
};

const handleShowDetail = (id) => {
  router.push({ path: "/grammar", query: { id: id } });
};

const handleShowKanjiDetail = (kanjiid) => {
  router.push({ path: "/kanji", query: { kanjiid: kanjiid } });
};
</script>



<style scoped>
@import "../style/teacher.css";

.isVisible {
  visibility: visible;
}

.ishide {
  display: none;
}
</style>

