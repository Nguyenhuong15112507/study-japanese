<template>
    <div class="flashcard-detail-body">
        <h4 class="vocabu-list-title" >List Vocabulary</h4>
        <button @click="handleChangeToDetail()"
            class="new-btn"
            id="creat-new-result-btn"
            style="margin: 10px"
          >
            Practice
          </button>
        <div class="vocabulary-list">
            <table class="vocabu-list-table" width="600" border="1" cellpadding="2px">
                <tr class="vocabu-table-head">
                    <th class="vocabu-table-title">STT</th>
                    <th class="vocabu-table-title">Vocabulary</th>
                    <th class="vocabu-table-title">Spelling</th>
                    <th class="vocabu-table-title">Defination</th>
                    
                </tr>
                <tr class="vocabu-table-tr">
                    <td class="vocabu-table-content">1</td>
                    <td class="vocabu-table-content"> 花火</td>
                    <td class="vocabu-table-content">はなび</td>
                    <td class="vocabu-table-content">Pháo hoa</td>
                </tr>
                <tr class="vocabu-table-tr">
                    <td class="vocabu-table-content">2</td>
                    <td class="vocabu-table-content"> 花見</td>
                    <td class="vocabu-table-content">はなみ</td>
                    <td class="vocabu-table-content">Ngắm hoa anh đào</td>
                </tr>
                 
            </table>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import router from "../router";
const handleChangeToDetail = () => {
    router.push('/practice/flashcardDetail')
}
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

}
.vocabu-table-content {
    text-align:center
}
.vocabu-table-tr:hover {
    background-color:rgba(147, 214, 243, 0.6)
}
.vocabu-table-head {
    background-color: rgba(8, 170, 239);
}

</style>