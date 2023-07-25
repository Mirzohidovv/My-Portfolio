<template>
  <section class="intro" id="intro">
    <div class="intro__content">
      <div class="intro__left">
        <img src="../assets/images/ownimg.jpg" alt="" class="intro__left-img" />
      </div>

       <div class="intro__right">
        <p class="intro__right-text">Front-end Developer</p>
        <h1 class="intro__right-title">Ruslan Mirzohidov</h1>
        <p class="intro__right-desc">
          Web developer, with extensive knowledge and years of experience,
          working in web programming. My job is to build your website so that it
          is functional and user-friendly but at the same time attractive.
        </p>

        <div class="intro__right-buttons">
          <router-link class="intro__right-button" :to="button.path" v-for="button in buttons" :key="button.id">
            {{ button.title }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";

const buttons = reactive([
  { id: 1, title: "Portfolio", path: "/portfolio" },
  { id: 2, title: "Contacts", path: "/contacts" },
]);
</script>

<style lang="scss" scoped></style>
