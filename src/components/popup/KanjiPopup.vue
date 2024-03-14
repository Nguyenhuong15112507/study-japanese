<template>
  <div v-if="isVisible" :class="['daily-component', { isVisible }]">
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
          <input  type="text" name="lessonName" id="categoryName"
                 placeholder="Enter category" style="width: 400px;" v-model="categoryForm.category_name"/>
          <button class="new-btn" style="padding: 0 10px; margin-left: 10px; align-items: center;"
                  @click="handleCreateCategory(2)">Add
          </button>
        </div>
        <div class="input-item categories">
          <table class="categories-list" width="700px" border="1" cellpadding="2px">
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
        <div class="input-item" style="display: flex; align-items: center; width: 500px;">
          <span class="span-label"><label for="lessonName">Title</label></span>
          <input type="text" name="lessonName" id="announceName" style="margin-left: 56px;"/>
        </div>
        <div class="input-item" style="display: flex; align-items: center; width: 500px;">
          <span class="span-label"><label for="lessonName">Description</label></span>
          <input type="text" name="lessonName" id="announceName"/>
        </div>
        <div class="vocabulary-list">
          <table class="vocabu-list-table" width="800" border="1" cellpadding="2px">
            <tr class="vocabu-table-head">
              <th class="vocabu-table-title" style="width: 50px ;"></th>
              <th class="vocabu-table-title" style="width: 50px ;">STT</th>
              <th class="vocabu-table-title">Kanji</th>
              <th class="vocabu-table-title">Onyomi</th>
              <th class="vocabu-table-title">Kunyomi</th>
              <th class="vocabu-table-title">Kanji's name</th>
              <th class="vocabu-table-title">Example</th>
              <th class="vocabu-table-title">Defination</th>
              <th class="vocabu-table-title">Image</th>
              <th class="vocabu-table-title" style="padding: 5px 10px;width: 80px;">Delete</th>
            </tr>
            <tbody>
            <tr v-for="(row, index) in rows" :key="index" class="vocabu-table-tr">
              <td><input type="checkbox" class="vocabu-table-content" @change="handleChangeCheckboxKanji(row)"
                         style="width: 100%;"/></td>
              <td class="vocabu-table-content">{{ index + 1 }}</td>
              <td><input type="text" v-model="row.new_kanji" class="vocabu-table-content"/></td>
              <td><input type="text" v-model="row.onyomi" class="vocabu-table-content"/></td>
              <td><input type="text" v-model="row.kunyomi" class="vocabu-table-content"/></td>
              <td><input type="text" v-model="row.kanji_name" class="vocabu-table-content"/></td>
              <td><input type="text" v-model="row.example" class="vocabu-table-content"/></td>
              <td><input type="text" v-model="row.defination" class="vocabu-table-content"/></td>
              <td>
                <div class="img-container-lesson">
                  <label for="file-upload" class="custom-file-upload"
                         :style="{padding:  row.fileContent ?  0 : 5 + 'px'}">
                    <img v-if="row.fileContent" :src="row.fileContent" style="height: 90px; width: 90px" alt="avc"/>
                    <i v-else class="fas fa-image imgEdit"></i>
                  </label>
                  <input ref="file" type="file" :id="'file-upload-'+index" @change="(val) => handleUploadFile(val, true, index)" :key="index">
                </div>
              </td>
              <td class="vocabu-table-content"><i @click="deleteRow(index)" class="far fa-trash-alt"></i></td>
            </tr>
            <tr>
              <td><input type="checkbox" class="vocabu-table-content"/></td>
              <td class="vocabu-table-content"></td>
              <td class="vocabu-table-content"><input type="text" v-model="newRow.new_kanji"/></td>
              <td class="vocabu-table-content"><input type="text" v-model="newRow.onyomi"/></td>
              <td class="vocabu-table-content"><input type="text" v-model="newRow.kunyomi"/></td>
              <td class="vocabu-table-content"><input type="text" v-model="newRow.kanji_name"/></td>
              <td class="vocabu-table-content"><input type="text" v-model="newRow.example"/></td>
              <td class="vocabu-table-content"><input type="text" v-model="newRow.defination"/></td>
              <td class="vocabu-table-content"><input type="file"/>
                <div class="img-container-lesson">
                  <label for="file-upload" class="custom-file-upload">
                    <img v-if="newRow.fileContent" :src="newRow.fileContent" style="height: 90px; width: 90px" alt="avc"/>
                    <i v-else class="fas fa-image imgEdit"></i>
                  </label>
                  <input ref="file" type="file" id="file-upload" @change="(val) => handleUploadFile(val, false)">
                </div>
              </td>
              <td class="vocabu-table-content" colspan="1"><i @click="addRow" class="fas fa-plus"></i></td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>
      <div class="btn-container">
        <button class="new-btn submit-btn" id="submit-daily-btn" @click="handleSaveKanji()">
          Submit
        </button>
        <button class="new-btn cancel-btn" id="cancel-daily-btn" @click="handleCloseKanjiPopup()">
          Cancel
        </button>
      </div>
    </div>
  </div>

