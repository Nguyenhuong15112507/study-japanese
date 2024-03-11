<template>
 <header id="myHeader">
        <div class="nav-bar">
            <div class="nav-bar-item-list">
                <div class="nav-bar-item" @click="handleChangePageTeacher()">Home</div>
                <div class="nav-bar-item" @click="handleChangePageDaily()">Daily</div>
                <div class="nav-bar-item" @click="handleChangePageCalender()">Calendar</div>
                <div class="nav-bar-item">Q&A</div>
            </div>
            <div class="login-infor">
                <div @click="handleChangePageUser()"><img class="login-infor-img" src="../img/Hinh-Anh-Anime-Chibi-Girl (3).jpg" style="width: 30px;" alt=""></div>
                <div class="user-name" id="user-name" @click="handleDisplayPopup()">{{ userName }}</div>
            </div>
            <ul v-if="popupIsVisable" :class="['menu-login', {'isVisable': popupIsVisable}]">
                <li @click="handleChangePageUser()" class="menu-item">User Information</li>
                <li @click="handleChangeChat()" class="menu-item">Chat with teacher</li>
                <li class="menu-item">Change passwork</li>
                <li class="menu-item" @click="handleChangePageLogin()">Log out</li>
            </ul>
        </div>
        <div class="page-title">
            <h1 class="page-title-content">KAORI LEARNING</h1>
            <ul class="page-content-menu">
                <li class="page-content-item" @click="handleChangePageGrammar()">Grammar</li>
                <li class="page-content-item" @click="handleChangePageKanji()">Kanji</li>
                <li class="page-content-item" @click="handleChangePageConversation()">Conversation</li>
                <li class="page-content-item" @click="handleChangePageListen()">Listening</li>
                <li class="page-content-item" @click="handleChangePagePracetice()">Practice</li>
                
            </ul>
        </div>

        
    </header>

</template>
<script setup>
import { ref } from "vue"; // dung de import 
import router from "../router";
import { studentJapaneseStore } from "../store"

const userStudentJapaneseStore = studentJapaneseStore()
const hasVisableClass = ref([])
const popupIsVisable = ref(false)
const user = userStudentJapaneseStore.user

const userName = ref('')
const userRole = ref('')
if(user !== null) {
    userName.value = user.username
    userRole.value = user.role
}

const handleChangePagePracetice = () => {
    router.push('/practice')
}
const handleChangePageGrammar = () => {
    router.push('/grammar')
}
const handleChangePageKanji = () => {
    router.push('/kanji')
}
const handleChangePageConversation = () => {
    router.push('/learn-conversation')
}
const handleChangePageListen = () => {
    router.push('/learn-listen')
}
const handleChangePageTeacher = () => {
    if(userRole.value === 'teacher') {
        router.push('/')
    } else if (userRole.value === 'student') {
        router.push('/student')
    }
   
}
const handleChangePageLogin = () => {
    router.push('/login')
}
const handleChangePageDaily = () => {
    router.push('/studentDaily')
}
const handleChangePageCalender = () => {
    router.push('/calendar')
}
const handleDisplayPopup = () => {
    popupIsVisable.value = !popupIsVisable.value
}
const handleChangePageUser = () => {
    router.push('/user-profile')
}
const handleChangeChat = () => {
    router.push('/chatMessage')
}
</script>

<style scoped>
@import '../style/teacher.css';
.menu-login {
    color: black;
    position: absolute;
    top: 40px;
    right:40px;
    z-index: 2001;
    margin: 5px 0;
    background-color: rgba(197, 231, 244);
    border: 1px solid rgba(197, 231, 244);
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    list-style: none;
    text-align: left;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 12px;
    visibility: hidden;
}
.menu-item:hover {
    color: blue;
    cursor: pointer;
}
.isVisable {
    visibility: visible;
}
</style>
