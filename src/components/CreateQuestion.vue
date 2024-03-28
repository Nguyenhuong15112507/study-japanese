<template>
  <div class="pop-container"
       style="top: 170px; position: relative; display: flex; flex-wrap: wrap; justify-content: center;">
    <div class="create-question">
      <div class="new-form lesson-create">

        <div class="input-item categories-input" style="display: flex; align-items: center;">
          <div class="label-input">Title</div>
          <input type="text" placeholder="Enter question's title" style="width: 300px; background-color: #fff"
                 v-model="multipleChoiceForm.multiple_choice_name"/>
        </div>
        <div class="input-item categories-input" style="display: flex; align-items: center;">
          <div class="label-input">Category</div>
          <input type="text" placeholder="Choose category" :disabled="isDisabled"
                 style="width: 300px; background-color: rgb(235 234 234);"
                 v-model="multipleChoiceForm.category_name"/>
          <button class="choose-btn" @click="handleOpenPopup()">Choose</button>
        </div>
        <div class="input-item categories-input" style="display: flex; align-items: center;">
          <div class="label-input" style="">Time</div>
          <input type="number" placeholder="minute" v-model="multipleChoiceForm.min_quiz"
                 style="width: 100px; background-color: #fff; border: 1px solid rgba(156, 209, 232, 0.6); border-radius: 5px; height: 30px; margin-right: 5px;"/>
          <span>~</span>
          <input type="number" placeholder="minute" v-model="multipleChoiceForm.max_quiz"
                 style="width: 100px; background-color: #fff; border: 1px solid rgba(156, 209, 232, 0.6); border-radius: 5px;height: 30px; margin-left:  5px;"/>
        </div>
        <div class="input-item categories-input" style="display: flex; align-items: center;">
          <div class="label-input">Description</div>
          <textarea type="text" class="textareacss" placeholder="Enter description"
                    style="width: 400px;background-color: #fff"></textarea>
        </div>

      </div>
      <div v-if="listQuestion.length === 0">
        Please click on button add question
      </div>
      <div v-for="(item, index) in listQuestion" class="question-wrap" :key="index">
        <div class="daily-content-overview" style=" margin-top: 20px;">

          <div class="question-input categories-input" style="display: flex; align-items: center;">
            <div class="label-input">Question</div>
            <input type="text" id="categoryName" placeholder="Enter question" style="width: 400px;"
                   v-model="item.question"/>
          </div>
          <div class="question-input categories-input" style="display: flex; align-items: center;">
            <div class="label-input">Type</div>
            <select class="category-kbn" v-model="item.type_quiz"
                    style="margin-right: 10px;width: 200px;background-color: rgba(184, 227, 245, 0.3);border: 1px solid rgba(156, 209, 232, 0.6); border-radius: 2px;">
              <option value="0">Trắc nghiệm</option>
              <option value="1">Tự luận</option>
            </select>
          </div>
          <div class="img-container">
            <label :for="'file-upload-'+index" class="custom-file-upload">
              <img v-if="item.file_content" :src="item.file_content" style="height: 100%; width: 100%;" alt="avc" />
                      <i v-else class="fas fa-image imgEdit"></i>
            </label>
            <input type="file" name="file-upload" :id="'file-upload-'+index"
                      @change="(val) => handleUploadFile(val, index)">
          </div>

          <div v-if="item.type_quiz.toString() === '0'" class="vocabulary-list">
            <table class="vocabu-list-table" width="580px" border="1" cellpadding="2px">
              <tr class="vocabu-table-head">
                <th class="vocabu-table-title" style="width: 50px ;">STT</th>
                <th class="vocabu-table-title">Option</th>
                <th class="vocabu-table-title" style="width: 50px ;">Answer</th>
                <th class="vocabu-table-title" style="padding: 5px 10px;width: 20px;">Delete</th>
              </tr>
              <tbody>
              <tr class="vocabu-table-tr" v-for="(row, index) in item.list_quiz_item" :key="index">
                <td class="vocabu-table-content">{{ row.sort }}</td>
                <td class="vocabu-table-content"><input type="text" v-model="row.quiz_content"/></td>
                <td><input type="checkbox" class="vocabu-table-content" v-model="row.correct_answer"
                           style="width: 100%;"/></td>
                <td class="vocabu-table-content"><i @click="deleteRow(item.list_quiz_item, index)"
                                                    class="far fa-trash-alt"></i></td>
              </tr>
              <tr>
                <td class="vocabu-table-content"></td>
                <td class="vocabu-table-content"><input type="text"/></td>
                <td><input type="checkbox" class="vocabu-table-content" style="width: 100%;"/></td>
                <td class="vocabu-table-content" colspan="1"><i @click="addRow(item.list_quiz_item)"
                                                                class="fas fa-plus"></i>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div v-else>
            <div class="question-input categories-input" style="display: flex; align-items: center;">
              <div class="label-input">Description</div>
              <textarea class="textareacss" placeholder="Enter question" style="width: 400px;"
                        v-model="item.essay"></textarea>
            </div>
            <div class="question-input categories-input" style="display: flex; align-items: center;">
              <div class="label-input">Note</div>
              <textarea class="textareacss" placeholder="Enter question" style="width: 400px;"
                        v-model="item.description"></textarea>
            </div>
          </div>
        </div>
      </div>

      <button id="add-question" class="add-question-btn" @click="handleAddQuestion">
        +
      </button>
      <button id="add-question" class="submit-btn" @click="handleCreateMultipleChoice">
        Submit
      </button>
    </div>
  </div>
  <create-categories-popup :is-visible="isDisplayCategory" :type="3" @close="handleCloseChoseCategories" @submit="handleSelectedCategories" />
  <ErrorMessage :message="messageError" :is-visible="isVisibleErr" @close="handleCloseError"/>
