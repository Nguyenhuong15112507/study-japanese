<template>
    <div class="flashcard-detail-body">
        <h4 class="vocabu-list-title">List Vocabulary</h4>
        <button @click="handlebacktoList()" class="new-btn" id="back-result-btn" style="margin: 10px; background-color: rgb(210, 209, 209); width: 50px;">
            Back
        </button>
        <button @click="" class="new-btn" id="save-result-btn" style="margin: 10px; width: 50px;">
            Save
        </button>
        <button @click="handleChangeToDetail()" class="new-btn" id="creat-new-result-btn" style="margin: 10px">
            Learn
        </button>
        <button @click="handleChangeToQues()" class="new-btn" id="creat-new-result-btn" style="margin: 10px">
            Practice
        </button>
        <div class="input-item" style="display: flex; align-items: center; width: 500px;">
          <span class="span-label"><label for="lessonName">Title</label></span>
          <input
            type="text"
            name="lessonName"
            id="announceName"
            v-model="announceName"
            style="margin-left: 44px;"
          />
        </div>
        <div class="input-item" style="display: flex; align-items: center; width: 500px;">
          <span class="span-label"><label for="lessonName">Description</label></span>
          <input
            type="text"
            name="lessonName"
            id="announceName"
            v-model="announceName"
          />
        </div>
        <!-- <button class="new-btn" @click="addRow">Add Row</button> -->
        <div class="vocabulary-list">
            <table class="vocabu-list-table" width="800" border="1" cellpadding="2px">
                <tr class="vocabu-table-head">
                    <th class="vocabu-table-title" style="width: 50px ;"></th>
                    <th class="vocabu-table-title" style="width: 50px ;">STT</th>
                    <th class="vocabu-table-title">Vocabulary</th>
                    <th class="vocabu-table-title">Spelling</th>
                    <th class="vocabu-table-title">Defination</th>
                    <th class="vocabu-table-title" style="padding: 5px 10px; width: 60px;">Edit</th>
                    <th class="vocabu-table-title" style="padding: 5px 10px;width: 80px;">Delete</th>
                </tr>
                <tbody>
                    <tr v-for="(row, index) in rows" :key="index" class="vocabu-table-tr">
                        <td><input type="checkbox"  class="vocabu-table-content" @change="handleChangethisCheckbox(row)"  style="width: 100%;"/></td>
                        <td v-if="!isEditing(index)" class="vocabu-table-content">{{ row.column1 }}</td>
                        <td v-else><input type="text" v-model="editData.column1" @keyup.enter="saveEdit(index)" @blur="saveEdit(index)" class="vocabu-table-content"/></td>
                        <td v-if="!isEditing(index)" class="vocabu-table-content"> {{ row.column2 }}</td>
                        <td v-else><input type="text" v-model="editData.column2" @keyup.enter="saveEdit(index)" @blur="saveEdit(index)" class="vocabu-table-content"/></td>
                        <td v-if="!isEditing(index)" class="vocabu-table-content">{{ row.column3 }}</td>
                        <td v-else><input type="text" v-model="editData.column3" @keyup.enter="saveEdit(index)" @blur="saveEdit(index)" class="vocabu-table-content"/></td>
                        <td v-if="!isEditing(index)" class="vocabu-table-content">{{ row.column4 }}</td>
                        <td v-else><input type="text" v-model="editData.column4" @keyup.enter="saveEdit(index)" @blur="saveEdit(index)" class="vocabu-table-content"/></td>
                        <td class="vocabu-table-content"><i @click="startEdit(index)" class="far fa-edit"></i></td>
                        <td class="vocabu-table-content"><i @click="deleteRow(index)" class="far fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" class="vocabu-table-content" /></td>
                        <td class="vocabu-table-content"><input type="text" v-model="newRow.column1" /></td>
                        <td class="vocabu-table-content"><input type="text" v-model="newRow.column2" /></td>
                        <td class="vocabu-table-content"><input type="text" v-model="newRow.column3" /></td>
                        <td class="vocabu-table-content"><input type="text" v-model="newRow.column4" /></td>
                        <td class="vocabu-table-content" colspan="2"><i @click="addRow" class="fas fa-plus"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import router from "../router";

const multiflashcardSelection = ref([]);
 
const handleChangeToDetail = () => {
    router.push('/practice/flashcardDetail');
//     router.push({
//     name: 'FlashcardDetail',
//     params: { rowDataIds: rowDataIds }
// });
};
const handleChangeToQues = () => {
    router.push('/practice/flashcardQuesDetail')
}
const handlebacktoList = () => {
  router.push('/practice');
}

const rows = ref([
  { column1: '1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4', column5: 'Data 5', column6: 'Data 6' }
]);

const newRow = ref({
  column1: '',
  column2: '',
  column3: '',
  column4: '',
  column5: '',
  column6: ''
});

const editIndex = ref(null);
const editData = ref({});

const addRow = () => {
  rows.value.push({ ...newRow.value });
  resetForm();
};

const startEdit = (index) => {
  editIndex.value = index;
  editData.value = { ...rows.value[index] };
};

const saveEdit = (index) => {
  if (editIndex.value === index) {
    rows.value.splice(index, 1, { ...editData.value });
    editIndex.value = null;
    editData.value = {};
  }
};

const isEditing = (index) => {
  return index === editIndex.value;
};

const deleteRow = (index) => {
  rows.value.splice(index, 1);
};

const resetForm = () => {
  newRow.value.column1 = '';
  newRow.value.column2 = '';
  newRow.value.column3 = '';
  newRow.value.column4 = '';
  newRow.value.column5 = '';
  newRow.value.column6 = '';
};
const handleChangethisCheckbox = (row) => {
  if (multiflashcardSelection.value.includes(row.index)) {
    multiflashcardSelection.value = multiflashcardSelection.value.filter(
      (item) => item != row.index
    );
  } else {
    multiflashcardSelection.value.push(row.index);
  }
  console.log(multiflashcardSelection.value);
};
const handleSelectFlashcardItem = () => {
  if (multiflashcardSelection.value.length === 0) {
    return;
  }
  multiflashcardSelection.value.forEach((itemSelect, index) => {
    flashcardItemlist.value = flashcardItemlist.value.filter(
      (item) => itemSelect === item.index
    );
  });
  //
};


</script>

<style scoped>
@import '../style/flashcrad.css';
@import '../style/teacher.css';

input[type=text][data-v-ccf76d49], input[type=date][data-v-ccf76d49], .textareacss[data-v-ccf76d49], #dailyContent1[data-v-ccf76d49], #dailyContent2[data-v-ccf76d49], #status-filter[data-v-ccf76d49], #announceContent[data-v-ccf76d49] {
    background-color: rgba(184, 227, 245, 0.3);
    /* border-radius: 5px; */
    border: none;
    height: 28px;
    /* padding-left: 10px; */
    /* outline: none; */
    width: 90%;
}

.vocabu-list-title {
    margin: 10px 5px 0 5px;
}

.new-btn {
    margin: 0 5px;
}

.vocabu-list-table {
    border-collapse: collapse;
}

.vocabu-table-title {
    font-weight: bold;
}

.vocabu-table-content {
    text-align: center;
}

.vocabu-table-tr:hover {
    background-color: rgba(147, 214, 243, 0.6);
}

.vocabu-table-head {
    background-color: rgba(8, 170, 239);
}
</style>
