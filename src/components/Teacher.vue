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

          <div class="homwork-list-header">
            <label for="status">Status</label>
            <select name="status" id="status-filter">
              <option value="Waiting">Waiting</option>
              <option value="Doing">Doing</option>
              <option value="Finished">Finished</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>
        <div class="list-content-item lesson-homework-list">
          <div class="lession-content-overview lession-homework-overview">
            <h4 class="lesson-name">N5: Vocabulary1 homework</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">12/12/2023</span>
            </div>
            <div class="status">
              <span class="label">Status: </span>
              <span class="homework-status">Done</span>
            </div>
            <p class="overview-para">
              I've already finish this homework, but i have some Q&A. Please
              check these Q&A in this URL
            </p>
            <div class="show-detail-and-practice">
              <button class="check-homework-btn">Check result</button>
            </div>
          </div>
          <div class="lession-content-overview lession-homework-overview">
            <h4 class="lesson-name">N5: Vocabulary1 homework</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">12/12/2023</span>
            </div>
            <div class="status">
              <span class="label">Status: </span>
              <span class="homework-status">Done</span>
            </div>
            <p class="overview-para">
              I've already finish this homework, but i have some Q&A. Please
              check these Q&A in this URL
            </p>
            <div class="show-detail-and-practice">
              <button class="check-homework-btn">Check result</button>
            </div>
          </div>
          <div class="lession-content-overview lession-homework-overview">
            <h4 class="lesson-name">N5: Vocabulary1 homework</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">12/12/2023</span>
            </div>
            <div class="status">
              <span class="label">Status: </span>
              <span class="homework-status">Done</span>
            </div>
            <p class="overview-para">
              I've already finish this homework, but i have some Q&A. Please
              check these Q&A in this URL
            </p>
            <div class="show-detail-and-practice">
              <button class="check-homework-btn">Check result</button>
            </div>
          </div>
          <div class="lession-content-overview lession-homework-overview">
            <h4 class="lesson-name">N5: Vocabulary1 homework</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">12/12/2023</span>
            </div>
            <div class="status">
              <span class="label">Status: </span>
              <span class="homework-status">Done</span>
            </div>
            <p class="overview-para">
              I've already finish this homework, but i have some Q&A. Please
              check these Q&A in this URL
            </p>
            <div class="show-detail-and-practice">
              <button class="check-homework-btn">Check result</button>
            </div>
          </div>
          <div
            v-for="(item, index) in lessonContenlist"
            :key="index"
            class="lession-content-overview lession-homework-overview"
          >
            <h4 class="lesson-name">{{ item.name }}</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">{{ item.date }}</span>
            </div>
            <div class="status">
              <span class="label">Status: </span>
              <span class="homework-status">{{ item.homework }}</span>
            </div>
            <p class="overview-para">{{ item.Gramform }}</p>
            <div class="show-detail-and-practice">
              <button class="check-homework-btn">Check result</button>
            </div>
          </div>
        </div>
        <h4 class="lesson-name">JLPT N4: Grammar</h4>
        <div class="list-content-item lesson-content-list">
          <div class="lession-content-overview">
            <img src="../img/15801f0d.jpg" alt="" class="lesson-content-img" />
            <h4 class="lesson-name">N5: Vocabulary1</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">12/12/2023</span>
            </div>
            <p class="overview-para">
              Today, we will learning about N4's vocabulary and practice with
              some example.
            </p>
            <ul class="show-detail-and-practice">
              <li class="show-detail"><a href="">Show detail</a></li>
              <li class="practice-example"><a href="">Practice</a></li>
            </ul>
          </div>
        </div>
        <h4 class="lesson-name">JLPT N4: Kanji</h4>
        <div class="list-content-item lesson-content-list">
          <div
            v-for="(item, index) in lessonContenlist"
            :key="index"
            class="lession-content-overview"
          >
            <img src="../img/15801f0d.jpg" alt="" class="lesson-content-img" />
            <h4 class="lesson-name">{{ item.name }}</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">{{ item.date }}</span>
            </div>
            <p class="overview-para">{{ item.Gramform }}</p>
            <ul class="show-detail-and-practice">
              <li class="show-detail">
                <button @click="handleShowDetail(item.id)">Show detail</button>
              </li>
              <li class="practice-example"><a href="">Practice</a></li>
            </ul>
          </div>
        </div>
        <h4 class="lesson-name">JLPT N4: Conversation</h4>
        <div class="list-content-item lesson-content-list">
          <div class="lession-content-overview">
            <img src="../img/15801f0d.jpg" alt="" class="lesson-content-img" />
            <h4 class="lesson-name">N5: Vocabulary1</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">12/12/2023</span>
            </div>
            <p class="overview-para">
              Today, we will learning about N4's vocabulary and practice with
              some example.
            </p>
            <ul class="show-detail-and-practice">
              <li class="show-detail"><a href="">Show detail</a></li>
              <li class="practice-example"><a href="">Practice</a></li>
            </ul>
          </div>
          <div class="lession-content-overview">
            <img src="../img/15801f0d.jpg" alt="" class="lesson-content-img" />
            <h4 class="lesson-name">N5: Vocabulary2</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">12/13/2023</span>
            </div>
            <p class="overview-para">
              Today, we will learning about N4's vocabulary and practice with
              some example.
            </p>
            <ul class="show-detail-and-practice">
              <li class="show-detail"><a href="">Show detail</a></li>
              <li class="practice-example"><a href="">Practice</a></li>
            </ul>
          </div>
          <div class="lession-content-overview">
            <img src="../img/15801f0d.jpg" alt="" class="lesson-content-img" />
            <h4 class="lesson-name">N5: Vocabulary3</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">14/12/2023</span>
            </div>
            <p class="overview-para">
              Today, we will learning about N4's vocabulary and practice with
              some example.
            </p>
            <ul class="show-detail-and-practice">
              <li class="show-detail"><a href="">Show detail</a></li>
              <li class="practice-example"><a href="">Practice</a></li>
            </ul>
          </div>
          <div class="lession-content-overview">
            <img src="../img/15801f0d.jpg" alt="" class="lesson-content-img" />
            <h4 class="lesson-name">N5: Vocabulary4</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">15/12/2023</span>
            </div>
            <p class="overview-para">
              Today, we will learning about N4's vocabulary and practice with
              some example.
            </p>
            <ul class="show-detail-and-practice">
              <li class="show-detail"><a href="">Show detail</a></li>
              <li class="practice-example"><a href="">Practice</a></li>
            </ul>
          </div>
          <div class="lession-content-overview">
            <img src="../img/15801f0d.jpg" alt="" class="lesson-content-img" />
            <h4 class="lesson-name">N5: Vocabulary4</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">15/12/2023</span>
            </div>
            <p class="overview-para">
              Today, we will learning about N4's vocabulary and practice with
              some example.
            </p>
            <ul class="show-detail-and-practice">
              <li class="show-detail"><a href="">Show detail</a></li>
              <li class="practice-example"><a href="">Practice</a></li>
            </ul>
          </div>
          <div class="lession-content-overview">
            <img src="../img/15801f0d.jpg" alt="" class="lesson-content-img" />
            <h4 class="lesson-name">N5: Vocabulary4</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">15/12/2023</span>
            </div>
            <p class="overview-para">
              Today, we will learning about N4's vocabulary and practice with
              some example.
            </p>
            <ul class="show-detail-and-practice">
              <li class="show-detail"><a href="">Show detail</a></li>
              <li class="practice-example"><a href="">Practice</a></li>
            </ul>
          </div>
        </div>
        <h4 class="lesson-name">JLPT N4: Listening</h4>
        <div class="list-content-item lesson-content-list">
          <div class="lession-content-overview">
            <img src="../img/15801f0d.jpg" alt="" class="lesson-content-img" />
            <h4 class="lesson-name">N5: Vocabulary1</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">12/12/2023</span>
            </div>
            <p class="overview-para">
              Today, we will learning about N4's vocabulary and practice with
              some example.
            </p>
            <ul class="show-detail-and-practice">
              <li class="show-detail"><a href="">Show detail</a></li>
              <li class="practice-example"><a href="">Practice</a></li>
            </ul>
          </div>
          <div class="lession-content-overview">
            <img src="../img/15801f0d.jpg" alt="" class="lesson-content-img" />
            <h4 class="lesson-name">N5: Vocabulary2</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">12/13/2023</span>
            </div>
            <p class="overview-para">
              Today, we will learning about N4's vocabulary and practice with
              some example.
            </p>
            <ul class="show-detail-and-practice">
              <li class="show-detail"><a href="">Show detail</a></li>
              <li class="practice-example"><a href="">Practice</a></li>
            </ul>
          </div>
          <div class="lession-content-overview">
            <img src="../img/15801f0d.jpg" alt="" class="lesson-content-img" />
            <h4 class="lesson-name">N5: Vocabulary3</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">14/12/2023</span>
            </div>
            <p class="overview-para">
              Today, we will learning about N4's vocabulary and practice with
              some example.
            </p>
            <ul class="show-detail-and-practice">
              <li class="show-detail"><a href="">Show detail</a></li>
              <li class="practice-example"><a href="">Practice</a></li>
            </ul>
          </div>
          <div class="lession-content-overview">
            <img src="../img/15801f0d.jpg" alt="" class="lesson-content-img" />
            <h4 class="lesson-name">N5: Vocabulary4</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">15/12/2023</span>
            </div>
            <p class="overview-para">
              Today, we will learning about N4's vocabulary and practice with
              some example.
            </p>
            <ul class="show-detail-and-practice">
              <li class="show-detail"><a href="">Show detail</a></li>
              <li class="practice-example"><a href="">Practice</a></li>
            </ul>
          </div>
          <div class="lession-content-overview">
            <img src="../img/15801f0d.jpg" alt="" class="lesson-content-img" />
            <h4 class="lesson-name">N5: Vocabulary4</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">15/12/2023</span>
            </div>
            <p class="overview-para">
              Today, we will learning about N4's vocabulary and practice with
              some example.
            </p>
            <ul class="show-detail-and-practice">
              <li class="show-detail"><a href="">Show detail</a></li>
              <li class="practice-example"><a href="">Practice</a></li>
            </ul>
          </div>
          <div class="lession-content-overview">
            <img src="../img/15801f0d.jpg" alt="" class="lesson-content-img" />
            <h4 class="lesson-name">N5: Vocabulary4</h4>
            <div class="created-date">
              <span class="label">Date: </span>
              <span class="date">15/12/2023</span>
            </div>
            <p class="overview-para">
              Today, we will learning about N4's vocabulary and practice with
              some example.
            </p>
            <ul class="show-detail-and-practice">
              <li class="show-detail"><a href="">Show detail</a></li>
              <li class="practice-example"><a href="">Practice</a></li>
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
                v-model="kanjiTitle"
              />
            </div>
            <div class="input-item">
              <span class="span-label"
                ><label for="dailyContent">Kanji</label></span
              >
              <textarea
                name="dailyContent1"
                id="dailyContent1"
                v-model="kanjiContent1"
              ></textarea>
            </div>
            <div class="input-item">
              <span class="span-label"
                ><label for="dailyContent">Example</label></span
              >
              <textarea
                name="dailyContent2"
                id="dailyContent2"
                v-model="kanjiContent2"
              ></textarea>
            </div>
            <div class="input-item">
              <span class="span-label"
                ><label for="dailydate">Date</label></span
              >
              <input
                type="date"
                name="date"
                id="dailydate"
                v-model="kanjiDate"
              />
            </div>
            <div class="input-item">
              <span class="span-label"
                ><label for="daily-pic">Upload</label></span
              >
              <input type="file" name="daily-pic" id="daily-pic" />
            </div>

            <div class="btn-container">
              <button
                class="new-btn submit-btn"
                id="submit-daily-btn"
                @click="appendKanjiContent()"
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
              <span class="date">{{ item.date }}</span>
            </div>
            <p class="overview-para">{{ item.content1 }}</p>
            <div class="show-detail">
              <button class="show-detail" @click="handleShowKanjiDetail(item.id)"
                >Show detail</button
              >
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
            v-model="lessonName"
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
            v-model="lessonContentForm"
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
            v-model="lessonContentDefine"
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
            v-model="lessonContentExample1"
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
            v-model="lessonContentExample2"
          ></textarea>
        </div>
        <div class="input-item">
          <span class="span-label"><label for="date">Date</label></span>
          <input type="date" name="date" id="date" v-model="lessonDate" />
        </div>
        <div class="input-item">
          <span class="span-label"
            ><label for="homework-url">Upload</label></span
          >
          <input
            type="text"
            name="homework-url"
            id="homework-url"
            v-model="homework"
          />
          <input type="file" name="homework" id="homework" />
        </div>
      </div>
      <div class="btn-container">
        <button
          class="new-btn submit-btn"
          id="submit-lesson-btn"
          @click="appendLessonContent()"
        >
          Submit
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
import { studentJapaneseStore } from "../store";

