<template>
<header class="login-header">
        <h1 class="login-page-title">KAORI LEARNING</h1>
    </header>
    <div class="login-body">
        <div class="login-page-img">
            <img src="./css/img/372897279_1248037612573345_1597688897822203750_n.jpg" alt="" class="page-img">
        </div>        
        <div class="login-container">
            <div class="login-form">
                <h3 class="login-form-title">Sign up</h3>
                <div class="input-item">
                    <span class="input-label"><label for="id" >User name</label></span>
                    <input type="text" class="login-input" id="id" placeholder="Enter your user name...">
                </div>
                <div class="input-item">
                    <span class="input-label"><label for="pw">Password</label></span>
                    <input type="text" class="login-input" id="pw" placeholder="Enter your password...">
                </div>
                <div class="input-item">
                    <span class="input-label"><label for="authority">Authority</label></span>
                    <select type="text" class="login-input selector" id="authority">
                        <option id="option-teacher" value="teacher">Teacher</option>
                        <option id="option-student" value="student">Student</option>
                    </select>
                </div>
                <div class="input-item-check">
                    <input type="checkbox" id="remember">
                    <label for="remember" class="input-label">Remember me</label>
                </div>
                <div class="login-btn-container">
                    <button class="login-btn" id="login-signup-btn" onclick="login()">Sign up</button>
                </div>
            </div>
            <div class="signup">
                <div class="create-account"><a href="#">Create an account</a></div>
                <div class="another-login-method">
                    <span class="another-login-mes">Or login with</span>
                    <a class="login-method" href="https://www.facebook.com/"><i class="fab fa-facebook-square" style="color: rgb(37, 37, 147);"></i></a>
                    <a class="login-method" href="#"><i class="fab fa-instagram-square" style="color: rgb(178, 30, 148);"></i></a>
                    <a class="login-method" href="#"><i class="fas fa-envelope" style="color: rgb(172, 35, 46);"></i></a>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

</script>

<style scoped>

.login-header {
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 10px;
    margin: 10px 0;
    background-color: rgb(49, 171, 224);
    color: white;
}
.login-body {
    margin: 10px;
    width: 100%;
    display: flex;
    font-size: 15px;
}
.login-page-img {
    margin: 10px;
    width: 45%;
}
.page-img {
    width: 100%;
}
.login-container {
    margin: 10% 10px 10px 50px;
    padding: 20px;
    width: 30%;
    height: 300px;
    border-radius: 5px;
    -webkit-box-shadow: 0 0 5px 0 rgba(156, 209, 232, 0.6);
}
.login-form {
    margin-bottom: 10px;
}
.input-item {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    
}
.input-label {
    width: 100px;
}
.login-input {
    width: 70%;
    background-color: rgba(184, 227, 245, 0.3);
    border-radius: 5px;
    border: none;
    height: 30px;
    padding-left: 10px;
    outline: none;
}
::placeholder{
    color:rgb(94, 90, 90) 
  }
input[type=text]:focus {
    border: 1px solid rgba(156, 209, 232, 0.6);;
  }
.selector {
    padding-left: 10px;
    background-color: rgba(184, 227, 245, 0.3);
    border-radius: 5px;
    border: none;
    height: 30px;
    width: 30%;
}
.login-btn-container {
    width: 100%;
    margin: 10px 0;
    text-align: center;
    
}
.login-btn {
    background-color: rgb(49, 171, 224);
    border-radius: 5px;
    border: 1px solid rgb(49, 171, 224);
    color: white;
    width: 70px;
    padding: 5px 0;
}
.another-login-method {
    margin-top: 5px;
}
</style>