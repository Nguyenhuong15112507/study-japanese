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
              <input type="checkbox" name="theme-check" class="theme-check" @change="handleChangeCheckbox(item)"/>
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

        <h4 class="lesson-name">JLPT N4: Grammar</h4>
        <div class="list-content-item lesson-content-list">
          <div v-for="(item, index) in lessonContenlist" :key="index" class="lession-content-overview">
            <img src="../img/15801f0d.jpg" alt="" class="lesson-content-img"/>
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
        <div v-if="isDisplayKanjiCreate" :class="['daily-component', { isVisible: isDisplayKanjiCreate }]">

          <div class="new-input daily">
            <h4 class="form-title">New Kanji Lesson</h4>
            <div class="new-form lesson-create">
              <h5 class="add-category-title">Categories</h5>
              <div class="input-item categories-input" style="display: flex; align-items: center;">
                <select name="category-kbn" id="" class="category-kbn" style="margin-right: 10px;width: 50px;"
                        v-model="categoryForm.japanese_level">
                  <option value="n5">N5</option>
                  <option value="n4">N4</option>
                  <option value="n3">N3</option>
                  <option value="n2">N2</option>
                  <option value="n1">N1</option>
                </select>
                <input :class="[{ 'validateInput': isExit }]" type="text" name="lessonName" id="categoryName"
                       placeholder="Enter category" style="width: 400px;" v-model="categoryForm.category_name"/>
                <button class="new-btn" style="padding: 0 10px; margin-left: 10px; align-items: center;"
                        @click="handleCreateCategory(2)">Add
                </button>
              </div>
              <div class="input-item categories">
                <table class="categories-list" width="700" border="1" cellpadding="2px">
                  <tr class="categories-list-head">
                    <th class="categories-list-title" style="width: 30px ;"></th>
                    <th class="categories-list-title" style="width: 30px ;">STT</th>
                    <th class="categories-list-title" style="width: 100px ;">Japanese level</th>
                    <th class="categories-list-title" style="width: 150px ;">Category</th>
                  </tr>
                  <tbody>
                  <tr v-for="(item, index) in categoryList" :key="index" class="categories-list-tr">
                    <td><input type="checkbox" class="vocabu-table-content" style="width: 100%;"/></td>
                    <td class="categories-list-content">{{ index + 1 }}</td>
                    <td class="categories-list-content"> {{ item.japanese_level }}</td>
                    <td class="categories-list-content"> {{ item.category_name }}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="new-form daily-create">
              <div class="input-item">
                <span class="span-label"><label for="dailyName">Title</label></span>
                <input type="text" name="dailyName" id="dailyName" v-model="formKanji.title"/>
              </div>
              <div class="input-item">
                <span class="span-label"><label for="dailyContent">Kanji</label></span>
                <textarea name="dailyContent1" id="dailyContent1" v-model="formKanji.kanji_name"></textarea>
              </div>
              <div class="input-item">
                <span class="span-label"><label for="dailyContent">Spell 1</label></span>
                <textarea name="dailyContent2" id="dailyContent2" v-model="formKanji.spell_onyomi"></textarea>
              </div>
              <div class="input-item">
                <span class="span-label"><label for="dailyContent">Spell 2</label></span>
                <textarea name="dailyContent2" id="dailyContent2" v-model="formKanji.spell_kuyomi"></textarea>
              </div>
              <div class="input-item">
                <span class="span-label"><label for="dailyContent">Example</label></span>
                <textarea name="dailyContent2" id="dailyContent2" v-model="formKanji.example"></textarea>
              </div>

              <div class="input-item">
                <span class="span-label"><label for="daily-pic">URL</label></span>
                <input type="text" name="daily-pic" id="daily-pic" v-model="formKanji.kanji_url"/>
              </div>

              <div class="btn-container">
                <button class="new-btn submit-btn" id="submit-daily-btn" @click="handleCreateKanji()">
                  Submit
                </button>
                <button class="new-btn cancel-btn" id="cancel-daily-btn" @click="handleCloseKanjiPopup()">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="list-content-item daily-content-list">
          <div v-for="(item, index) in kanjiContentList" :key="index" class="daily-content-overview">
            <img class="student-daily-img" src="../img/Hinh-Anh-Anime-Chibi-Girl (3).jpg" alt=""/>
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

  <!-- Create lession -->
  <div v-if="isDisplayLessonCreate" :class="['anouncement-create', { isVisible: isDisplayLessonCreate }]">
    <div class="new-input lesson">
      <h4 class="form-title" style="font-size: 20px">Lesson</h4>
      <div class="new-form lesson-create">
        <div class="header-contain">
          <h5 class="add-category-title">Categories</h5>
          <ErrorMessage :message="messageError" :is-visible="isVisibleErr" @close="handleCloseError" />
        </div>
        <div class="input-item categories-input" style="display: flex; align-items: center;">
          <select name="category-kbn" id="" class="category-kbn" style="margin-right: 10px;width: 50px;"
                  v-model="categoryForm.japanese_level">
            <option value="n5">N5</option>
            <option value="n4">N4</option>
            <option value="n3">N3</option>
            <option value="n2">N2</option>
            <option value="n1">N1</option>
          </select>
          <input type="text" name="lessonName" id="categoryName" placeholder="Enter category" style="width: 400px;"
                 v-model="categoryForm.category_name"/>
          <button class="new-btn" style="padding: 0 10px; margin-left: 10px; align-items: center;"
                  @click="handleCreateCategory(1)">Add
          </button>
        </div>
        <div class="input-item categories">
          <table class="categories-list" width="700" border="1" cellpadding="2px">
            <tr class="categories-list-head">
              <th class="categories-list-title" style="width: 30px ;"></th>
              <th class="categories-list-title" style="width: 30px ;">STT</th>
              <th class="categories-list-title" style="width: 100px ;">Japanese level</th>
              <th class="categories-list-title" style="width: 150px ;">Category</th>
            </tr>
            <tbody>
            <tr v-for="(item, index) in categoryList" :key="index" class="categories-list-tr">
              <td><input type="checkbox" @change="(val) => handleChangeCheckboxCategory(val, item)"
                         class="vocabu-table-content" style="width: 100%;"/></td>
              <td class="categories-list-content">{{ index + 1 }}</td>
              <td class="categories-list-content"> {{ item.japanese_level }}</td>
              <td class="categories-list-content"> {{ item.category_name }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="new-form lesson-create">
        <div class="input-item">
          <span class="span-label"><label for="lessonName">Title</label></span>
          <input type="text" name="lessonName" id="lessonName" v-model="formGramma.grammar_name"/>
        </div>
        <div class="input-item">
          <span class="span-label"><label for="lessonContent">Form</label></span>
          <textarea class="textareacss" name="lessonContent" id="lessonContent1"
                    v-model="formGramma.grammar_form"></textarea>
        </div>
        <div class="input-item">
          <span class="span-label"><label for="lessonContent">Define</label></span>
          <textarea class="textareacss" name="lessonContent" id="lessonContent2"
                    v-model="formGramma.form_define"></textarea>
        </div>
        <div class="input-item">
          <span class="span-label"><label for="lessonContent">Example 1</label></span>
          <textarea class="textareacss" name="lessonContent" id="lessonContent3"
                    v-model="formGramma.example_1"></textarea>
        </div>
        <div class="input-item">
          <span class="span-label"><label for="lessonContent">Example 2</label></span>
          <textarea class="textareacss" name="lessonContent" id="lessonContent4"
                    v-model="formGramma.example_2"></textarea>
        </div>
        <!-- <div class="input-item">
          <span class="span-label"><label for="date">Date</label></span>
          <input type="date" name="date" id="date" v-model="lessonDate" />
        </div> -->
        <div class="input-item">
          <span class="span-label"><label for="homework-url">URL</label></span>
          <input type="text" name="homework-url" id="homework-url" v-model="formGramma.home_work"/>
        </div>
      </div>
      <div class="btn-container">
        <button v-if="!formGramma.id" class="new-btn submit-btn" id="submit-lesson-btn" @click="handleCreateGrammar()">
          Submit
        </button>
        <button v-else class="new-btn submit-btn" id="submit-lesson-btn" @click="handleEditGrammar()">
          Save
        </button>
        <button class="new-btn cancel-btn" id="cancel-lesson-btn" @click="handleClosePopup()">
          Cancel
        </button>
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
          <input type="text" name="lessonName" id="announceName" v-model="formAnnounce.announce_name"/>
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
  <!-- <footer>Powered by W3.css</footer> -->
</template>

<script setup>
import {ref, reactive} from "vue"; // dung de import
import router from "../router";
import moment from "moment";
import {studentJapaneseStore} from "../store";
import ErrorMessage from "../components/errormessage/ErrorMessage.vue"
import {
  listGrammar,
  createGrammar,
  editGrammar,
  showDetailGrammar,
} from "../api/grammar";
import {listKanji, createKanji, showDetailkanji} from "../api/kanji";
import {listCategoriesByType, createCategory, editCategory} from "../api/categories";
import {listAnnounce, showDetailAnnounce, createAnnounce, editAnnounce} from "../api/announce";

const lessonContenlist = ref([]);
const announceContenlist = ref([]);

const kanjiContentList = ref([]);
const categoryList = ref([])

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
const formAnnounceDefault = {
  id: null,
  announce_name: "",
  description: "",
};
const categoryFormDefault = {
  id: null,
  category_name: "",
  japanese_level: "",
}
const categoryForm = ref({...categoryFormDefault})
const formAnnounce = ref(formAnnounceDefault);
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
const isDisplayKanjiCreate = ref(false);
const isExit = ref(false)
const isVisibleErr = ref(false)

const multiSelection = ref([]);
const multiSelectionCategory = ref([]);
const messageError = ref("")
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

const handleCreateCategory = async (type) => {
  isExit.value = false
  isVisibleErr.value = false
  messageError.value = ""
  try {

    // check empty
    if (!categoryForm.value.category_name || !categoryForm.value.japanese_level) {
      isVisibleErr.value = true
      isExit.value = true
      messageError.value = "Vui chon categories hoac level"
      return
    }

    // check exist category name
    if (categoryList.value.filter((item => item.category_name.trim() ===
        categoryForm.value.category_name.trim())).length > 0) {
      isExit.value = true
      isVisibleErr.value = true
      messageError.value = "Categories exist!"
      return
    }

    const request = {...categoryForm.value, type: type};
    const data = await createCategory(request)
    const result = data?.data?.data
    if (result) {
      await fetchCategory(type)
      Object.assign(categoryForm.value, categoryFormDefault);
    }
  } catch (error) {
    console.log(error)
  }
}

const handleCreateGrammar = async () => {
  isVisibleErr.value = false
  messageError.value = ""
  if (multiSelectionCategory.value.length === 0) {
    isVisibleErr.value = true
    messageError.value = "Vui long chon categories"
    return
  }

  if (multiSelectionCategory.value.length > 1) {
    isVisibleErr.value = true
    messageError.value = "Vui long chi chon 1 categories"
    return
  }

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
      await fetchGrammar();
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
  } catch (error) {
  }
};

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

