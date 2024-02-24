<template>
   <div class="flashcard-container ">
                <h3 class="flashcard-list-title">Flashcard List</h3>
                <div class="voca-list-title">
                <span class="JLPT-lever-list">N4 list vocabulary</span>
                <i class="far fa-plus-square" style="font-size: 25px; color: rgba(19, 99, 221, 0.6);"></i>
                </div>
                <div class="N4-flashcard-list">
                    
                    <div class="N4-flashcard-item">
                        <h4 class="flashcard-item-title">Vocabulary lesson 1</h4>
                        <div class="flashcard-item-body">
                            <div class="vocab-amount">20 words</div>
                            <p class="item-overview">About shopping</p>
                            <p class="update-date">2024/01/03</p>
                        </div>
                        <button @click="handleChangeToDetail()" class="learn-vocab">Learn</button>

                    </div>
                    
                </div>
                <h4 class="JLPT-lever-list">N4 list kanji</h4>
                <div class="N4-flashcard-list">
                    
                    <div class="N4-flashcard-item">
                        <h4 class="flashcard-item-title">Vocabulary lesson 1</h4>
                        <div class="flashcard-item-body">
                            <div class="vocab-amount">20 words</div>
                            <p class="item-overview">About shopping</p>
                            <p class="update-date">2024/01/03</p>
                        </div>
                        <button class="learn-vocab">Practice</button>

                    </div>
                    <div class="N4-flashcard-item">
                        <h4 class="flashcard-item-title">Vocabulary lesson 1</h4>
                        <div class="flashcard-item-body">
                            <div class="vocab-amount">20 words</div>
                            <p class="item-overview">About shopping</p>
                            <p class="update-date">2024/01/03</p>
                        </div>
                        <button class="learn-vocab">Practice</button>

                    </div>
                    
                </div>
                <h4 class="JLPT-lever-list">N3 list vocabulary</h4>
                <div class="N4-flashcard-list">
                    
                    <div class="N4-flashcard-item">
                        <h4 class="flashcard-item-title">Vocabulary lesson 1</h4>
                        <div class="flashcard-item-body">
                            <div class="vocab-amount">20 words</div>
                            <p class="item-overview">About shopping</p>
                            <p class="update-date">2024/01/03</p>
                        </div>
                        <button class="learn-vocab">Practice</button>

                    </div>
                    
                </div>
            </div>  
       
        
           
            
       
       
    
</template>
<script setup>
import { ref } from 'vue';
import router from "../router";

const handleChangeToDetail = () => {
    router.push('/practice/flashcardList');
};



</script>
<style scoped>
@import '../style/practice.css';
.voca-list-title {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}
.JLPT-lever-list {
    font-weight: 600;
    margin-right: 10px;
}

</style>