const userStudentJapaneseStore = studentJapaneseStore();

const lessonContenlist = ref(
  userStudentJapaneseStore.lesson !== null
    ? userStudentJapaneseStore.lesson
    : []
);
const lessonName = ref("");
const lessonContent = ref("");
const lessonContentForm = ref("");
const lessonContentDefine = ref("");
const lessonContentExample1 = ref("");
const lessonContentExample2 = ref("");
const lessonDate = ref("");
const homework = ref("");

const announceContenlist = ref(
  userStudentJapaneseStore.announce !== null
    ? userStudentJapaneseStore.announce
    : []
);
const announceName = ref("");
const announceContent = ref("");
const annouceDate = ref("");
const selected = ref(false);

const kanjiContentList = ref(
  userStudentJapaneseStore.kanji !== null ? userStudentJapaneseStore.kanji : []
);
const kanjiTitle = ref("");
const kanjiContent1 = ref("");
const kanjiContent2 = ref("");
const kanjiExample = ref("");
const kanjiDate = ref("");

const isDisplayAnnounceCreate = ref(false);
const isDisplayLessonCreate = ref(false);

const multiSelection = ref([]);

const isTab = ref(1);

const appendLessonContent = () => {
  const data = {};
  let validates = [
    lessonName.value,
    lessonContentForm.value,
    lessonContentDefine.value,
    lessonContentExample1.value,
    lessonDate.value,
    homework.value,
  ];
  if (validates.includes("")) return;
  let r = (Math.random() + 1).toString(36).substring(7);
  data.id = r;
  data.name = lessonName.value;
  data.Gramform = lessonContentForm.value;
  data.formDefine = lessonContentDefine.value;
  data.example1 = lessonContentExample1.value;
  data.example2 = lessonContentExample2.value;
  data.homework = homework.value;
  data.date = lessonDate.value;

  const lessonObject = {
    id: r,
    name: lessonName.value,
    Gramform: lessonContentForm.value,
    formDefine: lessonContentDefine.value,
    example1: lessonContentExample1.value,
    example2: lessonContentExample2.value,
    homework: homework.value,
    date: lessonDate.value,
  };
  userStudentJapaneseStore.appendLesson(lessonObject);

  lessonName.value = "";
  lessonContentForm.value = "";
  lessonContentDefine.value = "";
  lessonContentExample1.value = "";
  lessonContentExample2.value = "";
  homework.value = "";
  lessonDate.value = "";
  isDisplayLessonCreate.value = !isDisplayLessonCreate.value;
};