</template>
<script setup>
import {ref} from 'vue';
import {createMultipleChoice} from "../api/multipleChoice.js"
import CreateCategoriesPopup from "./popup/CreateCategoriesPopup.vue";

const categoryFormDefault = {
  id: null,
  category_name: "",
  japanese_level: "",
}
// tao object default
const multipleChoiceDefault = {
  "category_id": 0,
  "category_name": "",
  "multiple_choice_name": "",
  "type": 0,
  "max_quiz": 0,
  "min_quiz": 0,
  "description": "",
  "list_quiz": []
}

const questionDefault = {
  file_content: "",
  file_name: "",
  file_ext: "",
  content_type: "",
  file_size: 0,
  type_quiz: "0",
  question: "",
  essay: "",
  description: "",
  list_quiz_item: []
}

const isDisabled = ref(true);
const isDisplayCategory = ref(false)
const messageError = ref('')
const isVisibleErr = ref(false)
const selectedCategory = ref({...categoryFormDefault})

const categoryForm = ref({...categoryFormDefault})
const multipleChoiceForm = ref({...multipleChoiceDefault})
const questionForm = ref({...questionDefault})
const listQuestion = ref([])

const handleCloseError = () => {
  messageError.value = ""
  isVisibleErr.value = false
}
const handleOpenPopup = () => {
  isDisplayCategory.value = true;
};

const addRow = (list_quiz_item = []) => {
  let newIndex = list_quiz_item.length + 1;
  list_quiz_item.push({sort: newIndex, quiz_content: '', correct_answer: false});
};

const deleteRow = (list_quiz_item = [], index) => {
  list_quiz_item.splice(index, 1);
};
const handleUploadFile = (val, index) => {
  getBase64(val.target.files[0], index)

}
const getBase64 = (fileS, index) => {
  let reader = new FileReader()
  reader.readAsDataURL(fileS)
  reader.onload = (e) => {
    listQuestion.value[index].file_content = e.target.result;
    listQuestion.value[index].file_name = fileS.name;
    listQuestion.value[index].file_size = fileS.size;
    listQuestion.value[index].file_ext = fileS.name.slice(fileS.name.lastIndexOf('.') + 1);
    listQuestion.value[index].content_type = fileS.type
  }
  reader.onerror = function (error) {
    console.error('Error: ', error)
  }
}
const handleCloseChoseCategories = () => {
  isDisplayCategory.value = false
  Object.assign(categoryForm.value, categoryFormDefault);
}

const handleSelectedCategories = (data) => {
  selectedCategory.value = data
  multipleChoiceForm.value.category_id = data.category_id;
  multipleChoiceForm.value.category_name = data.category_name;
  isDisplayCategory.value = false
  Object.assign(categoryForm.value, categoryFormDefault);
  console.log(data)
}

const handleAddQuestion = () => {
  listQuestion.value.push(JSON.parse(JSON.stringify(questionForm.value)))
  
}

const handleCreateMultipleChoice = async () => {
  isVisibleErr.value = false
  messageError.value = ""
  if (listQuestion.value.length === 0) {
    messageError.value = "Please add question!"
    isVisibleErr.value = true
    return
  }

  const request = {
    ...multipleChoiceForm.value,
    list_quiz: listQuestion.value.map((item, index) => {
      return {
        ...item, type_quiz: parseInt(item.type_quiz), list_quiz_item: item.list_quiz_item.map((q, i) => {
          return {...q, correct_answer: q.correct_answer === true ? 1 : 0}
        })
      }
    })
  }

  try {
    const data = await createMultipleChoice(request)
    if (data.data?.data) {
      alert('oke')
      questionForm.value = questionDefault
    }
  } catch (e) {
    console.log(e)
  }

}
</script>
<style scoped>
@import "../style/createQuestion.css";

.pop-container[data-v-b352a98d] {
  height: 80em;
  width: 100%;
  display: inline-block;
}

input[type=text],
input[type=date],
.textareacss {
  background-color: rgba(184, 227, 245, 0.3);
  border-radius: 5px;
  border: none;
  height: 30px;
  padding-left: 10px;
  outline: none;
  width: 98%;
}

input:disabled {
  background-color: rgb(169, 163, 163);
  cursor: pointer;
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

.categories {
  border-radius: 2px;
  min-height: 260px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  max-height: 680px;
  overflow: auto;
  /* -webkit-box-shadow: 0 0 5px 0 rgba(171, 213, 231, 0.6); */
}

.add-category-title {
  margin: 10px auto;
}

.categories-input {
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 10px;
  max-height: 100px;
  overflow-y: auto;

}
.custom-file-upload[data-v-2fc85add] {
    border: 2px dashed rgba(86, 185, 227, 0.6);
    display: inline-block;
    padding: 12px 12px;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    height: 80%;
}
</style>