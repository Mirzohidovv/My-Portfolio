<template>
  <div class="wrapper">
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
    
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer/Footer.vue";
</script>
