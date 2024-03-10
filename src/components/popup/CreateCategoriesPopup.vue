<template>
  <div v-if="isVisible" class="new-categories-container-wrap">
    <div class="new-categories-container lesson-create">
      <h5 class="add-category-title">Categories</h5>
      <div class="input-item categories-input" style="display: flex; align-items: center;">
        <select id="" class="category-kbn" style="margin-right: 10px;width: 100px;"
                v-model="categoryForm.japanese_level">
          <option value="">Select level</option>
          <option value="n5">N5</option>
          <option value="n4">N4</option>
          <option value="n3">N3</option>
          <option value="n2">N2</option>
          <option value="n1">N1</option>
        </select>
        <input type="text" id="categoryName" placeholder="Enter category"
               style="width: 400px;" v-model="categoryForm.category_name"/>
        <button class="new-btn" style="padding: 0 10px; margin-left: 10px; align-items: center;"
                @click="handleCreateCategory()">Add
        </button>
      </div>
      <div class="input-item categories">
        <table class="categories-list" width="700" border="1" cellpadding="2px">
          <tr class="categories-list-head">
            <th class="categories-list-title" style="width: 20px ;"></th>
            <th class="categories-list-title" style="width: 20px ;">STT</th>
            <th class="categories-list-title" style="width: 50px ;">Japanese level</th>
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
      <div class="input-item categories-input"
           style="display: flex; align-items: center; justify-content: center;">
        <button class="new-btn" style="padding: 0 10px; margin-left: 10px; align-items: center;"
                @click="handleSubmit">Save
        </button>
        <button class="new-btn"
                style="padding: 0 10px; margin-left: 10px; align-items: center; background-color: #ddd;"
                @click="handleClose">Cancel
        </button>
      </div>
    </div>
    <ErrorMessage :message="messageError" :is-visible="isVisibleErr" @close="handleCloseError"/>
  </div>
</template>
<script setup>
import {ref, watch, defineProps, defineEmits} from 'vue'
import {listCategoriesByType, createCategory} from "../../api/categories.js";

const categoryFormDefault = {
  id: null,
  category_name: "",
  japanese_level: "",
}

const props = defineProps({
  isVisible: Boolean,
  type: Number
})

watch(() => props.isVisible, (val) => {
  if(val){
    fetchCategory()
  }
});

const emits = defineEmits(['close', 'submit'])

const categoryList = ref([])
const messageError = ref("")
const isVisibleErr = ref(false)
const categoryForm = ref({...categoryFormDefault})
const multiSelectionCategory = ref([])

const fetchCategory = async () => {
  try {
    const data = await listCategoriesByType(props.type);
    categoryList.value = data.data.data;
  } catch (error) {
    console.error(error)
  }
}


const handleCreateCategory = async () => {
  messageError.value = ""
  isVisibleErr.value = false
  try {
    // check empty
    if (!categoryForm.value.category_name || !categoryForm.value.japanese_level) {
      messageError.value = "Please choose a category!"
      isVisibleErr.value = true
      return
    }

    // check exist category name
    if (categoryList.value.filter((item => item.category_name.trim() ===
        categoryForm.value.category_name.trim())).length > 0) {
      messageError.value = "The category is existing!"
      isVisibleErr.value = true
      return
    }

    const request = {...categoryForm.value, type: props.type};
    const data = await createCategory(request)
    const result = data?.data?.data
    if (result) {
      await fetchCategory(props.type)
      Object.assign(categoryForm.value, categoryFormDefault);
    }
  } catch (error) {
    console.log(error)
    messageError.value = "Lỗi api tạo create categories!"
    isVisibleErr.value = true
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

const handleClose = () => {
  emits("close")
}

const handleCloseError = () => {
  isVisibleErr.value = false
  messageError.value = ""
}

const handleSubmit = () => {
  messageError.value = ""
  isVisibleErr.value = false
  if (multiSelectionCategory.value.length === 0) {
    messageError.value = "Please choose a category!"
    isVisibleErr.value = true
    return
  }

  if (multiSelectionCategory.value.length > 1) {
    messageError.value = "The category is existing!"
    isVisibleErr.value = true
    return;
  }

  emits("submit", multiSelectionCategory.value[0])
  multiSelectionCategory.value = []
}
</script>
<style scoped>
@import "../../style/createQuestion.css";

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

}</style>