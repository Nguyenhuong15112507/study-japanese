<template>
    <div class="pop-container"
        style="top: 170px; position: relative; display: flex; flex-wrap: wrap; justify-content: center;">
        <form action="" class="create-question">
            <div class="new-form lesson-create">

                <div class="input-item categories-input" style="display: flex; align-items: center;">
                </div>
                <div class="input-item categories-input" style="display: flex; align-items: center;">
                    <div class="label-input">Category</div>
                    <input type="text" name="lessonName" placeholder="Choose category" :disabled="isDisabled"
                        style="width: 300px; background-color: rgb(235 234 234);" />
                    <button class="choose-btn">Choose</button>
                </div>
                <div class="input-item categories-input" style="display: flex; align-items: center;">
                    <div class="label-input" style="">Time</div>
                    <input type="time" name="lessonName" placeholder="Choose category"
                        style="width: 100px; background-color: #fff; border: 1px solid rgba(156, 209, 232, 0.6); border-radius: 5px; height: 30px; margin-right: 5px;" />
                    <span>~</span>
                    <input type="time" name="lessonName" placeholder="Choose category"
                        style="width: 100px; background-color: #fff; border: 1px solid rgba(156, 209, 232, 0.6); border-radius: 5px;height: 30px; margin-left:  5px;" />
                </div>
                <div class="input-item categories-input" style="display: flex; align-items: center;">
                    <div class="label-input">Description</div>
                    <textarea type="text" name="lessonName" class="textareacss" placeholder="Enter description"
                        style="width: 400px;background-color: #fff"></textarea>
                </div>

            </div>
            <div class="question-wrap">
                <div class="daily-content-overview" style=" margin-top: 20px;">
                    <div class="question-input categories-input" style="display: flex; align-items: center;">
                        <div class="label-input">Question</div>
                        <input type="text" name="lessonName" id="categoryName" placeholder="Enter question"
                            style="width: 400px;" />
                    </div>
                    <div class="question-input categories-input" style="display: flex; align-items: center;">
                        <div class="label-input">Type</div>
                        <select name="category-kbn" id="" class="category-kbn"
                            style="margin-right: 10px;width: 200px;background-color: rgba(184, 227, 245, 0.3);border: 1px solid rgba(156, 209, 232, 0.6); border-radius: 2px;">
                            <option value="n5">Tự luận</option>
                            <option value="n4">Trắc nghiệm</option>
                        </select>
                    </div>
                    <div class="img-container">
                        <label for="file-upload" class="custom-file-upload">
                            <i class="fas fa-image"></i>
                        </label>
                        <input type="file" name="image" id="file-upload">
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
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';
let isDisabled = ref(true);
let rows = ref([
    { index: 1, option: '', answer: false }
]);

const addRow = () => {
    let newIndex = rows.value.length + 1;
    rows.value.push({ index: newIndex, option: '', answer: false });
};

const deleteRow = (index) => {
    rows.value.splice(index, 1);
};

const handleChangethisCheckbox = (row) => {
    row.answer = !row.answer;
};

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
</style>