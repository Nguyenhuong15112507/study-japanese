<template>
  <div v-if="isVisible" :class="['daily-component', { isVisible }]">
    <div class="new-input daily">
      <h4 class="form-title">New Kanji Lesson</h4>
      <div class="new-form lesson-create">
        <h5 class="add-category-title">Categories</h5>
        <ErrorMessage :message="messageError" :is-visible="isVisibleErr" @close="handleCloseError"/>
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
          <button class="btn btn-info" style="padding: 0 10px; margin-left: 10px; align-items: center;"
                  @click="handleCreateCategory()">Add
          </button>
        </div>
        <div class="input-item categories">
          <table class="categories-list table table-bordered border-primary align-middle" width="700px" border="1"
                 cellpadding="2px">
            <thead class="table-info">
            <tr class="categories-list-head">
              <th class="categories-list-title col" style="width: 30px ;"></th>
              <th class="categories-list-title col" style="width: 30px ;">STT</th>
              <th class="categories-list-title col" style="width: 100px ;">Japanese level</th>
              <th class="categories-list-title col" style="width: 150px ;">Category</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in categoryList" :key="index" class="categories-list-tr">
              <td><input type="checkbox" @change="(val) => handleChangeCheckboxCategory(val, item)"
                         class="vocabu-table-content" style="width: 100%;"/></td>
              <td class="categories-list-content col">{{ index + 1 }}</td>
              <td class="categories-list-content col"> {{ item.japanese_level }}</td>
              <td class="categories-list-content col"> {{ item.category_name }}</td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>

      <div class="new-form daily-create">
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Title</label>
          <div class="col-sm-10">
            <input type="text" style="width: 40%;" v-model="kanjinewForm.title" :class="['form-control', hasErr.includes('titleIsEmpty') ? 'validateInput' : '' ]" id="announceName" @input="handleOnchangeTitle()">
          </div>
        </div>
        <div class="erroMesSentence" v-if="hasErr.includes('titleIsEmpty')">Please enter kanji's title</div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Description</label>
          <div class="col-sm-10">
            <textarea v-model="kanjinewForm.description" style="width: 40%;" :class="['form-control']" ></textarea>
          </div>
        </div>
        <div class="img-container-lesson" style="height: 140px;
    width: 200px;">
          <label for="file-upload-title" class="custom-file-upload" style="height: 110px;
    width: 110px;">
            <img v-if="kanjinewForm.file_content" :src="kanjinewForm.file_content" style="height: 100%;
    width: 100%;" alt="avc"/>
            <i v-else class="fas fa-image imgEdit" style="font-size: 83px;"></i>
          </label>
          <input ref="file" type="file" id="file-upload-title" @change="(val) => handleUploadFileTitle(val)"
          >
        </div>
        <div class="vocabulary-list">
          <table class="vocabu-list-table table table-bordered border-primary align-middle" style="width: 100%;" border="1"
                 cellpadding="2px">
            <thead class="table-info">
              <tr class="vocabu-table-head">
                <th class="vocabu-table-title col" style="width: 50px ;"></th>
                <th class="vocabu-table-title col" style="width: 50px ;">STT</th>
                <th class="vocabu-table-title col">Kanji</th>
                <th class="vocabu-table-title col">Onyomi</th>
                <th class="vocabu-table-title col">Kunyomi</th>
                <th class="vocabu-table-title col">Kanji's name</th>
                <th class="vocabu-table-title col">Example</th>
                <th class="vocabu-table-title col">Defination</th>
                <th class="vocabu-table-title col">Image</th>
                <th class="vocabu-table-title col" style="padding: 5px 10px;width: 80px;">Delete</th>
              </tr>
            </thead>
            <tbody>
            <tr v-for="(row, index) in rows" :key="index" class="vocabu-table-tr">
              <td><input type="checkbox" class="vocabu-table-content" @change="handleChangeCheckboxKanji(row)"
                         style="width: 100%;"/></td>
              <td class="vocabu-table-content">{{ index + 1 }}</td>
              <td><input type="text" v-model="row.kanji" class="vocabu-table-content col"/></td>
              <td><input type="text" v-model="row.spell_onyomi" class="vocabu-table-content col"/></td>
              <td><input type="text" v-model="row.spell_kuyomi" class="vocabu-table-content col"/></td>
              <td><input type="text" v-model="row.kanji_name" class="vocabu-table-content col"/></td>
              <td><input type="text" v-model="row.example" class="vocabu-table-content col"/></td>
              <td><input type="text" v-model="row.define" class="vocabu-table-content col"/></td>
              <td>
                <div class="img-container-lesson">
                  <label :for="'file-upload-' + index" class="custom-file-upload"
                         :style="{ padding: row.file_content }">
                    <img v-if="row.file_content" :src="row.file_content" style="height: 18px; width: 27px;" alt="avc"/>
                    <i v-else class="fas fa-image imgEdit"></i>
                  </label>
                  <input ref="file" type="file" :id="'file-upload-' + index"
                         @change="(val) => handleUploadFile(val, true, index)" :key="index">
                </div>
              </td>
              <td class="vocabu-table-content col"><i @click="deleteRow(index)" class="far fa-trash-alt"></i></td>
            </tr>
            <tr>
              <td><input type="checkbox" class="vocabu-table-content col"/></td>
              <td class="vocabu-table-content col"></td>
              <td class="vocabu-table-content col"><input type="text" v-model="newRow.kanji"/></td>
              <td class="vocabu-table-content col"><input type="text" v-model="newRow.spell_onyomi"/></td>
              <td class="vocabu-table-content col"><input type="text" v-model="newRow.spell_kuyomi"/></td>
              <td class="vocabu-table-content col"><input type="text" v-model="newRow.kanji_name"/></td>
              <td class="vocabu-table-content col"><input type="text" v-model="newRow.example"/></td>
              <td class="vocabu-table-content col"><input type="text" v-model="newRow.define"/></td>
              <td class="vocabu-table-content col"><input type="file"/>
                <div class="img-container-lesson">
                  <label for="file-upload" class="custom-file-upload">
                    <img v-if="newRow.file_content" :src="newRow.file_content" style="height: 18px; width: 27px;"
                         alt="avc"/>
                    <i v-else class="fas fa-image imgEdit"></i>
                  </label>
                  <input type="file" name="file-upload" id="file-upload"
                         @change="(val) => handleUploadFile(val, false)">
                </div>
              </td>
              <td class="vocabu-table-content col" colspan="1"><i @click="addRow" class="fas fa-plus"></i></td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>
      <div class="btn-container">
        <button class="btn btn-info me-3" id="submit-daily-btn" @click="handleSaveKanji()">
          Submit
        </button>
        <button class="btn btn-secondary" id="cancel-daily-btn" @click="handleCloseKanjiPopup()">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>

