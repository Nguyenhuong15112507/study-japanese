<template>
    <div class="flashcard-detail-body">
        <h4 class="vocabu-list-title">List Vocabulary</h4>
        <button @click="handleChangeToDetail()" class="new-btn" id="creat-new-result-btn" style="margin: 10px">
            Practice
        </button>
        <!-- <button class="new-btn" @click="addRow">Add Row</button> -->
        <div class="vocabulary-list">
            <table class="vocabu-list-table" width="600" border="1" cellpadding="2px">
                <tr class="vocabu-table-head">
                    <th class="vocabu-table-title">STT</th>
                    <th class="vocabu-table-title">Vocabulary</th>
                    <th class="vocabu-table-title">Spelling</th>
                    <th class="vocabu-table-title">Defination</th>
                    <th class="vocabu-table-title">Edit</th>
                    <th class="vocabu-table-title">Delete</th>
                </tr>
                <tbody>
                    <tr v-for="(row, index) in rows" :key="index" class="vocabu-table-tr">
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
                        <td class="vocabu-table-content"><input type="text" v-model="newRow.column1" /></td>
                        <td class="vocabu-table-content"><input type="text" v-model="newRow.column2" /></td>
                        <td class="vocabu-table-content"><input type="text" v-model="newRow.column3" /></td>
                        <td class="vocabu-table-content"><input type="text" v-model="newRow.column4" /></td>
                        <td class="vocabu-table-content"><i @click="addRow" class="fas fa-plus"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import router from "../router";

const handleChangeToDetail = () => {
    router.push('/practice/flashcardDetail');
};

const rows = ref([
  { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4', column5: 'Data 5', column6: 'Data 6' }
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
</script>

<style scoped>
@import '../style/flashcrad.css';
@import '../style/teacher.css';

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
