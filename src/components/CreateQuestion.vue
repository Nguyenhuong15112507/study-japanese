<template>
    <div class="pop-container"
        style="top: 170px; position: relative; display: flex; flex-wrap: wrap; justify-content: center;">
        <div class="create-question">
            <div class="new-form lesson-create">

                <div class="input-item categories-input" style="display: flex; align-items: center;">
                </div>
                <div class="input-item categories-input" style="display: flex; align-items: center;">
                    <div class="label-input">Category</div>
                    <input type="text"  placeholder="Choose category" :disabled="isDisabled"
                        style="width: 300px; background-color: rgb(235 234 234);" v-model="selectedCategory.category_name" />
                    <button class="choose-btn" @click="handleOpenPopup()">Choose</button>
                </div>
                <div class="input-item categories-input" style="display: flex; align-items: center;">
                    <div class="label-input" style="">Time</div>
                    <input type="time"  placeholder="Choose category"
                        style="width: 100px; background-color: #fff; border: 1px solid rgba(156, 209, 232, 0.6); border-radius: 5px; height: 30px; margin-right: 5px;" />
                    <span>~</span>
                    <input type="time"  placeholder="Choose category"
                        style="width: 100px; background-color: #fff; border: 1px solid rgba(156, 209, 232, 0.6); border-radius: 5px;height: 30px; margin-left:  5px;" />
                </div>
                <div class="input-item categories-input" style="display: flex; align-items: center;">
                    <div class="label-input">Description</div>
                    <textarea type="text"  class="textareacss" placeholder="Enter description"
                        style="width: 400px;background-color: #fff"></textarea>
                </div>

            </div>
            <div class="question-wrap">
                <div class="daily-content-overview" style=" margin-top: 20px;">
                    <div class="question-input categories-input" style="display: flex; align-items: center;">
                        <div class="label-input">Question</div>
                        <input type="text"  id="categoryName" placeholder="Enter question"
                            style="width: 400px;" />
                    </div>
                    <div class="question-input categories-input" style="display: flex; align-items: center;">
                        <div class="label-input">Type</div>
                        <select id="" class="category-kbn"
                            style="margin-right: 10px;width: 200px;background-color: rgba(184, 227, 245, 0.3);border: 1px solid rgba(156, 209, 232, 0.6); border-radius: 2px;">
                            <option value="n5">Tự luận</option>
                            <option value="n4">Trắc nghiệm</option>
                        </select>
                    </div>
                    <div class="img-container">
                        <label for="file-upload" class="custom-file-upload">
                            <i class="fas fa-image"></i>
                        </label>
                        <input type="file" id="file-upload">
                    </div>

                    <div class="vocabulary-list">
                        <table class="vocabu-list-table" width="580px" border="1" cellpadding="2px">
                            <tr class="vocabu-table-head">
                                <th class="vocabu-table-title" style="width: 50px ;">STT</th>
                                <th class="vocabu-table-title">Option</th>
                                <th class="vocabu-table-title" style="width: 50px ;">Answer</th>
                                <th class="vocabu-table-title" style="padding: 5px 10px;width: 20px;">Delete</th>
                            </tr>
                            <tbody>
                                <tr class="vocabu-table-tr" v-for="(row, index) in rows" :key="index">
                                    <td class="vocabu-table-content">{{ row.index }}</td>
                                    <td class="vocabu-table-content"><input type="text" v-model="row.option" /></td>
                                    <td><input type="checkbox" class="vocabu-table-content" v-model="row.answer"
                                            style="width: 100%;" /></td>
                                    <td class="vocabu-table-content"><i @click="deleteRow(index)"
                                            class="far fa-trash-alt"></i></td>
                                </tr>
                                <tr>
                                    <td class="vocabu-table-content"></td>
                                    <td class="vocabu-table-content"><input type="text" /></td>
                                    <td><input type="checkbox" class="vocabu-table-content" style="width: 100%;" /></td>
                                    <td class="vocabu-table-content" colspan="1"><i @click="addRow" class="fas fa-plus"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <button id="add-question" class="add-question-btn">
                +
            </button>
        </div>
        <div v-if="isDisplayCategory" class="new-categories-container-wrap">
            <div class="new-categories-container lesson-create">
                <h5 class="add-category-title">Categories</h5>
                <div class="input-item categories-input" style="display: flex; align-items: center;">
                    <select  id="" class="category-kbn" style="margin-right: 10px;width: 100px;"
                        v-model="categoryForm.japanese_level">
                        <option value="">Select level</option>
                        <option value="n5">N5</option>
                        <option value="n4">N4</option>
                        <option value="n3">N3</option>
                        <option value="n2">N2</option>
                        <option value="n1">N1</option>
                    </select>
                    <input :class="[{ 'validateInput': isExit }]" type="text" id="categoryName"
                        placeholder="Enter category" style="width: 400px;" v-model="categoryForm.category_name" />
                    <button class="new-btn" style="padding: 0 10px; margin-left: 10px; align-items: center;"
                        @click="handleCreateCategory(3)">Add
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
                                <td><input type="checkbox" @change="(val) => handleChangeCheckboxCategory(val, item)" class="vocabu-table-content" style="width: 100%;" /></td>
                                <td class="categories-list-content">{{ index + 1 }}</td>
                                <td class="categories-list-content"> {{ item.japanese_level }}</td>
                                <td class="categories-list-content"> {{ item.category_name }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="input-item categories-input" style="display: flex; align-items: center; justify-content: center;">
                    <button class="new-btn" style="padding: 0 10px; margin-left: 10px; align-items: center;"
                        @click="handleSelectedCategories">Save
                    </button>
                    <button class="new-btn" style="padding: 0 10px; margin-left: 10px; align-items: center; background-color: #ddd;"
                        @click="handleCloseChoseCategories">Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { listCategoriesByType, createCategory, editCategory } from "../api/categories";

const categoryFormDefault = {
  id: null,
  category_name: "",
  japanese_level: "",
}

const categoryList = ref([])
const isExit = ref(false)
const isDisabled = ref(true);
const isDisplayCategory = ref(false)
const selectedCategory = ref({...categoryFormDefault})
const rows = ref([
    { index: 1, option: '', answer: false }
]);

const categoryForm = ref({ ...categoryFormDefault })
const multiSelectionCategory = ref([]);

const fetchCategory = async (type) => {
    try {
        const data = await listCategoriesByType(type);
        categoryList.value = data.data.data;
    } catch (error) {

    }
}

const handleCreateCategory = async (type) => {
    isExit.value = false
    try {

        // check empty
        if (!categoryForm.value.category_name || !categoryForm.value.japanese_level) {
            alert('empty')
            isExit.value = true
            return
        }

        // check exist category name
        if (categoryList.value.filter((item => item.category_name.trim() ===
            categoryForm.value.category_name.trim())).length > 0) {
            isExit.value = true
            alert("exist")
            return
        }

        const request = { ...categoryForm.value, type: type };
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

const handleOpenPopup = () => {
  fetchCategory(3)
  isDisplayCategory.value = true;
};

const addRow = () => {
    let newIndex = rows.value.length + 1;
    rows.value.push({ index: newIndex, option: '', answer: false });
};
const handleSeclectCategory = () => {

}
const deleteRow = (index) => {
    rows.value.splice(index, 1);
};

const handleChangethisCheckbox = (row) => {
    row.answer = !row.answer;
};

const handleCloseChoseCategories = () => {
  isDisplayCategory.value = false
  Object.assign(categoryForm.value, categoryFormDefault);
}

const handleSelectedCategories = () => {
  if(multiSelectionCategory.value.length === 0){
    alert("Vui long chon categories!")
    return
  }

  if(multiSelectionCategory.value.length > 1) {
    alert("Vui long chi chon 1 categories!")
    return;
  }

  selectedCategory.value = multiSelectionCategory.value[0]
  isDisplayCategory.value = false
  Object.assign(categoryForm.value, categoryFormDefault);

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
</style>