</template>
<script setup>

import {defineEmits, defineProps, ref, watch} from "vue";
import {createCategory, listCategoriesByType} from "../../api/categories.js";
import {createKanjiNew} from "../../api/kanjinew.js";

const categoryFormDefault = {
  id: null,
  category_name: "",
  japanese_level: "",
}

const formKanjiDefault = {
  id: null,
  new_kanji: '',
  kanji_name: '',
  defination: '',
  example: '',
  onyomi: '',
  kunyomi: '',
  path_base: "",
  file_name: "",
  file_ext: "",
};
const formKanji = ref(formKanjiDefault);

const rows = ref([]);
const categoryForm = ref({...categoryFormDefault})
const categoryList = ref([])
const newRow = ref({
  column1: '',
  new_kanji: '',
  kanji_name: '',
  defination: '',
  example: '',
  onyomi: '',
  kunyomi: '',
  column5: '',
  column6: '',
  fileContent: ''
});

const multiSelectionCategory = ref([]);
const multiSelectionKanji = ref([]);
const messageError = ref("")
const isVisibleErr = ref(false)
const file = ref()


const props = defineProps({
  isVisible: Boolean,
  type: Number,
  id: Number
})

const emits = defineEmits(['close', 'submit'])

watch(() => props.isVisible, (val) => {
  if (val) {
    fetchCategory(1)
  }
})

const fetchCategory = async (type) => {
  try {
    const data = await listCategoriesByType(type);
    categoryList.value = data.data.data;
  } catch (error) {
    console.error(error)
  }
}

const handleCreateCategory = async (type) => {
  isVisibleErr.value = false
  messageError.value = ""
  try {

    // check empty
    if (!categoryForm.value.category_name || !categoryForm.value.japanese_level) {
      isVisibleErr.value = true
      messageError.value = "Vui chon categories hoac level"
      return
    }

    // check exist category name
    if (categoryList.value.filter((item => item.category_name.trim() ===
        categoryForm.value.category_name.trim())).length > 0) {
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

const addRow = () => {
  rows.value.push({...newRow.value});
  resetForm();
};

const deleteRow = (index) => {
  rows.value.splice(index, 1);
};

const handleUploadFile = (val, isAdd, index) => {
  getBase64(val.target.files[0], isAdd, index)
}

const resetForm = () => {
  newRow.value.column1 = '';
  newRow.value.new_kanji = '';
  newRow.value.defination = '';
  newRow.value.onyomi = '';
  newRow.value.kunyomi = '';
  newRow.value.kanji_name = '';
  newRow.value.column5 = '';
  newRow.value.column6 = '';
  newRow.value.fileContent = '';
};

const handleChangeCheckboxKanji = (row) => {
  if (multiSelectionKanji.value.includes(row.index)) {
    multiSelectionKanji.value = multiSelectionKanji.value.filter(
        (item) => item !== row.index
    );
  } else {
    multiSelectionKanji.value.push(row.index);
  }
};

const handleSaveKanji = async () => {
  try {
    const request = kanjinewForm.value;
    request.list_kanji_vocabulary = rows.value.map((item) => {
      return {
        new_kanji: item.new_kanji,
        onyomi: item.onyomi,
        kunyomi: item.kunyomi,
        kanji_name: item.kanji_name,
        defination: item.defination,
        example: item.example
      }
    })
    const data = await createKanjiNew(request)
    const result = data?.data?.data
    if (result != null) {
      emits("submit")
    }
  } catch (error) {
    console.error(error)
  }
}

const handleCloseKanjiPopup = () => {
  formKanji.value = formKanjiDefault;
  emits("close")
};

const getBase64 = (fileS, isAdd, index) => {
  console.log(isAdd)
  let reader = new FileReader()
  reader.readAsDataURL(fileS)
  reader.onload = (e) => {
    if(isAdd){
      rows.value[index].fileContent = e.target.result
    }else {
      newRow.value.fileContent = e.target.result
    }
    file.value.value = null
  }
  reader.onerror = function (error) {
    console.error('Error: ', error)
  }
}

</script>

<style scoped>
@import "../../style/teacher.css";
@import "../../style/flashcrad.css";

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