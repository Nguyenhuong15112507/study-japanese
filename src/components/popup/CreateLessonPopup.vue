<template>
  <div v-if="isVisible" :class="['anouncement-create', { isVisible }]">
    <div class="new-input lesson">
      <h4 class="form-title" style="font-size: 20px">Lesson</h4>
      <div style="height: 90%; overflow: auto">
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
                   v-model="categoryForm.category_name" />
            <button class="new-btn" style="padding: 0 10px; margin-left: 10px; align-items: center;"
                    @click="handleCreateCategory()">Add
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
                           class="vocabu-table-content" style="width: 100%;" /></td>
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
            <input :class="{ 'validateInput': hasErr.includes('titleIsEmpty') }" @input="handleOnchangeTitle()" type="text" name="lessonName" id="lessonName" v-model="formGramma.grammar_name" />
          </div>
          <div class="erroMesSentence" v-if="hasErr.includes('titleIsEmpty')">Please enter lesson's title</div>
          <div class="input-item">
            <span class="span-label"><label for="lessonContent">Form</label></span>
            <textarea :class="['textareacss', { 'validateInput': hasErr.includes('GrammarFormIsEmpty') }]" name="lessonContent" id="lessonContent1" @input="handleOnchangeGrammarForm()"
                      v-model="formGramma.grammar_form"></textarea>
          </div>
          <div class="erroMesSentence" v-if="hasErr.includes('GrammarFormIsEmpty')">Please enter lesson's form</div>
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
          <div class="input-item">
            <span class="span-label"><label for="homework-url">URL</label></span>
            <input type="text" name="homework-url" id="homework-url" v-model="formGramma.home_work" />
          </div>
          <div class="img-container">
            <label for="file-upload" class="custom-file-upload">
              <i class="fas fa-image"></i>
            </label>
            <input type="file" id="file-upload" style="height: 26px;
    width: 40px;">
          </div>
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
</template>
<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'
import { createCategory, listCategoriesByType } from "../../api/categories.js";
import { createGrammar, editGrammar, showDetailGrammar } from "../../api/grammar.js";
const hasErr = ref([])
const categoryFormDefault = {
  id: null,
  category_name: "",
  japanese_level: "",
}

const formGrammaDefault = {
  id: null,
  grammar_name: "",
  grammar_form: null,
  form_define: "",
  example_1: "",
  example_2: "",
  home_work: "",
};

const newRow = ref({
  column1: '',
  new_kanji: '',
  kanji_name: '',
  defination: '',
  example: '',
  onyomi: '',
  kunyomi: '',
  column5: '',
  column6: ''
});

const formGramma = ref(formGrammaDefault);

const categoryForm = ref({ ...categoryFormDefault })
const categoryList = ref([])
const multiSelectionCategory = ref([]);

const messageError = ref("")
const isVisibleErr = ref(false)

const props = defineProps({
  isVisible: Boolean,
  type: Number,
  id: Number
})

const emits = defineEmits(['close', 'submit'])

watch(() => props.isVisible, (val) => {
  if (val) {
    fetchCategory()
    if (props.id !== 0)
      handleShowEditGrammar(props.id)
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
  hasErr.value = []
  if (formGramma.value.grammar_name === "") {
    hasErr.value.push('titleIsEmpty')
  }
  if (formGramma.value.grammar_form === "") {
    hasErr.value.push('GrammarFormIsEmpty')
  }

  if (hasErr.value.length > 0) {
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
      formGramma.value = formGrammaDefault;
      emits("submit")
    }
  } catch (error) {
    console.error(error);
  }
}
const handleOnchangeTitle = (value) => {
  const isIncludesTitle = hasErr.value.includes('titleIsEmpty')
  if (formGramma.value.grammar_name === "" && isIncludesTitle) {
    return
  }
  if (formGramma.value.grammar_name === "" && !isIncludesTitle) {
    hasErr.value.push('titleIsEmpty')
    return
  }

  hasErr.value = hasErr.value.filter(item => item !== 'titleIsEmpty')//Loc ra nhung phan tu khac userName de gan lai cho hasErr
}
const handleOnchangeGrammarForm = (value) => {
  const isIncludesGrammarForm = hasErr.value.includes('GrammarFormIsEmpty')
  if (formGramma.value.grammar_form === "" && isIncludesGrammarForm) {
    return
  }
  if (formGramma.value.grammar_form === "" && !isIncludesGrammarForm) {
    hasErr.value.push('GrammarFormIsEmpty')
    return
  }

  hasErr.value = hasErr.value.filter(item => item !== 'GrammarFormIsEmpty')//Loc ra nhung phan tu khac userName de gan lai cho hasErr
}
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
      formGramma.value = formGrammaDefault;
      emits("submit")
      handleClosePopup()
    }
  } catch (error) {
    console.error(error)
  }
  
};

const handleShowEditGrammar = async (id) => {
  try {
    const data = await showDetailGrammar(id);
    const result = data?.data?.data;
    if (result) {
      formGramma.value = result;
    }
  } catch (error) {
    console.log(error);
  }
};

const handleClosePopup = () => {
  emits("close")
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

    const request = { ...categoryForm.value, type: props.type };
    const data = await createCategory(request)
    const result = data?.data?.data
    if (result) {
      await fetchCategory(props.type)
      Object.assign(categoryForm.value, categoryFormDefault);
    }
  } catch (error) {
    console.log(error)
  }
}

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
.erroMesSentence {
  font-size: 12px;
  color: red;
}
.validateInput {
  color: red;
  border: 1px solid red;
}


</style>