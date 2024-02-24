<template>
    <div>
    <AppHeader></AppHeader>
    
    <router-view></router-view>
    <!-- <Footer></Footer> -->

   </div>
  </template>
  <script setup>
  import {RouterView} from 'vue-router'
  import AppHeader from './components/AppHeader.vue'
  import Footer from './components/Footer.vue';
  </script> 