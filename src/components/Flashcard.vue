<template>
  <div class="flashcard-container">
    <h3 class="flashcard-list-title">Flashcard List</h3>
    <div class="voca-list-title">
      <span class="JLPT-lever-list">N4 list vocabulary</span>
      <button @click="handleChangeTocreate()">
        <i class="far fa-plus-square" style="font-size: 25px; color: rgba(19, 99, 221, 0.6)"></i>
      </button>
    </div>
    <div class="N4-flashcard-list">
      <div class="N4-flashcard-item" v-for="(item, index) in pageFlashcardList" :key="index">
        <div @click="handleShowDetail(item.id)">
          <h4 class="flashcard-item-title">{{ item.title }}</h4>
          <div class="flashcard-item-body">
            <div class="vocab-amount">{{ item.totalVocabulary }}</div>
            <p class="item-overview">{{ item.content }}</p>
            <p class="update-date">
              {{
                item.create_at
                ? moment(item.create_at).format("DD-MM-YYYY")
                : ""
              }}
            </p>
          </div>
        </div>
        <div style="display: flex">
          <button @click="handleChangeToDetail(item.id)" class="learn-vocab">
            Learn
          </button>
          <button @click="handleChangeToPrace()" class="learn-vocab">
            Practice
          </button>
        </div>
      </div>
    </div>
    <h4 class="JLPT-lever-list">N4 list kanji</h4>
    <div class="N4-flashcard-list">
      <div class="N4-flashcard-item">
        <h4 class="flashcard-item-title">Vocabulary lesson 1</h4>
        <div class="flashcard-item-body">
          <div class="vocab-amount">20 words</div>
          <p class="item-overview">About shopping</p>
          <p class="update-date">2024/01/03</p>
        </div>
        <button class="learn-vocab">Practice</button>
      </div>
      <div class="N4-flashcard-item">
        <h4 class="flashcard-item-title">Vocabulary lesson 1</h4>
        <div class="flashcard-item-body">
          <div class="vocab-amount">20 words</div>
          <p class="item-overview">About shopping</p>
          <p class="update-date">2024/01/03</p>
        </div>
        <button class="learn-vocab">Practice</button>
      </div>
    </div>
    <h4 class="JLPT-lever-list">N3 list vocabulary</h4>
    <div class="N4-flashcard-list">
      <div class="N4-flashcard-item">
        <h4 class="flashcard-item-title">Vocabulary lesson 1</h4>
        <div class="flashcard-item-body">
          <div class="vocab-amount">20 words</div>
          <p class="item-overview">About shopping</p>
          <p class="update-date">2024/01/03</p>
        </div>
        <button class="learn-vocab">Practice</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import router from "../router";
import { listFlashcard } from "../api/flashcard";
import moment from "moment";

const pageFlashcardList = ref([]);

const fetchFlashcard = async () => {
  try {
    const data = await listFlashcard();
    if (data?.data?.data) {
      pageFlashcardList.value = data.data.data;
    }
  } catch (error) { }
};
fetchFlashcard();

const handleShowDetail = (id) => {
  router.push({ path: "/practice/flashcardList", query: { id: id } });
}

const handleChangeToDetail = (id) => {
  router.push({path: "/practice/flashcardDetail", query: { id: id }} );
};
const handleChangeTocreate = () => {
  router.push("/practice/flashcardList");
};
const handleChangeToPrace = () => {
  router.push("/practice/flashcardQuesDetail");
};
</script>
<style scoped>
@import "../style/practice.css";

.voca-list-title {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.JLPT-lever-list {
  font-weight: 600;
  margin-right: 10px;
}
</style>