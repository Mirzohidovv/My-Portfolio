<template>
  <header class="header">
    <nav class="navbar">
      
        <router-link class="navbar__logo" to="/">
          <p class="navbar__logo-sign">R</p>
          <span><b>Ruslan Mirzohidov</b></span>
        </router-link>

        <button class="navbar__btn" @click="burgerOn">
          <i class="fal fa-bars"></i>
        </button>
        <ul class="navbar__list" :class="{ active: burger }">
          <li @click="burgerOff">
            <button class="navbar__btn">
              <i class="fal fa-times"></i>
            </button>
          </li>
          <li v-for="link in links" :key="link.id" @click="burgerOff">
            <router-link class="navbar__link" :to="link.path">{{
              link.title
            }}</router-link>
          </li>

        </ul>
     
    </nav>

  </header>
</template>

<script setup>
import { ref, reactive } from "vue";

const burger = ref(false);

const links = reactive([
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Front-end skills", path: "/skills" },
  { id: 3, title: "Portfolio", path: "/portfolio" },
  { id: 4, title: "Contacts", path: "/contacts" },
]);

const burgerOn = () => {
  burger.value = true;
  document.body.style.overflow = "hidden";
};

const burgerOff = () => {
  burger.value = false;
  document.body.style.overflow = "visible";
};
</script>

<style lang="scss" scoped></style>
