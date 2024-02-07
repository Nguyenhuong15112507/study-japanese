<template>
    <header class="login-header">
        <h1 class="login-page-title">KAORI LEARNING</h1>
    </header>
    <div class="login-body">
        <div class="login-page-img">
            <img src="../assets/img/372897279_1248037612573345_1597688897822203750_n.jpg" style="width: 100%;">
        </div>
        <div class="login-container">
            <div class="login-form">
                <h3 :class="['login-form-title', { 'ishide': isSignIn }]">Login</h3>
                <h3 :class="['login-form-title', { 'ishide': !isSignIn }]">Signin</h3>
                <div class="input-item">
                    <span class="input-label"><label for="id">User name</label></span>
                    <div :class="['login-input', { 'validateInput': hasErr.includes('userNameIsEmpty') }]">
                        <input type="text" class="login-input-item" id="id" placeholder="Enter your user name..."
                            v-model="userName" @input="handleOnchangeUserN()">
                    </div>

                </div>
                <div class="erroMesSentence" v-if="hasErr.includes('userNameIsEmpty')">Please enter your username</div>
                <div class="erroMesSentence" v-if="hasErr.includes('userNameLength')">Your username exceed 10</div>
                <div class="input-item">
                    <span class="input-label"><label for="pw">Password</label></span>
                    <div :class="['login-input', { 'validateInput': hasErr.includes('passWIsEmpty') }]">
                        <input type="text" :class="['login-input-item', { 'input-security-pass': isShowPass }]" id="pw"
                            placeholder="Enter your password..." v-model="passW" @input="handleOnchangePassW()">
                        <i :class="[{ 'far fa-eye': isShowPass }, { 'far fa-eye-slash': !isShowPass }]" style="margin: 3px;"
                            @click="handleShowPassWord"></i>
                    </div>
                </div>
                <div class="erroMesSentence" v-if="hasErr.includes('passWIsEmpty')">Please enter your password</div>
                <div class="erroMesSentence" v-if="hasErr.includes('passWLength')">Your password exceed 10</div>
                <div class="input-item">
                    <span class="input-label"><label for="authority">Authority</label></span>
                    <select type="text" class="selector" id="authority" v-model="selectOption"
                        @change="handleOnchangeSelection()">
                        <option id="option-disable" disabled value="">Please select one</option>
                        <option id="option-teacher" value="teacher">Teacher</option>
                        <option id="option-student" value="student">Student</option>
                    </select>
                </div>
                <div class="erroMesSentence" v-if="hasErr.includes('roleIsEmpty')">Please choose your role.</div>
                <div class="input-item-check">
                    <input type="checkbox" id="remember">
                    <label for="remember" class="input-label">Remember me</label>
                </div>
                <div class="login-btn-container">
                    <button class="login-btn" id="login-signup-btn" @click="submit()">{{ !isSignIn ? 'Login' :
                        'Signin' }}</button>

                </div>
            </div>
            <div class="signup">
                <div class="create-account" @click="handleTitilePopup"><a href="#">Create an account</a></div>
                <div class="another-login-method">
                    <span class="another-login-mes">Or login with</span>
                    <a class="login-method" href="https://www.facebook.com/"><i class="fab fa-facebook-square"
                            style="color: rgb(37, 37, 147);"></i></a>
                    <a class="login-method" href="#"><i class="fab fa-instagram-square"
                            style="color: rgb(178, 30, 148);"></i></a>
                    <a class="login-method" href="#"><i class="fas fa-envelope" style="color: rgb(172, 35, 46);"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"; // dung de import 
import { studentJapaneseStore } from "../store"
import router from "../router";
const userName = ref('')
const passW = ref('')
const selectOption = ref('')
const hasErr = ref([])
const isShowPass = ref(false)
const isSignIn = ref(false)
const buttonName = ref('Login')
const userStudentJapaneseStore = studentJapaneseStore()



const submit = () => {
    hasErr.value = []
    if (userName.value === "") {
        hasErr.value.push('userNameIsEmpty')
    }
    if (userName.value.length > 10) {
        hasErr.value.push('userNameLength')
    }
    if (passW.value === "") {
        hasErr.value.push('passWIsEmpty')
    }

    if (passW.value.length > 10) {
        hasErr.value.push('passWLength')
    }
    console.log(selectOption.value)
    if (selectOption.value !== "teacher" && selectOption.value !== "student") {
        hasErr.value.push('roleIsEmpty')
    }
    if (hasErr.value.length > 0) {
        return
    }
    const userOb = {
        userName: userName.value,
        password: passW.value,
        role: selectOption.value
    }
    userStudentJapaneseStore.login(userOb)

    if (selectOption.value === "teacher") {
        router.push('/')
    } else if (selectOption.value === "student") {
        router.push('/student')
    } else {
        return
    }

    userName.value = ""
    passW.value = ""
}

const handleOnchangeUserN = (value) => {
    const isIncludesUserN = hasErr.value.includes('userNameIsEmpty')
    if (userName.value === "" && isIncludesUserN) {
        return
    }
    if (userName.value === "" && !isIncludesUserN) {
        hasErr.value.push('userNameIsEmpty')
        return
    }

    hasErr.value = hasErr.value.filter(item => item !== 'userNameIsEmpty')//Loc ra nhung phan tu khac userName de gan lai cho hasErr

    const isIncludesUserLength = hasErr.value.includes('userNameLength')
    if (userName.value.length > 10 && isIncludesUserLength) {
        return
    }
    if (userName.value.length > 10 && !isIncludesUserLength) {
        hasErr.value.push('userNameLength')
        return
    }
    hasErr.value = hasErr.value.filter(item => item !== 'userNameLength')
}

const handleOnchangePassW = (value) => {
    const isIncludesPass = hasErr.value.includes('passWIsEmpty')
    if (passW.value === "" && isIncludesPass) {
        return
    }
    if (passW.value === "" && isIncludesPass == false) {
        hasErr.value.push('passWIsEmpty')
        return
    }
    hasErr.value = hasErr.value.filter(item => item !== 'passWIsEmpty')

    const isIncludesPassLength = hasErr.value.includes('passWLength')
    if (passW.value.length > 10 && isIncludesPassLength) {
        return
    }
    if (passW.value.length > 10 && !isIncludesPassLength) {
        hasErr.value.push('passWLength')
        return
    }
    hasErr.value = hasErr.value.filter(item => item !== 'passWLength')
}
const handleOnchangeSelection = (value) => {
    const isIncludesSelection = hasErr.value.includes('roleIsEmpty')
    if (selectOption.value === "" && isIncludesSelection) {
        return
    }
    if (selectOption.value === "" && isIncludesSelection == false) {
        hasErr.value.push('roleIsEmpty')
        return
    }
    hasErr.value = hasErr.value.filter(item => item !== 'roleIsEmpty')
}
const handleShowPassWord = () => {
    isShowPass.value = !isShowPass.value
}

const handleTitilePopup = () => {
    isSignIn.value = !isSignIn.value
    if (!isSignIn.value) {
        buttonName = "Signin"
    }
}
</script>

<style scoped>
@import "../style/login.css";

.validateInput {
    color: red;
    border: 1px solid red;
}

.input-with-icon {
    width: 100%;
}

.input-security-pass {
    -webkit-text-security: disc;
}

.erroMesSentence {
    margin-left: 94px;
    font-size: 12px;
    color: red;
}

.ishide {
    display: none;
}</style>