const appendKanjiContent = () => {
  const kanjiData = {};
  if (kanjiTitle.value == "") return;
  let kanjiId = (Math.random() + 1).toString(36).substring(7);
  kanjiData.id = kanjiId;
  kanjiData.title = kanjiTitle.value;
  kanjiData.content1 = kanjiContent1.value;
  kanjiData.content2 = kanjiContent2.value;
  kanjiData.example = kanjiExample.value;
  kanjiData.date = kanjiDate.value;

  const kanjiObject = {
    id: kanjiId,
    title: kanjiTitle.value,
    content1: kanjiContent1.value,
    content2: kanjiContent2.value,
    example: kanjiExample.value,
    date: kanjiDate.value,
  };
  userStudentJapaneseStore.appendKanji(kanjiObject);

  kanjiTitle.value = "";
  kanjiContent1.value = "";
  kanjiContent2.value = "";
  kanjiExample.value = "";
  kanjiDate.value = "";
};

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
  announceContenlist.value.push(announceData);

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
  lessonName.value = "";
  lessonContentForm.value = "";
  lessonContentDefine.value = "";
  lessonContentExample1.value = "";
  lessonContentExample2.value = "";
  homework.value = "";
  lessonDate.value = "";
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

const listLessonInGrammar = ref(userStudentJapaneseStore.lesson);
const pagekanjiList = ref(userStudentJapaneseStore.kanji);

const handleShowDetail = (id) => {
  const grammar = listLessonInGrammar.value.find((item) => item.id === id);
  if (!grammar) {
    return;
  }
  router.push({ path: "/grammar", query: { id: grammar.id } });
};

const handleShowKanjiDetail = (kanjiid) => {
  const kanji = pagekanjiList.value.find((item) => item.id === kanjiid);
  if (!kanji) {
    return;
  }
  router.push({ path: "/kanji", query: { kanjiid: kanji.id } });
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