const handleCreateKanji = async () => {
  try {
    const request = formKanji.value;
    const data = await createKanji(request)
    const result = data?.data?.data
    if (result) {
      fetchKanji()
      formKanji.value = formKanjiDefault
      handleCloseKanjiPopup()
    }
  } catch (error) {
    console.log(error)
  }
}

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
  fetchCategory(2)
  isDisplayKanjiCreate.value = !isDisplayKanjiCreate.value
}

const handleCloseKanjiPopup = () => {
  formKanji.value = formKanjiDefault;
  isDisplayKanjiCreate.value = false;
};

const handleClosePopup = () => {
  formGramma.value = formGrammaDefault;
  isDisplayLessonCreate.value = false;
};

const handleValidateCategoryName = () => {

}

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
  router.push({path: "/grammar", query: {id: id}});
};

const handleShowKanjiDetail = (kanjiid) => {
  router.push({path: "/kanji", query: {kanjiid: kanjiid}});
};

const handleChangeCheckboxCategory = (val, item) => {
  const checked = val.target.checked //syntax lay value cua checkbox
  if (checked && multiSelectionCategory.value.length === 0) {
    multiSelectionCategory.value.push(item)
    return
  }

  const categoryExist = multiSelectionCategory.value.filter((itemC) => itemC.id === item.id)
  if (checked && categoryExist.length === 0) {
    multiSelectionCategory.value.push(item)
    return;
  }

  if (!checked && categoryExist.length > 0) {
    multiSelectionCategory.value = multiSelectionCategory.value.filter((itemC) => itemC.id !== item.id)
  }

}

const handleCloseError = () => {
  messageError.value = ""
  isVisibleErr.value = false
}
</script>


<style scoped>
@import "../style/teacher.css";

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

.categories-list-head {
  background-color: rgb(61, 183, 236);
}

.validateInput {
  color: red;
  border: 1px solid red;
}
</style>

