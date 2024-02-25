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
                <h3 class="login-form-title" >Signin</h3>
                <div class="input-item">
                    <span class="input-label"><label for="id">User name</label></span>
                    <div :class="['login-input', { 'validateInput': hasErr.includes('userNameIsEmpty') }]">
                        <input type="text" class="login-input-item" id="id" placeholder="Enter your user name..."
                            v-model="userName" @input="handleOnchangeUserN()">
                    </div>

                </div>
                <div class="erroMesSentence" v-if="hasErr.includes('userNameIsEmpty')">Please enter your username</div>
                <div class="erroMesSentence" v-if="hasErr.includes('userNameLength')">Your username exceed 100</div>
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
                <div class="erroMesSentence" v-if="hasErr.includes('passWLength')">Your password exceed 100</div>
                <div class="input-item">
                    <span class="input-label"><label for="id">Email</label></span>
                    <div :class="['login-input', { 'validateInput': hasErr.includes('emailIsEmpty') }]">
                        <input type="email" class="login-input-item" id="email" placeholder="Enter your email..."
                            v-model="email" @input="handleOnchangeEmail()">
                    </div>

                </div>
                <div class="erroMesSentence" v-if="hasErr.includes('emailIsEmpty')">Please enter your email</div>
                <div class="erroMesSentence" v-if="hasErr.includes('emailLength')">Your email exceed 100</div>
                    <input type="checkbox" id="remember">
                    <label for="remember" class="input-label">Remember me</label>
                </div>
                <div class="login-btn-container">
                    <button class="login-btn" id="login-signup-btn" @click="submit()">Sign in</button>

                </div>
            </div>
            <!-- <div class="signup">
                <div class="another-login-method">
                    <span class="another-login-mes">Or login with</span>
                    <a class="login-method" href="https://www.facebook.com/"><i class="fab fa-facebook-square"
                            style="color: rgb(37, 37, 147);"></i></a>
                    <a class="login-method" href="#"><i class="fab fa-instagram-square"
                            style="color: rgb(178, 30, 148);"></i></a>
                    <a class="login-method" href="#"><i class="fas fa-envelope" style="color: rgb(172, 35, 46);"></i></a>
                </div>
            </div> -->
        </div>
   
</template>

<script setup>
import { ref } from "vue"; // dung de import 
import { studentJapaneseStore } from "../store"
import router from "../router";
import {register} from "../api/Authority"
const userName = ref('')
const passW = ref('')
const email = ref('')
const selectOption = ref('')
const hasErr = ref([])
const isShowPass = ref(false)
const isSignIn = ref(false)
let buttonName = ref('Login')
const userStudentJapaneseStore = studentJapaneseStore()



const submit = async () => {
    hasErr.value = []
    if (userName.value === "") {
        hasErr.value.push('userNameIsEmpty')
    }
    if (userName.value.length > 100) {
        hasErr.value.push('userNameLength')
    }
    if (passW.value === "") {
        hasErr.value.push('passWIsEmpty')
    }

    if (passW.value.length > 1000) {
        hasErr.value.push('passWLength')
    }
    if (email.value === "") {
        hasErr.value.push('emailIsEmpty')
    }
    if (email.value.length > 100) {
        hasErr.value.push('emailLength')
    }
    // console.log(selectOption.value)
    // if (selectOption.value !== "teacher" && selectOption.value !== "student") {
    //     hasErr.value.push('roleIsEmpty')
    // }
    if (hasErr.value.length > 0) {
        return
    }
    const userOb = {
        username: userName.value,
        password: passW.value,
        email: email.value,
        role: 'student'
    }
    try {
        const data = await register(userOb)
        if(data?.data?.data) {
            console.log(data.data.data)
            router.push('/login')
        }
    } catch (error) {
        
    }
    // userStudentJapaneseStore.login(userOb)
    // router.push('/')
    // if (selectOption.value === "teacher") {
    //     router.push('/')
    // } else if (selectOption.value === "student") {
    //     router.push('/student')
    // } else {
    //     return
    // }

    userName.value = ""
    passW.value = ""
    email.value = ""
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
    if (userName.value.length > 100 && isIncludesUserLength) {
        return
    }
    if (userName.value.length > 100 && !isIncludesUserLength) {
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
    if (passW.value.length > 100 && isIncludesPassLength) {
        return
    }
    if (passW.value.length > 100 && !isIncludesPassLength) {
        hasErr.value.push('passWLength')
        return
    }
    hasErr.value = hasErr.value.filter(item => item !== 'passWLength')
}
const handleOnchangeEmail = (value) => {
    const isIncludesEmail = hasErr.value.includes('emailIsEmpty')
    if (email.value === "" && isIncludesEmail) {
        return
    }
    if (email.value === "" && !isIncludesEmail) {
        hasErr.value.push('emailIsEmpty')
        return
    }

    hasErr.value = hasErr.value.filter(item => item !== 'emailIsEmpty')//Loc ra nhung phan tu khac userName de gan lai cho hasErr

    const isIncludesemailLength = hasErr.value.includes('emailLength')
    if (userName.value.length > 100 && isIncludesemailLength) {
        return
    }
    if (userName.value.length > 100 && !isIncludesemailLength) {
        hasErr.value.push('emailLength')
        return
    }
    hasErr.value = hasErr.value.filter(item => item !== 'emailLength')
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

// const handleTitilePopup = () => {
//     isSignIn.value = !isSignIn.value
//     if (!isSignIn.value) {
//         buttonName = "Signin"
//     }
// }
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