import {defineEmits, defineProps, ref, watch} from "vue";
import {createCategory, listCategoriesByType} from "../../api/categories.js";
import {createKanji, showDetailkanji} from "../../api/kanji";

const categoryFormDefault = {
  id: null,
  category_name: "",
  japanese_level: "",
}
const categoryForm = ref({...categoryFormDefault})

const formKanjiDefault = {
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
const formKanji = ref(formKanjiDefault);

const rows = ref([]);

const multiSelectionKanji = ref([]);
const messageError = ref("")
const isVisibleErr = ref(false)
const hasErr = ref([])
const categoryList = ref([])
const newRow = ref({
  column1: '',
  kanji: '',
  kanji_name: '',
  define: '',
  example: '',
  spell_onyomi: '',
  spell_kuyomi: '',
  column5: '',
  column6: '',
  file_content: '',
  file_name: "",
  file_ext: "",
  content_type: "",
  file_size: 0,

});

const multiSelectionCategory = ref([]);

const kanjinewFormDefault = ref({
  category_id: 0,
  title: '',
  description: '',
  file_content: '',
  file_name: '',
  file_ext: '',
  content_type: '',
  file_size: "",
  list_kanji: []
})
const kanjinewForm = ref(kanjinewFormDefault)

const props = defineProps({
  isVisible: Boolean,
  type: Number,
  id: Number
})

const emits = defineEmits(['close', 'submit'])

watch(() => props.isVisible, (val) => {
  if (val) {
    fetchCategory()
  }
})

const fetchCategory = async () => {
  try {
    const data = await listCategoriesByType(props.type);
    categoryList.value = data.data.data;
  } catch (error) {
    console.error(error)
  }
}
const fetcKanjidDetail = async (id) => {
  try {
    const data = await showDetailkanji(id)
    const result = data?.data?.data
    if (result) {
      kanjinewForm.value = result
      rows.value = result.list_kanji
    }
  } catch (error) {
    console.error(error)
  }
}

const handleCreateCategory = async () => {
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

    const request = {...categoryForm.value, type: props.type};
    const data = await createCategory(request)
    const result = data?.data?.data
    if (result) {
      await fetchCategory()
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
const handleUploadFileTitle = (value) => {
  getBase64Title(value.target.files[0])

}

const resetForm = () => {
  newRow.value.column1 = '';
  newRow.value.kanji = '';
  newRow.value.define = '';
  newRow.value.spell_onyomi = '';
  newRow.value.spell_kuyomi = '';
  newRow.value.kanji_name = '';
  newRow.value.column5 = '';
  newRow.value.column6 = '';
  newRow.value.example = '';
  newRow.value.file_content = '';
};

const getBase64 = (fileS, isAdd, index) => {
  let reader = new FileReader()
  reader.readAsDataURL(fileS)
  reader.onload = (e) => {
    if (isAdd) {
      rows.value[index].file_content = e.target.result
    } else {
      newRow.value.file_content = e.target.result
      newRow.value.file_name = fileS.name;
      newRow.value.file_size = fileS.size;
      newRow.value.file_ext = fileS.name.slice(fileS.name.lastIndexOf('.') + 1);
      newRow.value.content_type = fileS.type
    }
  }
  reader.onerror = function (error) {
    console.error('Error: ', error)
  }
}
const getBase64Title = (fileS, isAdd, index) => {
  let reader = new FileReader()
  reader.readAsDataURL(fileS)
  reader.onload = (e) => {

    kanjinewForm.value.file_content = e.target.result
    kanjinewForm.value.file_name = fileS.name;
    kanjinewForm.value.file_size = fileS.size;
    kanjinewForm.value.file_ext = fileS.name.slice(fileS.name.lastIndexOf('.') + 1);
    kanjinewForm.value.content_type = fileS.type

  }
  reader.onerror = function (error) {
    console.error('Error: ', error)
  }
}

const handleSaveKanji = async () => {
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
  hasErr.value = []
  if (kanjinewForm.value.title === "") {
    hasErr.value.push('titleIsEmpty')
  }

  if (hasErr.value.length > 0) {
    return
  }
  try {
    const request = {
      ...kanjinewForm.value,
      file_content: kanjinewForm.value.file_content ? kanjinewForm.value.file_content.replace(/^data:(.*,)?/, '') : ''
    };
    const categoryId = multiSelectionCategory.value[0].id;
    request.category_id = categoryId;
    request.list_kanji = rows.value.map((item) => {
      return {
        kanji: item.kanji,
        spell_onyomi: item.spell_onyomi,
        spell_kuyomi: item.spell_kuyomi,
        kanji_name: item.kanji_name,
        define: item.define,
        example: item.example,
        file_content: item.file_content ? item.file_content.replace(/^data:(.*,)?/, '') : '',
        file_name: item.file_name,
        file_ext: item.file_ext,
        content_type: item.content_type,
        file_size: item.file_size,

      }
    })
    const data = await createKanji(request)
    const result = data?.data?.data
    if (result != null) {
      fetcKanjidDetail(result)
      emits("submit")
      handleCloseKanjiPopup()
    }
  } catch (error) {
    console.error(error)
  }

}
const handleOnchangeTitle = (value) => {
  const isIncludesTitle = hasErr.value.includes('titleIsEmpty')
  if (kanjinewForm.value.title === "" && isIncludesTitle) {
    return
  }
  if (kanjinewForm.value.title === "" && !isIncludesTitle) {
    hasErr.value.push('titleIsEmpty')
    return
  }

  hasErr.value = hasErr.value.filter(item => item !== 'titleIsEmpty')//Loc ra nhung phan tu khac userName de gan lai cho hasErr
}
const handleChangeCheckboxKanji = (row) => {
  if (multiSelectionKanji.value.includes(row.index)) {
    multiSelectionKanji.value = multiSelectionKanji.value.filter(
        (item) => item !== row.index
    );
  } else {
    multiSelectionKanji.value.push(row.index);
  }
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

const handleCloseKanjiPopup = () => {
  formKanji.value = formKanjiDefault;
  emits("close")
};
const handleCloseError = () => {
  messageError.value = ""
  isVisibleErr.value = false
}

</script>

<style scoped>
@import "../../style/teacher.css";

.isVisible {
  visibility: visible;
}

.ishide {
  display: none;
}

.erroMesSentence {
  margin-left: 109px;
  font-size: 12px;
  color: red;
}


.categories-list {
  th {
    text-align: center;
  }


}

.categories-list-content {
  text-align: center;

}

.vocabu-list-table {
  border-collapse: collapse;
  width: 100%;
  th, td {
    text-align: center;
  }
}

.categories-list-head {
  background-color: rgb(61, 183, 236);
}

.validateInput {
  color: red;
  border: 1px solid red;
}
</style>